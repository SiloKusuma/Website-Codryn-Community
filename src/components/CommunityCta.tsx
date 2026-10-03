import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, Github } from 'lucide-react';
import { COMMUNITY_CONFIG } from '../data/communityData';

interface CommunityCtaProps {
  onOpenJoinModal: () => void;
}

export const CommunityCta: React.FC<CommunityCtaProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden border-t border-white/[0.06]">
      {/* Subtle Blue Glow Center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] pointer-events-none opacity-25 blur-[120px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(22,139,255,0.3) 0%, rgba(5,5,5,0) 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Container with Glass Border */}
        <div className="p-8 sm:p-14 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          {/* Subtle Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold tracking-wider text-zinc-300 uppercase mb-6">
            Get Involved
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6">
            Have an idea? <br className="hidden sm:inline" />
            <span className="text-[#168BFF]">Build it with us.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Join Codryn and meet people who are learning, creating, and building with technology.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <button
              onClick={onOpenJoinModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#168BFF] hover:bg-[#1272D3] active:bg-[#0E5DB2] rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Join Codryn</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://github.com/codryn-community"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.12] rounded-full transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub</span>
            </a>
          </div>

          {/* Secondary Text */}
          <p className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase">
            {COMMUNITY_CONFIG.brand.mottoSecondary}
          </p>
        </div>
      </div>
    </section>
  );
};
