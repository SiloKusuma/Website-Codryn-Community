import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';
import { CodrynLogo } from './CodrynLogo';
import { COMMUNITY_CONFIG } from '../data/communityData';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'what-we-do', 'projects', 'testimoni', 'values'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Testimoni', href: '#testimoni', id: 'testimoni' },
    { label: 'Values', href: '#values', id: 'values' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-[1140px] mx-auto pointer-events-auto">
        {/* Floating Navbar Container */}
        <nav
          aria-label="Main Navigation"
          className={`relative flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl md:rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#080808]/85 backdrop-blur-xl border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.7)]'
              : 'bg-[#080808]/60 backdrop-blur-lg border border-white/8 shadow-[0_8px_24px_rgba(0,0,0,0.5)]'
          }`}
        >
          {/* Left: Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF] rounded-lg"
          >
            <CodrynLogo size="sm" />
          </a>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full duration-200 ${
                    isActive
                      ? 'text-white bg-white/[0.08]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right: CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenJoinModal}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium text-white bg-[#168BFF] hover:bg-[#1272D3] active:bg-[#0D5CB0] rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <span>Join Community</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls: Join mini button + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenJoinModal}
              className="px-3 py-1.5 text-xs font-medium text-white bg-[#168BFF] hover:bg-[#1272D3] rounded-full cursor-pointer transition-colors"
            >
              Join
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer: Glass Panel */}
        {mobileMenuOpen && (
          <div className="mt-2.5 p-4 rounded-2xl bg-[#0A0A0C]/95 backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-200 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-500" />
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-white/[0.08]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenJoinModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#168BFF] hover:bg-[#1272D3] rounded-xl transition-colors"
                >
                  <span>Join Codryn Community</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
