"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Loader2 } from "lucide-react";

export function IntroScreen({
  onComplete,
  appRef,
}: {
  onComplete: () => void;
  appRef: React.RefObject<HTMLElement | null>;
}) {
  const introRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null); // Main "Build With Creativity" title
  const bgRef = useRef<HTMLDivElement>(null);
  const authorRef = useRef<HTMLParagraphElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If the user prefers reduced motion, we do a simpler animation sequence
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Ensure app is initially invisible or scaled if not reduced motion
    if (appRef.current) {
      if (prefersReducedMotion) {
        gsap.set(appRef.current, { opacity: 0 });
      } else {
        gsap.set(appRef.current, { opacity: 0, scale: 0.96 });
      }
    }

    // Initial hidden states for progressive reveal elements
    gsap.set(authorRef.current, { opacity: 0 });
    gsap.set(loadingRef.current, { opacity: 0 });

    // Main animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // 0s -> 3s: ONLY "Build With Creativity" is visible.
    // 3s: "By Soumyadip Chattopadhyay" elegantly appears.
    tl.to(authorRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut",
    }, 3); // Absolute time 3 seconds

    // 6s: "Loading + loading GIF" elegantly appears.
    tl.to(loadingRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut",
    }, 6); // Absolute time 6 seconds

    // 9s: Transition smoothly to the main Anatomiq page.
    const exitTime = 9;

    if (prefersReducedMotion) {
      // Simpler transition for reduced motion
      tl.to(introRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      }, exitTime)
      .to(appRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut",
      }, exitTime + 0.2); // slight overlap
    } else {
      // Polished exit for intro screen
      tl.to(textRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: "power2.in",
      }, exitTime)
      .to(bgRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: "power2.inOut",
      }, exitTime + 0.1)
      .to(introRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      }, exitTime + 0.2);

      // Smooth, GPU-friendly entrance for the main app without expensive layout-shifting scales
      if (appRef.current) {
        tl.to(appRef.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut",
        }, exitTime + 0.1);
      }
    }

    return () => {
      tl.kill();
    };
  }, [appRef, onComplete]);

  return (
    <div className="intro-screen" ref={introRef}>
      <div className="intro-bg" ref={bgRef}>
        <div className="intro-glow"></div>
      </div>
      <div className="intro-content" ref={textRef}>
        <div className="intro-title-group">
          <h1 className="intro-build">Build</h1>
          <h2 className="intro-curiosity">With Creativity</h2>
        </div>
        <p className="intro-author" ref={authorRef}>By Soumyadip Chattopadhyay</p>
      </div>
      <div className="intro-loading" ref={loadingRef}>
        <Loader2 className="spinner" size={18} />
        <span>Loading</span>
      </div>
    </div>
  );
}
