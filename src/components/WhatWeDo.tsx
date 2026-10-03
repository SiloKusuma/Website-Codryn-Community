import React from 'react';
import { BookOpen, Sparkles, Users, Share2, ArrowRight } from 'lucide-react';
import { COMMUNITY_CONFIG } from '../data/communityData';

export const WhatWeDo: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#168BFF]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#168BFF]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#168BFF]" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-[#168BFF]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#168BFF]" />;
    }
  };

  return (
    <section id="what-we-do" className="relative py-20 md:py-28 bg-black/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold tracking-wider text-zinc-300 uppercase mb-4">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Learn, create, collaborate, and share.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Four foundational tracks guiding every community session, project sprint, and initiative at Codryn.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMUNITY_CONFIG.whatWeDo.map((item) => (
            <div
              key={item.id}
              className="group relative p-6 sm:p-7 rounded-[24px] bg-white/[0.02] border border-white/[0.08] hover:border-[#168BFF]/35 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top: Icon & Subtitle */}
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0F0F12] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-[#168BFF]/40 transition-colors">
                  {getIcon(item.iconName)}
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  {item.subtitle}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#168BFF] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom: Feature tags */}
              <div className="pt-4 border-t border-white/[0.06]">
                <ul className="space-y-1.5 text-xs text-zinc-400">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#168BFF]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
