import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { skillCategories, type Skill } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

export default function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = skillCategories[activeCategoryIndex];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F8F7F4]">
      <SectionHeading
        kicker="Capabilities"
        title="Technical Skills"
        subtitle="Organized by genuine project application and continuous hands-on learning. Hover or tap any skill to see where it was used."
      />

      <div className="gutter grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
        {/* Category Selector Tabs */}
        <div className="rail -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:px-0" role="tablist" aria-label="Skill categories">
          {skillCategories.map((category, index) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={index === activeCategoryIndex}
              onClick={() => setActiveCategoryIndex(index)}
              className={`group relative shrink-0 rounded-xl p-3.5 text-left transition lg:w-full border ${
                index === activeCategoryIndex
                  ? 'bg-white border-[#4263CC] shadow-xs'
                  : 'bg-white/60 border-[#E7E5E0] hover:bg-white hover:border-[#D3D6DF]'
              }`}
            >
              {index === activeCategoryIndex && (
                <motion.span
                  layoutId="skill-active-indicator"
                  className="absolute bottom-2 left-0 top-2 hidden w-1 rounded-r bg-[#4263CC] lg:block"
                  transition={{ duration: 0.35, ease: EASE }}
                />
              )}
              <div className="flex items-center justify-between">
                <span
                  className={`block font-display text-sm font-bold ${
                    index === activeCategoryIndex ? 'text-[#4263CC]' : 'text-[#24262D]'
                  }`}
                >
                  {category.title}
                </span>
                <span className="text-[11px] font-mono font-medium text-[#8A90A2]">
                  {category.skills.length}
                </span>
              </div>
              <span className="mt-0.5 block text-xs text-[#606575] line-clamp-1">
                {category.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* Skill Cards Display */}
        <div className="min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="space-y-4"
            >
              <div className="rounded-xl border border-[#E7E5E0] bg-white p-4 text-xs text-[#606575] shadow-2xs">
                <span className="font-semibold text-[#24262D]">{activeCategory.title}:</span>{' '}
                {activeCategory.description}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {activeCategory.skills.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SkillItem({ skill }: { skill: Skill }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.button
      type="button"
      onHoverStart={() => setExpanded(true)}
      onHoverEnd={() => setExpanded(false)}
      onClick={() => setExpanded((prev) => !prev)}
      whileHover={{ y: -3 }}
      className={`relative flex min-h-[110px] flex-col justify-between overflow-hidden rounded-xl border p-4 text-left transition duration-300 shadow-2xs ${
        expanded
          ? 'border-[#4263CC] bg-white shadow-md'
          : 'border-[#E7E5E0] bg-white hover:border-[#CBD5E1]'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF] font-mono text-xs font-bold text-[#4263CC]">
          {skill.mono}
        </span>
        <span className="rounded-full bg-[#F8F7F4] px-2 py-0.5 text-[10px] font-medium text-[#8A90A2]">
          {expanded ? 'context' : 'tap for usage'}
        </span>
      </div>

      <div className="mt-3">
        <p className="font-display text-sm font-bold text-[#24262D]">{skill.name}</p>
        <p
          className={`mt-1 text-xs leading-relaxed text-[#606575] transition-all duration-300 ${
            expanded ? 'text-[#24262D] font-medium' : 'line-clamp-1 opacity-80'
          }`}
        >
          {skill.context}
        </p>
      </div>
    </motion.button>
  );
}
