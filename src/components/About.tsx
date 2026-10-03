import React from 'react';
import { BookOpen, Hammer, Share2, TrendingUp, CheckCircle2 } from 'lucide-react';
import { COMMUNITY_CONFIG } from '../data/communityData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#168BFF]" />;
      case 'Hammer':
        return <Hammer className="w-5 h-5 text-[#168BFF]" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-[#168BFF]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#168BFF]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#168BFF]" />;
    }
  };

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Community Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold tracking-wider text-zinc-300 uppercase">
              About Codryn
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              More Than <br className="hidden sm:inline" />
              <span className="text-[#168BFF]">Just Coding.</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-medium">
              Codryn is a place where developers can learn from one another, exchange ideas, collaborate on projects, and grow together.
            </p>

            <div className="space-y-4 text-sm text-zinc-400 leading-relaxed pt-2">
              <p>
                {COMMUNITY_CONFIG.brand.indonesianDescription}
              </p>
              <p>
                Kami percaya bahwa belajar programming terasa jauh lebih menyenangkan dan berdampak ketika dilakukan bersama. Tidak ada istilah &quot;terlalu pemula&quot; atau &quot;pertanyaan konyol&quot;—setiap developer disambut dengan tangan terbuka untuk berdiskusi, bereksperimen, dan saling mendukung.
              </p>
            </div>

            {/* Quick Commitments List */}
            <div className="pt-4 border-t border-white/[0.06] space-y-2.5">
              {[
                'Friendly & welcoming environment for any experience level',
                'Focused on practical shipping, clean code, and shared curiosities',
                'Transparent, 100% open-source oriented mindset',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-[#168BFF] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Principles Glass Card */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
              <div className="space-y-6">
                {COMMUNITY_CONFIG.principles.map((principle) => (
                  <div
                    key={principle.id}
                    className="group flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-[#168BFF]/30 hover:bg-white/[0.04] transition-all duration-200"
                  >
                    <div className="p-2.5 rounded-xl bg-[#0F0F12] border border-white/[0.08] shrink-0 group-hover:border-[#168BFF]/40 transition-colors">
                      {getIcon(principle.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#168BFF] transition-colors">
                          {principle.title}
                        </h3>
                        <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
                          · {principle.highlight}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
