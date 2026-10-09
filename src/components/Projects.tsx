import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, profile, type Project, type ProjectCategory } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';
import ProjectCard from './ProjectCard';
import { CurvedSectionDivider, AmbientProjectCurves, CurvedProfileFrame } from './Curves';

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & RAG Systems' },
  { id: 'civic', label: 'Civic & Web Apps' },
  { id: 'systems', label: 'Engines & Games' },
];

export default function Projects({ onOpen }: { onOpen: (p: Project) => void }) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="relative">
      {/* Flowing Curved Wave Entrance Divider */}
      <CurvedSectionDivider position="top" fillColor="#F8F7F4" accentColor="#4263CC" />

      <section id="projects" className="relative py-16 md:py-24 bg-[#F8F7F4] overflow-hidden">
        {/* Ambient Topographical Isocurves & Soft Gradient Auras */}
        <AmbientProjectCurves />

        <div className="relative z-10">
          <SectionHeading
            kicker="Engineering Portfolio"
            title="Featured Projects"
            subtitle="Practical AI prototypes, hackathon systems, and application builds with honest architectures."
            aside={
              <div className="flex flex-wrap gap-1.5 rounded-2xl border border-[#E7E5E0] bg-white/95 p-1.5 shadow-xs backdrop-blur-sm">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                      activeCategory === cat.id
                        ? 'bg-[#4263CC] text-white shadow-xs'
                        : 'text-[#606575] hover:text-[#24262D] hover:bg-[#F8F7F4]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            }
          />

          {/* Architect Spotlight & Engineering Scope Banner */}
          <div className="gutter mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative overflow-hidden rounded-3xl border border-[#E7E5E0] bg-gradient-to-br from-white via-white/90 to-[#EEF2FF]/60 p-6 sm:p-8 shadow-xs"
            >
              {/* Decorative background curve */}
              <svg
                viewBox="0 0 600 200"
                fill="none"
                preserveAspectRatio="none"
                className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30"
                aria-hidden
              >
                <path
                  d="M0,80 C180,180 340,-20 600,120"
                  stroke="#4263CC"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <circle cx="500" cy="100" r="120" fill="#4263CC" fillOpacity="0.08" />
              </svg>

              <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-5 sm:gap-6">
                  {/* Genuine Portrait in Curved Frame */}
                  <CurvedProfileFrame
                    src={profile.avatar}
                    alt={profile.fullName}
                    size="sm"
                    className="shrink-0"
                  />

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EEF2FF] px-2.5 py-0.5 text-[11px] font-bold text-[#4263CC]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        Architect &amp; Developer
                      </span>
                      <span className="text-xs text-[#8A90A2]">·</span>
                      <span className="text-xs font-semibold text-[#606575]">
                        {profile.fullName}
                      </span>
                    </div>

                    <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-[#24262D]">
                      6 Verified Prototypes with Honest Architectures
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm text-[#606575] max-w-xl leading-relaxed">
                      Every project features authentic problem statements, reproducible workflows, and genuine technical scopes — from RAG vector spaces to computer vision pipelines.
                    </p>
                  </div>
                </div>

                {/* Quick Architecture Badges */}
                <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                  <span className="rounded-xl border border-[#E7E5E0] bg-white px-3 py-1 text-xs font-mono font-medium text-[#24262D] shadow-2xs">
                    4 Hackathon Sprints
                  </span>
                  <span className="rounded-xl border border-[#E7E5E0] bg-white px-3 py-1 text-xs font-mono font-medium text-[#4263CC] shadow-2xs">
                    FastAPI · LangGraph · ChromaDB
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="gutter">
            <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onOpen={() => onOpen(project)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Verification note */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#E7E5E0] bg-white/95 p-5 text-xs text-[#606575] shadow-2xs backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                <span>
                  All projects represent authentic student builds and team prototypes. No fabricated metrics or production claims.
                </span>
              </div>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#4263CC] hover:underline"
              >
                Explore Alfin's GitHub Profile →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flowing Curved Wave Exit Divider into Skills Section */}
      <CurvedSectionDivider position="bottom" fillColor="#F8F7F4" accentColor="#4263CC" />
    </div>
  );
}
