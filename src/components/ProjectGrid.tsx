import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: "HYPER_FINANCE", client: "FINTECH_01", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop", desc: "Decentralized exchange interface" },
  { id: 2, title: "NEURO_LABS", client: "AI_CORP", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop", desc: "Neural network visualization" },
  { id: 3, title: "CYBER_FASHION", client: "RETAIL_X", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop", desc: "Virtual wearable marketplace" },
  { id: 4, title: "ORBITAL_SYS", client: "SPACE_Y", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop", desc: "Satellite telemetry dashboard" },
];

const ProjectGrid: React.FC = () => {
  return (
    <section className="bg-brutal-bg py-16 md:py-24 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        
        <div className="mb-12 border-b-4 border-brutal-green pb-4 inline-block">
          <h2 className="font-mono text-xs md:text-base text-brutal-green uppercase tracking-widest">
            Directory: /work/selected_cases
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-white/20">
          {projects.map((project, index) => (
            <div key={project.id} className="group relative border-r border-b border-white/20 bg-brutal-bg overflow-hidden transition-colors duration-300">
              
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative grayscale md:group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform md:group-hover:scale-110 transition-transform duration-700"
                />
                {/* Mobile: Gradient overlay for text readability (bottom up). Desktop: Hover multiply effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-brutal-green/20 md:opacity-0 md:group-hover:opacity-100 md:mix-blend-multiply transition-opacity duration-300 z-0"></div>
              </div>

              {/* Content Overlay/Below */}
              {/* Mobile: Floating on top of image at bottom. Desktop: Standard layout. */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-10 md:relative md:bg-transparent md:mt-0">
                <div className="flex justify-between items-start mb-2 md:mb-4">
                  <h3 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight text-white md:group-hover:text-brutal-green transition-colors drop-shadow-md md:drop-shadow-none">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[10px] md:text-xs border border-white/30 px-2 py-1 rounded-full text-white bg-black/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0">
                  <div>
                    <p className="font-mono text-[10px] md:text-xs text-gray-400 uppercase mb-1">Client</p>
                    <p className="font-bold text-xs md:text-sm text-brutal-green md:text-white">{project.client}</p>
                  </div>
                  {/* Button: Always visible on mobile (simple text), reveal on hover desktop */}
                  <button className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 bg-white text-black font-bold px-6 py-2 uppercase text-xs md:text-sm hover:bg-brutal-pink hover:text-white w-full md:w-auto mt-4 md:mt-0">
                    Inspect Case
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectGrid;