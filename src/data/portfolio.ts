/**
 * Central portfolio data for Alfin Tom George.
 * Source of truth: verified resume (Alfin_Resume.docx) and project repositories.
 * All details reflect authentic student experience, hackathon leadership, and practical prototypes.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Alfin Tom George',
  displayName: 'Alfin Tom George',
  firstName: 'Alfin',
  eyebrow: 'Computer Science Student · Indore, India',
  role: 'AI Engineering & Python Developer',
  tagline: ['AI Engineering', 'Python Backend', 'Practical Software'],
  headline: "Hey, I'm Alfin.",
  supportingHeadline: 'I like turning ideas into things that work.',
  intro:
    'I’m a Computer Science undergraduate interested in Python development and AI-powered software. I enjoy building practical projects, exploring new ideas, and learning through hands-on development and collaborative work.',
  location: 'Indore, Madhya Pradesh, India',
  email: 'alfintomgeorge10747@gmail.com',
  phone: '+91-8085936133',
  links: {
    linkedin: 'https://www.linkedin.com/in/alfin-tom-george',
    github: 'https://github.com/AlfinTG',
  },
  avatar: '/assets/profile/alfin.webp',
  avatarFallback: '/assets/profile/alfin.png',
  avatarThumb: '/assets/profile/alfin-thumb.webp',
  resumeFile: '/assets/Alfin_Resume.docx',
  resumeFileName: 'Alfin_Resume.docx',
  interests: ['AI Engineering', 'Retrieval-Augmented Generation (RAG)', 'Backend Systems', 'Edge Machine Learning'],
};

export const education = [
  {
    school: 'Acropolis Institute of Technology and Research (AITR)',
    place: 'Indore, Madhya Pradesh',
    degree: 'Bachelor of Technology — Computer Science',
    period: '2025 – Expected 2029',
    status: 'In Progress',
    focus: 'Core Computer Science, AI Systems, Algorithms & Object-Oriented Design',
  },
];

export type Metric = { value: string; label: string };

export type ProjectCategory = 'all' | 'ai' | 'civic' | 'systems';

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  genre: string;
  category: ProjectCategory;
  role: string;
  status: string;
  logline: string;
  stack: string[];
  problem: string;
  solution: string;
  contribution: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  image?: string;
  resultsImage?: string;
  palette: Palette;
  motif: 'rag-graph' | 'geo-radar' | 'tree-flow' | 'realtime-pulse' | 'sound-wave' | 'arcade-vector';
};

export const projects: Project[] = [
  {
    id: 'nexus-data-ai',
    title: 'Nexus-Data AI',
    subtitle: 'EPC Project Intelligence Platform',
    year: '2026',
    genre: 'RAG Architecture • Multi-Agent Systems • FastAPI',
    category: 'ai',
    role: 'Team Lead (4-person team | 25-day hackathon)',
    status: 'Working Prototype (Deployment in progress)',
    logline:
      'An AI-powered document intelligence and question-answering platform built for complex construction-project workflows and regulatory documentation.',
    stack: ['Python', 'FastAPI', 'Next.js', 'LangGraph', 'ChromaDB', 'GPT-4o-mini', 'Sentence-Transformers'],
    problem:
      'Engineering and construction teams deal with thousands of pages of engineering specifications, compliance standards, and schedule dependencies, making manual search error-prone and slow.',
    solution:
      'Architected a three-module AI intelligence platform combining a RAG document knowledge agent, a specification compliance validator, and a LangGraph-powered schedule risk assessment agent.',
    contribution: [
      'Served as Team Lead for a 4-person engineering team during a 25-day hackathon, coordinating sprint deliverables and module boundaries.',
      'Designed the FastAPI backend architecture and integrated ChromaDB with sentence-transformer embeddings for semantic chunk retrieval.',
      'Implemented page-level PDF metadata extraction and structured risk-analysis endpoints.',
      'Conducted a backend optimization pass to streamline embedding lookups and response latency.',
    ],
    features: [
      'Document Q&A with page-level reference metadata',
      'RAG knowledge agent powered by ChromaDB & sentence-transformers',
      'Specification compliance verification module',
      'Schedule risk assessment workflows modeled in LangGraph',
      'FastAPI REST endpoints integrated with a Next.js client',
    ],
    metrics: [
      { value: '4', label: 'Team members led' },
      { value: '25-Day', label: 'Hackathon sprint' },
      { value: '3', label: 'Specialized AI agents' },
      { value: 'RAG', label: 'ChromaDB vector search' },
    ],
    github: 'https://github.com/AlfinTG',
    image: '/assets/projects/nexus-data-ai.png',
    palette: { from: '#EEF2FF', via: '#E0E7FF', to: '#C7D2FE', accent: '#4263CC' },
    motif: 'rag-graph',
  },
  {
    id: 'civiclens',
    title: 'CivicLens',
    subtitle: 'AI Public Infrastructure Monitor',
    year: '2026',
    genre: 'Computer Vision • Civic Tech • Full-Stack',
    category: 'civic',
    role: 'Backend Engineering & AI Integration (2-person team)',
    status: 'Working Prototype (Hacktoberfest ’26)',
    logline:
      'An AI-assisted civic issue reporting and prioritization prototype that uses Gemini Vision to classify infrastructure damage from citizen photo submissions.',
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'Google Gemini Vision', 'React', 'Vite', 'Leaflet'],
    problem:
      'Municipal authorities receive fragmented, non-standardized reports for civic issues (potholes, broken streetlights, water leaks) with duplicate submissions and no automated severity ranking.',
    solution:
      'Created an end-to-end reporting system where citizens submit photos with GPS coordinates. Gemini Vision classifies the issue, estimates severity, identifies the responsible department, and flags duplicates within 50 metres.',
    contribution: [
      'Engineered the FastAPI backend and SQLAlchemy database schemas for issue lifecycles and geographic coordinates.',
      'Integrated Google Gemini Vision API with structured JSON output validation and resilient fallback handling.',
      'Built a 50-metre radius duplicate detection algorithm to prevent redundant reports from cluttering city queues.',
      'Developed priority scoring that dynamically ranks issues based on AI severity, report age, and duplicate report count.',
      'Connected the administrative React/Vite dashboard with interactive Leaflet map markers and real-time status management.',
    ],
    features: [
      'Citizen photo upload with automatic GPS extraction',
      'Gemini Vision automated classification and severity estimation',
      'Responsible municipal department recommendation',
      '50-metre radius geographic duplicate detection',
      'Priority scoring based on severity, age, and duplicate volume',
      'Administrative map-based visualization with status update workflows',
    ],
    metrics: [
      { value: '50m', label: 'Duplicate radius filter' },
      { value: 'Vision', label: 'Gemini multi-modal AI' },
      { value: 'FastAPI', label: 'Async Python backend' },
      { value: 'Leaflet', label: 'Geo-tagged map UI' },
    ],
    github: 'https://github.com/AlfinTG',
    image: '/assets/projects/civiclens-preview.png',
    palette: { from: '#ECFDF5', via: '#D1FAE5', to: '#A7F3D0', accent: '#059669' },
    motif: 'geo-radar',
  },
  {
    id: 'careerx',
    title: 'CareerX',
    subtitle: 'AI Student Career-Path Simulator',
    year: '2026',
    genre: 'Structured AI • Next.js • Product Design',
    category: 'ai',
    role: 'Creator & Full-Stack Prototyping',
    status: 'Working Prototype',
    logline:
      'An AI-powered career roadmap simulator that translates a student’s academic year, current skillset, and interests into three realistic trajectory paths.',
    stack: ['Next.js', 'TypeScript', 'Anthropic Claude API', 'Zod Validation', 'Tailwind CSS'],
    problem:
      'Undergraduate students frequently struggle to identify actionable milestones and bridge the gap between academic coursework and industry skill requirements.',
    solution:
      'Developed a responsive simulator that generates 3 customized career pathways with milestone timelines, identified skill gaps, and curated project concepts, guarded by strict schema validation.',
    contribution: [
      'Authored the complete product and technical specification for the simulator.',
      'Integrated the Anthropic Claude API using strict Zod schema validation to guarantee structured JSON output.',
      'Implemented exponential backoff retry logic and safe local fallback payloads to ensure zero UI crashes on API rate limits.',
      'Designed an engaging multi-step career exploration interface with step-by-step roadmap comparisons.',
    ],
    features: [
      '3 parallel career pathway recommendations from student profile',
      'Skill gap analysis highlighting missing fundamentals and modern tools',
      'Actionable milestone timelines and portfolio project suggestions',
      'Robust Zod schema validation and normalized responses',
      'Local fallback data pipeline handling edge-case API outages',
    ],
    metrics: [
      { value: '3', label: 'Custom career paths' },
      { value: 'Zod', label: 'Schema validation' },
      { value: 'Claude', label: 'Anthropic LLM API' },
      { value: 'Zero', label: 'UI crash fallback' },
    ],
    github: 'https://github.com/AlfinTG',
    image: '/assets/projects/careerx-landing.png',
    resultsImage: '/assets/projects/careerx-results.png',
    palette: { from: '#EFF6FF', via: '#DBEAFE', to: '#BFDBFE', accent: '#2563EB' },
    motif: 'tree-flow',
  },
  {
    id: 'cricket-ai',
    title: 'IPL Fan Experience App',
    subtitle: 'GDG Indore Vibe-Coding Project',
    year: '2026',
    genre: 'Generative AI • Real-time DB • Full-Stack',
    category: 'civic',
    role: 'Developer (GDG Indore Vibe-Coding Competition)',
    status: 'Deployed on Vercel',
    logline:
      'An interactive fan engagement app featuring AI-generated match memes, multi-style match commentary, and real-time live audience sentiment polling.',
    stack: ['React', 'Vite', 'Google Gemini 1.5 Flash', 'Firebase Realtime DB', 'Cursor', 'Vercel'],
    problem:
      'Traditional cricket broadcast feeds offer static commentary with little real-time interactive engagement or fan-driven humor during matches.',
    solution:
      'Created a vibe-coded fan application that generates humorous commentary in selected styles (enthusiastic, satirical, technical) and pairs live match situations with AI memes and sentiment leaderboards.',
    contribution: [
      'Built and shipped the complete application during the GDG Indore vibe-coding competition using AI-assisted workflows in Cursor.',
      'Integrated Google Gemini 1.5 Flash for dynamic meme prompt generation and stylistic match commentary.',
      'Configured Firebase Realtime Database to track fan sentiment meters and live match leaderboards.',
      'Deployed the production frontend on Vercel with responsive touch-friendly mobile layouts.',
    ],
    features: [
      'Style-conditioned commentary generated via Gemini 1.5 Flash',
      'AI meme generator reacting to live match scenarios',
      'Firebase Realtime Database live sentiment pulse',
      'Interactive fan leaderboard and voting mechanics',
      'Optimized lightweight bundle deployed on Vercel',
    ],
    metrics: [
      { value: 'Vercel', label: 'Production deploy' },
      { value: 'Gemini', label: '1.5 Flash LLM' },
      { value: 'Realtime', label: 'Firebase DB sync' },
      { value: 'GDG', label: 'Competition build' },
    ],
    github: 'https://github.com/AlfinTG',
    image: '/assets/projects/cricket-preview.png',
    palette: { from: '#FFFBEB', via: '#FEF3C7', to: '#FDE68A', accent: '#D97706' },
    motif: 'realtime-pulse',
  },
  {
    id: 'savra',
    title: 'SAVRA',
    subtitle: 'Sound Alert & Vibration Recognition Assistant',
    year: '2026',
    genre: 'Edge AI • TensorFlow.js • Accessibility PWA',
    category: 'ai',
    role: 'Hackathon Submission / Open-Source Project',
    status: 'Open-Source Prototype',
    logline:
      'A browser-based sound-recognition progressive web app designed for deaf and hard-of-hearing individuals, running real-time on-device audio classification.',
    stack: ['TensorFlow.js', 'YAMNet', 'Web Audio API', 'PWA', 'Service Workers', 'Vibration API'],
    problem:
      'Deaf and hard-of-hearing people often miss critical environmental sound cues such as fire alarms, sirens, microwave pings, and door knocks when away from specialized hardware.',
    solution:
      'Engineered an on-device accessibility PWA that captures environmental microphone audio in real time, classifies acoustic events using YAMNet/TensorFlow.js, and triggers high-contrast visual and haptic alerts.',
    contribution: [
      'Designed the system architecture prioritizing local, on-device audio inference with zero server data transmission for privacy.',
      'Implemented Web Audio API streams and connected the TensorFlow.js YAMNet pre-trained classifier.',
      'Built a high-visibility command center interface with urgent color states and device vibration triggers.',
      'Packaged the application as an offline-capable Progressive Web App with service worker caching.',
    ],
    features: [
      '100% on-device audio classification preserving user privacy',
      'TensorFlow.js & YAMNet transfer learning for acoustic events',
      'Multi-level visual alert states (Normal, High, Critical)',
      'Haptic feedback integration via the Vibration API',
      'Progressive Web App installation for desktop and mobile devices',
    ],
    metrics: [
      { value: '100%', label: 'On-device / private' },
      { value: 'YAMNet', label: 'Acoustic model' },
      { value: 'Haptic', label: 'Vibration alerts' },
      { value: 'PWA', label: 'Offline capable' },
    ],
    github: 'https://github.com/AlfinTG',
    image: '/assets/projects/savra-preview.png',
    palette: { from: '#FEF2F2', via: '#FEE2E2', to: '#FECACA', accent: '#DC2626' },
    motif: 'sound-wave',
  },
  {
    id: 'space-war',
    title: 'Space War',
    subtitle: 'Classic 2D Arcade Space Shooter',
    year: '2024',
    genre: 'Game Physics • Python • Pygame Engine',
    category: 'systems',
    role: 'Personal Project (Built in Class XII)',
    status: 'Completed Project',
    logline:
      'A 2D arcade shooter built from scratch in Python and Pygame, featuring a custom 60fps game loop, collision physics, health states, and score mechanics.',
    stack: ['Python', 'Pygame', 'Vector Mathematics', 'Sprite Animation'],
    problem:
      'Building foundational programming skills requires understanding state management, real-time event loops, frame timing, and mathematical coordinate transformations.',
    solution:
      'Created a complete arcade shooter implementing keyboard input handling, enemy attack formations, bullet collision detection, a lives/health tracking system, and game-over states.',
    contribution: [
      'Implemented an optimized 60fps Pygame event loop with delta-time motion calculations.',
      'Coded bounding-box collision detection between player lasers, incoming hazards, and enemy ships.',
      'Created sprite animation sequences and sound effect triggers for hits and explosions.',
      'Structured clean modular Python classes for Player, Enemy, Laser, and GameEngine entities.',
    ],
    features: [
      'Smooth 2D spaceship movement with border clamping',
      'Enemy wave spawning algorithms with increasing difficulty',
      'Bounding-box collision detection and particle explosion effects',
      'Health bar, lives counter, and persistent high score tracking',
      'Clean object-oriented architecture in vanilla Python',
    ],
    metrics: [
      { value: '60 FPS', label: 'Target frame rate' },
      { value: 'Python', label: 'Pygame engine' },
      { value: 'OOP', label: 'Entity architecture' },
      { value: 'Class XII', label: 'Foundational build' },
    ],
    github: 'https://github.com/AlfinTG',
    image: '/assets/projects/spacewar-preview.png',
    palette: { from: '#F5F3FF', via: '#EDE9FE', to: '#DDD6FE', accent: '#7C3AED' },
    motif: 'arcade-vector',
  },
];

export type Skill = {
  name: string;
  mono: string;
  context: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core Foundation',
    description: 'The two programming languages I actively use and study for algorithms and systems.',
    skills: [
      { name: 'Python', mono: 'Py', context: 'FastAPI backends, RAG pipelines, Pygame game development, data workflows' },
      { name: 'C++', mono: 'C++', context: 'Data structures, algorithm problem solving, object-oriented concepts' },
    ],
  },
  {
    id: 'ai-llm',
    title: 'AI & LLM Development',
    subtitle: 'Intelligent Systems',
    description: 'Practical APIs, vector search databases, and structured prompt engineering pipelines.',
    skills: [
      { name: 'Gemini API', mono: 'Ge', context: 'Gemini Vision (CivicLens) & Gemini Flash (IPL Fan App, SkillPath AI)' },
      { name: 'Anthropic / Claude API', mono: 'Cl', context: 'Structured prompt workflows and career simulation in CareerX' },
      { name: 'OpenAI API', mono: 'Oa', context: 'GPT-4o-mini integration in EPC Project Intelligence Platform' },
      { name: 'Retrieval-Augmented Generation (RAG)', mono: 'Rg', context: 'Document indexing, chunking, and grounded Q&A in Nexus-Data AI' },
      { name: 'ChromaDB', mono: 'Ch', context: 'Vector store for document embeddings and semantic similarity queries' },
      { name: 'Sentence-Transformers', mono: 'St', context: 'Local embedding generation for semantic document search' },
      { name: 'Structured Output Validation', mono: 'Val', context: 'Zod schemas, JSON mode enforcement, and safe LLM error fallbacks' },
      { name: 'Machine Learning Fundamentals', mono: 'ML', context: 'Transfer learning, classification, audio models (YAMNet/TensorFlow.js)' },
    ],
  },
  {
    id: 'backend-web',
    title: 'Web & Backend Technologies',
    subtitle: 'Application Stack',
    description: 'Frameworks and databases used across hackathon prototypes and web projects.',
    skills: [
      { name: 'FastAPI', mono: 'Fa', context: 'High-performance async REST backends for Nexus-Data AI and CivicLens' },
      { name: 'REST APIs', mono: 'Api', context: 'Endpoint architecture, route versioning, request validation, CORS' },
      { name: 'React', mono: 'Re', context: 'Component-driven frontends for CivicLens dashboard and IPL Fan App' },
      { name: 'Next.js', mono: 'Nx', context: 'App router architecture for CareerX and Nexus-Data AI client' },
      { name: 'Vite', mono: 'Vt', context: 'Fast build tooling for modern React client development' },
      { name: 'SQLAlchemy & SQLite', mono: 'Sql', context: 'Relational data modeling, migrations, and query filters in CivicLens' },
      { name: 'Firebase', mono: 'Fb', context: 'Realtime Database for IPL sentiment counters and Firestore storage' },
    ],
  },
  {
    id: 'tools-workflows',
    title: 'Development Tools',
    subtitle: 'Engineering Workflow',
    description: 'Version control, containers, CI/CD, and modern developer environments.',
    skills: [
      { name: 'Git & GitHub', mono: 'Git', context: 'Version control, branch management, pull requests, hackathon collaboration' },
      { name: 'Docker', mono: 'Dk', context: 'Containerizing backend services and reproducible runtimes' },
      { name: 'pytest', mono: 'PyT', context: 'Unit testing backend endpoints and validator logic' },
      { name: 'GitHub Actions', mono: 'GHA', context: 'Automated CI linting and testing pipelines' },
      { name: 'VS Code & Cursor', mono: 'Ide', context: 'Primary developer environments with AI-augmented coding workflows' },
      { name: 'Vercel', mono: 'Vc', context: 'Cloud deployment target for Next.js and Vite web applications' },
    ],
  },
  {
    id: 'learning',
    title: 'Currently Learning',
    subtitle: 'Active Exploration',
    description: 'Areas of active coursework and continuous engineering improvement.',
    skills: [
      { name: 'Full-Stack MERN Development', mono: 'Mern', context: 'NASSCOM certified curriculum covering MongoDB, Express, React, and Node' },
      { name: 'Generative AI Workflows', mono: 'Gen', context: 'Multi-agent orchestration (LangGraph), memory management, and evaluation' },
    ],
  },
];

export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  period: string;
  badge: string;
  type: 'community' | 'leadership';
  summary: string;
  bullets: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: 'pydata-indore',
    role: 'Volunteer and Co-organizer',
    organization: 'PyData Indore',
    period: '2025 – Present',
    badge: 'Community Leadership',
    type: 'community',
    summary:
      'Active contributor to the local Python and data science developer community in Indore, organizing hackathons and technical knowledge-sharing sessions.',
    bullets: [
      'Co-organized the Hack Days Indore mini hackathon, coordinating a volunteer team of approximately 12 members across logistics and track operations.',
      'Structured technical challenge tracks, coordinated venue operations, and supported attendee guidance.',
      'Created interactive quiz and feedback materials for a dedicated agentic AI technical session.',
      'Regularly support PyData Indore community meetups and developer workshops.',
    ],
  },
  {
    id: 'epc-team-lead',
    role: 'Hackathon Team Lead',
    organization: 'EPC Project Intelligence Platform Sprint',
    period: '2026',
    badge: '4-Person Team · 25 Days',
    type: 'leadership',
    summary:
      'Led a 4-person engineering team in designing and building a multi-module AI workflow system for construction documentation during an intensive 25-day sprint.',
    bullets: [
      'Spearheaded overall architecture planning, module boundaries, and sprint checkpoints.',
      'Guided the team through implementing a document RAG knowledge agent, specification compliance checker, and LangGraph schedule risk workflows.',
      'Coordinated the integration between the Next.js frontend and FastAPI backend microservices.',
      'Maintained project task boards and facilitated collaborative problem-solving across team members.',
    ],
  },
];

export type AchievementItem = {
  id: string;
  title: string;
  event: string;
  year: string;
  badge: string;
  description: string;
};

export const achievements: AchievementItem[] = [
  {
    id: 'ethics-first',
    title: 'First Prize',
    event: 'Business Ethics & Decision-Making Competition',
    year: '2026',
    badge: '1st Place',
    description:
      'Awarded first prize for structured analysis and articulate presentation on technological ethics, governance, and responsible decision-making frameworks.',
  },
  {
    id: 'quantum-runner-up',
    title: 'Runner-Up',
    event: 'Quantum Computing Hackathon / Challenge',
    year: '2026',
    badge: '2nd Place',
    description:
      'Recognized as runner-up in an engineering challenge exploring quantum computing fundamentals and algorithm applications.',
  },
  {
    id: 'gdg-vibe-coding',
    title: 'Participant & Builder',
    event: 'GDG Indore Vibe-Coding Competition',
    year: '2026',
    badge: 'GDG Indore',
    description:
      'Participated in an intensive live vibe-coding hackathon, building and deploying the IPL Cricket Fan Experience application with Gemini and Firebase.',
  },
];

export type CertificationItem = {
  id: string;
  name: string;
  issuer: string;
  status: 'Completed' | 'In Progress';
};

export const certifications: CertificationItem[] = [
  {
    id: 'nasscom-mern',
    name: 'Full Stack MERN with Generative AI',
    issuer: 'NASSCOM',
    status: 'In Progress',
  },
  {
    id: 'ms-aiml',
    name: 'AI/ML Fundamentals',
    issuer: 'Microsoft AI Skills',
    status: 'Completed',
  },
  {
    id: 'python-spec',
    name: 'Python Specialization',
    issuer: 'Python Institute / Coursera',
    status: 'Completed',
  },
  {
    id: 'be10x-ai',
    name: 'AI Tools and Automation Course',
    issuer: 'Be10X',
    status: 'Completed',
  },
];

export type SectionId = 'about' | 'projects' | 'skills' | 'experience' | 'achievements' | 'resume';

export const navigationSections: { id: SectionId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Education & Honors' },
  { id: 'resume', label: 'Resume' },
];
