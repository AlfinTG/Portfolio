import { createContext, useCallback, useContext, useEffect, useRef, type ReactNode } from 'react';
import Lenis from 'lenis';
import { useFinePointer, useReducedMotionPref } from './useMedia';

type ScrollApi = {
  scrollTo: (target: string | HTMLElement | number, opts?: { offset?: number; immediate?: boolean }) => void;
  lock: () => void;
  unlock: () => void;
};

const ScrollCtx = createContext<ScrollApi | null>(null);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotionPref();
  const fine = useFinePointer();
  const lenisRef = useRef<Lenis | null>(null);
  const locks = useRef(0);

  useEffect(() => {
    // Only run Lenis smooth wheel on desktop pointer devices without reduced motion
    // On mobile touchscreens, native inertia touch scrolling runs at hardware 120Hz without JS thread competition
    if (reduced || !fine) return;
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: false,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced, fine]);

  const scrollTo = useCallback<ScrollApi['scrollTo']>((target, opts = {}) => {
    const offset = opts.offset ?? -72;

    if (typeof target === 'number') {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset, immediate: opts.immediate, duration: 1.2 });
      } else {
        window.scrollTo({ top: target + offset, behavior: opts.immediate ? 'auto' : 'smooth' });
      }
      return;
    }

    let el: HTMLElement | null = null;
    if (typeof target === 'string') {
      const clean = target.replace(/^#/, '');
      el = document.getElementById(clean) ?? document.querySelector<HTMLElement>(target);
    } else {
      el = target;
    }

    if (!el) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset, immediate: opts.immediate, duration: 1.2 });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: opts.immediate ? 'auto' : 'smooth' });
    }
  }, []);

  const lock = useCallback(() => {
    locks.current += 1;
    lenisRef.current?.stop();
    document.documentElement.style.overflow = 'hidden';
  }, []);

  const unlock = useCallback(() => {
    locks.current = Math.max(0, locks.current - 1);
    if (locks.current === 0) {
      lenisRef.current?.start();
      document.documentElement.style.overflow = '';
    }
  }, []);

  return <ScrollCtx.Provider value={{ scrollTo, lock, unlock }}>{children}</ScrollCtx.Provider>;
}

export function useSmoothScroll() {
  const ctx = useContext(ScrollCtx);
  if (!ctx) throw new Error('useSmoothScroll must be used inside SmoothScrollProvider');
  return ctx;
}

/** Locks page scroll while `active` is true (used by overlays). */
export function useScrollLock(active: boolean) {
  const { lock, unlock } = useSmoothScroll();
  useEffect(() => {
    if (!active) return;
    lock();
    return unlock;
  }, [active, lock, unlock]);
}
