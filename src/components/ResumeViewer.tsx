import { education, profile, projects, skillCategories } from '../data/portfolio';
import { SectionHeading } from './fx';

export default function ResumeSection({ onView }: { onView: () => void }) {
  return (
    <section id="resume" className="py-20 md:py-28 bg-[#F8F7F4] border-t border-[#E7E5E0]">
      <SectionHeading
        kicker="Curriculum Vitae"
        title="Resume & Credentials"
        subtitle="Download the official resume document or view the structured overview below."
      />

      <div className="gutter grid gap-10 lg:grid-cols-[1fr_340px] items-start">
        {/* Formatted Sheet Card */}
        <div className="overflow-hidden rounded-2xl border border-[#E7E5E0] bg-white p-6 sm:p-10 shadow-xs">
          <ResumeContent />
        </div>

        {/* Action Sidebar */}
        <div className="sticky top-28 space-y-4 rounded-2xl border border-[#E7E5E0] bg-white p-6 shadow-xs">
          <h3 className="font-display text-lg font-bold text-[#24262D]">Official Resume Document</h3>
          <p className="text-xs leading-relaxed text-[#606575]">
            The verified resume provided in original Microsoft Word (.docx) format containing complete academic credentials and project summaries.
          </p>

          <div className="pt-2 space-y-2.5">
            <a
              href={profile.resumeFile}
              download={profile.resumeFileName}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4263CC] px-5 py-3 text-sm font-semibold text-white shadow-xs transition hover:bg-[#314BB3]"
            >
              <span>Download {profile.resumeFileName}</span>
              <span aria-hidden>⤓</span>
            </a>

            <button
              type="button"
              onClick={onView}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E7E5E0] bg-white px-5 py-3 text-sm font-semibold text-[#24262D] shadow-2xs transition hover:border-[#4263CC] hover:text-[#4263CC]"
            >
              <span>View Full Screen Modal</span>
              <span aria-hidden>↗</span>
            </button>
          </div>

          <div className="rounded-xl bg-[#F8F7F4] p-4 text-xs text-[#606575] space-y-1.5 border border-[#EFECE6]">
            <div className="flex justify-between">
              <span className="font-medium text-[#8A90A2]">File format:</span>
              <span className="font-mono font-semibold text-[#24262D]">DOCX (Original)</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-[#8A90A2]">Status:</span>
              <span className="font-semibold text-[#10B981]">Verified 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-[#8A90A2]">Candidate:</span>
              <span className="font-semibold text-[#24262D]">Alfin Tom George</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ResumeContent() {
  return (
    <article className="space-y-8 font-sans text-[#24262D]">
      {/* Header */}
      <header className="border-b border-[#E7E5E0] pb-6">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{profile.fullName}</h2>
        <p className="mt-1 text-sm font-semibold text-[#4263CC]">{profile.role}</p>
        <p className="mt-2 text-xs text-[#606575]">
          {profile.location} · {profile.phone} ·{' '}
          <a href={`mailto:${profile.email}`} className="text-[#4263CC] hover:underline">
            {profile.email}
          </a>
        </p>
      </header>

      {/* Summary */}
      <section>
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#4263CC] border-b border-[#E7E5E0] pb-1">
          Professional Summary
        </h3>
        <p className="mt-3 text-xs leading-relaxed text-[#606575] sm:text-sm">
          Computer Science undergraduate who builds AI-powered web apps with Python, FastAPI, React/Next.js and LLM APIs like Gemini and Claude. Contributed to team hackathon builds and independent prototypes, and helps organize events with PyData Indore. Seeking a software or AI/ML internship to contribute to real engineering teams and learn production development practices.
        </p>
      </section>

      {/* Education */}
      <section>
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#4263CC] border-b border-[#E7E5E0] pb-1">
          Education
        </h3>
        <div className="mt-3">
          <div className="flex flex-wrap items-baseline justify-between gap-1">
            <h4 className="text-sm font-bold text-[#24262D]">{education[0].school}</h4>
            <span className="text-xs font-mono text-[#8A90A2]">{education[0].period}</span>
          </div>
          <p className="text-xs text-[#606575]">{education[0].degree} — {education[0].place}</p>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#4263CC] border-b border-[#E7E5E0] pb-1">
          Technical Skills
        </h3>
        <div className="mt-3 space-y-2 text-xs leading-relaxed">
          {skillCategories.map((cat) => (
            <p key={cat.id}>
              <strong className="text-[#24262D]">{cat.title}:</strong>{' '}
              <span className="text-[#606575]">{cat.skills.map((s) => s.name).join(', ')}</span>
            </p>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#4263CC] border-b border-[#E7E5E0] pb-1">
          Key Projects
        </h3>
        <div className="mt-3 space-y-4">
          {projects.map((proj) => (
            <div key={proj.id} className="text-xs">
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h4 className="text-xs font-bold text-[#24262D]">
                  {proj.title} <span className="font-normal text-[#8A90A2]">({proj.subtitle})</span>
                </h4>
                <span className="text-[11px] text-[#4263CC] font-semibold">{proj.role}</span>
              </div>
              <p className="mt-1 text-[#606575] leading-relaxed">{proj.logline}</p>
              <p className="mt-1 font-mono text-[11px] text-[#8A90A2]">
                Stack: {proj.stack.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
