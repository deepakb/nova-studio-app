import React, { useRef } from 'react';
import { useGsap } from '../hooks/useGsap';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

    // Initial Setup
    gsap.set(".hero-ghost-text", { opacity: 0, scale: 1 });
    gsap.set(".hero-main-text", { opacity: 0, scale: 2, filter: "blur(20px)" });

    // 1. Decode "WE DON'T FOLLOW TRENDS"
    tl.to(".hero-line-1", {
      duration: 1,
      text: { value: "WE DON'T FOLLOW", delimiter: "" },
      ease: "none",
    })
      .to(".hero-line-2", {
        duration: 0.8,
        text: { value: "TRENDS.", delimiter: "" },
        ease: "none",
      }, "-=0.2")

      // 2. The Glitch & Split
      .to(".hero-text-container", {
        duration: 0.2,
        skewX: -10,
        x: -10,
        color: "#CCFF00",
        yoyo: true,
        repeat: 3,
        ease: "rough({ strength: 2, points: 20 })"
      })

      // 3. Transformation to Ghost Mode
      .to(".hero-line-1, .hero-line-2", {
        duration: 0.1,
        opacity: 0, // Hide the solid text
      })
      .to(".hero-ghost-text", {
        duration: 0.1,
        opacity: 0.3, // Show the outline text
        scale: 1.1,
      }, "<")

      // 4. Ghost Drift (Background animation)
      .to(".hero-ghost-text", {
        duration: 10,
        scale: 1.5,
        rotation: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      }, "<")

      // 5. THE IMPACT: "WE BREAK THEM"
      .to(".hero-main-text", {
        duration: 0.4,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        ease: "circ.out"
      }, "-=9.8") // Overlap significantly with the drift

      // RGB Split Effect on the main text
      .to(".hero-main-text", {
        textShadow: "-4px 0px #FF00FF, 4px 0px #00FFFF",
        duration: 0.1,
        yoyo: true,
        repeat: 5
      }, "<")
      .to(".hero-main-text", {
        textShadow: "0px 0px transparent",
        duration: 0.1
      });

  }, [], containerRef);

  return (
    // h-[100dvh] ensures full height on mobile browsers with collapsible address bars
    <section ref={containerRef} className="relative h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden bg-brutal-bg select-none">

      {/* 1. Background Grid & Noise */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* CRT Scanline */}
        <div className="absolute inset-0 z-10 opacity-10 pointer-events-none"
          style={{
            background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
            backgroundSize: '100% 2px, 3px 100%'
          }}>
        </div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(20deg)'
          }}>
        </div>
      </div>

      {/* 2. Content Container */}
      <div className="relative z-20 w-full max-w-[1800px] px-4 flex flex-col items-center justify-center">

        {/* The "Ghost" Text (Outlined, Background) */}
        <div className="hero-ghost-text absolute inset-0 flex flex-col items-center justify-center pointer-events-none mix-blend-overlay">
          <span className="text-[14vw] lg:text-[12vw] leading-[0.8] font-black font-display uppercase text-transparent stroke-text whitespace-nowrap opacity-30 lg:opacity-50">
            WE DON'T FOLLOW
          </span>
          <span className="text-[14vw] lg:text-[12vw] leading-[0.8] font-black font-display uppercase text-transparent stroke-text whitespace-nowrap opacity-30 lg:opacity-50">
            TRENDS
          </span>
        </div>

        {/* The "Initial" Text (Solid, Foreground) */}
        <div className="hero-text-container flex flex-col items-center absolute max-w-full overflow-visible">
          <span className="hero-line-1 block text-white text-[9vw] lg:text-[6vw] font-bold font-display tracking-tight h-[1em] whitespace-nowrap">
            {/* Filled via GSAP */}
          </span>
          <span className="hero-line-2 block text-white text-[9vw] lg:text-[6vw] font-bold font-display tracking-tight h-[1em] whitespace-nowrap">
            {/* Filled via GSAP */}
          </span>
        </div>

        {/* The "Final" Text (Impact) */}
        {/* Responsive sizing: text-[18vw] on mobile to fill width, [14vw] on desktop */}
        <h1 className="hero-main-text relative z-30 font-display font-black text-[15vw] lg:text-[14vw] leading-[0.85] text-center tracking-tighter text-brutal-green mix-blend-normal break-words w-full px-2">
          WE BREAK<br />THEM.
        </h1>

      </div>

      {/* 3. Bottom Interface - Adaptive Layout */}
      <div className="absolute bottom-0 w-full p-4 lg:p-6 flex justify-between items-end z-20 text-white/60 font-mono text-[10px] md:text-xs">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-brutal-green rounded-full animate-pulse"></span>
            <span>SYSTEM: ONLINE</span>
          </div>
          <div className="hidden sm:block">MEM: 64TB // CPU: 12%</div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 lg:bottom-8 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
          <span className="uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[8px] lg:text-[10px] whitespace-nowrap">Scroll to Initialize</span>
          <div className="w-[1px] h-12 lg:h-16 bg-gradient-to-b from-brutal-green to-transparent"></div>
        </div>

        <div className="text-right">
          <div>V 2.0.4</div>
          <div className="hidden sm:block">SECURE CONNECTION</div>
        </div>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
        @media (min-width: 1024px) {
            .stroke-text {
                -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
            }
        }
      `}</style>
    </section>
  );
};

export default Hero;