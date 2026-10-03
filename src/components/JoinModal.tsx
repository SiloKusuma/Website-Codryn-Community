import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Github, ExternalLink, Copy, Check } from 'lucide-react';
import { CodrynLogo } from './CodrynLogo';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'quick' | 'register'>('quick');
  const [copiedLink, setCopiedLink] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    handle: '',
    role: 'Frontend / Full-stack',
    interest: 'Open Source Projects',
  });

  if (!isOpen) return null;

  const discordUrl = 'https://discord.gg/codryn';

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(discordUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    try {
      const existing = JSON.parse(localStorage.getItem('codryn_members') || '[]');
      existing.push({ ...formData, joinedAt: new Date().toISOString() });
      localStorage.setItem('codryn_members', JSON.stringify(existing));
    } catch {
      // LocalStorage fallback
    }

    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-dialog-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg my-auto rounded-2xl sm:rounded-3xl bg-[#09090C] border border-white/10 shadow-2xl p-4 sm:p-7 max-h-[92vh] overflow-y-auto">
        {/* Responsive Modal Header: Clean flex row, zero overlap */}
        <div className="flex items-start justify-between gap-3 mb-5 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5 min-w-0">
            <CodrynLogo size="sm" iconOnly />
            <div className="min-w-0">
              <h2 id="join-dialog-title" className="text-base sm:text-xl font-bold text-white tracking-tight leading-snug">
                Join Codryn Community
              </h2>
              <p className="text-[11px] sm:text-xs text-zinc-400">
                Free, open, and community-driven forever.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors shrink-0 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Segmented Tab Switcher */}
        <div className="grid grid-cols-2 p-1 bg-white/[0.03] border border-white/[0.06] rounded-xl mb-5 gap-1">
          <button
            onClick={() => setTab('quick')}
            className={`py-2 px-1 text-center text-xs font-semibold rounded-lg transition-colors cursor-pointer truncate ${
              tab === 'quick' ? 'bg-[#168BFF] text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Community
          </button>
          <button
            onClick={() => setTab('register')}
            className={`py-2 px-1 text-center text-xs font-semibold rounded-lg transition-colors cursor-pointer truncate ${
              tab === 'register' ? 'bg-[#168BFF] text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Member Introduction
          </button>
        </div>

        {tab === 'quick' ? (
          <div className="space-y-3.5">
            {/* Discord Box */}
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 sm:p-2.5 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/20 text-[#5865F2] shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white">Codryn Discord Server</h4>
                  <p className="text-[11px] text-zinc-400">Daily discussions, study rooms & updates</p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t border-white/[0.05] sm:border-t-0">
                <button
                  onClick={handleCopyDiscord}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy invite URL"
                  type="button"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-3.5 py-1.5 text-xs font-semibold text-white bg-[#5865F2] hover:bg-[#4752C4] rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* GitHub Box */}
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white">GitHub Organization</h4>
                  <p className="text-[11px] text-zinc-400">Collaborative repos, issues & pull requests</p>
                </div>
              </div>

              <div className="flex items-center justify-end w-full sm:w-auto pt-2 sm:pt-0 border-t border-white/[0.05] sm:border-t-0">
                <a
                  href="https://github.com/codryn-community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-1.5 text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>Follow Repos</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Community Guidelines note */}
            <div className="p-3 rounded-xl bg-white/[0.015] border border-white/[0.04] text-[11px] text-zinc-400 leading-relaxed">
              <span className="text-white font-medium">Community Promise:</span> Codryn is dedicated to creating an inclusive, friendly, and harassment-free environment for developers of all backgrounds.
            </div>
          </div>
        ) : (
          <div>
            {submitted ? (
              <div className="text-center py-6 sm:py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Welcome to Codryn, {formData.name}!
                </h4>
                <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed">
                  Your interest in {formData.interest} has been recorded. Hop over to our Discord server to say hello in the #introductions channel!
                </p>
                <div className="pt-3">
                  <a
                    href="https://discord.gg/codryn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-[#168BFF] hover:bg-[#1272D3] rounded-full transition-colors"
                  >
                    <span>Proceed to Discord Server</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Your Name or Handle
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Pratama"
                    className="w-full px-3 py-2 text-xs text-white bg-white/[0.03] border border-white/[0.08] rounded-xl focus:outline-none focus:border-[#168BFF] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    GitHub or Discord username
                  </label>
                  <input
                    type="text"
                    value={formData.handle}
                    onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                    placeholder="@alexpratama"
                    className="w-full px-3 py-2 text-xs text-white bg-white/[0.03] border border-white/[0.08] rounded-xl focus:outline-none focus:border-[#168BFF] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Primary Focus
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-white bg-[#0F0F12] border border-white/[0.08] rounded-xl focus:outline-none focus:border-[#168BFF]"
                    >
                      <option>Frontend / React</option>
                      <option>Backend / Node / Go</option>
                      <option>Full-stack</option>
                      <option>Mobile / Flutter</option>
                      <option>Exploring / Student</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Main Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3 py-2 text-xs text-white bg-[#0F0F12] border border-white/[0.08] rounded-xl focus:outline-none focus:border-[#168BFF]"
                    >
                      <option>Open Source Projects</option>
                      <option>Coding Sessions</option>
                      <option>Tech Discussions</option>
                      <option>Knowledge Sharing</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 text-xs font-semibold text-white bg-[#168BFF] hover:bg-[#1272D3] rounded-xl transition-colors cursor-pointer"
                  >
                    Submit & Join Community
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
