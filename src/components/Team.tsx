import React from 'react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  { name: "KAI", role: "VISION", bio: "Hates empty space.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop", color: "#CCFF00" },
  { name: "NEO", role: "CODE", bio: "Writes raw WebGL.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop", color: "#FF00FF" },
  { name: "ZEA", role: "STRATEGY", bio: "Breaks stuff.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop", color: "#00FFFF" },
];

const Team: React.FC = () => {
  return (
    // z-20 and relative ensures this section sits ON TOP of the previous section's skew/transform
    // py-24 increased to ensure visual separation
    <section className="py-24 lg:py-32 bg-brutal-bg overflow-visible lg:overflow-hidden relative z-20">
      {/* Inject Dynamic CSS for Desktop Positioning Only */}
      <style>{`
        @media (min-width: 1024px) {
          ${team.map((_, i) => `
            .team-card-pos-${i} {
              position: absolute;
              top: ${40 + (i * 40)}px;
              left: ${15 + (i * 20)}%;
              transform: rotate(${i % 2 === 0 ? 3 : -3}deg);
              z-index: ${10 + i};
            }
            .team-card-pos-${i}:hover {
              transform: scale(1.1) rotate(0deg);
              z-index: 50;
            }
          `).join('')}
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <h2 className="font-display font-black text-5xl md:text-9xl text-white mb-16 lg:mb-24 text-center md:text-left mix-blend-exclusion relative z-10">
          THE <span className="text-brutal-pink">SQUAD</span>
        </h2>

        {/* 
            Layout Strategy:
            Mobile: Flex Column with gap, no fixed height.
            Desktop: Block with fixed height for absolute positioning.
        */}
        <div className="relative flex flex-col items-center gap-20 lg:block lg:h-[700px] w-full pb-12 lg:pb-0">
          {team.map((member, i) => (
            <div 
              key={member.name}
              className={`
                team-card-pos-${i}
                w-full max-w-sm lg:w-[400px] 
                bg-white p-4 border-4 border-black
                relative
                transition-all duration-300 ease-out
                group
                flex-shrink-0
              `}
              style={{
                // Inline styles for mobile variety
                // We ensure shadows are visible by using overflow-visible on section
                boxShadow: `12px 12px 0px ${member.color}`,
              }}
            >
                <div className="h-full w-full bg-white flex flex-col">
                    <div className="aspect-square bg-gray-200 mb-4 overflow-hidden border-2 border-black relative">
                        <div className="absolute inset-0 bg-brutal-green mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"/>
                    </div>
                    
                    <h3 className="font-display font-black text-4xl text-black uppercase mb-1 tracking-tight">{member.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <p className="font-mono text-xs font-bold bg-black text-white px-2 py-1">{member.role}</p>
                      <div className="h-1 w-10 bg-black"></div>
                    </div>
                    <p className="font-sans font-bold text-lg leading-tight">"{member.bio}"</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;