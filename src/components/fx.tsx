import { useEffect, useRef, type ReactNode, type PointerEvent as RPointerEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../hooks/useMedia';

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Wraps a control so it drifts toward the pointer — desktop only. */
export function Magnetic({ children, strength = 0.3, className = '' }: { children: ReactNode; strength?: number; className?: string }) {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const x = useSpring(0, { stiffness: 220, damping: 20 });
  const y = useSpring(0, { stiffness: 220, damping: 20 });
  const active = fine && !reduced;

  const onMove = (e: RPointerEvent<HTMLSpanElement>) => {
    if (!active) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span className={`inline-flex ${className}`} style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.span>
  );
}

/** Subtle 3D tilt that follows the pointer by a few degrees. Flat on touch devices. */
export function Tilt({
  children,
  max = 5,
  className = '',
  glare = true,
  ...rest
}: { children: ReactNode; max?: number; className?: string; glare?: boolean } & Omit<HTMLMotionProps<'div'>, 'children'>) {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const active = fine && !reduced;
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 180, damping: 22 });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 180, damping: 22 });
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glareBg = useTransform([gx, gy], ([a, b]) => `radial-gradient(circle at ${a} ${b}, rgba(66,99,204,0.06), transparent 60%)`);

  return (
    <motion.div
      {...rest}
      className={`relative [transform-style:preserve-3d] ${className}`}
      style={active ? { rotateX: rx, rotateY: ry, transformPerspective: 1000, ...(rest.style as object) } : rest.style}
      onPointerMove={(e) => {
        if (!active) return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
    >
      {children}
      {active && glare && (
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] mix-blend-multiply" style={{ background: glareBg }} />
      )}
    </motion.div>
  );
}

/** Word-by-word blur-to-focus reveal for headings. */
export function RevealText({ text, className = '', delay = 0, as = 'span' }: { text: string; className?: string; delay?: number; as?: 'span' | 'h2' | 'h3' | 'p' }) {
  const Tag = motion[as];
  const words = text.split(' ');
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-4% 0px' }}
      transition={{ staggerChildren: 0.05, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '105%', opacity: 0, filter: 'blur(6px)' },
              show: { y: '0%', opacity: 1, filter: 'blur(0px)', transition: { duration: 0.85, ease: EASE } },
            }}
          >
            {w}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Section heading with eyebrow kicker, main title, and optional aside. */
export function SectionHeading({
  kicker,
  title,
  subtitle,
  aside,
  className = '',
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`gutter mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-12 ${className}`}>
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-2.5 inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4263CC]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#4263CC]" />
          {kicker}
        </motion.div>
        <RevealText as="h2" text={title} className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold tracking-tight text-[#24262D]" />
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="mt-2 text-sm leading-relaxed text-[#606575] sm:text-base"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      {aside && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="self-end"
        >
          {aside}
        </motion.div>
      )}
    </div>
  );
}

/** Lightweight drifting dust particles on a canvas — pauses when off screen. */
export function Particles({ count = 32, color = '66,99,204', className = '' }: { count?: number; color?: string; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotionPref();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || reduced) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const dots = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.0001,
      vy: -Math.random() * 0.00022 - 0.00004,
      a: Math.random() * 0.4 + 0.08,
      tw: Math.random() * Math.PI * 2,
    }));

    let raf = 0;
    let running = false;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx * dt;
        d.y += d.vy * dt;
        d.tw += dt * 0.002;
        if (d.y < -0.02) {
          d.y = 1.02;
          d.x = Math.random();
        }
        if (d.x < -0.02) d.x = 1.02;
        if (d.x > 1.02) d.x = -0.02;
        const alpha = d.a * (0.6 + 0.4 * Math.sin(d.tw));
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color},${alpha})`;
        ctx.arc(d.x * w, d.y * h, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(canvas);
    return () => {
      io.disconnect();
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [count, color, reduced]);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}
