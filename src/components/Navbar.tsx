import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { navigationSections, profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { Wordmark } from './Poster';
import { EASE } from './fx';

export default function Navbar({ onResume }: { onResume: () => void }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>('top');
  const { scrollTo } = useSmoothScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 30);
    setHidden(y > 450 && y > prev && !mobileOpen);
  });

  useEffect(() => {
    const ids = ['top', ...navigationSections.map((s) => s.id), 'contact'];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-35% 0px -45% 0px' },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  const navigateTo = (id: string) => {
    setMobileOpen(false);
    scrollTo(id === 'top' ? 0 : `#${id}`, { offset: id === 'top' ? 0 : -80 });
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[60]"
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      <div
        className={`gutter flex h-16 items-center justify-between transition-all duration-300 md:h-20 ${
          scrolled || mobileOpen
            ? 'border-b border-[#E7E5E0] bg-[#F8F7F4]/85 shadow-xs backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        {/* Brand wordmark with authentic photo avatar */}
        <button
          type="button"
          onClick={() => navigateTo('top')}
          className="group flex items-center gap-2.5 rounded-full focus-ring p-1 -ml-1 transition"
          aria-label="Alfin Tom George - back to top"
        >
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-[#4263CC]/30 bg-[#EEF2FF] shadow-2xs transition-transform duration-300 group-hover:scale-105">
            <img
              src={profile.avatarThumb}
              alt={profile.fullName}
              className="h-full w-full object-cover object-top"
              loading="eager"
            />
          </div>
          <Wordmark className="text-2xl" />
        </button>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-1 rounded-full border border-[#E7E5E0] bg-white/70 p-1.5 shadow-xs backdrop-blur md:flex" aria-label="Main Navigation">
          <NavLink label="Home" active={active === 'top'} onClick={() => navigateTo('top')} />
          {navigationSections.map((s) => (
            <NavLink key={s.id} label={s.label} active={active === s.id} onClick={() => navigateTo(s.id)} />
          ))}
          <NavLink label="Contact" active={active === 'contact'} onClick={() => navigateTo('contact')} />
        </nav>

        {/* Resume button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onResume}
            className="hidden items-center gap-2 rounded-full bg-[#4263CC] px-4 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-[#314BB3] sm:inline-flex"
          >
            <span>Resume</span>
            <span className="text-[10px] opacity-80" aria-hidden>⤓</span>
          </button>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#E7E5E0] bg-white text-[#24262D] md:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <motion.span
              className="block h-0.5 w-4 bg-[#24262D]"
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-4 bg-[#24262D]"
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-4 bg-[#24262D]"
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -4 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            aria-label="Mobile Navigation"
            className="gutter border-b border-[#E7E5E0] bg-[#F8F7F4]/98 py-6 shadow-xl backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="flex flex-col space-y-3">
              <button
                type="button"
                onClick={() => navigateTo('top')}
                className={`py-2 text-left font-display text-xl font-semibold ${
                  active === 'top' ? 'text-[#4263CC]' : 'text-[#24262D]'
                }`}
              >
                Home
              </button>
              {navigationSections.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => navigateTo(s.id)}
                  className={`py-2 text-left font-display text-xl font-semibold ${
                    active === s.id ? 'text-[#4263CC]' : 'text-[#24262D]'
                  }`}
                >
                  {s.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => navigateTo('contact')}
                className={`py-2 text-left font-display text-xl font-semibold ${
                  active === 'contact' ? 'text-[#4263CC]' : 'text-[#24262D]'
                }`}
              >
                Contact
              </button>

              <div className="pt-4 border-t border-[#E7E5E0]">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#4263CC] py-3 text-sm font-semibold text-white shadow-xs"
                >
                  <span>View Resume</span>
                  <span aria-hidden>⤓</span>
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
        active ? 'text-[#4263CC]' : 'text-[#606575] hover:text-[#24262D]'
      }`}
    >
      {active && (
        <motion.span
          layoutId="nav-active-pill"
          className="absolute inset-0 rounded-full bg-[#EEF2FF] border border-[#C7D2FE]"
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );
}
