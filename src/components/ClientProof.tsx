import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const clients = [
  "MICROSOFT", "GOOGLE", "NIKE", "SUPREME", "OFF-WHITE", "TESLA", "SPACEX", "BALENCIAGA"
];

const ClientProof: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // if (!window.gsap) return;
    // const gsap = window.gsap;

    const ctx = gsap.context(() => {
      gsap.to(".logo-track", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear"
      });
    }, scrollerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-0 bg-brutal-bg border-y border-white/20 overflow-hidden">
      <div ref={scrollerRef} className="relative w-full overflow-hidden bg-white text-black py-4 md:py-8 transform -skew-y-2">
        <div className="logo-track flex gap-12 md:gap-24 w-max px-4">
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="w-4 h-4 bg-brutal-green rounded-full animate-pulse"></span>
              <span className="text-3xl md:text-5xl font-mono font-bold uppercase tracking-tight select-none whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientProof;