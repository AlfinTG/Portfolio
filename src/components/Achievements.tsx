import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-[#F8F7F4] border-t border-[#E7E5E0]">
      <SectionHeading
        kicker="Credentials & Honors"
        title="Education & Achievements"
        subtitle="Competitions, hackathon challenges, and technical certifications."
      />

      <div className="gutter space-y-12">
        {/* Achievements Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
            >
              <Tilt max={4} className="h-full">
                <article className="flex h-full flex-col justify-between rounded-2xl border border-[#E7E5E0] bg-white p-6 shadow-xs transition duration-300 hover:border-[#D9A15B]/60 hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-bold text-[#D97706]">
                        {ach.badge}
                      </span>
                      <span className="text-xs font-mono text-[#8A90A2]">{ach.year}</span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold text-[#24262D]">{ach.title}</h3>
                    <p className="mt-1 text-xs font-semibold text-[#D9A15B]">{ach.event}</p>
                    <p className="mt-3 text-xs leading-relaxed text-[#606575]">{ach.description}</p>
                  </div>
                </article>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Certifications and Coursework Grid */}
        <div className="rounded-2xl border border-[#E7E5E0] bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E7E5E0] pb-4">
            <div>
              <h3 className="font-display text-lg font-bold text-[#24262D]">Verified Courses & Certifications</h3>
              <p className="text-xs text-[#8A90A2]">Formal industry learning and in-progress coursework</p>
            </div>
            <span className="rounded-full bg-[#F8F7F4] px-3 py-1 text-xs font-medium text-[#606575]">
              {certifications.length} Credentials
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col justify-between rounded-xl border border-[#E7E5E0] bg-[#F8F7F4]/60 p-4 transition hover:bg-white hover:border-[#CBD5E1]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#4263CC]">
                      {cert.issuer}
                    </span>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase ${
                        cert.status === 'Completed'
                          ? 'bg-[#ECFDF5] text-[#059669]'
                          : 'bg-[#FEF3C7] text-[#D97706]'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                  <h4 className="mt-3 font-display text-sm font-bold text-[#24262D]">{cert.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
