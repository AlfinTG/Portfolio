# Alfin Tom George — Developer Portfolio

A modern, polished, interactive developer portfolio for **Alfin Tom George**, a Computer Science undergraduate at Acropolis Institute of Technology and Research (AITR), Indore, interested in AI engineering, Python development, and practical software systems.

---

## 🚀 Run It Locally

Requires **Node.js 18+**.

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open the local URL Vite prints (typically `http://localhost:5173`).

### Production Build

```bash
# Type check and bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 Visual Identity & Architecture

- **Palette**: Natural light color scheme with warm off-white canvas (`#F8F7F4`), white cards (`#FFFFFF`), primary text (`#24262D`), confident primary blue (`#4263CC`), light blue accents (`#EEF2FF`), and warm secondary amber (`#D9A15B`).
- **Typography**: Inter, Plus Jakarta Sans, and JetBrains Mono for code tokens.
- **Motion & Interactions**:
  - Smooth Lenis scrolling with accessible fallbacks.
  - Interactive Developer Terminal & Architecture Inspector in the Hero.
  - Project showcase with dynamic architectural motifs and genuine UI screenshots.
  - Detailed project modals with deep-dive technical breakdowns (Problem, Solution, My Contribution, Stack).
  - Categorized skill cards revealing project context on hover/tap.
  - Direct download and interactive preview of the verified resume (`Alfin_Resume.docx`).
  - Full support for `prefers-reduced-motion` and mobile responsiveness.

---

## 📁 Project Structure

```
src/
  data/
    portfolio.ts        ← Single source of truth for all projects, skills, and facts
  components/
    Navbar.tsx          ← Minimal wordmark (alfin.), smooth section anchors, mobile menu
    OpeningSequence.tsx ← Refined typographic intro sequence with skip control
    Hero.tsx            ← Asymmetric layout, story narrative, interactive code terminal
    About.tsx           ← Background, engineering philosophy, education credentials
    Projects.tsx        ← Filterable project showcase (All, AI & RAG, Civic, Systems)
    ProjectCard.tsx     ← 3D tilt cards with status tags, role badges, and architecture preview
    ProjectModal.tsx    ← Accessible project modal with full technical breakdown
    Skills.tsx          ← Skill categories (Python & C++ primary languages, AI/LLMs, etc.)
    Experience.tsx      ← PyData Indore co-organization & 4-person hackathon leadership
    Achievements.tsx    ← Competition honors and verified coursework
    ResumeViewer.tsx    ← Direct DOCX download action and structured preview
    ResumeModal.tsx     ← Full-screen resume modal with keyboard accessibility
    FinalCTA.tsx        ← Welcoming contact section with verified links & footer
    CustomCursor.tsx    ← Tactile interactive cursor (desktop only)
    Poster.tsx          ← SVG architectural system motifs & screenshot cards
    fx.tsx              ← Magnetic wrappers, 3D tilt, word reveals, particle canvas
  hooks/
    smoothScroll.tsx    ← Lenis smooth scroll provider and lock utilities
    useMedia.ts         ← Media queries and reduced-motion detectors
public/
  assets/
    Alfin_Resume.docx   ← Genuine verified resume document
    projects/           ← Authentic project screenshots (CareerX, SAVRA)
    favicon.svg         ← Custom geometric SVG monogram
```

---

## 📄 License & Ownership

Created for and owned by **Alfin Tom George**.
