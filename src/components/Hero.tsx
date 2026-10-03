import React from 'react';
import { ArrowRight, Terminal, Sparkles, Users, GitBranch, ShieldCheck } from 'lucide-react';
import { COMMUNITY_CONFIG } from '../data/communityData';
import { CodrynLogo } from './CodrynLogo';

interface HeroProps {
  onOpenJoinModal: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal, onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Subtle Radial Blue Glow in background (restrained & elegant) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[480px] pointer-events-none opacity-40 blur-[130px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(22,139,255,0.22) 0%, rgba(5,5,5,0) 70%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle Grid overlay */}
      <div
        className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.12] mb-6">
          Where <span className="text-[#168BFF]">Developers</span> Come Together to{' '}
          <span className="text-[#168BFF]">Build</span> Something Meaningful.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {COMMUNITY_CONFIG.brand.shortDescription}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#168BFF] hover:bg-[#1272D3] active:bg-[#0E5DB2] rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Join Codryn</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.12] rounded-full backdrop-blur-md transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <span>Explore Community</span>
          </button>
        </div>

        {/* Developer Community Artifact: Sleek Minimal Terminal / Collaboration Slate */}
        <div className="relative max-w-3xl mx-auto text-left">
          <div className="rounded-2xl bg-[#09090C]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden">
            {/* Terminal Window Chrome */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-white/10" />
                <span className="w-3 h-3 rounded-full bg-white/10" />
                <span className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>active sprint</span>
              </div>
            </div>

            {/* Terminal / Community Snapshot Content */}
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-3">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-[#168BFF] font-bold">$</span>
                <span className="text-zinc-200">codryn init --collaborate</span>
              </div>
              <div className="pl-4 text-zinc-400 text-xs sm:text-sm space-y-1.5 border-l border-white/[0.08]">
                <p className="text-zinc-300">
                  <span className="text-emerald-400">✓</span> Connected to developer collective
                </p>
                <p className="text-zinc-400">
                  <span className="text-zinc-500">→</span> Open topics: <span className="text-zinc-200">System Design, Next-gen Web, Open Source Tooling</span>
                </p>
                <p className="text-zinc-400">
                  <span className="text-zinc-500">→</span> Motto: <span className="text-[#168BFF]">“Where Developers Come Together to Build Something Meaningful.”</span>
                </p>
              </div>

              {/* Quick Status Bar inside Terminal */}
              <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <Users className="w-3.5 h-3.5 text-[#168BFF]" />
                    <span>Peer Discussions</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <GitBranch className="w-3.5 h-3.5 text-[#168BFF]" />
                    <span>Public Repos</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Free & Open Always</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
