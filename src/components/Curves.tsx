
/**
 * Flowing dual-layer SVG wave section divider.
 * Creates smooth organic transitions between sections with subtle depth and glowing accent paths.
 */
export function CurvedSectionDivider({
  position = 'top',
  fillColor = '#F8F7F4',
  accentColor = '#4263CC',
  className = '',
}: {
  position?: 'top' | 'bottom';
  fillColor?: string;
  accentColor?: string;
  className?: string;
}) {
  const isTop = position === 'top';

  return (
    <div
      aria-hidden
      className={`pointer-events-none relative w-full overflow-hidden leading-none z-10 ${
        isTop ? '-mt-1' : '-mb-1'
      } ${className}`}
      style={{ height: 'clamp(48px, 6vw, 96px)' }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`h-full w-full ${isTop ? '' : 'rotate-180'}`}
      >
        <defs>
          <linearGradient id={`curve-accent-${position}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.05" />
            <stop offset="35%" stopColor={accentColor} stopOpacity="0.35" />
            <stop offset="70%" stopColor="#818CF8" stopOpacity="0.3" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id={`curve-depth-${position}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#24262D" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#24262D" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Layer 1: Soft depth / shadow wave */}
        <path
          d="M0,28 C280,68 560,-12 840,42 C1120,86 1320,18 1440,32 L1440,120 L0,120 Z"
          fill="url(#curve-depth-${position})"
        />

        {/* Layer 2: Main seamless curved wave body */}
        <path
          d="M0,45 C320,10 640,80 960,25 C1200,-15 1360,55 1440,40 L1440,120 L0,120 Z"
          fill={fillColor}
        />

        {/* Layer 3: Secondary gentle flowing contour line */}
        <path
          d="M0,45 C320,10 640,80 960,25 C1200,-15 1360,55 1440,40"
          fill="none"
          stroke={`url(#curve-accent-${position})`}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Layer 4: Subtle dashed technical harmonic curve */}
        <path
          d="M0,58 C340,24 660,92 980,38 C1210,0 1370,68 1440,54"
          fill="none"
          stroke={accentColor}
          strokeWidth="1"
          strokeDasharray="4 6"
          strokeOpacity="0.18"
        />
      </svg>
    </div>
  );
}

/**
 * Ambient background curves, organic gradient auras, and engineering isocurve flow lines.
 * Provides rich atmospheric depth behind cards while maintaining full content readability.
 */
export function AmbientProjectCurves() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Soft oversized organic background blobs */}
      <div className="absolute -left-32 top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-[#4263CC]/10 via-[#818CF8]/5 to-transparent blur-3xl" />
      <div className="absolute -right-28 top-1/3 h-[580px] w-[580px] rounded-full bg-gradient-to-bl from-[#10B981]/8 via-[#38BDF8]/5 to-transparent blur-3xl" />
      <div className="absolute left-1/4 bottom-20 h-[440px] w-[440px] rounded-full bg-gradient-to-br from-[#F59E0B]/7 via-[#FEF3C7]/15 to-transparent blur-3xl" />

      {/* Elegant SVG topological / architectural isocurves */}
      <svg
        viewBox="0 0 1600 1200"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-[0.28]"
      >
        <defs>
          <linearGradient id="iso-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4263CC" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="iso-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D97706" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#4263CC" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Flow line 1 */}
        <path
          d="M-100,220 C240,160 520,380 880,310 C1240,240 1480,440 1720,380"
          stroke="url(#iso-grad-1)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />

        {/* Flow line 2 */}
        <path
          d="M-80,380 C280,310 560,560 960,480 C1320,400 1520,620 1750,560"
          stroke="url(#iso-grad-1)"
          strokeWidth="1.2"
        />

        {/* Flow line 3 */}
        <path
          d="M-100,600 C320,520 620,780 1020,700 C1380,620 1560,820 1780,760"
          stroke="url(#iso-grad-2)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />

        {/* Flow line 4 */}
        <path
          d="M-60,780 C360,700 680,960 1080,880 C1420,800 1600,1020 1820,950"
          stroke="url(#iso-grad-2)"
          strokeWidth="1"
        />

        {/* Flow line 5 */}
        <path
          d="M-100,980 C400,910 740,1140 1140,1060 C1460,990 1660,1180 1860,1120"
          stroke="url(#iso-grad-1)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />

        {/* Layered concentric organic curve rings */}
        <g opacity="0.45" stroke="#4263CC" strokeWidth="1">
          <ellipse cx="1450" cy="280" rx="220" ry="140" strokeDasharray="3 4" />
          <ellipse cx="1450" cy="280" rx="340" ry="210" strokeOpacity="0.6" />
          <ellipse cx="1450" cy="280" rx="460" ry="280" strokeDasharray="6 6" strokeOpacity="0.4" />
        </g>

        <g opacity="0.35" stroke="#059669" strokeWidth="1">
          <ellipse cx="120" cy="850" rx="240" ry="160" strokeDasharray="4 5" />
          <ellipse cx="120" cy="850" rx="380" ry="240" strokeOpacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Curved SVG edge separating the project image/artwork container and the card body.
 * Creates an organic, tactile wave transition instead of a blunt straight horizontal split.
 */
export function CurvedCardEdge({
  accentColor = '#4263CC',
  className = '',
}: {
  accentColor?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none relative -mt-3.5 w-full overflow-hidden leading-none z-10 ${className}`}
      style={{ height: '18px' }}
    >
      <svg viewBox="0 0 400 24" preserveAspectRatio="none" className="h-full w-full">
        {/* Soft fill matching card white interior */}
        <path
          d="M0,14 C120,4 280,24 400,10 L400,24 L0,24 Z"
          fill="#FFFFFF"
        />
        {/* Subtle accent hairline tracing the curve */}
        <path
          d="M0,14 C120,4 280,24 400,10"
          fill="none"
          stroke={accentColor}
          strokeWidth="1.5"
          strokeOpacity="0.25"
        />
      </svg>
    </div>
  );
}

/**
 * Refined profile portrait container with an organic asymmetrical curved shape,
 * layered ambient glow, and verified status indicator.
 */
export function CurvedProfileFrame({
  src,
  alt = 'Alfin Tom George',
  size = 'md',
  className = '',
}: {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const sizeClasses = {
    sm: 'w-20 h-20 sm:w-24 sm:h-24',
    md: 'w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44',
    lg: 'w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64',
  }[size];

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Ambient background glow ring */}
      <div
        aria-hidden
        className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#4263CC]/25 via-[#6366F1]/20 to-[#10B981]/20 blur-xl opacity-80"
      />

      {/* Layered curved outline container */}
      <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-[#4263CC] via-white/80 to-[#10B981]/60 shadow-lg shadow-[#4263CC]/10">
        <div
          className={`relative overflow-hidden rounded-[22px] bg-[#EEF2FF] ${sizeClasses}`}
        >
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            loading="eager"
          />

          {/* Soft inner vignette gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#24262D]/20 via-transparent to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
