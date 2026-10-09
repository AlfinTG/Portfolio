import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Art-directed background for project thumbnails:
 * clean gradients with soft technical grids, organic curve accents, and ambient glow.
 */
export function PosterBackdrop({
  palette,
  children,
  className = '',
}: {
  palette: Palette;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(110% 80% at 85% 15%, ${palette.via} 0%, transparent 75%),
          radial-gradient(90% 80% at 10% 90%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, #FFFFFF 100%)`,
      }}
    >
      {/* Delicate organic flow curves in thumbnail background */}
      <svg
        viewBox="0 0 400 250"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
        aria-hidden
      >
        <path
          d="M-20,60 C120,120 220,-20 420,80"
          stroke={palette.accent}
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeDasharray="4 6"
        />
        <path
          d="M-40,160 C140,80 260,220 440,140"
          stroke={palette.accent}
          strokeWidth="1.2"
          strokeOpacity="0.3"
        />
        <circle cx="340" cy="50" r="90" fill={palette.via} fillOpacity="0.5" />
      </svg>

      {/* Subtle coordinate dot matrix */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `radial-gradient(${palette.accent}55 1px, transparent 1px)`,
          backgroundSize: '22px 22px',
        }}
      />

      {children}

      {/* Soft gradient bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/95 via-white/15 to-transparent"
      />
    </div>
  );
}

/**
 * Architectural SVG illustrations or genuine screenshot previews in curved device viewports.
 */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;

  return (
    <PosterBackdrop palette={project.palette} className={className}>
      {/* If a genuine screenshot exists, display it in a sleek curved perspective container */}
      {project.image ? (
        <div className="absolute inset-x-3 bottom-8 top-5 flex items-center justify-center sm:inset-x-6 sm:bottom-10 sm:top-6">
          <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/80 bg-white shadow-md shadow-slate-900/10 backdrop-blur-sm transition-all duration-700 ease-[var(--ease-cine)] group-hover:-translate-y-1 group-hover:shadow-xl">
            {/* Window bar */}
            <div className="flex h-6 w-full items-center justify-between border-b border-[#E7E5E0] bg-[#FAFAF9]/90 px-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#EF4444]" />
                <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              </div>
              <span className="font-mono text-[9.5px] font-medium text-[#8A90A2]">
                {project.id}.app
              </span>
              <div className="w-8" />
            </div>

            {/* Screenshot preview */}
            <div className="relative h-[calc(100%-24px)] w-full overflow-hidden bg-[#F8F7F4]">
              <img
                src={project.image}
                alt={`${project.title} interface preview`}
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#24262D]/15 via-transparent to-transparent"
              />
            </div>
          </div>
        </div>
      ) : (
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={a} stopOpacity="0.28" />
              <stop offset="100%" stopColor={a} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="280" cy="140" r="140" fill={`url(#g-${project.id})`} />

          {/* Fallback Vector Paths */}
          {project.motif === 'rag-graph' && (
            <g transform="translate(180, 45)" stroke={a} fill="none">
              <rect x="20" y="20" width="80" height="110" rx="6" strokeWidth="2" strokeOpacity="0.8" fill="#FFFFFF" fillOpacity="0.8" />
              <line x1="35" y1="42" x2="85" y2="42" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
              <line x1="35" y1="56" x2="75" y2="56" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
              <line x1="35" y1="70" x2="85" y2="70" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
              <path d="M100 75 C 130 75, 140 40, 165 40" strokeWidth="2" strokeDasharray="4 3" strokeOpacity="0.6" />
              <path d="M100 75 C 130 75, 140 110, 165 110" strokeWidth="2" strokeDasharray="4 3" strokeOpacity="0.6" />
              <circle cx="165" cy="40" r="14" fill="#FFFFFF" strokeWidth="2" />
              <circle cx="165" cy="75" r="16" fill={a} fillOpacity="0.15" strokeWidth="2.5" />
              <circle cx="165" cy="75" r="5" fill={a} />
            </g>
          )}

          {project.motif === 'geo-radar' && (
            <g transform="translate(190, 40)" stroke={a} fill="none">
              <circle cx="80" cy="80" r="70" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="4 4" />
              <circle cx="80" cy="80" r="48" strokeWidth="1.5" strokeOpacity="0.5" />
              <circle cx="80" cy="80" r="26" strokeWidth="2" strokeOpacity="0.8" />
              <rect x="45" y="45" width="70" height="70" rx="8" strokeWidth="2" strokeOpacity="0.9" fill={a} fillOpacity="0.08" />
              <circle cx="80" cy="80" r="5" fill={a} />
            </g>
          )}

          {project.motif === 'tree-flow' && (
            <g transform="translate(170, 35)" stroke={a} fill="none">
              <rect x="15" y="65" width="45" height="30" rx="6" strokeWidth="2" fill="#FFFFFF" />
              <path d="M60 80 C 85 80, 95 35, 120 35" strokeWidth="2" strokeOpacity="0.7" />
              <path d="M60 80 C 85 80, 95 80, 120 80" strokeWidth="2.5" />
              <rect x="120" y="20" width="60" height="28" rx="6" strokeWidth="2" fill="#FFFFFF" />
              <rect x="120" y="66" width="65" height="28" rx="6" strokeWidth="2.5" fill={a} fillOpacity="0.12" />
            </g>
          )}

          {project.motif === 'realtime-pulse' && (
            <g transform="translate(160, 45)" stroke={a} fill="none">
              <rect x="30" y="20" width="140" height="95" rx="10" strokeWidth="2" fill="#FFFFFF" fillOpacity="0.85" />
              <path
                d="M45 70 L65 70 L75 45 L85 90 L95 55 L105 80 L115 70 L155 70"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.9"
              />
              <circle cx="85" cy="90" r="4" fill={a} />
            </g>
          )}

          {project.motif === 'sound-wave' && (
            <g transform="translate(170, 40)" stroke={a} fill="none">
              {[25, 45, 65, 85, 105, 125].map((x, i) => {
                const heights = [24, 52, 85, 64, 40, 20];
                const h = heights[i];
                return (
                  <line
                    key={x}
                    x1={x}
                    x2={x}
                    y1={80 - h / 2}
                    y2={80 + h / 2}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeOpacity={0.4 + (i % 3) * 0.25}
                  />
                );
              })}
            </g>
          )}

          {project.motif === 'arcade-vector' && (
            <g transform="translate(190, 40)" stroke={a} fill="none">
              <polygon points="80,20 115,110 80,95 45,110" strokeWidth="2.5" fill="#FFFFFF" fillOpacity="0.8" strokeLinejoin="round" />
              <circle cx="80" cy="5" r="3" fill={a} />
            </g>
          )}
        </svg>
      )}
    </PosterBackdrop>
  );
}

/** Minimal modern wordmark used in nav and footer. */
export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center font-display font-extrabold tracking-tight text-[#24262D] ${className}`}>
      <span>alfin</span>
      <span className="text-[#4263CC]">.</span>
    </span>
  );
}
