import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE } from './fx';
import { Wordmark } from './Poster';

export default function OpeningSequence({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotionPref();
  const [step, setStep] = useState(reduced ? 3 : 0);

  useEffect(() => {
    if (reduced) {
      onDone();
      return;
    }

    const t1 = window.setTimeout(() => setStep(1), 200);
    const t2 = window.setTimeout(() => setStep(2), 700);
    const t3 = window.setTimeout(() => setStep(3), 1300);
    const t4 = window.setTimeout(() => onDone(), 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [reduced, onDone]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') onDone();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDone]);

  return (
    <motion.div
      onClick={onDone}
      className="cursor-pointer fixed inset-0 z-[120] flex flex-col items-center justify-center overflow-hidden bg-[#F8F7F4] px-6 text-center select-none"
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: EASE }}
      role="dialog"
      aria-label="Opening introduction"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_50%,rgba(66,99,204,0.10),transparent_70%)]"
      />

      {/* Skip button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onDone();
        }}
        className="absolute right-6 top-6 z-40 rounded-full border border-[#E7E5E0] bg-white/80 px-4 py-1.5 font-sans text-xs font-semibold text-[#606575] shadow-sm backdrop-blur transition hover:border-[#4263CC] hover:text-[#4263CC]"
      >
        Skip intro <span aria-hidden>→</span>
      </button>

      <div className="relative z-10 max-w-xl">
        {/* Subtle pill status */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={step >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E7E5E0] bg-white px-3.5 py-1 text-xs font-medium text-[#606575] shadow-xs"
        >
          <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>Computer Science · AITR Indore</span>
        </motion.div>

        {/* Name reveal */}
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[clamp(2.8rem,8vw,5.5rem)] font-extrabold tracking-tight text-[#24262D]"
            initial={{ y: '100%', opacity: 0 }}
            animate={step >= 1 ? { y: '0%', opacity: 1 } : {}}
            transition={{ duration: 0.65, ease: EASE }}
          >
            {profile.fullName}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="mt-3 font-sans text-base text-[#606575] sm:text-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={step >= 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
        >
          AI Engineering · Python Backend · Practical Software
        </motion.p>

        {/* Progress indicator */}
        <motion.div
          className="mx-auto mt-8 h-1 w-36 overflow-hidden rounded-full bg-[#E7E5E0]"
          initial={{ opacity: 0 }}
          animate={step >= 1 ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="h-full bg-[#4263CC]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Enter CTA */}
        <motion.div
          className="mt-8 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={step >= 3 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <button
            type="button"
            onClick={onDone}
            className="inline-flex items-center gap-2 rounded-xl bg-[#4263CC] px-6 py-3 font-sans text-sm font-semibold text-white shadow-md shadow-[#4263CC]/20 transition hover:bg-[#314BB3] hover:shadow-lg active:scale-95"
          >
            <span>Explore Portfolio</span>
            <span aria-hidden>→</span>
          </button>
          <span className="mt-3 text-[11px] font-medium text-[#8A90A2] sm:hidden">
            Tap anywhere to enter
          </span>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-6 text-xs text-[#8A90A2]">
        <Wordmark />
      </div>
    </motion.div>
  );
}
