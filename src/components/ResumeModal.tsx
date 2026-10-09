import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { ResumeContent } from './ResumeViewer';

export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex items-center justify-center p-0 sm:p-4 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Modal"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#24262D]/60 backdrop-blur-md" onClick={onClose} />

      {/* Modal Container */}
      <motion.div
        className="relative z-10 flex h-full w-full max-w-3xl flex-col bg-white shadow-2xl sm:h-auto sm:max-h-[90vh] sm:rounded-2xl border border-[#E7E5E0] overflow-hidden"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-[#E7E5E0] bg-[#F8F7F4] px-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-bold text-[#24262D]">Official Resume</span>
            <span className="rounded-full bg-[#EEF2FF] px-2 py-0.5 text-[10px] font-mono font-bold text-[#4263CC]">
              DOCX
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeFile}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#4263CC] px-4 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-[#314BB3]"
            >
              <span>Download {profile.resumeFileName}</span>
              <span aria-hidden>⤓</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume modal"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E7E5E0] bg-white text-sm font-semibold text-[#606575] hover:bg-[#F8F7F4] hover:text-[#24262D]"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Content Scroll */}
        <div data-lenis-prevent className="flex-1 overflow-y-auto p-6 sm:p-10">
          <ResumeContent />
        </div>
      </motion.div>
    </motion.div>
  );
}
