import React, { useState } from 'react';
import { X, ExternalLink, Github, Copy, Check, Terminal, Star, Sparkles } from 'lucide-react';
import { ProjectItem } from '../data/communityData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedClone, setCopiedClone] = useState(false);

  if (!project) return null;

  const cloneCmd = `git clone ${project.githubUrl}.git`;

  const handleCopyClone = () => {
    navigator.clipboard.writeText(cloneCmd);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-dialog-title"
    >
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#09090C] border border-white/10 shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#168BFF]">
              {project.status}
            </span>
            <span className="text-zinc-600">·</span>
            <span className="text-xs font-mono text-zinc-400">{project.category}</span>
          </div>

          <h2 id="project-dialog-title" className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-sm text-zinc-400 mt-1">{project.tagline}</p>
        </div>

        {/* Overview */}
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-sm text-zinc-300 leading-relaxed">
            {project.description}
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Key Features & Architectural Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs text-zinc-300 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF] mt-1 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Clone Terminal */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span>Clone Repository</span>
              <button
                onClick={handleCopyClone}
                className="flex items-center gap-1 text-[#168BFF] hover:underline cursor-pointer"
              >
                {copiedClone ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedClone ? 'Copied!' : 'Copy command'}</span>
              </button>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-xs text-zinc-300">
              <div className="truncate flex items-center gap-2">
                <span className="text-[#168BFF]">$</span>
                <span className="truncate">{cloneCmd}</span>
              </div>
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] rounded-xl transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#168BFF] hover:bg-[#1272D3] rounded-xl transition-colors"
              >
                <span>Open Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
