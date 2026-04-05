import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Check, X, Star, Palette, Type, Globe, Zap, Shield, TrendingUp } from "lucide-react";

const brandConcepts = [
  {
    id: "nextara",
    name: "Nextara Health",
    tagline: "Next-Generation Medicine. Physician-Led.",
    angle: "⭐ Top Pick — Coined & Ownable",
    rating: 5,
    description: "Nextara is a coined word blending 'Next' (forward-looking, next-generation) with 'Ara' (Latin for altar; also a southern constellation) — creating a name that sounds pharmaceutical-grade and premium without being clinical or cold. It has no prior use in healthcare, making it highly trademarkable.",
    why: "This is the strongest long-term brand play. It's a genuinely unique coined word — all 9 domain variants across .com, .co, and .care appear to be unregistered, which is extremely rare. It works equally well for the telehealth model and the Bay Area clinic, and it scales nationally without geographic limitations. The name signals innovation without alienating patients who may not be tech-savvy.",
    domains: [
      { name: "nextarahealth.com", status: "likely-available" },
      { name: "nextarahealth.co", status: "likely-available" },
      { name: "nextarahealth.care", status: "likely-available" },
      { name: "nextaramd.com", status: "likely-available" },
      { name: "nextaramd.co", status: "likely-available" },
      { name: "nextaramd.care", status: "likely-available" },
      { name: "nextara.com", status: "likely-available" },
      { name: "nextara.co", status: "likely-available" },
      { name: "nextara.care", status: "likely-available" },
    ],
    colors: ["#0B2545", "#136F63", "#F0F7F4", "#E0A96D"],
    colorNames: ["Deep Navy", "Teal", "Soft White", "Gold Accent"],
    fonts: ["Space Grotesk (display)", "Inter (body)"],
    logoIdea: "A clean wordmark where the 'N' subtly incorporates an upward arrow or molecular bond — forward momentum meets biological precision. Deep navy on white, or teal on dark.",
    competitors: "No competitor uses this name. Uniquely ownable across all channels — domain, trademark, social handles. Sounds like a Series B biotech startup, not a wellness spa.",
    bestFor: "Both Models",
    risk: "Very Low — coined word with no prior healthcare use. All major domain variants appear available. Conduct USPTO Class 44 trademark search before launch.",
  },
  {
    id: "nextide",
    name: "Nextide Health",
    tagline: "The Next Wave of Medicine. Physician-Led.",
    angle: "⭐ Strong Contender — Wave/Momentum Metaphor",
    rating: 5,
    description: "Nextide blends 'Next' (forward-looking, next-generation) with 'tide' (a natural force, a wave, the turning of something inevitable) — evoking the sense that this is the next wave of medicine, not just a trend. It sounds dynamic, natural, and modern without being clinical or cold.",
    why: "The 'tide' metaphor is powerful for a longevity/peptide practice: tides are natural, cyclical, powerful, and unstoppable — the same qualities you want patients to associate with their health transformation. The name is short (2 syllables: 'nex-TIDE'), easy to spell, easy to say, and has a strong visual identity potential (wave motifs, ocean gradients). All domain variants are confirmed available. USPTO search shows no Class 44 (healthcare) registrations — only a dead IT consulting mark and two pending advertising/marketing marks in unrelated industries.",
    domains: [
      { name: "nextidehealth.com", status: "likely-available" },
      { name: "nextidehealth.co", status: "likely-available" },
      { name: "nextidehealth.care", status: "likely-available" },
      { name: "nextide.com", status: "likely-available" },
      { name: "nextide.co", status: "likely-available" },
      { name: "nextide.care", status: "likely-available" },
      { name: "nextidemd.com", status: "likely-available" },
    ],
    colors: ["#0B2545", "#0E6BA8", "#A2D6F9", "#E0A96D"],
    colorNames: ["Deep Navy", "Ocean Blue", "Wave Light", "Gold Accent"],
    fonts: ["Space Grotesk (display)", "Inter (body)"],
    logoIdea: "A clean wordmark where the 'i' dot is replaced by a small wave crest, or the 'N' incorporates a subtle wave form — fluid, natural, forward-moving. Deep navy with ocean blue accents.",
    competitors: "No competitor uses this name. The wave/tide metaphor is completely unoccupied in the peptide/longevity space. Differentiates from the clinical (Helix, Forma) and tech (Signal) brands with a more organic, natural energy.",
    bestFor: "Both Models",
    risk: "Low — no Class 44 trademark registrations. Two unrelated pending marks (NexTide Media, advertising/marketing Classes 035/042) exist but do not conflict with healthcare. All 7 domain variants confirmed available via DNS lookup.",
  },
  {
    id: "helix",
    name: "Helix Health",
    tagline: "Precision Medicine. Physician-Led.",
    angle: "Clinical Authority",
    rating: 5,
    description: "Helix references the double helix of DNA — the foundational molecule of life — while signaling scientific precision and biological depth. It positions the clinic as a serious medical practice, not a wellness spa.",
    why: "In the Bay Area, where patients are highly educated and skeptical of hype, a name rooted in biology signals that this is real medicine. It differentiates sharply from the 'vibe' brands (Hims, Hers, Vita Bella) that dominate telehealth.",
    domains: [
      { name: "helixhealth.com", status: "taken" },
      { name: "helixmd.co", status: "likely-available" },
      { name: "helixhealth.co", status: "check" },
      { name: "helixmd.health", status: "check" },
    ],
    colors: ["#0B2545", "#1B6CA8", "#E8F4FD", "#E0A96D"],
    colorNames: ["Deep Navy", "Clinical Blue", "Ice White", "Gold Accent"],
    fonts: ["Neue Haas Grotesk / Space Grotesk", "Inter"],
    logoIdea: "A stylized double helix that subtly forms an 'H' — clean, geometric, instantly medical.",
    competitors: "Differentiates from Hone Health (too casual), Fountain Life (too luxury), and Vita Bella (too consumer).",
    bestFor: "Bay Area Clinic",
    risk: "Low — strong clinical associations, no negative connotations.",
  },
  {
    id: "cadence",
    name: "Cadence MD",
    tagline: "Your Body. Optimized.",
    angle: "Performance & Rhythm",
    rating: 5,
    description: "Cadence evokes rhythm, flow, and sustained performance — the idea that your biology should operate at its optimal tempo. The 'MD' suffix immediately establishes physician credibility and differentiates from non-medical competitors.",
    why: "Performance-oriented Bay Area professionals (athletes, executives, founders) respond to language about optimization and rhythm. It's approachable without being clinical, premium without being pretentious.",
    domains: [
      { name: "cadencemd.com", status: "taken" },
      { name: "cadencemd.co", status: "likely-available" },
      { name: "cadence.health", status: "check" },
      { name: "cadencemd.health", status: "check" },
    ],
    colors: ["#1A1A2E", "#16213E", "#0F3460", "#E94560"],
    colorNames: ["Midnight", "Deep Blue", "Navy", "Crimson Accent"],
    fonts: ["Satoshi / DM Sans", "Inter"],
    logoIdea: "A sine wave that resolves into a heartbeat line — performance meets medicine.",
    competitors: "Sits between Hone Health (casual) and Fountain Life (ultra-premium) — the sweet spot for the Bay Area professional.",
    bestFor: "Both Models",
    risk: "Low — strong positive associations. Check trademark in Class 44 (medical services).",
  },
  {
    id: "solis",
    name: "Solis Longevity",
    tagline: "Live Longer. Live Better.",
    angle: "Premium Longevity",
    rating: 4,
    description: "Solis (Latin for 'sun') evokes vitality, renewal, and the idea of a new day — a fresh biological chapter. 'Longevity' as a category descriptor is the fastest-growing segment in health and immediately signals the target market.",
    why: "The longevity category is exploding in 2026. Positioning as a 'longevity clinic' rather than a 'peptide clinic' is strategically smarter — it's broader, more defensible, and more appealing to the affluent Bay Area demographic who may not yet know what peptides are.",
    domains: [
      { name: "solislongevity.com", status: "taken" },
      { name: "solislongevity.co", status: "likely-available" },
      { name: "solis.health", status: "check" },
      { name: "solismd.co", status: "likely-available" },
    ],
    colors: ["#F5F0E8", "#2C3E50", "#D4A853", "#8B7355"],
    colorNames: ["Warm Ivory", "Charcoal", "Gold", "Warm Brown"],
    fonts: ["Playfair Display", "Lato"],
    logoIdea: "A minimal sun mark — a circle with subtle rays — in gold on deep charcoal. Timeless, premium.",
    competitors: "Competes directly with Fountain Life and Next Health on premium positioning, but at 1/3 the price point.",
    bestFor: "Bay Area Clinic",
    risk: "Medium — 'Solis' is used in other industries. Conduct full trademark search.",
  },
  {
    id: "signal",
    name: "Signal Health",
    tagline: "Listen to Your Biology.",
    angle: "Data-Driven / Tech-Forward",
    rating: 4,
    description: "Signal speaks directly to the Bay Area tech culture — the idea that your body sends biological signals, and the clinic helps you read and respond to them. It's clinical without being cold, and data-forward without being alienating.",
    why: "In a market full of 'wellness' brands, 'Signal' positions the clinic as a precision health platform — something a software engineer or data scientist would trust. It also works perfectly for the telehealth model where the entire experience is digital.",
    domains: [
      { name: "signalhealth.com", status: "taken" },
      { name: "signalmd.co", status: "likely-available" },
      { name: "signal.health", status: "check" },
      { name: "signalmd.health", status: "check" },
    ],
    colors: ["#0D1117", "#21262D", "#58A6FF", "#3FB950"],
    colorNames: ["GitHub Black", "Dark Gray", "Electric Blue", "Signal Green"],
    fonts: ["JetBrains Mono (accents)", "Inter"],
    logoIdea: "A signal waveform that resolves into a plus/cross symbol — tech meets medicine.",
    competitors: "Uniquely positioned for the tech-savvy Bay Area patient. No direct competitor uses this positioning.",
    bestFor: "Telehealth Model",
    risk: "Medium — 'Signal' is used broadly. The .com is taken. Strong trademark potential in Class 44.",
  },
  {
    id: "forma",
    name: "Forma Medical",
    tagline: "Physician-Prescribed. Clinically Proven.",
    angle: "Clean Clinical Trust",
    rating: 4,
    description: "Forma (from 'form' — biological form, physical form, optimal form) is clean, memorable, and positions the practice as a serious medical entity. 'Medical' as a suffix signals this is not a supplement company or a spa.",
    why: "For patients who are skeptical of the peptide space and want to know they're working with a real doctor, 'Forma Medical' immediately establishes credibility. It's the name you'd trust with your health.",
    domains: [
      { name: "formamedical.com", status: "check" },
      { name: "formamd.com", status: "check" },
      { name: "formamd.co", status: "likely-available" },
      { name: "forma.health", status: "check" },
    ],
    colors: ["#FFFFFF", "#F8F9FA", "#212529", "#0066CC"],
    colorNames: ["White", "Off-White", "Near Black", "Medical Blue"],
    fonts: ["Neue Montreal / Work Sans", "Inter"],
    logoIdea: "A clean wordmark in a strong sans-serif. A subtle '+' or cross integrated into the 'F' or 'A'.",
    competitors: "Competes with the clinical telehealth brands (Hone, Transcend) but with a stronger medical positioning.",
    bestFor: "Both Models",
    risk: "Low — clean, professional, no negative associations. Check trademark.",
  },
  {
    id: "morelli",
    name: "Morelli Longevity",
    tagline: "Family Medicine. Future Science.",
    angle: "Physician-Named / Trust",
    rating: 4,
    description: "Using the family name creates an immediate trust signal — a real doctor is putting their name on this. It's the oldest and most powerful branding strategy in medicine (Mayo Clinic, Cleveland Clinic, Sloane Kettering). It also creates a natural story: a father-son team bringing cutting-edge medicine to their community.",
    why: "In the Bay Area, where patients are paying $500–$2,000/month out of pocket, they want to know there's a real physician behind the brand. A named practice signals accountability, permanence, and personal commitment in a way that coined names cannot.",
    domains: [
      { name: "morellilongevity.com", status: "check-whois" },
      { name: "morellimd.com", status: "check-whois" },
      { name: "morelliclinic.com", status: "check-whois" },
      { name: "morelli.health", status: "likely-available" },
    ],
    colors: ["#1C3A5E", "#2E6DA4", "#F5F5F0", "#C9A84C"],
    colorNames: ["Deep Navy", "Physician Blue", "Warm White", "Heritage Gold"],
    fonts: ["Cormorant Garamond (display)", "Inter (body)"],
    logoIdea: "An elegant serif wordmark with a subtle caduceus or molecular motif. Timeless, like a law firm or private bank.",
    competitors: "No direct competitor uses a physician's family name in the Bay Area peptide/longevity space.",
    bestFor: "Bay Area Clinic",
    risk: "Low — the name is your dad's, so trademark is clean. DNS shows taken but likely a different Morelli.",
  },
];

const namingPrinciples = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Avoid 'Peptide' in the Name",
    desc: "Naming your clinic 'XYZ Peptides' is like naming a restaurant 'XYZ Ingredients.' It's too narrow, sounds gray-market, and will age poorly as the category evolves. Position as a longevity, optimization, or medical practice instead.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Own a Category Word",
    desc: "The strongest brands own a category: 'Longevity,' 'Optimization,' 'Performance,' 'Precision.' Choose one and build your identity around it. This makes marketing easier and creates a defensible positioning.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Domain Strategy: .co Over Waiting",
    desc: "Don't wait for the perfect .com. The best .com domains in health are taken. A .co or .health domain with a strong brand name is better than a weak .com. Patients find you via Google, not by typing URLs.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "The MD/Medical Suffix Rule",
    desc: "Adding 'MD' or 'Medical' to your name is a powerful differentiator in a space full of consumer wellness brands. It signals physician oversight, clinical standards, and prescription-grade treatment — exactly what your dad enables.",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Bay Area Aesthetic vs. Telehealth Aesthetic",
    desc: "Bay Area clinic: warm, premium, editorial (think Aesop, Equinox). Telehealth: clean, data-forward, tech-adjacent (think Linear, Stripe). Your visual identity should match your primary channel.",
  },
  {
    icon: <Type className="w-5 h-5" />,
    title: "Avoid the 'Wellness Trap'",
    desc: "Soft greens, watercolor logos, and words like 'holistic' or 'natural' signal low-credibility in 2026. The premium longevity market has moved toward clinical precision aesthetics — dark navies, sharp typography, data visualization.",
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  if (status === "taken") return (
    <span className="flex items-center gap-1 text-xs text-red-400 font-medium">
      <X className="w-3 h-3" /> Registered
    </span>
  );
  if (status === "likely-available") return (
    <span className="flex items-center gap-1 text-xs text-green-400 font-medium">
      <Check className="w-3 h-3" /> Likely Available
    </span>
  );
  return (
    <span className="flex items-center gap-1 text-xs text-yellow-400 font-medium">
      <ExternalLink className="w-3 h-3" /> Verify on GoDaddy
    </span>
  );
};

export default function Branding() {
  const [expanded, setExpanded] = useState<string | null>("helix");
  const [filter, setFilter] = useState<string>("All");

  const filters = ["All", "Bay Area Clinic", "Telehealth Model", "Both Models"];
  const filtered = filter === "All" ? brandConcepts : brandConcepts.filter(b => b.bestFor === filter || (filter === "Both Models" && b.bestFor === "Both Models"));

  return (
    <section id="branding" className="py-20 bg-[#0B2545]">
      <div className="container max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E0A96D]/10 border border-[#E0A96D]/30 rounded-full px-4 py-1.5 mb-6">
            <Palette className="w-4 h-4 text-[#E0A96D]" />
            <span className="text-[#E0A96D] text-sm font-medium tracking-wide uppercase">Brand Strategy</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Naming & Brand Identity
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl">
            In a crowded market, your brand name is your first clinical impression. Below are six strategic concepts across different positioning angles, with visual identity direction, domain guidance, and competitive rationale.
          </p>
        </div>

        {/* Nextara Health Hero Spotlight */}
        <div className="mb-14 relative overflow-hidden rounded-3xl border border-[#136F63]/40" style={{ background: 'linear-gradient(135deg, #0B2545 0%, #0d3060 40%, #0f3d4a 100%)' }}>
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #136F63 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          {/* Gold accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E0A96D] via-[#136F63] to-[#E0A96D]" />

          <div className="relative p-8 lg:p-12">
            {/* Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-[#E0A96D] text-[#0B2545] text-xs font-bold px-3 py-1.5 rounded-full">
                <Star className="w-3.5 h-3.5 fill-[#0B2545]" /> #1 BRAND RECOMMENDATION
              </span>
              <span className="inline-flex items-center gap-2 bg-[#136F63]/20 border border-[#136F63]/40 text-[#136F63] text-xs font-semibold px-3 py-1.5 rounded-full">
                <Globe className="w-3.5 h-3.5" /> All 9 Domains Available
              </span>
              <span className="inline-flex items-center gap-2 bg-[#0B2545]/60 border border-slate-600/40 text-slate-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                <Shield className="w-3.5 h-3.5" /> Trademarkable Coined Word
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left: Brand Identity */}
              <div>
                {/* Logo Concept */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black text-white border-2 border-[#136F63]" style={{ background: 'linear-gradient(135deg, #136F63, #0B2545)', fontFamily: "'Space Grotesk', sans-serif" }}>
                      N
                    </div>
                    <div>
                      <h3 className="text-4xl font-black text-white tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Nextara
                      </h3>
                      <p className="text-[#136F63] font-semibold text-sm tracking-widest uppercase">Health</p>
                    </div>
                  </div>
                </div>

                {/* Tagline Options */}
                <div className="mb-6">
                  <h4 className="text-[#E0A96D] text-xs font-semibold uppercase tracking-widest mb-3">Tagline Options</h4>
                  <div className="space-y-2">
                    {[
                      { line: "Next-Generation Medicine. Physician-Led.", note: "Primary — clinical authority" },
                      { line: "The Future of Your Biology.", note: "Aspirational — longevity market" },
                      { line: "Precision Peptides. Real Results.", note: "Direct — performance market" },
                      { line: "Where Science Meets Longevity.", note: "Category — Bay Area clinic" },
                      { line: "Your Protocol. Your Physician.", note: "Personal — telehealth model" },
                    ].map((t, i) => (
                      <div key={i} className="flex items-start gap-3 bg-[#0B2545]/60 rounded-lg px-4 py-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${i === 0 ? 'bg-[#E0A96D]' : 'bg-slate-600'}`} />
                        <div>
                          <p className={`text-sm font-medium ${i === 0 ? 'text-white' : 'text-slate-300'}`}>"{t.line}"</p>
                          <p className="text-slate-500 text-xs mt-0.5">{t.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color Palette */}
                <div>
                  <h4 className="text-[#E0A96D] text-xs font-semibold uppercase tracking-widest mb-3">Brand Color Palette</h4>
                  <div className="flex gap-3">
                    {[
                      { hex: "#0B2545", name: "Deep Navy", role: "Primary BG" },
                      { hex: "#136F63", name: "Teal", role: "Accent" },
                      { hex: "#E0A96D", name: "Gold", role: "Highlight" },
                      { hex: "#F0F7F4", name: "Soft White", role: "Text / BG" },
                    ].map((c, i) => (
                      <div key={i} className="flex-1">
                        <div className="w-full h-10 rounded-lg border border-slate-700/50 mb-2" style={{ backgroundColor: c.hex }} />
                        <p className="text-white text-xs font-semibold">{c.name}</p>
                        <p className="text-slate-500 text-xs font-mono">{c.hex}</p>
                        <p className="text-slate-500 text-xs">{c.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Name Analysis + Domains */}
              <div className="space-y-6">
                {/* Name Breakdown */}
                <div>
                  <h4 className="text-[#E0A96D] text-xs font-semibold uppercase tracking-widest mb-4">Name Anatomy</h4>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-[#0B2545]/70 border border-[#136F63]/30 rounded-xl p-4">
                      <div className="text-3xl font-black text-[#136F63] mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>NEXT</div>
                      <p className="text-white text-sm font-semibold">Forward-Looking</p>
                      <p className="text-slate-400 text-xs mt-1">Next-generation medicine. The next chapter of your health. What comes after conventional care.</p>
                    </div>
                    <div className="bg-[#0B2545]/70 border border-[#E0A96D]/30 rounded-xl p-4">
                      <div className="text-3xl font-black text-[#E0A96D] mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>ARA</div>
                      <p className="text-white text-sm font-semibold">Latin / Celestial</p>
                      <p className="text-slate-400 text-xs mt-1">Latin for "altar" — a place of transformation. Also a southern constellation — precision, navigation, science.</p>
                    </div>
                  </div>
                  <div className="bg-[#0B2545]/70 border border-slate-700/40 rounded-xl p-4">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Together, <strong className="text-white">Nextara</strong> sounds pharmaceutical-grade and premium — like a drug name that went through FDA review — without being clinical or cold. It's memorable, two syllables when spoken naturally ("nex-TARA"), and has zero prior use in healthcare.
                    </p>
                  </div>
                </div>

                {/* Domain Table */}
                <div>
                  <h4 className="text-[#E0A96D] text-xs font-semibold uppercase tracking-widest mb-3">Domain Availability</h4>
                  <div className="space-y-1.5">
                    {[
                      { domain: "nextarahealth.com", priority: "Primary", status: "✅ Likely Available" },
                      { domain: "nextara.co", priority: "Short / Modern", status: "✅ Likely Available" },
                      { domain: "nextarahealth.care", priority: "Healthcare TLD", status: "✅ Likely Available" },
                      { domain: "nextaramd.com", priority: "Defensive", status: "✅ Likely Available" },
                      { domain: "nextaramd.co", priority: "Defensive", status: "✅ Likely Available" },
                      { domain: "nextaramd.care", priority: "Defensive", status: "✅ Likely Available" },
                      { domain: "nextara.com", priority: "Premium Short", status: "✅ Likely Available" },
                      { domain: "nextara.co", priority: "Modern Short", status: "✅ Likely Available" },
                      { domain: "nextara.care", priority: "Healthcare Short", status: "✅ Likely Available" },
                    ].map((d, i) => (
                      <div key={i} className="flex items-center justify-between gap-2 bg-[#0B2545]/60 rounded-lg px-3 py-2">
                        <div className="flex items-center gap-3">
                          <span className="text-slate-300 text-xs font-mono">{d.domain}</span>
                          <span className="text-slate-600 text-xs hidden sm:inline">{d.priority}</span>
                        </div>
                        <span className="text-green-400 text-xs font-medium whitespace-nowrap">{d.status}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-500 text-xs mt-2">DNS-verified. Confirm on <a href="https://www.namecheap.com/domains/registration/results/?domain=nextarahealth" target="_blank" rel="noopener noreferrer" className="text-[#136F63] underline">Namecheap</a> before purchasing.</p>
                </div>

                {/* Action Items */}
                <div className="bg-[#136F63]/10 border border-[#136F63]/30 rounded-xl p-4">
                  <h4 className="text-[#136F63] text-xs font-semibold uppercase tracking-widest mb-3">Immediate Action Items</h4>
                  <div className="space-y-2">
                    {[
                      { step: "1", action: "Register nextarahealth.com + nextara.co", cost: "~$25/yr", urgency: "This Week" },
                      { step: "2", action: "Search USPTO TESS — Class 44 (Medical Services)", cost: "Free", urgency: "This Week" },
                      { step: "3", action: "Reserve @nextarahealth on Instagram, X, LinkedIn", cost: "Free", urgency: "Today" },
                      { step: "4", action: "File intent-to-use trademark application", cost: "~$350", urgency: "Before Launch" },
                    ].map((a, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#136F63]/30 border border-[#136F63]/50 flex items-center justify-center text-[#136F63] text-xs font-bold flex-shrink-0 mt-0.5">{a.step}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-slate-200 text-sm">{a.action}</p>
                          <div className="flex items-center gap-3 mt-0.5">
                            <span className="text-slate-500 text-xs">{a.cost}</span>
                            <span className={`text-xs font-medium ${a.urgency === 'Today' ? 'text-red-400' : a.urgency === 'This Week' ? 'text-[#E0A96D]' : 'text-slate-400'}`}>{a.urgency}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Naming Principles */}
        <div className="mb-14">
          <h3 className="text-xl font-semibold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Six Rules for Naming a Physician-Led Health Brand
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {namingPrinciples.map((p, i) => (
              <div key={i} className="bg-[#112240] border border-slate-700/50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#136F63]/20 border border-[#136F63]/30 flex items-center justify-center text-[#136F63]">
                    {p.icon}
                  </div>
                  <h4 className="text-white font-semibold text-sm">{p.title}</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-[#136F63] text-white border border-[#136F63]"
                  : "bg-[#112240] text-slate-400 border border-slate-700/50 hover:border-[#136F63]/50 hover:text-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Brand Concepts */}
        <div className="space-y-4">
          {filtered.map((brand) => (
            <div
              key={brand.id}
              className="bg-[#112240] border border-slate-700/50 rounded-2xl overflow-hidden"
            >
              {/* Card Header */}
              <button
                className="w-full text-left p-6 flex items-start justify-between gap-4"
                onClick={() => setExpanded(expanded === brand.id ? null : brand.id)}
              >
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  {/* Color Swatch */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden grid grid-cols-2">
                    {brand.colors.slice(0, 4).map((c, i) => (
                      <div key={i} style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {brand.name}
                      </h3>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#136F63]/20 text-[#136F63] border border-[#136F63]/30 font-medium">
                        {brand.angle}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#E0A96D]/10 text-[#E0A96D] border border-[#E0A96D]/30 font-medium">
                        Best for: {brand.bestFor}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm italic">"{brand.tagline}"</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < brand.rating ? "text-[#E0A96D] fill-[#E0A96D]" : "text-slate-600"}`} />
                    ))}
                  </div>
                  {expanded === brand.id
                    ? <ChevronUp className="w-5 h-5 text-slate-400" />
                    : <ChevronDown className="w-5 h-5 text-slate-400" />
                  }
                </div>
              </button>

              {/* Expanded Content */}
              {expanded === brand.id && (
                <div className="px-6 pb-6 border-t border-slate-700/50 pt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left: Strategy */}
                    <div className="lg:col-span-2 space-y-5">
                      <div>
                        <h4 className="text-[#136F63] text-xs font-semibold uppercase tracking-wider mb-2">Why This Name Works</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{brand.why}</p>
                      </div>
                      <div>
                        <h4 className="text-[#136F63] text-xs font-semibold uppercase tracking-wider mb-2">Name Meaning</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{brand.description}</p>
                      </div>
                      <div>
                        <h4 className="text-[#136F63] text-xs font-semibold uppercase tracking-wider mb-2">Logo Concept</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{brand.logoIdea}</p>
                      </div>
                      <div>
                        <h4 className="text-[#136F63] text-xs font-semibold uppercase tracking-wider mb-2">Competitive Positioning</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{brand.competitors}</p>
                      </div>
                      <div className="flex items-start gap-2 bg-[#0B2545] rounded-lg p-3">
                        <Shield className="w-4 h-4 text-[#E0A96D] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-[#E0A96D] text-xs font-semibold uppercase tracking-wider">Risk Assessment: </span>
                          <span className="text-slate-300 text-sm">{brand.risk}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Identity + Domains */}
                    <div className="space-y-5">
                      {/* Color Palette */}
                      <div>
                        <h4 className="text-[#136F63] text-xs font-semibold uppercase tracking-wider mb-3">Color Palette</h4>
                        <div className="space-y-2">
                          {brand.colors.map((c, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg border border-slate-600/50 flex-shrink-0" style={{ backgroundColor: c }} />
                              <div>
                                <div className="text-white text-xs font-medium">{brand.colorNames[i]}</div>
                                <div className="text-slate-500 text-xs font-mono">{c}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Typography */}
                      <div>
                        <h4 className="text-[#136F63] text-xs font-semibold uppercase tracking-wider mb-2">Typography</h4>
                        <div className="space-y-1">
                          {brand.fonts.map((f, i) => (
                            <div key={i} className="text-slate-300 text-sm">
                              <span className="text-slate-500 text-xs">{i === 0 ? "Display: " : "Body: "}</span>
                              {f}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Domains */}
                      <div>
                        <h4 className="text-[#136F63] text-xs font-semibold uppercase tracking-wider mb-3">Domain Options</h4>
                        <div className="space-y-2">
                          {brand.domains.map((d, i) => (
                            <div key={i} className="flex items-center justify-between gap-2 bg-[#0B2545] rounded-lg px-3 py-2">
                              <span className="text-slate-300 text-xs font-mono">{d.name}</span>
                              <StatusBadge status={d.status} />
                            </div>
                          ))}
                        </div>
                        <p className="text-slate-500 text-xs mt-2">
                          * DNS checks are indicative only. Verify on{" "}
                          <a href="https://www.godaddy.com" target="_blank" rel="noopener noreferrer" className="text-[#136F63] underline">
                            GoDaddy
                          </a>{" "}
                          or{" "}
                          <a href="https://www.namecheap.com" target="_blank" rel="noopener noreferrer" className="text-[#136F63] underline">
                            Namecheap
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#136F63]/20 to-[#E0A96D]/10 border border-[#136F63]/30 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-3">
            <Star className="w-5 h-5 text-[#E0A96D] fill-[#E0A96D]" />
            <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Our Recommendation
            </h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            <strong className="text-white">Nextara Health</strong> is the clear top pick for both models. It's a genuinely coined word with no prior healthcare use, all 9 domain variants across .com, .co, and .care appear available, and it scales nationally without geographic or personal name limitations. For the Bay Area clinic specifically, <strong className="text-white">Helix Health</strong> is the strongest alternative. For telehealth, <strong className="text-white">Cadence MD</strong> or <strong className="text-white">Signal Health</strong> are strong runners-up.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#0B2545] border border-[#E0A96D]/40 rounded-xl p-4 relative">
              <div className="absolute -top-2.5 left-4">
                <span className="bg-[#E0A96D] text-[#0B2545] text-xs font-bold px-2.5 py-0.5 rounded-full">⭐ #1 Overall</span>
              </div>
              <div className="text-[#E0A96D] text-xs font-semibold uppercase tracking-wider mb-2 mt-2">Both Models — Top Pick</div>
              <div className="text-white font-bold text-lg">Nextara Health</div>
              <div className="text-slate-400 text-sm mt-1">Coined, ownable, trademarkable. All domain variants available. Sounds like a premium biotech brand. Works for telehealth and clinic alike.</div>
              <div className="mt-3 flex flex-wrap gap-1">
                <span className="text-xs bg-[#136F63]/20 text-[#136F63] border border-[#136F63]/30 rounded px-2 py-0.5">nextarahealth.com ✅</span>
                <span className="text-xs bg-[#136F63]/20 text-[#136F63] border border-[#136F63]/30 rounded px-2 py-0.5">nextara.co ✅</span>
                <span className="text-xs bg-[#136F63]/20 text-[#136F63] border border-[#136F63]/30 rounded px-2 py-0.5">nextarahealth.care ✅</span>
              </div>
            </div>
            <div className="bg-[#112240] rounded-xl p-4">
              <div className="text-[#E0A96D] text-xs font-semibold uppercase tracking-wider mb-2">Bay Area Clinic — Runner Up</div>
              <div className="text-white font-bold text-lg">Helix Health</div>
              <div className="text-slate-400 text-sm mt-1">Strongest scientific credibility. DNA helix = biological depth. Ideal for a premium in-person clinic targeting educated Bay Area patients.</div>
            </div>
            <div className="bg-[#112240] rounded-xl p-4">
              <div className="text-[#E0A96D] text-xs font-semibold uppercase tracking-wider mb-2">Telehealth — Runner Up</div>
              <div className="text-white font-bold text-lg">Cadence MD</div>
              <div className="text-slate-400 text-sm mt-1">Performance + physician authority. Resonates with Bay Area tech professionals. Scalable nationally as a telehealth brand.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
