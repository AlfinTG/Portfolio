const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'public', 'assets', 'projects');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. NEXUS-DATA AI: EPC Project Intelligence Platform & RAG
const nexusSvg = `
<svg width="1200" height="750" viewBox="0 0 1200 750" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-nexus" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="50%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0A0F1D"/>
    </linearGradient>
    <linearGradient id="accent-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4263CC"/>
      <stop offset="100%" stop-color="#6366F1"/>
    </linearGradient>
    <linearGradient id="card-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E293B" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0.95"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="750" fill="url(#bg-nexus)"/>

  <!-- Blueprint Engineering Grid -->
  <g stroke="#334155" stroke-width="1" opacity="0.22">
    <path d="M0 75 H1200 M0 150 H1200 M0 225 H1200 M0 300 H1200 M0 375 H1200 M0 450 H1200 M0 525 H1200 M0 600 H1200 M0 675 H1200"/>
    <path d="M100 0 V750 M200 0 V750 M300 0 V750 M400 0 V750 M500 0 V750 M600 0 V750 M700 0 V750 M800 0 V750 M900 0 V750 M1000 0 V750 M1100 0 V750"/>
  </g>

  <!-- Ambient Glow -->
  <circle cx="950" cy="180" r="280" fill="#4263CC" opacity="0.18" filter="url(#glow)"/>
  <circle cx="250" cy="560" r="240" fill="#6366F1" opacity="0.14" filter="url(#glow)"/>

  <!-- Top Navigation Bar -->
  <rect x="40" y="32" width="1120" height="60" rx="14" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
  <circle cx="75" cy="62" r="6" fill="#EF4444"/>
  <circle cx="95" cy="62" r="6" fill="#F59E0B"/>
  <circle cx="115" cy="62" r="6" fill="#10B981"/>
  <text x="145" y="67" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="800" font-size="15" fill="#FFFFFF" letter-spacing="1">NEXUS-DATA AI</text>
  <rect x="290" y="47" width="165" height="30" rx="6" fill="#4263CC" fill-opacity="0.25" stroke="#4263CC" stroke-width="1"/>
  <text x="302" y="67" font-family="monospace" font-size="11.5" fill="#818CF8">EPC INTELLIGENCE</text>
  
  <rect x="760" y="47" width="250" height="30" rx="8" fill="#0F172A" stroke="#334155"/>
  <text x="775" y="67" font-family="monospace" font-size="11.5" fill="#94A3B8">Search 1,482 EPC specs...</text>
  <rect x="1030" y="47" width="110" height="30" rx="8" fill="url(#accent-grad)"/>
  <text x="1046" y="67" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="12" fill="#FFFFFF">RAG Query</text>

  <!-- Left Column: PDF & Knowledge Graph Explorer -->
  <rect x="40" y="112" width="380" height="600" rx="16" fill="url(#card-grad)" stroke="#334155" stroke-width="1.5"/>
  <text x="65" y="150" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="17" fill="#F8FAFC">EPC Knowledge Graph</text>
  <text x="65" y="174" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94A3B8">ChromaDB Vector Embeddings (MiniLM-L6)</text>

  <!-- Document Card 1 -->
  <rect x="65" y="200" width="330" height="85" rx="12" fill="#0F172A" stroke="#4263CC" stroke-width="1.5"/>
  <rect x="80" y="215" width="38" height="38" rx="8" fill="#EEF2FF"/>
  <text x="89" y="239" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="800" font-size="13" fill="#4263CC">PDF</text>
  <text x="130" y="234" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="600" font-size="13.5" fill="#FFFFFF">EPC_Spec_Section_0940.pdf</text>
  <text x="130" y="254" font-family="monospace" font-size="11" fill="#10B981">✓ 124 Vector Chunks Indexed</text>
  <rect x="335" y="215" width="48" height="20" rx="4" fill="#10B981" fill-opacity="0.18"/>
  <text x="341" y="229" font-family="monospace" font-size="10.5" font-weight="bold" fill="#10B981">99.4%</text>

  <!-- Document Card 2 -->
  <rect x="65" y="300" width="330" height="75" rx="12" fill="#0F172A" stroke="#334155" stroke-width="1"/>
  <rect x="80" y="315" width="38" height="38" rx="8" fill="#1E293B"/>
  <text x="89" y="339" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="800" font-size="13" fill="#64748B">PDF</text>
  <text x="130" y="334" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="600" font-size="13" fill="#E2E8F0">Schedule_Risk_Matrix_v4.pdf</text>
  <text x="130" y="354" font-family="monospace" font-size="11" fill="#94A3B8">LangGraph Multi-Agent Workflow</text>

  <!-- Semantic Vector Space Interactive View -->
  <g transform="translate(65, 395)">
    <rect width="330" height="295" rx="12" fill="#0F172A" stroke="#334155" stroke-width="1"/>
    <text x="20" y="30" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="13" fill="#CBD5E1">Semantic Similarity Space</text>
    <circle cx="165" cy="155" r="90" fill="none" stroke="#4263CC" stroke-width="1" stroke-dasharray="4 4" opacity="0.4"/>
    <circle cx="165" cy="155" r="50" fill="none" stroke="#6366F1" stroke-width="1" stroke-dasharray="2 2" opacity="0.7"/>
    
    <!-- Central Node -->
    <circle cx="165" cy="155" r="18" fill="#4263CC" stroke="#FFFFFF" stroke-width="2"/>
    <text x="158" y="161" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="800" font-size="13" fill="#FFFFFF">Q</text>
    
    <!-- Surrounding Chunks -->
    <line x1="165" y1="155" x2="105" y2="105" stroke="#4263CC" stroke-width="2" stroke-dasharray="4 2"/>
    <circle cx="105" cy="105" r="11" fill="#10B981"/>
    <text x="68" y="96" font-family="monospace" font-size="10" fill="#10B981">Chunk #42</text>

    <line x1="165" y1="155" x2="235" y2="120" stroke="#4263CC" stroke-width="2" stroke-dasharray="4 2"/>
    <circle cx="235" cy="120" r="11" fill="#10B981"/>
    <text x="215" y="100" font-family="monospace" font-size="10" fill="#10B981">Chunk #88</text>

    <line x1="165" y1="155" x2="195" y2="220" stroke="#4263CC" stroke-width="1.5" opacity="0.6"/>
    <circle cx="195" cy="220" r="9" fill="#F59E0B"/>
    <text x="180" y="240" font-family="monospace" font-size="10" fill="#F59E0B">Chunk #17</text>

    <text x="20" y="275" font-family="monospace" font-size="11" fill="#94A3B8">Cosine distance: 0.912 • Top-k retrieved</text>
  </g>

  <!-- Right Column: Grounded AI Synthesis & Citations -->
  <rect x="440" y="112" width="720" height="600" rx="16" fill="url(#card-grad)" stroke="#334155" stroke-width="1.5"/>
  
  <!-- Active Query Input -->
  <rect x="470" y="140" width="660" height="55" rx="12" fill="#0F172A" stroke="#4263CC" stroke-width="1.5"/>
  <text x="495" y="174" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14.5" fill="#F8FAFC">"What are the seismic reinforcement tolerance limits in Section 4.3?"</text>

  <!-- Grounded AI Card -->
  <rect x="470" y="215" width="660" height="300" rx="14" fill="#0B132B" stroke="#1E293B" stroke-width="1.5"/>
  <rect x="470" y="215" width="660" height="42" rx="14" fill="#1E293B"/>
  <text x="495" y="242" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="13" fill="#818CF8">GROUNDED SYNTHESIS · GPT-4o-mini + ChromaDB</text>
  <rect x="1005" y="223" width="110" height="26" rx="6" fill="#10B981" fill-opacity="0.18" stroke="#10B981" stroke-width="1"/>
  <text x="1017" y="240" font-family="monospace" font-size="11" font-weight="bold" fill="#10B981">Verified Grounding</text>

  <text x="495" y="290" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" fill="#E2E8F0" font-weight="600">Based on EPC Specification Section 4.3.2 (Seismic Structural Reinforcement):</text>
  
  <text x="495" y="324" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" fill="#94A3B8">1. Lateral drift tolerance must not exceed ±0.015h for Zone IV structural columns.</text>
  <text x="495" y="354" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" fill="#94A3B8">2. High-strength rebar joints must maintain 100% weld ultrasonic inspection compliance.</text>
  <text x="495" y="384" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" fill="#94A3B8">3. Fastener torque tolerance is strictly set within ±2.5 Nm as per ASTM standard F1554.</text>

  <!-- Citations -->
  <g transform="translate(495, 435)">
    <rect x="0" y="0" width="195" height="32" rx="8" fill="#1E293B" stroke="#4263CC" stroke-width="1"/>
    <text x="12" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" font-weight="600" fill="#93C5FD">Source: Spec Page 42 (§4.3)</text>
    
    <rect x="210" y="0" width="180" height="32" rx="8" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    <text x="222" y="20" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11.5" fill="#CBD5E1">ASTM Standard: F1554-24</text>
  </g>

  <!-- Bottom Modules: Compliance & LangGraph Schedule Risk -->
  <g transform="translate(470, 535)">
    <rect x="0" y="0" width="315" height="155" rx="14" fill="#0F172A" stroke="#334155" stroke-width="1"/>
    <text x="20" y="35" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="14" fill="#F8FAFC">Compliance Validator</text>
    <text x="20" y="58" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94A3B8">Regulatory specification cross-check</text>
    
    <rect x="20" y="78" width="275" height="10" rx="5" fill="#1E293B"/>
    <rect x="20" y="78" width="265" height="10" rx="5" fill="#10B981"/>
    <text x="20" y="114" font-family="monospace" font-size="12" font-weight="bold" fill="#10B981">98.4% Specification Match</text>
    <text x="20" y="134" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#64748B">Zero fatal regulatory conflicts found</text>

    <!-- Risk Card -->
    <rect x="345" y="0" width="315" height="155" rx="14" fill="#0F172A" stroke="#334155" stroke-width="1"/>
    <text x="365" y="35" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="14" fill="#F8FAFC">LangGraph Risk Engine</text>
    <text x="365" y="58" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94A3B8">Schedule &amp; critical path dependencies</text>
    
    <rect x="365" y="78" width="275" height="10" rx="5" fill="#1E293B"/>
    <rect x="365" y="78" width="85" height="10" rx="5" fill="#4263CC"/>
    <text x="365" y="114" font-family="monospace" font-size="12" font-weight="bold" fill="#818CF8">Critical Path Risk: LOW (0.18)</text>
    <text x="365" y="134" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" fill="#64748B">3 parallel execution modules active</text>
  </g>
</svg>
`;

// 2. CIVICLENS: AI Public Infrastructure Monitor
const civiclensSvg = `
<svg width="1200" height="750" viewBox="0 0 1200 750" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-civic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064E3B"/>
      <stop offset="60%" stop-color="#022C22"/>
      <stop offset="100%" stop-color="#011C15"/>
    </linearGradient>
    <linearGradient id="emerald-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
    <filter id="glow-civic">
      <feGaussianBlur stdDeviation="14" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="1200" height="750" fill="url(#bg-civic)"/>

  <!-- Top Navigation -->
  <rect x="40" y="32" width="1120" height="60" rx="14" fill="#065F46" fill-opacity="0.5" stroke="#047857" stroke-width="1.5"/>
  <circle cx="75" cy="62" r="6" fill="#EF4444"/>
  <circle cx="95" cy="62" r="6" fill="#F59E0B"/>
  <circle cx="115" cy="62" r="6" fill="#10B981"/>
  <text x="145" y="67" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="800" font-size="15" fill="#FFFFFF" letter-spacing="1">CIVICLENS · AI INFRASTRUCTURE</text>
  
  <rect x="450" y="47" width="170" height="30" rx="6" fill="#047857" fill-opacity="0.6"/>
  <text x="465" y="67" font-family="monospace" font-size="11.5" fill="#A7F3D0">Indore Municipal Grid</text>

  <rect x="990" y="47" width="150" height="30" rx="8" fill="url(#emerald-grad)"/>
  <text x="1006" y="67" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="12" fill="#FFFFFF">+ Report Incident</text>

  <!-- Left Column: Citizen Photo Submission & Gemini Vision Bounding Box -->
  <rect x="40" y="112" width="580" height="600" rx="16" fill="#022C22" stroke="#047857" stroke-width="1.5"/>
  
  <!-- Photo Viewport representing road infrastructure issue -->
  <g transform="translate(65, 140)">
    <rect width="530" height="350" rx="12" fill="#1E293B" stroke="#334155" stroke-width="1"/>
    
    <!-- Stylized asphalt road surface with pavement crack -->
    <rect width="530" height="350" rx="12" fill="#334155"/>
    <path d="M0 260 L530 240 L530 350 L0 350 Z" fill="#1E293B"/>
    <!-- Yellow dashed road lane mark -->
    <path d="M0 200 L120 190" stroke="#FBBF24" stroke-width="6" stroke-dasharray="24 16"/>
    <path d="M220 180 L340 170" stroke="#FBBF24" stroke-width="6" stroke-dasharray="24 16"/>
    <path d="M440 160 L530 150" stroke="#FBBF24" stroke-width="6" stroke-dasharray="24 16"/>

    <!-- Severe Pothole shape -->
    <path d="M190 220 Q240 195 330 205 Q380 230 350 270 Q280 290 200 275 Z" fill="#0F172A" stroke="#475569" stroke-width="3"/>
    <path d="M220 230 Q270 215 310 225 Q330 250 280 265 Q230 260 220 230 Z" fill="#020617"/>

    <!-- Gemini Vision AI Detection Bounding Box -->
    <rect x="170" y="185" width="225" height="115" rx="8" fill="#10B981" fill-opacity="0.12" stroke="#10B981" stroke-width="2.5" stroke-dasharray="6 4"/>
    
    <!-- Vision Corner Markers -->
    <path d="M165 200 L165 180 L185 180" stroke="#10B981" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M400 200 L400 180 L380 180" stroke="#10B981" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M165 285 L165 305 L185 305" stroke="#10B981" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M400 285 L400 305 L380 305" stroke="#10B981" stroke-width="3.5" fill="none" stroke-linecap="round"/>

    <!-- Detection Tag -->
    <rect x="170" y="155" width="210" height="26" rx="6" fill="#10B981"/>
    <text x="180" y="172" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="bold" font-size="11.5" fill="#FFFFFF">Pothole Detected • Conf: 94.2%</text>

    <!-- Water accumulation secondary box -->
    <rect x="20" y="20" width="160" height="28" rx="6" fill="#0F172A" fill-opacity="0.8" stroke="#047857"/>
    <text x="32" y="38" font-family="monospace" font-size="11" fill="#A7F3D0">GPS: 22.7196°N, 75.8577°E</text>
  </g>

  <!-- AI Analysis Classification Feed -->
  <g transform="translate(65, 515)">
    <rect width="530" height="170" rx="12" fill="#064E3B" fill-opacity="0.4" stroke="#047857" stroke-width="1"/>
    <text x="20" y="30" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="14" fill="#FFFFFF">Gemini Vision Automated Triage</text>
    
    <g transform="translate(20, 50)">
      <rect width="150" height="42" rx="8" fill="#022C22" stroke="#047857"/>
      <text x="12" y="18" font-family="sans-serif" font-size="10" fill="#A7F3D0">SEVERITY LEVEL</text>
      <text x="12" y="35" font-family="sans-serif" font-weight="bold" font-size="13" fill="#EF4444">CRITICAL (Tier 1)</text>

      <rect x="165" width="165" height="42" rx="8" fill="#022C22" stroke="#047857"/>
      <text x="177" y="18" font-family="sans-serif" font-size="10" fill="#A7F3D0">RESPONSIBLE DEPT</text>
      <text x="177" y="35" font-family="sans-serif" font-weight="bold" font-size="13" fill="#38BDF8">PWD Road Division</text>

      <rect x="345" width="145" height="42" rx="8" fill="#022C22" stroke="#047857"/>
      <text x="357" y="18" font-family="sans-serif" font-size="10" fill="#A7F3D0">DUPLICATE FILTER</text>
      <text x="357" y="35" font-family="sans-serif" font-weight="bold" font-size="13" fill="#10B981">50m Radius Active</text>
    </g>

    <text x="20" y="125" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#D1FAE5">Duplicate report clustered with #IND-402 (3 reports within 18m). Priority automatically boosted to Tier 1.</text>
  </g>

  <!-- Right Column: Interactive Leaflet Map Dashboard & Queue -->
  <rect x="645" y="112" width="515" height="600" rx="16" fill="#022C22" stroke="#047857" stroke-width="1.5"/>
  
  <!-- Map Header -->
  <text x="675" y="150" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="17" fill="#F8FAFC">Indore Municipal GIS Map</text>
  <text x="675" y="174" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#A7F3D0">Real-time Leaflet Coordinates &amp; Dynamic Cluster Markers</text>

  <!-- Map Graphic Area -->
  <g transform="translate(675, 195)">
    <rect width="455" height="300" rx="12" fill="#03221B" stroke="#065F46" stroke-width="1.5"/>
    
    <!-- Map streets grid -->
    <path d="M0 80 H455 M0 180 H455 M0 240 H455" stroke="#065F46" stroke-width="4"/>
    <path d="M120 0 V300 M280 0 V300 M380 0 V300" stroke="#065F46" stroke-width="4"/>
    <path d="M40 0 L400 300" stroke="#047857" stroke-width="3" opacity="0.5"/>

    <!-- Map Markers -->
    <!-- Marker 1: Target Incident with 50m radius ripple -->
    <circle cx="280" cy="180" r="55" fill="#10B981" fill-opacity="0.15" stroke="#10B981" stroke-width="1.5" stroke-dasharray="4 3"/>
    <circle cx="280" cy="180" r="16" fill="#EF4444" stroke="#FFFFFF" stroke-width="2.5"/>
    <circle cx="280" cy="180" r="4" fill="#FFFFFF"/>
    
    <!-- Marker Label Popup -->
    <rect x="220" y="95" width="165" height="48" rx="8" fill="#0F172A" stroke="#EF4444" stroke-width="1.5"/>
    <text x="232" y="115" font-family="sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF">#IND-402: Pothole (Critical)</text>
    <text x="232" y="132" font-family="monospace" font-size="10" fill="#10B981">3 Citizen Reports Merged</text>

    <!-- Marker 2 -->
    <circle cx="120" cy="80" r="12" fill="#F59E0B" stroke="#FFFFFF" stroke-width="2"/>
    <text x="140" y="85" font-family="sans-serif" font-size="10" fill="#CBD5E1">Streetlight Fault</text>

    <!-- Marker 3 -->
    <circle cx="380" cy="240" r="10" fill="#10B981" stroke="#FFFFFF" stroke-width="2"/>
  </g>

  <!-- Incident Lifecycle Queue -->
  <g transform="translate(675, 515)">
    <rect width="455" height="170" rx="12" fill="#03221B" stroke="#065F46" stroke-width="1"/>
    <text x="20" y="30" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="13.5" fill="#F8FAFC">Priority Incident Dispatch Queue</text>
    
    <g transform="translate(20, 48)">
      <rect width="415" height="42" rx="8" fill="#022C22" stroke="#EF4444" stroke-width="1"/>
      <text x="15" y="26" font-family="sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF">#IND-402: Ring Road Intersection</text>
      <rect x="315" y="10" width="85" height="22" rx="4" fill="#EF4444" fill-opacity="0.2"/>
      <text x="325" y="25" font-family="monospace" font-size="10.5" fill="#EF4444">Dispatched</text>
    </g>

    <g transform="translate(20, 100)">
      <rect width="415" height="42" rx="8" fill="#022C22" stroke="#065F46"/>
      <text x="15" y="26" font-family="sans-serif" font-weight="600" font-size="12" fill="#CBD5E1">#IND-401: Vijay Nagar Drainage Leak</text>
      <rect x="315" y="10" width="85" height="22" rx="4" fill="#F59E0B" fill-opacity="0.2"/>
      <text x="325" y="25" font-family="monospace" font-size="10.5" fill="#F59E0B">In Review</text>
    </g>
  </g>
</svg>
`;

// 3. CRICKET-AI: IPL Fan Experience App (GDG Indore Vibe-Coding)
const cricketSvg = `
<svg width="1200" height="750" viewBox="0 0 1200 750" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-cricket" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#78350F"/>
      <stop offset="50%" stop-color="#451A03"/>
      <stop offset="100%" stop-color="#1E0E02"/>
    </linearGradient>
    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="750" fill="url(#bg-cricket)"/>

  <!-- Top Bar -->
  <rect x="40" y="32" width="1120" height="60" rx="14" fill="#451A03" stroke="#78350F" stroke-width="1.5"/>
  <circle cx="75" cy="62" r="6" fill="#EF4444"/>
  <circle cx="95" cy="62" r="6" fill="#F59E0B"/>
  <circle cx="115" cy="62" r="6" fill="#10B981"/>
  <text x="145" y="67" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="800" font-size="15" fill="#FFFFFF" letter-spacing="1">IPL FAN VIBE · GDG INDORE BUILD</text>
  <rect x="480" y="47" width="160" height="30" rx="6" fill="#B45309" fill-opacity="0.4"/>
  <text x="495" y="67" font-family="monospace" font-size="11.5" fill="#FDE68A">Gemini 1.5 Flash</text>

  <rect x="990" y="47" width="150" height="30" rx="8" fill="url(#gold-grad)"/>
  <text x="1006" y="67" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="12" fill="#FFFFFF">Live Pulse: ON</text>

  <!-- Left: Real-time Match Telemetry & Sentiment Gauge -->
  <rect x="40" y="112" width="520" height="600" rx="16" fill="#291205" stroke="#78350F" stroke-width="1.5"/>
  
  <!-- Scorecard Banner -->
  <g transform="translate(65, 140)">
    <rect width="470" height="150" rx="14" fill="#451A03" stroke="#B45309" stroke-width="1.5"/>
    <text x="25" y="40" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="800" font-size="22" fill="#FFFFFF">RCB 198/4</text>
    <text x="25" y="65" font-family="monospace" font-size="13" fill="#FDE68A">(18.4 Ov) · CRR: 10.60</text>

    <text x="300" y="40" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="800" font-size="22" fill="#CBD5E1">CSK 192/7</text>
    <text x="300" y="65" font-family="monospace" font-size="13" fill="#94A3B8">20.0 Ov (Target: 193)</text>

    <!-- Stadium Pulse Waveform -->
    <path d="M25 110 L90 110 L115 80 L140 135 L165 95 L190 120 L240 110 L280 110 L305 75 L330 140 L360 85 L395 110 L445 110" stroke="#F59E0B" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="305" cy="75" r="5" fill="#EF4444"/>
    <text x="320" y="70" font-family="monospace" font-size="10" fill="#EF4444">MAX ROAR</text>
  </g>

  <!-- Firebase Live Sentiment Meter -->
  <g transform="translate(65, 315)">
    <rect width="470" height="180" rx="14" fill="#1C0C04" stroke="#78350F" stroke-width="1"/>
    <text x="25" y="35" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="15" fill="#FFFFFF">Firebase Realtime Fan Sentiment</text>
    <text x="25" y="58" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#FDE68A">5,420 live fan reactions recorded this over</text>

    <!-- Progress bars -->
    <text x="25" y="95" font-family="sans-serif" font-weight="bold" font-size="12" fill="#EF4444">RCB Energy (68%)</text>
    <rect x="25" y="105" width="420" height="12" rx="6" fill="#451A03"/>
    <rect x="25" y="105" width="285" height="12" rx="6" fill="#EF4444"/>

    <text x="25" y="145" font-family="sans-serif" font-weight="bold" font-size="12" fill="#FBBF24">CSK Comeback Faith (32%)</text>
    <rect x="25" y="155" width="420" height="12" rx="6" fill="#451A03"/>
    <rect x="25" y="155" width="135" height="12" rx="6" fill="#FBBF24"/>
  </g>

  <!-- Meme Generator Preview -->
  <g transform="translate(65, 515)">
    <rect width="470" height="170" rx="14" fill="#1C0C04" stroke="#78350F" stroke-width="1"/>
    <text x="25" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="14" fill="#FFFFFF">Live Match AI Meme Generator</text>
    <rect x="25" y="48" width="420" height="100" rx="10" fill="#451A03" stroke="#B45309"/>
    <text x="45" y="85" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="bold" font-size="14" fill="#FFFFFF">"When you need 7 runs off 2 balls and the bowler starts shining the ball..."</text>
    <text x="45" y="115" font-family="monospace" font-size="11" fill="#FDE68A">Prompt generated in 240ms via Gemini 1.5 Flash</text>
  </g>

  <!-- Right: Gemini Flash Multi-Style Commentary Stream -->
  <rect x="585" y="112" width="575" height="600" rx="16" fill="#291205" stroke="#78350F" stroke-width="1.5"/>
  <text x="615" y="150" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="17" fill="#F8FAFC">AI Style-Conditioned Commentary</text>
  <text x="615" y="174" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#FDE68A">Streamed live via Gemini Flash prompt persona conditioning</text>

  <!-- Style selector buttons -->
  <g transform="translate(615, 195)">
    <rect width="120" height="32" rx="8" fill="#F59E0B"/>
    <text x="18" y="21" font-family="sans-serif" font-weight="bold" font-size="11" fill="#000000">🔥 Enthusiastic</text>

    <rect x="135" width="110" height="32" rx="8" fill="#451A03" stroke="#78350F"/>
    <text x="150" y="21" font-family="sans-serif" font-size="11" fill="#FDE68A">🎭 Satirical</text>

    <rect x="260" width="120" height="32" rx="8" fill="#451A03" stroke="#78350F"/>
    <text x="275" y="21" font-family="sans-serif" font-size="11" fill="#FDE68A">📊 Technical</text>
  </g>

  <!-- Commentary Cards -->
  <g transform="translate(615, 245)">
    <!-- Commentary 1 -->
    <rect width="515" height="135" rx="12" fill="#1C0C04" stroke="#F59E0B" stroke-width="1.5"/>
    <text x="20" y="32" font-family="monospace" font-weight="bold" font-size="12" fill="#F59E0B">OVER 18.4 · SIX!</text>
    <text x="20" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" fill="#FFFFFF">"ABSOLUTE CARNAGE AT THE CHINNASWAMY! That ball didn't just clear the boundary; it requested clearance from Bangalore Air Traffic Control! The decibel meter is off the charts!"</text>
    <text x="20" y="115" font-family="monospace" font-size="10.5" fill="#94A3B8">Latency: 280ms · Gemini 1.5 Flash persona: Hyper-Exuberant</text>

    <!-- Commentary 2 -->
    <g transform="translate(0, 155)">
      <rect width="515" height="135" rx="12" fill="#1C0C04" stroke="#78350F"/>
      <text x="20" y="32" font-family="monospace" font-weight="bold" font-size="12" fill="#38BDF8">OVER 18.2 · WICKET</text>
      <text x="20" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" fill="#E2E8F0">"Cleaned him up! A yorker pitched at 144.2 km/h dipping into the blockhole like a laser-guided missile. The stumps have taken flight, and Chennai's dugouts are on their feet!"</text>
      <text x="20" y="115" font-family="monospace" font-size="10.5" fill="#94A3B8">Sentiment shift: CSK +14% in 4 seconds</text>
    </g>

    <!-- Commentary 3 -->
    <g transform="translate(0, 310)">
      <rect width="515" height="135" rx="12" fill="#1C0C04" stroke="#78350F"/>
      <text x="20" y="32" font-family="monospace" font-weight="bold" font-size="12" fill="#10B981">OVER 18.1 · DOT BALL</text>
      <text x="20" y="65" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="13.5" fill="#CBD5E1">"Slower off-cutter gripping the surface. Batsman swings through early and misses completely. Required run rate shoots up past 14.5 an over."</text>
      <text x="20" y="115" font-family="monospace" font-size="10.5" fill="#94A3B8">Vercel Edge deploy · Firebase Realtime active</text>
    </g>
  </g>
</svg>
`;

// 4. SPACE WAR: 2D Arcade Space Shooter (Python & Pygame)
const spacewarSvg = `
<svg width="1200" height="750" viewBox="0 0 1200 750" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg-space" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="50%" stop-color="#0B132B"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>
    <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <rect width="1200" height="750" fill="url(#bg-space)"/>

  <!-- Starfield background dots -->
  <g fill="#FFFFFF" opacity="0.6">
    <circle cx="80" cy="120" r="1.5"/><circle cx="240" cy="80" r="1"/><circle cx="450" cy="160" r="2"/>
    <circle cx="680" cy="90" r="1.2"/><circle cx="920" cy="140" r="1.8"/><circle cx="1100" cy="70" r="1.5"/>
    <circle cx="150" cy="380" r="2"/><circle cx="320" cy="480" r="1.2"/><circle cx="580" cy="410" r="1.5"/>
    <circle cx="780" cy="520" r="2"/><circle cx="1020" cy="460" r="1.2"/><circle cx="1140" cy="390" r="1.8"/>
    <circle cx="90" cy="620" r="1.2"/><circle cx="280" cy="680" r="1.8"/><circle cx="620" cy="660" r="1.5"/>
    <circle cx="850" cy="640" r="2"/><circle cx="1060" cy="690" r="1"/>
  </g>

  <!-- Top Arcade HUD -->
  <rect x="40" y="32" width="1120" height="60" rx="14" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>
  <circle cx="75" cy="62" r="6" fill="#EF4444"/>
  <circle cx="95" cy="62" r="6" fill="#F59E0B"/>
  <circle cx="115" cy="62" r="6" fill="#10B981"/>
  <text x="145" y="67" font-family="monospace" font-weight="bold" font-size="16" fill="#38BDF8" letter-spacing="2">SPACE WAR // PYTHON PYGAME ENGINE</text>
  
  <text x="750" y="67" font-family="monospace" font-weight="bold" font-size="14" fill="#10B981">SCORE: 048,250</text>
  <text x="940" y="67" font-family="monospace" font-size="13" fill="#F59E0B">LIVES: ♥ ♥ ♥</text>
  <text x="1080" y="67" font-family="monospace" font-size="13" fill="#A855F7">60 FPS</text>

  <!-- Main Game Canvas (800x600 in center-left) -->
  <rect x="40" y="112" width="780" height="600" rx="16" fill="#030712" stroke="#1E293B" stroke-width="2"/>

  <!-- Player Ship (Retro Vector Arcade Design) -->
  <g transform="translate(430, 520)">
    <!-- Engine thruster glow -->
    <polygon points="0,45 -12,65 12,65" fill="#38BDF8" opacity="0.8" filter="url(#neon-glow)"/>
    <polygon points="0,45 -6,75 6,75" fill="#FFFFFF"/>
    
    <!-- Ship Hull -->
    <polygon points="0,-45 35,35 15,25 0,35 -15,25 -35,35" fill="#1E293B" stroke="#38BDF8" stroke-width="2.5" stroke-linejoin="round"/>
    <polygon points="0,-25 15,20 0,15 -15,20" fill="#0EA5E9" opacity="0.7"/>
    <circle cx="0" cy="0" r="4" fill="#FFFFFF"/>

    <!-- Dual Laser Cannons -->
    <line x1="-25" y1="15" x2="-25" y2="-15" stroke="#38BDF8" stroke-width="2.5"/>
    <line x1="25" y1="15" x2="25" y2="-15" stroke="#38BDF8" stroke-width="2.5"/>

    <!-- Green Bounding Box Collider (Debug Physics overlay) -->
    <rect x="-38" y="-48" width="76" height="88" fill="none" stroke="#10B981" stroke-width="1" stroke-dasharray="3 3" opacity="0.6"/>
  </g>

  <!-- Player Lasers traveling upward -->
  <g stroke="#38BDF8" stroke-width="3.5" filter="url(#neon-glow)">
    <line x1="405" y1="460" x2="405" y2="400"/>
    <line x1="455" y1="460" x2="455" y2="400"/>
    
    <line x1="405" y1="340" x2="405" y2="280"/>
    <line x1="455" y1="340" x2="455" y2="280"/>
  </g>

  <!-- Enemy Alien Wave Formation -->
  <g transform="translate(250, 190)">
    <!-- Enemy 1 -->
    <g transform="translate(0, 0)">
      <polygon points="0,25 -25,-15 0,-5 25,-15" fill="#4C0519" stroke="#F43F5E" stroke-width="2"/>
      <circle cx="0" cy="5" r="4" fill="#FB7185"/>
      <rect x="-28" y="-18" width="56" height="46" fill="none" stroke="#F43F5E" stroke-width="1" stroke-dasharray="2 2" opacity="0.5"/>
    </g>

    <!-- Enemy 2 (Hit explosion effect!) -->
    <g transform="translate(180, -20)">
      <circle cx="0" cy="0" r="32" fill="#F59E0B" fill-opacity="0.25" filter="url(#neon-glow)"/>
      <circle cx="0" cy="0" r="18" fill="#EF4444" opacity="0.6"/>
      <line x1="-25" y1="-25" x2="25" y2="25" stroke="#FBBF24" stroke-width="2.5"/>
      <line x1="25" y1="-25" x2="-25" y2="25" stroke="#FBBF24" stroke-width="2.5"/>
      <line x1="0" y1="-30" x2="0" y2="30" stroke="#FBBF24" stroke-width="2.5"/>
      <text x="-15" y="-35" font-family="monospace" font-size="12" font-weight="bold" fill="#FBBF24">+500 PTS</text>
    </g>

    <!-- Enemy 3 -->
    <g transform="translate(360, 0)">
      <polygon points="0,25 -25,-15 0,-5 25,-15" fill="#4C0519" stroke="#F43F5E" stroke-width="2"/>
      <circle cx="0" cy="5" r="4" fill="#FB7185"/>
    </g>

    <!-- Row 2 Enemies -->
    <g transform="translate(90, 80)">
      <polygon points="0,20 -20,-10 0,-3 20,-10" fill="#3B0764" stroke="#A855F7" stroke-width="2"/>
      <circle cx="0" cy="4" r="3" fill="#C084FC"/>
    </g>
    <g transform="translate(270, 80)">
      <polygon points="0,20 -20,-10 0,-3 20,-10" fill="#3B0764" stroke="#A855F7" stroke-width="2"/>
      <circle cx="0" cy="4" r="3" fill="#C084FC"/>
    </g>
  </g>

  <!-- Right: Architecture Inspector & Pygame Physics Engine -->
  <rect x="845" y="112" width="315" height="600" rx="16" fill="#0B132B" stroke="#1E293B" stroke-width="1.5"/>
  <text x="870" y="150" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="16" fill="#F8FAFC">Game Engine Loop</text>
  <text x="870" y="174" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" fill="#94A3B8">Class XII Python Foundation</text>

  <!-- Physics Debug Card -->
  <g transform="translate(870, 205)">
    <rect width="265" height="150" rx="12" fill="#020617" stroke="#334155"/>
    <text x="15" y="30" font-family="monospace" font-size="11" fill="#38BDF8">class GameEngine:</text>
    <text x="25" y="55" font-family="monospace" font-size="10.5" fill="#94A3B8">def tick(self, dt):</text>
    <text x="35" y="75" font-family="monospace" font-size="10.5" fill="#94A3B8">  self.update_physics(dt)</text>
    <text x="35" y="95" font-family="monospace" font-size="10.5" fill="#94A3B8">  self.check_collisions()</text>
    <text x="35" y="115" font-family="monospace" font-size="10.5" fill="#10B981">  self.render_frame()</text>
    <text x="15" y="138" font-family="monospace" font-size="10.5" fill="#F59E0B">fps_clock.tick(60)</text>
  </g>

  <!-- Engine Specs -->
  <g transform="translate(870, 380)">
    <rect width="265" height="305" rx="12" fill="#020617" stroke="#334155"/>
    <text x="15" y="32" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-weight="700" font-size="13" fill="#CBD5E1">Engine Capabilities</text>

    <g transform="translate(15, 52)">
      <text x="0" y="15" font-family="sans-serif" font-size="11.5" fill="#94A3B8">• 60 FPS delta-time physics</text>
      <text x="0" y="42" font-family="sans-serif" font-size="11.5" fill="#94A3B8">• AABB laser bounding box</text>
      <text x="0" y="69" font-family="sans-serif" font-size="11.5" fill="#94A3B8">• Vector velocity clamping</text>
      <text x="0" y="96" font-family="sans-serif" font-size="11.5" fill="#94A3B8">• Dynamic enemy formations</text>
      <text x="0" y="123" font-family="sans-serif" font-size="11.5" fill="#94A3B8">• Particle explosion triggers</text>
      <text x="0" y="150" font-family="sans-serif" font-size="11.5" fill="#94A3B8">• Object-oriented architecture</text>
    </g>

    <rect x="15" y="235" width="235" height="42" rx="8" fill="#1E293B"/>
    <text x="25" y="258" font-family="monospace" font-size="11" font-weight="bold" fill="#38BDF8">Built with pure Pygame</text>
    <text x="25" y="271" font-family="sans-serif" font-size="9" fill="#94A3B8">Foundational systems milestone</text>
  </g>
</svg>
`;

async function main() {
  await sharp(Buffer.from(nexusSvg)).png({ quality: 90 }).toFile(path.join(outDir, 'nexus-data-ai.png'));
  console.log('Generated nexus-data-ai.png');

  await sharp(Buffer.from(civiclensSvg)).png({ quality: 90 }).toFile(path.join(outDir, 'civiclens-preview.png'));
  console.log('Generated civiclens-preview.png');

  await sharp(Buffer.from(cricketSvg)).png({ quality: 90 }).toFile(path.join(outDir, 'cricket-preview.png'));
  console.log('Generated cricket-preview.png');

  await sharp(Buffer.from(spacewarSvg)).png({ quality: 90 }).toFile(path.join(outDir, 'spacewar-preview.png'));
  console.log('Generated spacewar-preview.png');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
