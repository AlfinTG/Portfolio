import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#F8F7F4] border-t border-[#E7E5E0]">
      <SectionHeading
        kicker="Leadership & Community"
        title="Experience & Involvement"
        subtitle="Active contributions to developer communities, hackathon leadership, and technical collaboration."
      />

      <div className="gutter space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
              className="flex flex-col justify-between rounded-2xl border border-[#E7E5E0] bg-white p-7 shadow-xs hover:border-[#CBD5E1] transition duration-300"
            >
              <div>
                {/* Header with Role and Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E7E5E0] pb-4">
                  <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#4263CC]">
                    {exp.badge}
                  </span>
                  <span className="text-xs font-mono text-[#8A90A2]">{exp.period}</span>
                </div>

                {/* Role Title and Organization */}
                <div className="mt-4">
                  <h3 className="font-display text-xl font-bold text-[#24262D]">{exp.role}</h3>
                  <p className="text-sm font-semibold text-[#4263CC]">{exp.organization}</p>
                </div>

                {/* Summary */}
                <p className="mt-3 text-sm leading-relaxed text-[#606575]">{exp.summary}</p>

                {/* Bullets */}
                <ul className="mt-5 space-y-2.5">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-xs leading-relaxed text-[#24262D]">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4263CC]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E7E5E0] text-[11px] text-[#8A90A2]">
                Verified by resume and event contribution history
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
