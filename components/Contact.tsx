
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-brutal-pink relative overflow-hidden">
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="font-display font-black text-5xl sm:text-7xl md:text-9xl text-black mb-12 text-center leading-[0.85] break-words">
          HIRE US OR<br/>DON'T
        </h2>

        <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="group">
                <input 
                    type="text" 
                    placeholder="WHO ARE YOU?" 
                    className="w-full bg-transparent border-b-2 md:border-b-4 border-black py-4 md:py-6 text-xl md:text-5xl font-bold font-display text-black placeholder-black/50 focus:outline-none focus:border-white focus:placeholder-transparent transition-colors uppercase rounded-none"
                />
            </div>
            
            <div className="group">
                <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS" 
                    className="w-full bg-transparent border-b-2 md:border-b-4 border-black py-4 md:py-6 text-xl md:text-5xl font-bold font-display text-black placeholder-black/50 focus:outline-none focus:border-white focus:placeholder-transparent transition-colors uppercase rounded-none"
                />
            </div>

            <div className="group">
                <textarea 
                    rows={1}
                    placeholder="WHAT DO YOU WANT?" 
                    className="w-full bg-transparent border-b-2 md:border-b-4 border-black py-4 md:py-6 text-xl md:text-5xl font-bold font-display text-black placeholder-black/50 focus:outline-none focus:border-white focus:placeholder-transparent transition-colors uppercase resize-none h-auto rounded-none"
                ></textarea>
            </div>

            <div className="pt-8 md:pt-12 text-center">
                <button className="w-full md:w-auto bg-black text-white font-display font-black text-2xl md:text-5xl px-8 md:px-12 py-4 md:py-6 uppercase hover:bg-white hover:text-black hover:scale-105 transform transition-all duration-200 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] active:scale-95 active:shadow-none">
                    SEND IT
                </button>
            </div>
        </form>

        <div className="mt-16 md:mt-24 text-center font-mono text-xs md:text-sm font-bold px-4">
            <p>WARNING: WE ARE EXPENSIVE AND OPINIONATED.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
