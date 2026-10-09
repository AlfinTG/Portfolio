import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { projects, type Project } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE, Magnetic } from './fx';
import { ProjectArt } from './Poster';

const block = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export default function ProjectModal({
  project,
  onClose,
  onSwitch,
}: {
  project: Project;
  onClose: () => void;
  onSwitch: (p: Project) => void;
}) {
  useScrollLock(true);
  const scroller = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [project.id]);

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex items-center justify-center p-0 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`title-${project.id}-modal`}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-[#24262D]/60 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        ref={scroller}
        data-lenis-prevent
        className="relative z-10 h-full w-full max-w-4xl overflow-y-auto overscroll-contain bg-[#F8F7F4] shadow-2xl sm:h-auto sm:max-h-[92vh] sm:rounded-2xl border border-[#E7E5E0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Close Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between border-b border-[#E7E5E0] bg-white/95 px-6 py-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#24262D]">{project.title}</span>
            <span className="text-xs text-[#8A90A2]">·</span>
            <span className="rounded-full bg-[#EEF2FF] px-2.5 py-0.5 text-[11px] font-semibold text-[#4263CC]">
              {project.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              data-cursor="close"
              aria-label="Close project modal"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E7E5E0] bg-white text-sm font-semibold text-[#606575] shadow-2xs transition hover:bg-[#F8F7F4] hover:text-[#24262D]"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Visual Artwork Banner */}
        <div className="relative aspect-[21/9] min-h-[220px] w-full overflow-hidden bg-white sm:min-h-[260px]">
          <motion.div layoutId={`art-${project.id}`} className="absolute inset-0">
            <ProjectArt project={project} />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4263CC]">{project.role}</span>
            <motion.h2
              id={`title-${project.id}-modal`}
              layoutId={`title-${project.id}`}
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-tight text-[#24262D]"
            >
              {project.title}
            </motion.h2>
            <p className="mt-1 text-sm font-medium text-[#606575]">{project.genre}</p>
          </div>
        </div>

        {/* Modal Flowing Curved Edge */}
        <div className="relative z-10 -mt-2">
          <svg viewBox="0 0 1200 32" preserveAspectRatio="none" className="h-6 w-full" aria-hidden>
            <path d="M0,18 C300,4 600,32 900,12 C1050,2 1150,24 1200,18 L1200,32 L0,32 Z" fill="#F8F7F4" />
          </svg>
        </div>

        {/* Modal Body Content */}
        <motion.div
          className="space-y-8 p-6 sm:p-8 pt-4"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.06, delayChildren: 0.15 }}
        >
          {/* Summary Callout */}
          <motion.div variants={block} className="rounded-2xl border border-[#E7E5E0] bg-white p-5 sm:p-6 shadow-2xs">
            <p className="text-base leading-relaxed text-[#24262D]">{project.logline}</p>
          </motion.div>

          {/* Key Metrics / Highlights */}
          <motion.div variants={block} className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-[#E7E5E0] bg-white p-4 text-center shadow-2xs">
                <p className="font-display text-2xl font-extrabold text-[#4263CC]">{m.value}</p>
                <p className="mt-1 text-xs text-[#606575]">{m.label}</p>
              </div>
            ))}
          </motion.div>

          {/* System Interface / High-Res Preview */}
          {project.image && (
            <motion.div variants={block} className="rounded-2xl border border-[#E7E5E0] bg-white p-4 sm:p-5 shadow-xs">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4263CC]">
                  System Architecture &amp; UI Preview
                </span>
                <span className="font-mono text-[11px] text-[#8A90A2]">
                  Authentic Project Build
                </span>
              </div>
              <div className="overflow-hidden rounded-xl border border-[#E7E5E0] bg-[#F8F7F4]">
                <img
                  src={project.image}
                  alt={`${project.title} interface preview`}
                  className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </motion.div>
          )}

          {/* Problem & Solution Grid */}
          <motion.div variants={block} className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#E7E5E0] bg-white p-5 sm:p-6 shadow-2xs">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                <span>⚠</span> The Problem
              </span>
              <p className="mt-2.5 text-sm leading-relaxed text-[#606575]">{project.problem}</p>
            </div>
            <div className="rounded-2xl border border-[#E7E5E0] bg-white p-5 sm:p-6 shadow-2xs">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#059669]">
                <span>✓</span> The Technical Solution
              </span>
              <p className="mt-2.5 text-sm leading-relaxed text-[#606575]">{project.solution}</p>
            </div>
          </motion.div>

          {/* If the project has an extra result preview screenshot, render it */}
          {project.resultsImage && (
            <motion.div variants={block} className="rounded-2xl border border-[#E7E5E0] bg-white p-4 sm:p-5 shadow-2xs">
              <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#4263CC]">
                Roadmap Results View (Design Prototype)
              </span>
              <img
                src={project.resultsImage}
                alt={`${project.title} results interface`}
                className="w-full rounded-xl border border-[#E7E5E0] object-cover"
                loading="lazy"
              />
            </motion.div>
          )}

          {/* My Engineering Contribution */}
          <motion.section variants={block} className="rounded-xl border border-[#E7E5E0] bg-white p-6 shadow-2xs">
            <h3 className="font-display text-lg font-bold text-[#24262D]">My Contribution & Role</h3>
            <p className="mt-1 text-xs text-[#8A90A2]">Specific technical responsibilities and implemented systems</p>

            <ul className="mt-4 space-y-3">
              {project.contribution.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#24262D]">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-[10px] font-bold text-[#4263CC]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Key Architecture Features */}
          <motion.section variants={block} className="rounded-xl border border-[#E7E5E0] bg-white p-6 shadow-2xs">
            <h3 className="font-display text-lg font-bold text-[#24262D]">Key System Features</h3>
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 rounded-lg bg-[#F8F7F4] p-3 text-xs font-medium text-[#24262D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4263CC]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Technologies Used */}
          <motion.div variants={block} className="rounded-xl border border-[#E7E5E0] bg-white p-6 shadow-2xs">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#8A90A2]">
              Technologies & Frameworks
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[#E7E5E0] bg-[#F8F7F4] px-3 py-1 font-mono text-xs font-medium text-[#24262D]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Modal Actions */}
          <motion.div variants={block} className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E7E5E0]">
            <div className="flex items-center gap-3">
              {project.github && (
                <Magnetic>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#24262D] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#3D414E]"
                  >
                    <span>View GitHub Profile / Repo</span>
                    <span aria-hidden>↗</span>
                  </a>
                </Magnetic>
              )}
            </div>

            {/* Prev / Next navigation */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onSwitch(prevProject)}
                className="rounded-lg border border-[#E7E5E0] bg-white px-3 py-1.5 text-xs font-medium text-[#606575] transition hover:border-[#4263CC] hover:text-[#4263CC]"
              >
                ← Prev: {prevProject.title}
              </button>
              <button
                type="button"
                onClick={() => onSwitch(nextProject)}
                className="rounded-lg border border-[#E7E5E0] bg-white px-3 py-1.5 text-xs font-medium text-[#606575] transition hover:border-[#4263CC] hover:text-[#4263CC]"
              >
                Next: {nextProject.title} →
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
