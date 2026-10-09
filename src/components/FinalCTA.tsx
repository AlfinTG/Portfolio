import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { Wordmark } from './Poster';
import { EASE, Magnetic, Particles } from './fx';

import { CurvedSectionDivider } from './Curves';

export default function FinalCTA({ onReplay }: { onReplay: () => void }) {
  const { scrollTo } = useSmoothScroll();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <div className="relative">
      <CurvedSectionDivider position="top" fillColor="#F8F7F4" accentColor="#4263CC" />

      <section id="contact" className="relative overflow-hidden bg-[#F8F7F4] py-20 md:py-28">
      {/* Soft ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_40%,rgba(66,99,204,0.08),transparent_70%)]"
      />
      <Particles count={24} color="66,99,204" className="opacity-30" />

      <div className="gutter relative z-10 mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-3.5 py-1 text-xs font-semibold text-[#4263CC]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#4263CC]" />
          <span>Get in Touch</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold tracking-tight text-[#24262D]"
        >
          Have an interesting idea or opportunity? Let's talk.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#606575] sm:text-lg"
        >
          I am currently seeking a software engineering or AI-focused internship. Whether you have a project to collaborate on or an opening on your team, I'd love to hear from you.
        </motion.p>

        {/* Contact actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
        >
          <Magnetic>
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Internship Opportunity / Project Inquiry")}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#4263CC] px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#4263CC]/20 transition hover:bg-[#314BB3] hover:shadow-lg focus-ring"
            >
              <span>Send an Email</span>
              <span aria-hidden>✉</span>
            </a>
          </Magnetic>

          <Magnetic>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-xl border border-[#E7E5E0] bg-white px-5 py-3.5 text-sm font-semibold text-[#24262D] shadow-2xs transition hover:border-[#4263CC] hover:text-[#4263CC] focus-ring"
            >
              <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
              <span aria-hidden>{copied ? '✓' : '📋'}</span>
            </button>
          </Magnetic>
        </motion.div>

        {/* Channels Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="mt-12 grid gap-4 sm:grid-cols-3 text-left"
        >
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-[#E7E5E0] bg-white p-4 shadow-2xs transition hover:border-[#0A66C2] hover:shadow-xs group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#0A66C2]">
              in
            </div>
            <div>
              <p className="text-xs font-bold text-[#24262D] group-hover:text-[#0A66C2]">LinkedIn</p>
              <p className="text-[11px] text-[#606575]">/in/alfin-tom-george</p>
            </div>
          </a>

          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-[#E7E5E0] bg-white p-4 shadow-2xs transition hover:border-[#24262D] hover:shadow-xs group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F8F7F4] text-[#24262D]">
              gh
            </div>
            <div>
              <p className="text-xs font-bold text-[#24262D]">GitHub</p>
              <p className="text-[11px] text-[#606575]">@AlfinTG</p>
            </div>
          </a>

          <div className="flex items-center gap-3 rounded-xl border border-[#E7E5E0] bg-white p-4 shadow-2xs">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FEF3C7] text-[#D97706]">
              📍
            </div>
            <div>
              <p className="text-xs font-bold text-[#24262D]">Location</p>
              <p className="text-[11px] text-[#606575]">Indore, India</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation utilities */}
        <div className="mt-14 flex items-center justify-center gap-6 text-xs font-semibold text-[#8A90A2]">
          <button
            type="button"
            onClick={() => scrollTo(0, { offset: 0 })}
            className="transition hover:text-[#4263CC]"
          >
            ↑ Back to Top
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={onReplay}
            className="transition hover:text-[#4263CC]"
          >
            ↺ Replay Intro
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-[#E7E5E0] pt-8 text-xs text-[#8A90A2]">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <Wordmark className="text-lg" />
            <p>
              © {new Date().getFullYear()} {profile.fullName}. Designed & developed with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-[11px] text-[#B0B5C4]">
              Indore, MP, India
            </p>
          </div>
        </footer>
      </div>
    </section>
  </div>
);
}
