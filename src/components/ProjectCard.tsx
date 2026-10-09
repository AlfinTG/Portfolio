import { motion } from 'framer-motion';
import type { Project } from '../data/portfolio';
import { EASE, Tilt } from './fx';
import { ProjectArt } from './Poster';
import { CurvedCardEdge } from './Curves';

export default function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.article
      className="flex flex-col h-full"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
    >
      <Tilt max={4} className="group flex flex-col h-full rounded-2xl sm:rounded-3xl">
        <div
          role="button"
          tabIndex={0}
          data-cursor="view"
          onClick={onOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpen();
            }
          }}
          aria-label={`View details for ${project.title}`}
          className="focus-ring flex flex-col h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E7E5E0] bg-white shadow-xs transition-all duration-300 group-hover:border-[#4263CC]/50 group-hover:shadow-2xl group-hover:shadow-[#4263CC]/10 cursor-pointer"
        >
          {/* Visual Header / Artwork Container with Curved Treatment */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F8F7F4]">
            <motion.div
              layoutId={`art-${project.id}`}
              className="absolute inset-0 transition-transform duration-700 ease-[var(--ease-cine)] group-hover:scale-[1.03]"
            >
              <ProjectArt project={project} />
            </motion.div>

            {/* Badges on artwork */}
            <div className="absolute left-3.5 top-3.5 flex items-center gap-1.5 sm:left-4 sm:top-4 sm:gap-2 z-10">
              <span className="rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-[#24262D] shadow-xs backdrop-blur-md">
                {project.year}
              </span>
              <span
                className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-white shadow-xs backdrop-blur-md"
                style={{ backgroundColor: project.palette.accent }}
              >
                {project.category.toUpperCase()}
              </span>
            </div>

            {/* Status badge */}
            <div className="absolute right-3.5 top-3.5 sm:right-4 sm:top-4 z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-[#24262D] shadow-xs backdrop-blur-md">
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse"
                  style={{
                    backgroundColor:
                      project.status.includes('Deployed') || project.status.includes('Completed')
                        ? '#10B981'
                        : '#4263CC',
                  }}
                />
                {project.status.split('(')[0].trim()}
              </span>
            </div>
          </div>

          {/* Flowing Curved Edge between Image Header and Card Content */}
          <CurvedCardEdge accentColor={project.palette.accent} />

          {/* Card Content */}
          <div className="flex flex-1 flex-col p-6 sm:p-7 pt-4 sm:pt-5">
            {/* Role & Genre */}
            <div className="flex items-center justify-between gap-2 text-xs text-[#606575]">
              <span className="font-semibold text-[#4263CC] line-clamp-1">{project.role}</span>
            </div>

            {/* Title & Subtitle */}
            <motion.h3
              layoutId={`title-${project.id}`}
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#24262D] group-hover:text-[#4263CC] transition-colors"
            >
              {project.title}
            </motion.h3>
            <p className="text-xs font-medium text-[#8A90A2]">{project.subtitle}</p>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-[#606575] line-clamp-3">
              {project.logline}
            </p>

            {/* Tech Stack Pills */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[#E7E5E0] bg-[#F8F7F4] px-2.5 py-0.5 text-[11px] font-mono font-medium text-[#24262D]"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 4 && (
                <span className="rounded-lg border border-transparent bg-transparent px-1.5 py-0.5 text-[11px] font-mono text-[#8A90A2]">
                  +{project.stack.length - 4} more
                </span>
              )}
            </div>

            {/* Card Action footer */}
            <div className="mt-6 flex items-center justify-between border-t border-[#E7E5E0] pt-4 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 text-[#4263CC] group-hover:translate-x-1 transition-transform">
                <span>View Architecture & Scope</span>
                <span aria-hidden>→</span>
              </span>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="code"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[#606575] hover:bg-[#F8F7F4] hover:text-[#24262D] transition"
                  title="View repository on GitHub"
                >
                  <span>GitHub</span>
                  <span aria-hidden>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
