import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Star, GitFork, ArrowUpRight } from 'lucide-react';
import { COMMUNITY_CONFIG, ProjectItem } from '../data/communityData';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'tools' | 'open-source'>('all');

  const filteredProjects =
    activeTab === 'all'
      ? COMMUNITY_CONFIG.projects
      : COMMUNITY_CONFIG.projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-black/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold tracking-wider text-zinc-300 uppercase mb-4">
              Community Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
              Projects Built by Codryn
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
              &ldquo;Ideas become more meaningful when they are built.&rdquo; Open experiments, developer tooling, and community initiatives.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.06] rounded-xl self-start md:self-end">
            {(
              [
                { label: 'All Projects', value: 'all' },
                { label: 'Web & Hub', value: 'web' },
                { label: 'Developer Tools', value: 'tools' },
                { label: 'Open Source', value: 'open-source' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  activeTab === tab.value
                    ? 'bg-[#168BFF] text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-[24px] bg-white/[0.02] border border-white/[0.08] hover:border-[#168BFF]/40 hover:bg-white/[0.035] transition-all duration-300 overflow-hidden"
            >
              {/* Card Top / Visual Representation */}
              <div>
                <div className="relative h-44 bg-[#0A0A0E] border-b border-white/[0.06] p-4 flex flex-col justify-between overflow-hidden">
                  {/* Subtle code pattern decoration in thumbnail */}
                  <div className="absolute inset-0 bg-grid-subtle opacity-40" />
                  
                  {/* Status tag */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300">
                      {project.status}
                    </span>
                    {project.stars !== undefined && (
                      <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 bg-black/60 px-2 py-0.5 rounded-full border border-white/[0.05]">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400/20" />
                        <span>{project.stars}</span>
                      </div>
                    )}
                  </div>

                  {/* Aesthetic Code Canvas Mockup */}
                  <div className="relative z-10 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/[0.06] font-mono text-[11px] text-zinc-400 space-y-1">
                    <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
                      <span className="w-2 h-2 rounded-full bg-red-500/50" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/50" />
                      <span className="ml-1 text-[10px] text-zinc-400">{project.id}.ts</span>
                    </div>
                    <p className="truncate text-zinc-300 font-semibold">{project.title}</p>
                    <p className="truncate text-zinc-400 text-[10px]">{project.tagline}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#168BFF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technology Tags (Zero-pill clean discipline with subtle dot separators) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-400 font-mono mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-300 text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className="p-6 pt-0 mt-auto flex items-center justify-between gap-3 border-t border-white/[0.06]">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-white/[0.04] hover:bg-[#168BFF] hover:border-[#168BFF] border border-white/[0.08] rounded-xl transition-all cursor-pointer"
                >
                  <span>Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-xl transition-colors cursor-pointer"
                  title="View GitHub Repository"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#168BFF] hover:text-white bg-[#168BFF]/10 hover:bg-[#168BFF] border border-[#168BFF]/20 rounded-xl transition-colors cursor-pointer"
                    title="Live Demo"
                    aria-label={`Open Live Demo for ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
