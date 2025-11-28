import React, { useLayoutEffect, useRef, useState } from 'react';

const steps = [
  { 
    id: "01", 
    title: "DIAGNOSE", 
    subtitle: "SYSTEM ANALYSIS",
    desc: "We perform a deep-dive audit of your current brand infrastructure. We identify redundancy, outdated patterns, and weak points in the user journey.",
    checks: ["AUDIT_LEGACY_CODE", "USER_FLOW_DECAY", "VISUAL_DEBT_SCAN"],
    status: "COMPLETE"
  },
  { 
    id: "02", 
    title: "DECONSTRUCT", 
    subtitle: "DEMOLITION PHASE",
    desc: "Destruction is creative. We strip away the non-essential, breaking your identity down to its rawest, most potent components.",
    checks: ["REMOVE_BLOAT", "BREAK_GRID_SYSTEMS", "RAW_DATA_EXTRACTION"],
    status: "PENDING"
  },
  { 
    id: "03", 
    title: "REFORGE", 
    subtitle: "ASSEMBLY PHASE",
    desc: "Using the raw components, we build a new visual language. Mathematical precision meets chaotic energy. Brutal, efficient, and unforgettable.",
    checks: ["KINETIC_TYPOGRAPHY", "WEBGL_INTEGRATION", "HIGH_CONTRAST_UI"],
    status: "LOCKED"
  },
  { 
    id: "04", 
    title: "DEPLOY", 
    subtitle: "MARKET INJECTION",
    desc: "We launch aggressively. No soft rollouts. We flood the market with your new identity, ensuring maximum disruption and immediate recall.",
    checks: ["SERVER_STRESS_TEST", "SEO_DOMINATION", "GLOBAL_CDN_PROPAGATION"],
    status: "LOCKED"
  },
];

const ProcessTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Helper to handle navigation clicks (Desktop only)
  const scrollToStep = (index: number) => {
    if (!window.gsap || !window.ScrollTrigger || !sectionRef.current) return;
    const st = window.ScrollTrigger.getById("process-timeline-st");
    if (st && st.start && window.innerWidth >= 1024) { // Check if ST exists and we are on desktop
      const progress = index / (steps.length - 1);
      const scrollPos = st.start + (st.end - st.start) * progress;
      window.scrollTo({ top: scrollPos, behavior: 'smooth' });
    } else {
        // Mobile fallback: scroll to element ID
        const el = document.getElementById(`step-${index}`);
        if(el) {
          // Adjust scroll position to account for double headers (Nav + Sticky Protocol Header)
          const offset = 150; 
          const y = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
  };

  useLayoutEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    const section = sectionRef.current;
    const track = trackRef.current;

    const ctx = gsap.context(() => {
      
      // DESKTOP: Horizontal Scroll (min-width: 1024px)
      mm.add("(min-width: 1024px)", () => {
        const xPercentMove = -100 * (steps.length - 1) / steps.length;
        
        const tl = gsap.timeline({
          scrollTrigger: {
            id: "process-timeline-st",
            trigger: section,
            pin: true,
            scrub: 1, // Smooth scrubbing
            snap: {
              snapTo: 1 / (steps.length - 1),
              duration: { min: 0.2, max: 0.4 },
              delay: 0.1,
              ease: "power2.out"
            },
            start: "top top",
            end: "+=300%", // 300% scroll distance for 4 slides
            invalidateOnRefresh: true,
            onUpdate: (self: any) => {
              if (progressBarRef.current) {
                progressBarRef.current.style.width = `${self.progress * 100}%`;
              }
              const newIndex = Math.round(self.progress * (steps.length - 1));
              setActiveStep(newIndex);
            }
          }
        });

        tl.to(track, {
          xPercent: xPercentMove, 
          ease: "none",
        });

        // Desktop Parallax Animations
        const slides = gsap.utils.toArray(".process-slide");
        slides.forEach((slide: any) => {
            const title = slide.querySelector(".slide-title");
            const number = slide.querySelector(".slide-number");
            
            if(title) {
                gsap.fromTo(title, 
                  { x: 100, opacity: 0 },
                  { 
                    x: 0, 
                    opacity: 1, 
                    ease: "power2.out",
                    scrollTrigger: {
                      trigger: slide,
                      containerAnimation: tl,
                      start: "left center+=25%", 
                      end: "center center",
                      scrub: true
                    }
                  }
                );
            }

            if(number) {
                gsap.fromTo(number, 
                  { x: -200 },
                  { x: 200, ease: "none", scrollTrigger: { trigger: slide, containerAnimation: tl, start: "left right", end: "right left", scrub: true } }
                );
            }
        });
      });

      // MOBILE/TABLET: Vertical Stack (max-width: 1023px)
      mm.add("(max-width: 1023px)", () => {
        const slides = gsap.utils.toArray(".process-slide-mobile");
        slides.forEach((slide: any, i) => {
             // Scroll Spy for Mobile
             ScrollTrigger.create({
                 trigger: slide,
                 start: "top center",
                 end: "bottom center",
                 onEnter: () => setActiveStep(i),
                 onEnterBack: () => setActiveStep(i),
             });

             // Simple Reveal
             gsap.fromTo(slide.querySelector('.content-container'), 
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: slide,
                        start: "top 85%"
                    }
                }
             )
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white relative w-full flex flex-col lg:h-screen lg:block lg:overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none fixed-bg">
        <div 
            className="absolute inset-0" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(204, 255, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(204, 255, 0, 0.05) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                transform: 'perspective(1000px) rotateX(20deg) scale(1.2)'
            }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* HEADER HUD - Sticky logic adjusted for Fixed Nav overlapping */}
      {/* top-[60px] compensates for the Main App Nav height on mobile/tablet */}
      <div className="sticky top-[60px] md:top-[68px] lg:absolute lg:top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center border-b border-white/10 bg-black/95 backdrop-blur-md shadow-2xl lg:shadow-none">
        <div className="flex items-center gap-3 text-brutal-green font-mono text-xs tracking-widest">
           <div className="w-2 h-2 bg-brutal-green animate-pulse shadow-[0_0_10px_#CCFF00]"></div>
           <span className="hidden sm:inline">PROTOCOL_SEQUENCE_V.2.0</span>
           <span className="sm:hidden">SEQ_V.2.0</span>
        </div>
        <div className="flex gap-4 lg:gap-8 font-mono text-[10px] text-gray-500 uppercase tracking-wider">
           <span className="hidden sm:inline">Memory_Alloc: 64TB</span>
           <span className="text-brutal-green/70">Step: 0{activeStep + 1}</span>
        </div>
      </div>

      {/* TRACK CONTAINER */}
      <div 
        ref={trackRef} 
        className="flex flex-col lg:flex-row h-auto lg:h-full relative z-10 will-change-transform"
        style={{ width: '100%' }}
      >
        <div className="contents lg:flex lg:w-[400vw]"> 
            {steps.map((step, i) => (
            <div 
                id={`step-${i}`}
                key={step.id} 
                className={`
                    process-slide-mobile lg:process-slide 
                    flex-shrink-0 w-full lg:w-screen 
                    lg:h-full flex relative 
                    border-b border-white/10 lg:border-b-0 lg:border-r
                `}
            >
                {/* 
                  MOBILE LAYOUT GRID 
                  Col 1: Timeline Line
                  Col 2: Content
                */}
                <div className="flex w-full lg:hidden">
                    {/* Left Column: Timeline Line */}
                    <div className="w-12 flex-shrink-0 relative flex flex-col items-center border-r border-white/5 bg-black/20">
                         {/* The Dot - Aligned with Content PT */}
                         <div className={`w-3 h-3 rounded-full border border-brutal-green z-10 mt-32 transition-all duration-300 ${i <= activeStep ? 'bg-brutal-green shadow-[0_0_8px_#CCFF00]' : 'bg-black'}`}></div>
                         {/* The Line */}
                         {i !== steps.length - 1 && <div className="w-px bg-white/20 flex-grow mt-2"></div>}
                    </div>

                    {/* Right Column: Content */}
                    {/* Increased pt to 32 (8rem) to ensure content clears the double header (Nav + Sticky) */}
                    <div className="flex-grow pb-16 pt-32 pr-6 pl-6 relative overflow-hidden">
                        {/* Giant Number for Mobile */}
                        <div className="absolute top-0 right-0 text-[120px] font-display font-black leading-none text-white/5 pointer-events-none stroke-outline select-none -translate-y-4 translate-x-4">
                            {step.id}
                        </div>

                        <div className="content-container relative z-10">
                             <div className="inline-flex items-center gap-2 mb-2">
                                <span className="font-mono text-brutal-green text-xs font-bold tracking-widest">SEQ_{step.id}</span>
                                <span className="font-mono text-gray-600 text-[10px] uppercase">// {step.subtitle}</span>
                            </div>
                            
                            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase leading-[0.9] tracking-tighter mb-4 text-white">
                                {step.title}
                            </h2>

                            <p className="font-sans text-sm text-gray-400 mb-6 leading-relaxed border-l border-brutal-green/30 pl-3">
                                {step.desc}
                            </p>

                            <div className="bg-white/5 border border-white/10 p-4">
                                <ul className="space-y-2">
                                    {step.checks.map((check, idx) => (
                                        <li key={idx} className="flex items-center gap-2 font-mono text-[10px] text-gray-500">
                                            <span className="text-brutal-green">›</span>
                                            {check}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DESKTOP LAYOUT (Unchanged structure, styled via LG classes) */}
                <div className="hidden lg:grid w-full max-w-[1600px] px-6 grid-cols-12 gap-16 items-center mx-auto relative h-full">
                     {/* GIANT NUMBER BACKGROUND DESKTOP */}
                    <div className="slide-number absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-display font-black leading-none text-transparent opacity-5 select-none pointer-events-none stroke-outline z-0">
                      {step.id}
                    </div>

                    <div className="content-container col-span-7 flex flex-col justify-center pl-0 z-10">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className={`font-mono text-sm font-bold tracking-widest ${i === activeStep ? 'text-brutal-green' : 'text-gray-500'}`}>SEQ_{step.id}</span>
                            <span className="font-mono text-gray-500 text-xs tracking-widest uppercase">// {step.subtitle}</span>
                        </div>
                        
                        <h2 className="slide-title font-display font-black text-9xl uppercase leading-[0.85] tracking-tighter mb-8 text-white mix-blend-screen break-words">
                        {step.title}
                        </h2>

                        <p className="font-sans text-2xl font-light leading-relaxed text-gray-300 max-w-2xl border-l-2 border-brutal-green/50 pl-6">
                        {step.desc}
                        </p>
                    </div>

                    <div className="content-container slide-specs col-span-5 pl-12 flex justify-start w-full z-10">
                        <div className="w-full max-w-md bg-black/60 border border-white/20 backdrop-blur-md p-8 relative overflow-hidden group">
                            <h4 className="font-mono text-xs text-brutal-green mb-6 uppercase tracking-[0.2em] border-b border-white/10 pb-4">
                                Execution_Checklist
                            </h4>
                            <ul className="space-y-4">
                                {step.checks.map((check, idx) => (
                                    <li key={idx} className="flex items-center gap-3 font-mono text-xs text-gray-400">
                                        <span className="text-brutal-green">[{idx + 1}]</span>
                                        {check}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            ))}
        </div>
      </div>

      {/* FOOTER CONTROLS (Desktop Only) */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-full z-20 bg-black border-t border-white/10 select-none">
        <div className="w-full h-1 bg-gray-900 relative">
           <div 
             ref={progressBarRef} 
             className="absolute top-0 left-0 h-full bg-brutal-green w-0 shadow-[0_0_15px_rgba(204,255,0,0.8)]"
             style={{ transition: 'width 0.1s linear' }}
           ></div>
        </div>

        <div className="flex flex-row justify-between items-center px-6 py-4 gap-4">
            <div className="flex gap-8 overflow-x-auto max-w-full">
                {steps.map((step, i) => (
                    <button 
                      key={i} 
                      onClick={() => scrollToStep(i)}
                      className={`group flex flex-col items-start gap-1 transition-all duration-300 px-4 py-2 border-l border-transparent hover:bg-white/5 ${i === activeStep ? 'opacity-100 border-l-brutal-green' : 'opacity-40 hover:opacity-70'}`}
                    >
                        <span className={`font-mono text-xs font-bold ${i === activeStep ? 'text-brutal-green' : 'text-white'}`}>0{i+1}</span>
                        <span className="hidden md:inline font-mono text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-white">{step.title}</span>
                    </button>
                ))}
            </div>
            
            <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
               <span>SCROLL TO NAVIGATE</span>
               <div className="w-px h-4 bg-white/20"></div>
               <span className="text-brutal-green animate-pulse">
                 {activeStep + 1} / {steps.length}
               </span>
            </div>
        </div>
      </div>

      <style>{`
        .stroke-outline {
            -webkit-text-stroke: 2px rgba(255,255,255,0.05);
        }
      `}</style>
    </section>
  );
};

export default ProcessTimeline;