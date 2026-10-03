import React from 'react';
import { Github, Disc as Discord, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { CodrynLogo } from './CodrynLogo';
import { COMMUNITY_CONFIG } from '../data/communityData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'discord':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        );
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'youtube':
        return <Youtube className="w-4 h-4" />;
      default:
        return <Github className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Left Column: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <CodrynLogo size="md" />
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              A community for developers who love to learn, build, and share.
            </p>
            <p className="text-xs text-zinc-500 font-mono">
              Empowering engineers through open collaboration and meaningful code.
            </p>
          </div>

          {/* Center Column: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-zinc-400">
              {COMMUNITY_CONFIG.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Social Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
              Connect With Us
            </span>
            <div className="flex flex-col gap-2.5">
              {COMMUNITY_CONFIG.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-xs text-zinc-400 hover:text-white transition-colors py-1 group"
                  aria-label={social.label}
                >
                  <span className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:border-[#168BFF]/40 text-zinc-300 group-hover:text-[#168BFF] transition-colors">
                    {getSocialIcon(social.icon)}
                  </span>
                  <span>{social.platform}</span>
                  <span className="text-[11px] font-mono text-zinc-400 group-hover:text-zinc-400">
                    ({social.username})
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {COMMUNITY_CONFIG.brand.yearEstablished} Codryn Community. Built by the community.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
