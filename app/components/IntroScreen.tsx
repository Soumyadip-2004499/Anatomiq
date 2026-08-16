"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function IntroScreen({
  onComplete,
  appRef,
}: {
  onComplete: () => void;
  appRef: React.RefObject<HTMLElement | null>;
}) {
  const introRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

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

    // Main animation timeline
    const tl = gsap.timeline({
      delay: 3, // 3 seconds display duration
      onComplete: () => {
        onComplete();
      },
    });

    if (prefersReducedMotion) {
      // Simpler transition for reduced motion
      tl.to(introRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      }, 0)
      .to(appRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut",
      }, 0.2); // slight overlap
    } else {
      // Polished exit for intro
      tl.to(textRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: "power2.in",
      }, 0)
      .to(bgRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        ease: "power2.inOut",
      }, 0.1)
      .to(introRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      }, 0.2);

      // Bounce entrance for the main app
      if (appRef.current) {
        tl.to(appRef.current, {
          opacity: 1,
          scale: 1.02,
          duration: 0.4,
          ease: "power2.out",
        }, 0.3)
        .to(appRef.current, {
          scale: 0.985,
          duration: 0.25,
          ease: "power1.inOut",
        })
        .to(appRef.current, {
          scale: 1,
          duration: 0.25,
          ease: "power1.out",
        });
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
          <h2 className="intro-curiosity">With Curiosity</h2>
        </div>
        <p className="intro-author">By Soumyadip Chattopadhyay</p>
      </div>
    </div>
  );
}
