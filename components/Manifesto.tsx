
import React, { useLayoutEffect, useRef } from 'react';

const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax text effects
      gsap.utils.toArray('.manifesto-line').forEach((line: any, i) => {
        gsap.fromTo(line, 
          { x: i % 2 === 0 ? -30 : 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: line,
              start: "top 90%", // Trigger slightly earlier for smoother entry
              end: "bottom 40%",
              scrub: 1,
            }
          }
        );
      });

      // Glitch effect on hover for keywords
      const keywords = gsap.utils.toArray('.keyword');
      keywords.forEach((word: any) => {
        // Use click/tap for mobile, mouseenter for desktop
        const eventType = 'ontouchstart' in window ? 'click' : 'mouseenter';
        word.addEventListener(eventType, () => {
          gsap.to(word, { skewX: 20, color: '#CCFF00', duration: 0.1, yoyo: true, repeat: 3 });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Added z-20 and relative to ensure it stacks cleanly above Hero on scroll
    // Adjusted padding for tablet (md:py-28) to smooth the transition
    <section ref={containerRef} className="py-20 md:py-28 lg:py-32 bg-brutal-gray text-white overflow-hidden relative border-b border-white/10 w-full z-20">
      {/* Background Text: Restricted width and overflow handling */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 text-[20vw] font-display font-bold leading-none text-center select-none flex flex-col justify-center overflow-hidden">
        <span className="whitespace-nowrap transform translate-x-[-10%]">CHAOS</span>
        <span className="whitespace-nowrap transform translate-x-[10%]">CHAOS</span>
        <span className="whitespace-nowrap transform translate-x-[-10%]">CHAOS</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col space-y-12 md:space-y-16">
          
          <div className="manifesto-line md:ml-[10%]">
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter hover:text-outline transition-all duration-300">
              Safe is <span className="keyword text-brutal-pink cursor-pointer inline-block">Dangerous</span>.
            </h2>
          </div>

          <div className="manifesto-line md:ml-[30%]">
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter">
              Boring is <span className="keyword text-brutal-green cursor-pointer inline-block">Dead</span>.
            </h2>
          </div>

          <div className="manifesto-line md:ml-[5%] max-w-4xl mt-8 md:mt-12">
            <p className="font-mono text-sm md:text-2xl leading-relaxed text-gray-300 bg-black p-4 md:p-6 inline-block transform -rotate-1 border border-white/20 hover:border-brutal-green transition-colors shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
              // We are not a traditional agency. We are an <span className="text-white font-bold">anti-design</span> collective building brands that demand attention. If you want to blend in, go elsewhere. If you want to dominate, stay here.
            </p>
          </div>

           <div className="manifesto-line md:self-end md:mr-[10%] mt-8 md:mt-12">
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-tighter text-left md:text-right">
              Make them <br/>
              <span className="keyword text-white bg-brutal-pink px-2 md:px-4 text-black cursor-pointer inline-block">Uncomfortable</span>.
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Manifesto;