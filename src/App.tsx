/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { WhatWeDo } from './components/WhatWeDo';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Values } from './components/Values';
import { Faq } from './components/Faq';
import { CommunityCta } from './components/CommunityCta';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './data/communityData';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenJoinModal = () => setIsJoinModalOpen(true);
  const handleCloseJoinModal = () => setIsJoinModalOpen(false);

  const handleExploreCommunity = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] relative selection:bg-[#168BFF]/30 selection:text-white flex flex-col font-sans">
      {/* Top Floating Navbar */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenJoinModal={handleOpenJoinModal}
          onExploreClick={handleExploreCommunity}
        />

        {/* Conceptual Stats */}
        <Stats />

        {/* About Section */}
        <About />

        {/* What We Do Section */}
        <WhatWeDo />

        {/* Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Community Values */}
        <Values />

        {/* FAQ Section */}
        <Faq />

        {/* Community Call to Action */}
        <CommunityCta onOpenJoinModal={handleOpenJoinModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={handleCloseJoinModal}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
