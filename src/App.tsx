import { lazy, Suspense, useCallback, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import type { Project } from './data/portfolio';
import { SmoothScrollProvider } from './hooks/smoothScroll';
import CustomCursor from './components/CustomCursor';
import OpeningSequence from './components/OpeningSequence';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeViewer';
import FinalCTA from './components/FinalCTA';
import { EASE } from './components/fx';

// Lazy loaded modals for fast initial load
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));

type Stage = 'opening' | 'home';

export default function App() {
  return (
    <SmoothScrollProvider>
      <MainPortfolio />
    </SmoothScrollProvider>
  );
}

function MainPortfolio() {
  const [stage, setStage] = useState<Stage>('opening');
  const [project, setProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const closeProject = useCallback(() => setProject(null), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);
  const handleOpenResume = useCallback(() => setResumeOpen(true), []);

  return (
    <LayoutGroup>
      {/* Subtle organic paper grain texture */}
      <div className="paper-grain" aria-hidden />

      {/* Accessible custom pointer */}
      <CustomCursor />

      {/* Opening Intro Sequence */}
      <AnimatePresence>
        {stage === 'opening' && (
          <OpeningSequence key="opening" onDone={() => setStage('home')} />
        )}
      </AnimatePresence>

      {/* Main Single Page Content */}
      {stage === 'home' && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative min-h-screen bg-[#F8F7F4] text-[#24262D]"
        >
          <Navbar onResume={handleOpenResume} />

          <main id="content">
            <Hero onResume={handleOpenResume} />
            <About />
            <Projects onOpen={setProject} />
            <Skills />
            <Experience />
            <Achievements />
            <ResumeSection onView={handleOpenResume} />
            <FinalCTA onReplay={() => setStage('opening')} />
          </main>
        </motion.div>
      )}

      {/* Interactive Modals */}
      <Suspense fallback={null}>
        <AnimatePresence>
          {project && (
            <ProjectModal
              key="project-modal"
              project={project}
              onClose={closeProject}
              onSwitch={setProject}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {resumeOpen && (
            <ResumeModal
              key="resume-modal"
              onClose={closeResume}
            />
          )}
        </AnimatePresence>
      </Suspense>
    </LayoutGroup>
  );
}
