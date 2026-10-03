import React from 'react';
import { COMMUNITY_CONFIG } from '../data/communityData';

export const Stats: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 border-y border-white/[0.06] bg-black/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {COMMUNITY_CONFIG.stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center p-4 rounded-xl transition-all duration-200 ${
                idx < COMMUNITY_CONFIG.stats.length - 1 ? 'md:border-r md:border-white/[0.06]' : ''
              }`}
            >
              {/* Stat Value */}
              <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-1.5 font-mono">
                {stat.value === '∞' ? (
                  <span className="text-[#168BFF] text-4xl sm:text-5xl">∞</span>
                ) : (
                  stat.value
                )}
              </span>

              {/* Stat Label */}
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-300 uppercase mb-1">
                {stat.label}
              </span>

              {/* Stat Description */}
              <span className="text-xs text-zinc-500 max-w-[190px] leading-relaxed hidden sm:inline-block">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
