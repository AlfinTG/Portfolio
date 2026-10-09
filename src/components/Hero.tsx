import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useFinePointer } from '../hooks/useMedia';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles, Tilt } from './fx';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: EASE } },
};

export default function Hero({ onResume }: { onResume: () => void }) {
  const fine = useFinePointer();
  const { scrollTo } = useSmoothScroll();
  const [activeTab, setActiveTab] = useState<'architecture' | 'rag' | 'status'>('architecture');

  // Interactive mouse parallax for desktop
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 50, damping: 20 });
  const py = useSpring(my, { stiffness: 50, damping: 20 });
  const cardShiftX = useTransform(px, [-1, 1], [-8, 8]);
  const cardShiftY = useTransform(py, [-1, 1], [-8, 8]);
  const badge1X = useTransform(px, [-1, 1], [14, -14]);
  const badge1Y = useTransform(py, [-1, 1], [12, -12]);
  const badge2X = useTransform(px, [-1, 1], [-16, 16]);
  const badge2Y = useTransform(py, [-1, 1], [-10, 10]);

  return (
    <section
      id="top"
      className="relative min-h-[92svh] overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
      onPointerMove={(e) => {
        if (!fine) return;
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      {/* Ambient background glows & flowing organic curve paths */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-[#EEF2FF] opacity-70 blur-3xl" />
        <div className="absolute -right-20 top-40 h-[480px] w-[480px] rounded-full bg-[#F5F3FF] opacity-60 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-[#FEF3C7] opacity-40 blur-3xl" />

        {/* Subtle flowing SVG architectural curve */}
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-30"
        >
          <path
            d="M-40,180 C320,80 640,320 1020,160 C1280,40 1380,240 1480,180"
            stroke="#4263CC"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <path
            d="M-20,340 C380,220 720,440 1100,280 C1320,180 1420,380 1500,320"
            stroke="#6366F1"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      <Particles count={28} color="66,99,204" className="z-0 opacity-40" />

      <div className="gutter relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        {/* Left Column: Story & Narrative */}
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          {/* Eyebrow badge */}
          <motion.div variants={item} className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E7E5E0] bg-white px-3.5 py-1 text-xs font-semibold text-[#606575] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              {profile.eyebrow}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.75rem,6.2vw,5rem)] font-extrabold leading-[1.02] tracking-tight text-[#24262D]"
          >
            {profile.headline}
          </motion.h1>

          {/* Supporting Headline */}
          <motion.p
            variants={item}
            className="mt-3 font-display text-[clamp(1.25rem,2.8vw,1.9rem)] font-semibold leading-snug text-[#4263CC]"
          >
            {profile.supportingHeadline}
          </motion.p>

          {/* Description */}
          <motion.p variants={item} className="mt-5 text-base leading-relaxed text-[#606575] sm:text-lg">
            {profile.intro}
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Magnetic>
              <button
                type="button"
                onClick={() => scrollTo('#projects', { offset: -80 })}
                className="inline-flex items-center gap-2 rounded-xl bg-[#4263CC] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-[#4263CC]/20 transition hover:bg-[#314BB3] hover:shadow-lg focus-ring"
              >
                <span>Explore My Projects</span>
                <span aria-hidden>↓</span>
              </button>
            </Magnetic>

            <Magnetic>
              <button
                type="button"
                onClick={onResume}
                className="inline-flex items-center gap-2 rounded-xl border border-[#E7E5E0] bg-white px-5 py-3.5 text-sm font-semibold text-[#24262D] shadow-2xs transition hover:border-[#4263CC] hover:text-[#4263CC] focus-ring"
              >
                <span>View My Resume</span>
                <span aria-hidden>📄</span>
              </button>
            </Magnetic>
          </motion.div>

          {/* Verified Social and Profile links */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4 pt-6 border-t border-[#E7E5E0]">
            <span className="text-xs font-medium uppercase tracking-wider text-[#8A90A2]">Connect:</span>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#24262D] border border-[#E7E5E0] shadow-2xs transition hover:border-[#24262D]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#24262D] border border-[#E7E5E0] shadow-2xs transition hover:border-[#0A66C2] hover:text-[#0A66C2]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#24262D] border border-[#E7E5E0] shadow-2xs transition hover:border-[#4263CC] hover:text-[#4263CC]"
            >
              <span>✉</span>
              <span>{profile.email}</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Architectural Terminal & Project Visualizer */}
        <div className="relative">
          <Tilt max={6} className="relative z-10">
            <motion.div
              style={{ x: cardShiftX, y: cardShiftY }}
              className="overflow-hidden rounded-2xl border border-[#E7E5E0] bg-white shadow-xl"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-[#E7E5E0] bg-[#F8F7F4] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#EF4444]" />
                  <span className="h-3 w-3 rounded-full bg-[#F59E0B]" />
                  <span className="h-3 w-3 rounded-full bg-[#10B981]" />
                </div>

                {/* Interactive Tabs */}
                <div className="flex items-center gap-1 rounded-lg bg-[#EFECE6] p-1 text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setActiveTab('architecture')}
                    className={`rounded-md px-2.5 py-1 transition ${
                      activeTab === 'architecture' ? 'bg-white font-semibold text-[#24262D] shadow-xs' : 'text-[#606575]'
                    }`}
                  >
                    architecture.py
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('rag')}
                    className={`rounded-md px-2.5 py-1 transition ${
                      activeTab === 'rag' ? 'bg-white font-semibold text-[#24262D] shadow-xs' : 'text-[#606575]'
                    }`}
                  >
                    rag_engine.py
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('status')}
                    className={`rounded-md px-2.5 py-1 transition ${
                      activeTab === 'status' ? 'bg-white font-semibold text-[#24262D] shadow-xs' : 'text-[#606575]'
                    }`}
                  >
                    system_status.json
                  </button>
                </div>

                <span className="text-[11px] font-mono font-medium text-[#8A90A2]">python 3.12</span>
              </div>

              {/* Code / Visualizer Body */}
              <div className="p-5 font-mono text-[13px] leading-relaxed text-[#24262D] bg-[#FAFAF9]">
                {activeTab === 'architecture' && (
                  <div className="space-y-1">
                    <p className="text-[#8A90A2]"># Multi-Agent Workflow · FastAPI & LangGraph</p>
                    <p>
                      <span className="text-[#7C3AED]">from</span> fastapi <span className="text-[#7C3AED]">import</span> FastAPI, Depends
                    </p>
                    <p>
                      <span className="text-[#7C3AED]">from</span> langgraph.graph <span className="text-[#7C3AED]">import</span> StateGraph
                    </p>
                    <p>
                      <span className="text-[#7C3AED]">from</span> agents <span className="text-[#7C3AED]">import</span> RAGKnowledgeAgent, ComplianceValidator
                    </p>
                    <p className="pt-2">
                      app = FastAPI(title=<span className="text-[#059669]">"Nexus-Data Intelligence"</span>)
                    </p>
                    <p>workflow = StateGraph(ProjectContext)</p>
                    <p>
                      workflow.add_node(<span className="text-[#059669]">"rag"</span>, RAGKnowledgeAgent())
                    </p>
                    <p>
                      workflow.add_node(<span className="text-[#059669]">"compliance"</span>, ComplianceValidator())
                    </p>
                    <p className="pt-2 text-[#4263CC]">
                      @app.post(<span className="text-[#059669]">"/api/v1/analyze-risks"</span>)
                    </p>
                    <p>
                      <span className="text-[#7C3AED]">async def</span> analyze(doc_id: <span className="text-[#D97706]">str</span>):
                    </p>
                    <p className="pl-4">
                      result = <span className="text-[#7C3AED]">await</span> workflow.execute(doc_id)
                    </p>
                    <p className="pl-4">
                      <span className="text-[#7C3AED]">return</span> &#123;<span className="text-[#059669]">"status"</span>: <span className="text-[#059669]">"verified"</span>, <span className="text-[#059669]">"analysis"</span>: result&#125;
                    </p>
                  </div>
                )}

                {activeTab === 'rag' && (
                  <div className="space-y-1">
                    <p className="text-[#8A90A2]"># Semantic Search & Vector Embeddings</p>
                    <p>
                      <span className="text-[#7C3AED]">import</span> chromadb
                    </p>
                    <p>
                      <span className="text-[#7C3AED]">from</span> sentence_transformers <span className="text-[#7C3AED]">import</span> SentenceTransformer
                    </p>
                    <p className="pt-2">
                      embedder = SentenceTransformer(<span className="text-[#059669]">"all-MiniLM-L6-v2"</span>)
                    </p>
                    <p>
                      client = chromadb.PersistentClient(path=<span className="text-[#059669]">"./chroma_db"</span>)
                    </p>
                    <p>
                      collection = client.get_or_create_collection(<span className="text-[#059669]">"epc_specs"</span>)
                    </p>
                    <p className="pt-2 text-[#4263CC]">
                      <span className="text-[#7C3AED]">def</span> query_knowledge(prompt: <span className="text-[#D97706]">str</span>, top_k: <span className="text-[#D97706]">int</span> = 4):
                    </p>
                    <p className="pl-4">query_vec = embedder.encode(prompt).tolist()</p>
                    <p className="pl-4">
                      matches = collection.query(query_embeddings=[query_vec], n_results=top_k)
                    </p>
                    <p className="pl-4">
                      <span className="text-[#7C3AED]">return</span> format_grounded_citations(matches)
                    </p>
                  </div>
                )}

                {activeTab === 'status' && (
                  <div className="space-y-1">
                    <p className="text-[#8A90A2]">&#47;&#47; Live Profile Telemetry</p>
                    <p>&#123;</p>
                    <p className="pl-4">
                      <span className="text-[#4263CC]">"candidate"</span>: <span className="text-[#059669]">"Alfin Tom George"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#4263CC]">"degree"</span>: <span className="text-[#059669]">"B.Tech Computer Science"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#4263CC]">"institution"</span>: <span className="text-[#059669]">"AITR Indore (2025-2029)"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#4263CC]">"primary_languages"</span>: [<span className="text-[#059669]">"Python"</span>, <span className="text-[#059669]">"C++"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-[#4263CC]">"core_strengths"</span>: [<span className="text-[#059669]">"FastAPI"</span>, <span className="text-[#059669]">"RAG"</span>, <span className="text-[#059669]">"LLM APIs"</span>, <span className="text-[#059669]">"Docker"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-[#4263CC]">"community"</span>: <span className="text-[#059669]">"PyData Indore Co-organizer"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#4263CC]">"seeking"</span>: <span className="text-[#10B981]">"Software / AI Engineering Internship"</span>
                    </p>
                    <p>&#125;</p>
                  </div>
                )}
              </div>

              {/* Status footer inside card */}
              <div className="flex items-center justify-between border-t border-[#E7E5E0] bg-white px-5 py-3 text-xs text-[#606575]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                  <span>Ready for internship opportunities</span>
                </div>
                <span className="font-mono text-[#8A90A2]">Indore, MP</span>
              </div>
            </motion.div>
          </Tilt>

          {/* Floating UI Badges */}
          <motion.div
            style={{ x: badge1X, y: badge1Y }}
            className="absolute -bottom-6 -left-6 z-20 hidden rounded-2xl border border-[#E7E5E0] bg-white/95 p-3 shadow-xl backdrop-blur-md sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-[#4263CC]/30 bg-[#EEF2FF]">
                <img
                  src={profile.avatar}
                  alt={profile.fullName}
                  className="h-full w-full object-cover object-top"
                  loading="eager"
                />
                <span className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full border border-white bg-[#10B981]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#24262D]">Alfin Tom George</p>
                <p className="text-[11px] font-medium text-[#4263CC]">25-Day Hackathon Lead</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ x: badge2X, y: badge2Y }}
            className="absolute -right-6 -top-6 z-20 hidden rounded-xl border border-[#E7E5E0] bg-white/95 p-3.5 shadow-lg backdrop-blur sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FEF3C7] text-[#D97706] font-bold">
                AI
              </div>
              <div>
                <p className="text-xs font-bold text-[#24262D]">PyData Indore</p>
                <p className="text-[11px] text-[#606575]">Volunteer & Co-organizer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
