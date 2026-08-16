"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import {
  Check,
  Crosshair,
  Maximize2,
  RotateCw,
  Sparkles,
  X,
} from "lucide-react";
import type { Hotspot, Organ } from "../i18n/merge";
import { format, type UiDictionary } from "../i18n/types";
import type { AnatomyViewer } from "../lib/three/viewer";

type Props = {
  organ: Organ;
  t: UiDictionary;
  quizActive: boolean;
  onQuizExit: () => void;
};

/** Fisher–Yates. The quiz asks for every structure once, in a fresh order. */
function shuffle<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

type PickRef = { current: (hotspot: Hotspot) => void };

/**
 * The labelling quiz. Owns its own round state and is mounted with a `key` per
 * organ, so switching specimens restarts it without a resetting effect.
 */
function LabelQuiz({
  hotspots, t, pickRef, flash, screenY, onExit,
}: {
  hotspots: Hotspot[];
  t: UiDictionary;
  pickRef: PickRef;
  flash: (id: string, correct: boolean) => void;
  screenY: (id: string) => number | null;
  onExit: () => void;
}) {
  const [seed, setSeed] = useState(0);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState<{ correct: boolean; picked: string; target: string; atTop: boolean } | null>(null);
  const [results, setResults] = useState<boolean[]>([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const order = useMemo(() => shuffle(hotspots), [hotspots, seed]);
  const target = order[step];
  const finished = step >= order.length;

  // Refreshed after every render so the viewer's long-lived callback always
  // sees the current question. Writing a ref in an effect is safe; writing one
  // during render is not.
  useEffect(() => {
    pickRef.current = (hotspot) => {
      if (!target || answer) return;   // ignore extra clicks while feedback shows
      const correct = hotspot.id === target.id;
      flash(hotspot.id, correct);
      // A miss also marks where the answer actually was — otherwise the learner
      // is told they were wrong but never shown the right structure.
      if (!correct) flash(target.id, true);
      // Sit the card on the opposite half from the structure being revealed —
      // otherwise the panel hides the dot it is telling the learner to look at.
      const revealed = screenY(correct ? hotspot.id : target.id);
      setAnswer({ correct, picked: hotspot.label, target: target.label, atTop: (revealed ?? 0) > 0.55 });
      setResults((list) => [...list, correct]);
      if (correct) setScore((value) => value + 1);
      window.setTimeout(() => {
        setAnswer(null);
        setStep((value) => value + 1);
      }, correct ? 1200 : 2400);   // a miss carries more to read
    };
  });

  const retry = () => {
    setStep(0);
    setScore(0);
    setAnswer(null);
    setResults([]);
    setSeed((value) => value + 1);
  };

  return (
    <>
      {target && (
        <div className="quiz-bar" role="status" aria-live="polite">
          <div className="quiz-prompt">
            <em>{t.quiz.find}</em>
            <strong>{target.label}</strong>
          </div>
          <div className="quiz-meta">
            <span className="quiz-progress">{format(t.quiz.progress, { current: String(step + 1), total: String(order.length) })}</span>
            <ol className="quiz-pips" aria-hidden>
              {order.map((hotspot, index) => (
                <li
                  key={hotspot.id}
                  className={index < results.length ? (results[index] ? "ok" : "no") : index === step ? "now" : ""}
                />
              ))}
            </ol>
            <small>{t.quiz.hint}</small>
          </div>
          <button type="button" onClick={onExit} aria-label={t.quiz.exit}><X size={16} /></button>
        </div>
      )}

      {answer && (
        <div className={`quiz-answer ${answer.correct ? "ok" : "no"} ${answer.atTop ? "at-top" : ""}`} role="status" aria-live="assertive">
          <span className="quiz-answer-icon">{answer.correct ? <Check size={22} /> : <X size={22} />}</span>
          <div>
            <strong>{answer.correct ? t.quiz.correct : t.quiz.wrong}</strong>
            {answer.correct ? (
              <span>{answer.target}</span>
            ) : (
              <>
                <span>{format(t.quiz.reveal, { label: answer.picked })}</span>
                <span className="quiz-answer-hint">{format(t.quiz.answer, { label: answer.target })}</span>
              </>
            )}
          </div>
        </div>
      )}

      {finished && (
        <div className="quiz-summary" role="dialog" aria-modal="true">
          <span className="modal-icon">{score === order.length ? "★" : "✓"}</span>
          <h2>{t.quiz.done}</h2>
          <p>{format(t.quiz.score, { score: String(score), total: String(order.length) })}</p>
          <div className="quiz-summary-actions">
            <button type="button" className="lesson-button" onClick={retry}>{t.quiz.retry}</button>
            <button type="button" onClick={onExit}>{t.quiz.exit}</button>
          </div>
        </div>
      )}
    </>
  );
}

/** `?authoring=1` is read from the URL without a hydration mismatch. */
function useAuthoringFlag() {
  return useSyncExternalStore(
    () => () => {},
    () => new URLSearchParams(window.location.search).get("authoring") === "1",
    () => false,
  );
}

export function OrganViewer({ organ, t, quizActive, onQuizExit }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<AnatomyViewer | null>(null);
  const organRef = useRef(organ);
  const canvasLabelRef = useRef(t.viewer.canvas);
  const [selected, setSelected] = useState<Hotspot | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [slowLoad, setSlowLoad] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  // Opt-in coordinate probe for placing hotspots — not a user-facing feature.
  const authoring = useAuthoringFlag();
  const authoringRef = useRef(authoring);
  const [authorPoint, setAuthorPoint] = useState<{ x: number; y: number; z: number } | null>(null);
  const [copied, setCopied] = useState(false);

  // The viewer captures its callbacks once, so live handlers go through refs.
  const pickRef = useRef<(hotspot: Hotspot) => void>(() => {});
  const authorRef = useRef<(point: { x: number; y: number; z: number }) => void>(() => {});
  useEffect(() => {
    authorRef.current = setAuthorPoint;
  }, []);
  useEffect(() => {
    authoringRef.current = authoring;
  }, [authoring]);

  // A typical organ is ready well inside a second — flashing a loading panel for
  // that reads as jank. It only appears if the fetch is genuinely slow; the flag
  // is cleared by onLoading when the next load starts.
  useEffect(() => {
    if (!loading) return;
    const timer = window.setTimeout(() => setSlowLoad(true), 900);
    return () => window.clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    organRef.current = organ;
  }, [organ]);

  useEffect(() => {
    canvasLabelRef.current = t.viewer.canvas;
    viewerRef.current?.setCanvasLabel(t.viewer.canvas);
  }, [t.viewer.canvas]);

  useEffect(() => {
    let cancelled = false;
    let viewer: AnatomyViewer | null = null;

    void import("../lib/three/viewer").then(({ AnatomyViewer: Viewer }) => {
      if (cancelled || !mountRef.current) return;
      viewer = new Viewer(mountRef.current, {
        onSelect: setSelected,
        onLoading: (isLoading, value) => {
          setLoading(isLoading);
          setProgress(value);
          if (isLoading) setSlowLoad(false);
        },
        onPick: (hotspot) => pickRef.current(hotspot),
        onAuthorPoint: (point) => authorRef.current(point),
      });
      viewerRef.current = viewer;
      viewer.setCanvasLabel(canvasLabelRef.current);
      viewer.setAuthoring(authoringRef.current);
      viewer.setAutoRotate(autoRotate);
      const current = organRef.current;
      viewer.setOrgan(current.model, current.hotspots, current.accent).catch(() => {
        setLoading(false);
        setProgress(0);
      });
    });

    return () => {
      cancelled = true;
      viewerRef.current = null;
      viewer?.dispose();
    };
  }, []);

  useEffect(() => {
    viewerRef.current?.setOrgan(organ.model, organ.hotspots, organ.accent).catch(() => {
      setLoading(false);
      setProgress(0);
    });
  }, [organ]);

  // The viewer drives the callout's position directly, so a spinning model
  // never costs a React render.
  useEffect(() => viewerRef.current?.setQuizMode(quizActive), [quizActive]);
  useEffect(() => viewerRef.current?.setAuthoring(authoring), [authoring]);
  useEffect(() => viewerRef.current?.setAutoRotate(autoRotate), [autoRotate]);


  // The viewer drives the callout's position directly, so a spinning model
  // never costs a React render.
  const calloutRef = useCallback((node: HTMLDivElement | null) => {
    viewerRef.current?.attachCallout(node);
  }, []);


  return (
    <section className="viewer-shell" aria-label={format(t.viewer.title, { organ: organ.name })}>
      <div className="viewer-glow" style={{ "--organ-accent": organ.accent } as React.CSSProperties} />
      <div ref={mountRef} className="three-mount" />

      {!quizActive && (
      <aside className="tip-note" aria-label={t.viewer.tip}>
        <span><Sparkles size={15} /> {t.viewer.tip}</span>
        <p>{t.viewer.tipDrag}<br />{t.viewer.tipScroll}<br />{t.viewer.tipClick}</p>
      </aside>
      )}

      {selected && !quizActive && (
        <div className="hotspot-callout" ref={calloutRef} data-side="right">
          <div className="callout-body" style={{ "--hotspot-color": selected.color } as React.CSSProperties}>
            <button className="callout-close" type="button" onClick={() => viewerRef.current?.clearSelection()} aria-label={t.modal.close}>
              <X size={13} />
            </button>
            <b>{selected.label}</b>
            <small>{selected.detail}</small>
          </div>
        </div>
      )}

      {/* Screen-reader equivalent of the dots, which live in the canvas. */}
      <ul className="hotspot-index" aria-label={t.viewer.structures}>
        {organ.hotspots.map((hotspot) => (
          <li key={hotspot.id}>{hotspot.label}: {hotspot.detail}</li>
        ))}
      </ul>

      {quizActive && (
        <LabelQuiz
          key={organ.id}
          hotspots={organ.hotspots}
          t={t}
          pickRef={pickRef}
          flash={(id, correct) => viewerRef.current?.flash(id, correct)}
          screenY={(id) => viewerRef.current?.hotspotScreenY(id) ?? null}
          onExit={onQuizExit}
        />
      )}

      {authoring && (
        <div className="authoring-panel">
          <span><Crosshair size={13} /> authoring</span>
          {authorPoint ? (
            <>
              <code>{`{ id: "", ta: "", position: [${authorPoint.x}, ${authorPoint.y}, ${authorPoint.z}], color: "#ee7c6a" },`}</code>
              <button
                type="button"
                onClick={() => {
                  void navigator.clipboard
                    .writeText(`{ id: "", ta: "", position: [${authorPoint.x}, ${authorPoint.y}, ${authorPoint.z}], color: "#ee7c6a" },`)
                    .then(() => { setCopied(true); window.setTimeout(() => setCopied(false), 1200); });
                }}
              >
                {copied ? "copied" : "copy"}
              </button>
            </>
          ) : (
            <code>click the model to sample a point</code>
          )}
        </div>
      )}

      {loading && slowLoad && (
        <div className="model-loader" role="status" aria-live="polite">
          <div className="loader-orbit"><Maximize2 size={20} /></div>
          <strong>{format(t.viewer.loading, { organ: organ.name })}</strong>
          <span>{Math.max(8, Math.round(progress * 100))}%</span>
        </div>
      )}

      <button 
        className="auto-rotate-toggle"
        onClick={() => setAutoRotate(!autoRotate)}
        aria-pressed={autoRotate}
        title="Toggle Auto-Rotate"
      >
        <RotateCw size={14} /> Auto-Rotate 
        <span className="toggle-status">{autoRotate ? "ON" : "OFF"}</span>
      </button>

      <div className="view-caption">
        <span>{t.viewer.caption}</span>
        <strong>{organ.scientificName}</strong>
      </div>
    </section>
  );
}
