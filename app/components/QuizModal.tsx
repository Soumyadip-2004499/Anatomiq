"use client";

import { useState, useEffect } from "react";
import { X, Check, ArrowRight, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";
import type { OrganId } from "../lib/anatomy-data";
import { questionBank, type Question } from "../lib/quiz-data";

// Fisher-Yates shuffle
function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

type QuizModalProps = {
  organId: OrganId;
  organName: string;
  onClose: () => void;
};

type QuizState = {
  questions: (Question & { shuffledOptions: string[] })[];
  currentIndex: number;
  score: number;
  selectedAnswer: string | null;
  isFinished: boolean;
};

export function QuizModal({ organId, organName, onClose }: QuizModalProps) {
  const [state, setState] = useState<QuizState | null>(null);

  const initQuiz = () => {
    const bank = questionBank[organId] || [];
    // Ensure we have questions (fallback to empty if missing)
    if (bank.length === 0) {
      console.warn(`No questions found for organ: ${organId}`);
      setState({ questions: [], currentIndex: 0, score: 0, selectedAnswer: null, isFinished: true });
      return;
    }

    // 1. Shuffle the question bank
    const shuffledBank = shuffle(bank);
    // 2. Select exactly 5 unique questions
    const selected = shuffledBank.slice(0, 5);
    // 3. Shuffle options for each selected question
    const questionsWithShuffledOptions = selected.map(q => ({
      ...q,
      shuffledOptions: shuffle(q.options)
    }));

    setState({
      questions: questionsWithShuffledOptions,
      currentIndex: 0,
      score: 0,
      selectedAnswer: null,
      isFinished: false
    });
  };

  useEffect(() => {
    initQuiz();
  }, [organId]);

  useEffect(() => {
    if (state?.isFinished && state.questions.length > 0 && state.score === state.questions.length) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        zIndex: 9999
      });
    }
  }, [state?.isFinished, state?.score, state?.questions.length]);

  if (!state) return null;

  if (state.questions.length === 0) {
    return (
      <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
        <section className="learning-modal quiz-modal" role="dialog" aria-modal="true" onMouseDown={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose} aria-label="Close"><X size={18} /></button>
          <h2>Quiz Unavailable</h2>
          <p>Sorry, there are no questions available for the {organName} yet.</p>
        </section>
      </div>
    );
  }

  const { questions, currentIndex, score, selectedAnswer, isFinished } = state;

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
        <section className="learning-modal quiz-modal" role="dialog" aria-modal="true" onMouseDown={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose} aria-label="Close"><X size={18} /></button>
          <span className="modal-icon">{percentage >= 80 ? "★" : "✓"}</span>
          <h2>Quiz Complete</h2>
          <p className="quiz-score-large">{score} / {questions.length}</p>
          <p className="quiz-percentage">{percentage}%</p>
          <p className="quiz-performance-msg">
            {percentage === 100 ? "Perfect score! Outstanding knowledge." : 
             percentage >= 80 ? "Great work! You know your anatomy well." :
             percentage >= 60 ? "Good effort! Keep studying." :
             "Keep exploring to improve your knowledge."}
          </p>
          
          <div className="quiz-summary-stats">
            <div><strong>{score}</strong> correct</div>
            <div><strong>{questions.length - score}</strong> incorrect</div>
          </div>

          <div className="quiz-summary-actions">
            <button type="button" className="lesson-button" onClick={initQuiz}>
              <RotateCcw size={16} /> Retry Quiz
            </button>
            <button type="button" className="close-quiz-btn" onClick={onClose}>Close</button>
          </div>
        </section>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;
    
    setState(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        selectedAnswer: option,
        score: prev.score + (option === currentQ.correctAnswer ? 1 : 0)
      };
    });
  };

  const handleNext = () => {
    setState(prev => {
      if (!prev) return prev;
      if (prev.currentIndex === prev.questions.length - 1) {
        return { ...prev, isFinished: true };
      }
      return {
        ...prev,
        currentIndex: prev.currentIndex + 1,
        selectedAnswer: null
      };
    });
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="learning-modal quiz-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={18} /></button>
        
        <header className="quiz-header">
          <em>{organName} Quiz</em>
          <div className="quiz-progress-text">Question {currentIndex + 1} of {questions.length}</div>
          <div className="quiz-progress-pips" aria-hidden>
            {questions.map((_, i) => (
              <span key={i} className={`pip ${i < currentIndex ? 'completed' : i === currentIndex ? 'current' : ''}`} />
            ))}
          </div>
        </header>

        <h2 id="modal-title" className="quiz-question-text">{currentQ.question}</h2>

        <div className="quiz-options-grid">
          {currentQ.shuffledOptions.map((opt) => {
            let btnClass = "quiz-option-btn";
            if (isAnswered) {
              if (opt === currentQ.correctAnswer) {
                btnClass += " correct";
              } else if (opt === selectedAnswer) {
                btnClass += " incorrect";
              } else {
                btnClass += " disabled";
              }
            }

            return (
              <button 
                key={opt}
                type="button" 
                className={btnClass}
                onClick={() => handleSelectOption(opt)}
                disabled={isAnswered}
                aria-pressed={selectedAnswer === opt}
              >
                <div className="opt-indicator">
                  {isAnswered && opt === currentQ.correctAnswer ? <Check size={16} /> :
                   isAnswered && opt === selectedAnswer ? <X size={16} /> :
                   <span className="opt-circle" />}
                </div>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={`quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`} role="status" aria-live="polite">
            <div className="feedback-header">
              {isCorrect ? <strong>Correct!</strong> : <strong>Incorrect</strong>}
            </div>
            {!isCorrect && (
              <div className="feedback-correction">
                Correct answer: <strong>{currentQ.correctAnswer}</strong>
              </div>
            )}
            <p className="feedback-explanation">{currentQ.explanation}</p>
            <button className="lesson-button next-btn" onClick={handleNext}>
              {currentIndex === questions.length - 1 ? "See Results" : "Next Question"} <ArrowRight size={16} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
