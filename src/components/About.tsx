import { motion } from 'framer-motion';
import { education, profile } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { CurvedProfileFrame } from './Curves';

export default function About() {
  const pillars = [
    {
      icon: '⚡',
      title: 'Practical Prototyping',
      text: 'Rather than stopping at theoretical tutorials, I build complete, testable prototypes. When integrating LLMs, I implement schema validation (Zod/Pydantic) and local fallbacks so applications fail gracefully.',
    },
    {
      icon: '🤝',
      title: 'Team Sprints & Hackathons',
      text: 'I thrive in team environments. Led a 4-person team across a 25-day hackathon building the EPC Project Intelligence Platform, aligning API contracts between FastAPI and Next.js under real deadlines.',
    },
    {
      icon: '🌐',
      title: 'Community Contribution',
      text: 'Active volunteer and co-organizer with PyData Indore, helping run mini-hackathons, organizing workshop tracks, and preparing technical quizzes for agentic AI sessions.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F8F7F4] relative overflow-hidden">
      {/* Soft background shape */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#EEF2FF] opacity-60 blur-3xl"
      />

      <SectionHeading
        kicker="Background"
        title="About Me"
        subtitle="A Computer Science undergraduate focused on AI engineering, backend systems, and hands-on learning."
      />

      <div className="gutter grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-start">
        {/* Left Column: Personal Narrative with Genuine Portrait Integration */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="space-y-6"
        >
          <div className="rounded-3xl border border-[#E7E5E0] bg-white p-6 sm:p-8 md:p-9 shadow-xs">
            {/* Header row with Photograph & Identity */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-7 pb-6 border-b border-[#E7E5E0]">
              <CurvedProfileFrame
                src={profile.avatar}
                alt={profile.fullName}
                size="md"
                className="shrink-0 self-start sm:self-auto"
              />

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#10B981]/10 px-3 py-0.5 text-xs font-semibold text-[#059669]">
                    <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                    Available for Internships
                  </span>
                  <span className="text-xs text-[#8A90A2]">·</span>
                  <span className="text-xs font-mono font-medium text-[#606575]">Indore, India</span>
                </div>

                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-[#24262D]">
                  {profile.fullName}
                </h3>
                <p className="text-sm font-semibold text-[#4263CC]">
                  {profile.role} · B.Tech CS (2025–2029)
                </p>
              </div>
            </div>

            {/* Narrative Body */}
            <h4 className="mt-6 font-display text-xl font-bold text-[#24262D]">
              Learning by building, testing, and shipping.
            </h4>
            <p className="mt-4 text-base leading-relaxed text-[#606575]">
              I am currently pursuing my B.Tech in Computer Science at Acropolis Institute of Technology and Research (AITR), Indore (Expected 2029).
              My primary focus is on <strong>Python backend development</strong> and building <strong>AI-powered software applications</strong> that solve practical problems.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#606575]">
              Whether developing an infrastructure monitor that detects duplicate civic reports using GPS clustering (CivicLens), or building document Q&amp;A engines with ChromaDB and sentence-transformer embeddings (Nexus-Data AI), I enjoy understanding how each layer of the stack behaves in practice.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#606575]">
              I am looking for a <strong>software engineering or AI-focused internship</strong> where I can collaborate with experienced mentors, contribute clean code, and learn how production systems are maintained at scale.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-[#E7E5E0]">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full bg-[#EEF2FF] px-3.5 py-1 text-xs font-semibold text-[#4263CC]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Quick stats / facts grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#E7E5E0] bg-white p-4 shadow-2xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A90A2]">Location</span>
              <p className="mt-1 font-display text-lg font-bold text-[#24262D]">Indore, India</p>
              <p className="text-xs text-[#606575]">Madhya Pradesh</p>
            </div>
            <div className="rounded-2xl border border-[#E7E5E0] bg-white p-4 shadow-2xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A90A2]">Graduation</span>
              <p className="mt-1 font-display text-lg font-bold text-[#4263CC]">2029</p>
              <p className="text-xs text-[#606575]">B.Tech Computer Science</p>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-2xl border border-[#E7E5E0] bg-white p-4 shadow-2xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A90A2]">Core Languages</span>
              <p className="mt-1 font-display text-lg font-bold text-[#24262D]">Python · C++</p>
              <p className="text-xs text-[#606575]">Algorithms &amp; Systems</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Key Principles & Education Card */}
        <div className="space-y-5">
          {/* Education Card */}
          <Tilt max={4}>
            <div className="rounded-3xl border border-[#C7D2FE] bg-[#EEF2FF]/60 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#4263CC] shadow-2xs">
                  <span>🎓</span> Education
                </span>
                <span className="text-xs font-mono font-semibold text-[#4263CC]">{education[0].period}</span>
              </div>
              <h4 className="mt-4 font-display text-xl font-bold text-[#24262D]">{education[0].school}</h4>
              <p className="mt-1 text-sm font-semibold text-[#4263CC]">{education[0].degree}</p>
              <p className="mt-3 text-xs leading-relaxed text-[#606575]">{education[0].focus}</p>
            </div>
          </Tilt>

          {/* Pillars */}
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="rounded-2xl border border-[#E7E5E0] bg-white p-5 shadow-2xs transition hover:border-[#D3D6DF]"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8F7F4] text-lg">
                  {pillar.icon}
                </span>
                <div>
                  <h4 className="font-display text-base font-bold text-[#24262D]">{pillar.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#606575]">{pillar.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
