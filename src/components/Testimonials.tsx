import React from 'react';
import { COMMUNITY_CONFIG, TestimonialItem } from '../data/communityData';

export const Testimonials: React.FC = () => {
  // Organize testimonials into 5 columns exactly matching the reference layout
  const columns: TestimonialItem[][] = [
    COMMUNITY_CONFIG.testimonials.filter((t) => t.column === 1),
    COMMUNITY_CONFIG.testimonials.filter((t) => t.column === 2),
    COMMUNITY_CONFIG.testimonials.filter((t) => t.column === 3),
    COMMUNITY_CONFIG.testimonials.filter((t) => t.column === 4),
    COMMUNITY_CONFIG.testimonials.filter((t) => t.column === 5),
  ];

  return (
    <section id="testimoni" className="relative py-20 md:py-32 overflow-hidden bg-black/60 border-t border-white/[0.06]">
      {/* Subtle radial ambient light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none opacity-20 blur-[130px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(22,139,255,0.25) 0%, rgba(5,5,5,0) 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold tracking-wider text-zinc-300 uppercase mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Apa Kata Developer tentang <span className="text-[#168BFF]">Codryn</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Cerita nyata dari para engineer, kreator, dan kontributor open-source yang bertumbuh bersama komunitas.
          </p>
        </div>

        {/* 5-Column Staggered Grid (Matching reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4.5 items-start">
          {columns.map((colItems, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4.5">
              {colItems.map((item) => (
                <div
                  key={item.id}
                  className="testimonial-card group relative rounded-[20px] bg-[#0A0A0D]/95 border border-white/[0.08] p-5 sm:p-6 transition-all duration-300 overflow-hidden cursor-default"
                >
                  {/* Traveling Animated Border on Hover: runs left -> bottom -> right -> top -> complete fill */}
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="testimonial-border-svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M 1,1 L 1,99 L 99,99 L 99,1 Z"
                      vectorEffect="non-scaling-stroke"
                      pathLength="100"
                      className="testimonial-border-path"
                    />
                  </svg>

                  {/* Card Content */}
                  <div className="relative z-10">
                    {/* Card Header: Avatar, Name, Role */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-white/40 overflow-hidden shrink-0 bg-white/[0.05] transition-colors duration-200">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-white group-hover:text-white tracking-tight truncate transition-colors duration-200">
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-zinc-400 group-hover:text-white truncate transition-colors duration-200">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Card Body: Quote text with highlighted strong statement */}
                    <div className="text-xs sm:text-[13px] leading-relaxed text-zinc-300 group-hover:text-white transition-colors duration-200">
                      {item.highlightText && (
                        <strong className="text-white group-hover:text-white font-bold transition-colors duration-200">
                          {item.highlightText}
                        </strong>
                      )}
                      <span className="text-zinc-300 group-hover:text-white transition-colors duration-200">
                        {item.normalText}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
