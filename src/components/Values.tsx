import React from 'react';
import { Sparkles, Compass, Lightbulb, Users2, Share } from 'lucide-react';
import { COMMUNITY_CONFIG } from '../data/communityData';

export const Values: React.FC = () => {
  return (
    <section id="values" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold tracking-wider text-zinc-300 uppercase mb-4">
            Culture & Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Built Around People, <br />
            <span className="text-[#168BFF]">Not Just Code.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
            Software is authored by human beings with different backgrounds, curiosities, and ambitions. Our culture is intentionally shaped around psychological safety, generous mentorship, and radical candor.
          </p>
        </div>

        {/* Editorial Layout: Alternating Staggered Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {COMMUNITY_CONFIG.values.map((val) => (
            <div
              key={val.id}
              className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-[#168BFF]/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Value Number & Name */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                  <span className="text-xs font-mono tracking-widest text-[#168BFF] font-semibold">
                    VALUE {val.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                  {val.name}
                </h3>

                <p className="text-sm font-medium text-zinc-200 mb-4">
                  {val.tagline}
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {val.description}
                </p>
              </div>

              {/* Minimalist Bottom Indicator */}
              <div className="pt-6 mt-6 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Codryn Standard</span>
                <span className="text-zinc-400">#0{val.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
