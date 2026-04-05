import { useState } from "react";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, XCircle, Info, ExternalLink, Target, Zap, Shield, DollarSign } from "lucide-react";

// ============================================================
// DESIGN: Biotech Pitch Deck — dark navy base, teal + gold accents
// Space Grotesk headings, Inter body
// Section: Competitive Analysis & Feasibility Review
// Layout: Tabs (Telehealth Market / Bay Area Market / Feasibility / Recommendations)
// ============================================================

const teleheathCompetitors = [
  {
    name: "Hone Health",
    type: "National Telehealth",
    model: "Membership ($25–$149/mo) + medication",
    strengths: ["Massive brand recognition", "40+ biomarker testing", "Physician-guided protocols"],
    weakness: "Focuses on TRT/hormones, limited peptide depth",
    pricing: "$149/mo + $175–$500/mo meds",
    threat: "medium",
    url: "https://honehealth.com",
    note: "Primarily TRT-focused — peptide offering is secondary. Your niche differentiation is viable here."
  },
  {
    name: "Vita Bella Health",
    type: "National Telehealth",
    model: "Prescription peptide programs, no membership",
    strengths: ["60% below competitors on price", "FDA-inspected pharmacy sourcing", "Clinical oversight included"],
    weakness: "No in-person option, limited Bay Area presence",
    pricing: "$199–$499/mo per program",
    threat: "high",
    url: "https://vitabella.com",
    note: "Direct telehealth peptide competitor. Differentiate on physician-led personalization and Bay Area local trust."
  },
  {
    name: "Maximus Tribe",
    type: "National Telehealth",
    model: "TRT + Sermorelin subscription",
    strengths: ["Strong brand in men's health", "Sermorelin at $174.99/mo", "At-home testing kit"],
    weakness: "Narrow peptide formulary, male-only focus",
    pricing: "$175–$360/mo",
    threat: "low",
    url: "https://maximustribe.com",
    note: "Male-only, narrow formulary. Low threat if you serve both genders and broader peptide categories."
  },
  {
    name: "Hims & Hers",
    type: "National Telehealth Giant",
    model: "DTC subscription, acquired peptide facility 2026",
    strengths: ["$1B+ marketing budget", "Massive existing patient base", "Acquired peptide manufacturing"],
    weakness: "Mass-market positioning, not personalized",
    pricing: "$99–$299/mo",
    threat: "high",
    url: "https://forhims.com",
    note: "The 800-lb gorilla. Cannot compete on price or scale. Compete on physician relationship, personalization, and Bay Area premium positioning."
  },
  {
    name: "Noom",
    type: "National Telehealth Giant",
    model: "Weight loss app + acquired peptide facility 2026",
    strengths: ["Behavioral health integration", "Massive user base", "Vertical integration via acquisition"],
    weakness: "App-first, not clinical-first",
    pricing: "$70–$200/mo",
    threat: "medium",
    url: "https://noom.com",
    note: "Weight loss focused. Not a direct competitor for longevity/performance peptide programs."
  },
  {
    name: "Superpower / eMed",
    type: "Funded Longevity Startup",
    model: "AI-guided diagnostics + longevity protocols",
    strengths: ["$200M raised (eMed)", "AI-driven personalization", "Strong VC backing"],
    weakness: "Not yet at scale, premium pricing",
    pricing: "$300–$600/mo",
    threat: "medium",
    url: "https://superpower.com",
    note: "Well-funded but early stage. The AI angle is their moat — your moat is the physician relationship and local Bay Area trust."
  },
];

const bayAreaCompetitors = [
  {
    name: "Fountain Life",
    type: "Premium Longevity Clinic",
    model: "Annual membership, AI diagnostics + therapeutics",
    strengths: ["Peter Diamandis / Tony Robbins brand", "CORE/APEX/FAMILY tiers", "Full diagnostics suite"],
    weakness: "Very high price point, not peptide-specific",
    pricing: "$3,500–$25,000/year membership",
    threat: "low",
    url: "https://fountainlife.com",
    note: "Ultra-premium tier. Different customer segment. Your clinic can be the accessible alternative at 1/5th the price."
  },
  {
    name: "Next Health",
    type: "Longevity & Wellness Center",
    model: "Membership tiers ($99–$399/mo) + à la carte services",
    strengths: ["Strong brand in LA/SF", "IV therapy, NAD+, hormone optimization", "Multiple locations"],
    weakness: "Not physician-led peptide prescribing, more spa-like",
    pricing: "$99–$399/mo membership + services",
    threat: "medium",
    url: "https://next-health.com",
    note: "Closest Bay Area competitor. Differentiate on prescription peptide depth and physician-led protocols vs. their spa-wellness positioning."
  },
  {
    name: "Nubo Spa (Berkeley)",
    type: "Med Spa + Peptide Telehealth",
    model: "In-person medspa + nationwide telehealth peptide delivery",
    strengths: ["#1 ranked Berkeley wellness", "Peptide + GLP-1 programs", "Direct-to-door shipping all 50 states"],
    weakness: "Spa brand, not clinical brand",
    pricing: "Contact for pricing (estimated $200–$500/mo)",
    threat: "high",
    url: "https://nubospa.com",
    note: "Directly in your Bay Area backyard. They already offer peptide + GLP-1 telehealth. Your advantage: physician-led, more clinical credibility."
  },
  {
    name: "Renew Vitality (SF)",
    type: "Hormone & Peptide Clinic",
    model: "TRT + peptide injections, in-person",
    strengths: ["Established SF presence", "Peptide injections on-site", "Insurance-adjacent billing"],
    weakness: "Older brand, less tech-forward",
    pricing: "$200–$600/mo",
    threat: "medium",
    url: "https://vitalityhrt.com",
    note: "Established but not innovating. A modern, physician-led brand with better digital presence can take market share."
  },
  {
    name: "Gameday Men's Health",
    type: "Franchise Clinic Chain",
    model: "TRT + wellness franchise, 400+ locations nationwide",
    strengths: ["400+ franchise locations", "Rapid expansion", "Proven franchise model"],
    weakness: "Male-only, TRT-first, not peptide-specialized",
    pricing: "$150–$350/mo",
    threat: "medium",
    url: "https://gamedaymenshealth.com",
    note: "Expanding fast but male-only and TRT-focused. Your broader peptide + longevity positioning differentiates clearly."
  },
  {
    name: "Dr. Toni Varela (East Bay)",
    type: "Independent Physician Practice",
    model: "Integrative medicine + peptide therapy",
    strengths: ["Local physician trust", "Personalized care", "Established patient base"],
    weakness: "Solo practice, limited scale",
    pricing: "Consult-based (est. $300–$500 consult)",
    threat: "low",
    url: "https://drtonivarela.com",
    note: "Solo practitioner — not a scalable competitor. Validates local demand for physician-led peptide care."
  },
];

const feasibilityItems = [
  {
    category: "Telehealth Model",
    score: 8,
    verdict: "Highly Feasible",
    color: "green",
    items: [
      { label: "Startup Cost", value: "$20K–$47K", status: "green", note: "Low barrier vs. $400K+ for physical clinic" },
      { label: "Time to First Revenue", value: "30–60 days", status: "green", note: "EHR + pharmacy partnership can be set up quickly" },
      { label: "Competitive Differentiation", value: "Moderate", status: "yellow", note: "Market is growing but Hims/Hers and Vita Bella are strong" },
      { label: "Physician Time Required", value: "5–10 hrs/week", status: "green", note: "Async model + NP delegation keeps doctor time minimal" },
      { label: "Regulatory Risk", value: "Moderate", status: "yellow", note: "FDA reclassification helps, but GLP-1 marketing crackdown is real" },
      { label: "Scalability", value: "Very High", status: "green", note: "No geographic ceiling — serve all 50 states" },
      { label: "Patient LTV", value: "$3,600–$8,400/yr", status: "green", note: "Subscription model drives predictable recurring revenue" },
    ]
  },
  {
    category: "Bay Area Clinic Model",
    score: 7,
    verdict: "Feasible with Right Execution",
    color: "teal",
    items: [
      { label: "Startup Cost", value: "$150K–$400K", status: "yellow", note: "Significant CAPEX for buildout, equipment, staffing" },
      { label: "Time to First Revenue", value: "6–12 months", status: "yellow", note: "Permitting, buildout, and credentialing take time" },
      { label: "Competitive Differentiation", value: "High", status: "green", note: "Premium market with affluent, health-conscious patients" },
      { label: "Physician Time Required", value: "20–40 hrs/week", status: "yellow", note: "In-person model requires more active involvement" },
      { label: "Regulatory Risk", value: "Lower", status: "green", note: "In-person prescribing is cleaner legally than pure telehealth" },
      { label: "Scalability", value: "Moderate", status: "yellow", note: "Geographic ceiling — limited to Bay Area unless you expand" },
      { label: "Patient LTV", value: "$6,000–$18,000/yr", status: "green", note: "Premium pricing + upsells drive higher LTV than telehealth" },
    ]
  }
];

const recommendations = [
  {
    priority: 1,
    title: "Start Telehealth First — Validate Before Investing in a Clinic",
    icon: <Zap className="w-5 h-5" />,
    color: "teal",
    rationale: "The telehealth market is proven, fast to launch, and requires 10x less capital. Use it to build a patient base, test your protocols, and generate cash flow before committing $150K–$400K to a physical clinic. Hims/Hers and Vita Bella prove the model works at scale.",
    action: "Launch telehealth in Q3 2026 targeting California, Texas, and Florida — the three largest states for async prescribing.",
    risk: "Increasing competition from well-funded players. Differentiate on physician relationship quality and personalized protocols."
  },
  {
    priority: 2,
    title: "Differentiate on Physician Credibility, Not Price",
    icon: <Shield className="w-5 h-5" />,
    color: "gold",
    rationale: "Vita Bella competes on price (60% below market). You cannot and should not try to win on price. Your dad's MD credentials, personalized protocols, and clinical depth are your moat. Patients who want the cheapest option will go to Vita Bella. Patients who want a real doctor will come to you.",
    action: "Lead all marketing with 'Physician-Led' and 'Board-Certified MD' messaging. Publish clinical content (blog, YouTube) to build authority.",
    risk: "Commoditization risk if you don't establish a strong brand early."
  },
  {
    priority: 3,
    title: "Target the Bay Area as a Premium Local Brand",
    icon: <Target className="w-5 h-5" />,
    color: "teal",
    rationale: "Nubo Spa (Berkeley) is your most direct local competitor and they are already doing peptide telehealth. But they are a spa brand, not a clinical brand. Next Health is wellness-focused, not prescription-focused. There is a clear gap for a physician-led, clinically rigorous peptide practice in the Bay Area.",
    action: "Open a lean clinic (1,200–1,500 sq ft) in San Francisco (Marina, Pacific Heights, or SoMa) or Palo Alto. Target tech executives and biohackers.",
    risk: "High commercial rent in SF ($60–$120/sq ft/yr). Consider starting in a shared medical suite to reduce CAPEX."
  },
  {
    priority: 4,
    title: "Move Now — The Window is Open But Closing",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "gold",
    rationale: "The Health Tech Nerds analysis confirms: 'Companies like Superpower and Hims seem well-positioned to pounce on this trend.' eMed just raised $200M. VITL (pharmacy-clinic connector) raised $7.5M. Noom and Hims acquired peptide facilities. The institutional money is moving in. The window for a lean, physician-led practice to establish brand authority before the giants dominate is 12–24 months.",
    action: "File LLC and begin EHR/pharmacy partnerships within 60 days. Aim for first patient by Q3 2026.",
    risk: "Waiting increases competition and patient acquisition costs. PeptideLeads reports leads at $50 now — this will rise."
  },
  {
    priority: 5,
    title: "Watch the GLP-1 Marketing Crackdown Closely",
    icon: <AlertTriangle className="w-5 h-5" />,
    color: "red",
    rationale: "The FDA sent warning letters to telehealth companies in March 2026 for GLP-1 marketing claims. The Medvi AI telehealth legal analysis warns of compliance risks in telehealth peptide marketing. This is a real risk that could impact your telehealth model if you market aggressively.",
    action: "Work with a healthcare attorney (budget $5K–$10K) to review all marketing copy before launch. Avoid outcome-based claims.",
    risk: "Non-compliance could result in FDA warning letters, state medical board actions, or DEA scrutiny."
  },
];

const statusColor = (status: string) => {
  if (status === "green") return "text-emerald-400";
  if (status === "yellow") return "text-amber-400";
  if (status === "red") return "text-red-400";
  return "text-slate-400";
};

const statusIcon = (status: string) => {
  if (status === "green") return <CheckCircle className="w-4 h-4 text-emerald-400" />;
  if (status === "yellow") return <AlertTriangle className="w-4 h-4 text-amber-400" />;
  if (status === "red") return <XCircle className="w-4 h-4 text-red-400" />;
  return <Info className="w-4 h-4 text-slate-400" />;
};

const threatBadge = (threat: string) => {
  if (threat === "high") return <span className="px-2 py-0.5 rounded text-xs font-semibold bg-red-900/50 text-red-300 border border-red-700/50">High Threat</span>;
  if (threat === "medium") return <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-900/50 text-amber-300 border border-amber-700/50">Medium</span>;
  return <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-900/50 text-emerald-300 border border-emerald-700/50">Low Threat</span>;
};

export default function CompetitiveAnalysis() {
  const [activeTab, setActiveTab] = useState<"telehealth" | "bayarea" | "feasibility" | "recommendations">("telehealth");

  const tabs = [
    { id: "telehealth", label: "Telehealth Competitors" },
    { id: "bayarea", label: "Bay Area Competitors" },
    { id: "feasibility", label: "Feasibility Scores" },
    { id: "recommendations", label: "Recommendations" },
  ] as const;

  return (
    <section id="competitive" className="py-24 bg-[#0d1f35]">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-teal-400" />
            <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase">Market Intelligence</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Competitive Analysis & Feasibility
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl">
            A real-world assessment of who you're competing against, how the market is moving, and an honest feasibility verdict on both business models — with actionable recommendations.
          </p>
        </div>

        {/* Market Pulse Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: <TrendingUp className="w-5 h-5 text-teal-400" />, label: "Market Status", value: "Rapidly Growing", sub: "2–3x clinic count since 2024" },
            { icon: <AlertTriangle className="w-5 h-5 text-amber-400" />, label: "Competition Level", value: "Intensifying", sub: "Hims + Noom acquired facilities" },
            { icon: <DollarSign className="w-5 h-5 text-emerald-400" />, label: "Lead Cost (Now)", value: "$50/lead", sub: "Will rise as competition grows" },
            { icon: <Zap className="w-5 h-5 text-gold-400" style={{ color: "#E0A96D" }} />, label: "Entry Window", value: "12–24 Months", sub: "Before institutional dominance" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#0b1929] border border-slate-700/50 rounded-xl p-4 flex items-start gap-3">
              <div className="mt-0.5">{stat.icon}</div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{stat.label}</div>
                <div className="text-white font-bold text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{stat.value}</div>
                <div className="text-slate-500 text-xs mt-0.5">{stat.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-teal-500 text-white"
                  : "bg-[#0b1929] text-slate-400 border border-slate-700/50 hover:border-teal-500/50 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab: Telehealth Competitors */}
        {activeTab === "telehealth" && (
          <div className="space-y-4">
            <p className="text-slate-400 text-sm mb-6">
              The national telehealth peptide market is dominated by well-funded players. Here is who you are competing against and how to position against each.
            </p>
            {teleheathCompetitors.map((comp, i) => (
              <div key={i} className="bg-[#0b1929] border border-slate-700/50 rounded-xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{comp.name}</h3>
                      {threatBadge(comp.threat)}
                    </div>
                    <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider">{comp.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-400 text-xs mb-1">Pricing</div>
                    <div className="text-amber-300 font-semibold text-sm">{comp.pricing}</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">Strengths</div>
                    <ul className="space-y-1">
                      {comp.strengths.map((s, j) => (
                        <li key={j} className="flex items-center gap-2 text-slate-300 text-sm">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">Weakness</div>
                    <p className="text-slate-300 text-sm flex items-start gap-2">
                      <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      {comp.weakness}
                    </p>
                  </div>
                </div>
                <div className="bg-teal-900/20 border border-teal-700/30 rounded-lg p-3">
                  <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">Your Positioning vs. {comp.name}</div>
                  <p className="text-slate-300 text-sm">{comp.note}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Bay Area Competitors */}
        {activeTab === "bayarea" && (
          <div className="space-y-4">
            <p className="text-slate-400 text-sm mb-6">
              The Bay Area has a growing but fragmented longevity and peptide clinic landscape. Most competitors are either spa-wellness brands or TRT-focused — leaving a clear gap for a physician-led peptide practice.
            </p>
            {bayAreaCompetitors.map((comp, i) => (
              <div key={i} className="bg-[#0b1929] border border-slate-700/50 rounded-xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{comp.name}</h3>
                      {threatBadge(comp.threat)}
                    </div>
                    <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider">{comp.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-400 text-xs mb-1">Pricing</div>
                    <div className="text-amber-300 font-semibold text-sm">{comp.pricing}</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">Strengths</div>
                    <ul className="space-y-1">
                      {comp.strengths.map((s, j) => (
                        <li key={j} className="flex items-center gap-2 text-slate-300 text-sm">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">Weakness</div>
                    <p className="text-slate-300 text-sm flex items-start gap-2">
                      <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      {comp.weakness}
                    </p>
                  </div>
                </div>
                <div className="bg-teal-900/20 border border-teal-700/30 rounded-lg p-3">
                  <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">Your Positioning vs. {comp.name}</div>
                  <p className="text-slate-300 text-sm">{comp.note}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Feasibility */}
        {activeTab === "feasibility" && (
          <div className="space-y-8">
            {feasibilityItems.map((model, i) => (
              <div key={i} className="bg-[#0b1929] border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{model.category}</h3>
                    <div className={`text-sm font-semibold ${model.color === "green" ? "text-emerald-400" : "text-teal-400"}`}>{model.verdict}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">Feasibility Score</div>
                    <div className="text-5xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {model.score}<span className="text-slate-500 text-2xl">/10</span>
                    </div>
                  </div>
                </div>
                {/* Score bar */}
                <div className="w-full bg-slate-800 rounded-full h-2 mb-6">
                  <div
                    className={`h-2 rounded-full ${model.color === "green" ? "bg-emerald-400" : "bg-teal-400"}`}
                    style={{ width: `${model.score * 10}%` }}
                  />
                </div>
                <div className="space-y-3">
                  {model.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-3 py-2 border-b border-slate-800 last:border-0">
                      <div className="mt-0.5">{statusIcon(item.status)}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-slate-300 text-sm font-medium">{item.label}</span>
                          <span className={`text-sm font-bold ${statusColor(item.status)}`}>{item.value}</span>
                        </div>
                        <p className="text-slate-500 text-xs mt-0.5">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Overall verdict */}
            <div className="bg-gradient-to-r from-teal-900/30 to-[#0b1929] border border-teal-700/40 rounded-xl p-6">
              <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Overall Verdict</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Both models are feasible for a physician-led team. The <strong className="text-teal-400">Telehealth model</strong> is the lower-risk, faster-to-revenue path and should be launched first. The <strong className="text-teal-400">Bay Area Clinic</strong> is the higher-upside, higher-investment path that makes sense as Phase 2 once the telehealth model is generating $20K–$40K/month in recurring revenue. The biggest risk to both models is not the business fundamentals — it is the speed of institutional competition entering the market in 2026.
              </p>
            </div>
          </div>
        )}

        {/* Tab: Recommendations */}
        {activeTab === "recommendations" && (
          <div className="space-y-5">
            <p className="text-slate-400 text-sm mb-6">
              Based on the competitive landscape and feasibility analysis, here are five prioritized, actionable recommendations.
            </p>
            {recommendations.map((rec, i) => (
              <div key={i} className={`bg-[#0b1929] border rounded-xl p-6 ${
                rec.color === "red" ? "border-red-700/40" : rec.color === "gold" ? "border-amber-700/40" : "border-teal-700/40"
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    rec.color === "red" ? "bg-red-900/50 text-red-400" : rec.color === "gold" ? "bg-amber-900/50 text-amber-400" : "bg-teal-900/50 text-teal-400"
                  }`}>
                    {rec.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        rec.color === "red" ? "bg-red-900/50 text-red-400" : rec.color === "gold" ? "bg-amber-900/50 text-amber-400" : "bg-teal-900/50 text-teal-400"
                      }`}>Priority {rec.priority}</span>
                    </div>
                    <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{rec.title}</h3>
                    <p className="text-slate-400 text-sm mb-3 leading-relaxed">{rec.rationale}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">Action</div>
                        <p className="text-slate-300 text-sm">{rec.action}</p>
                      </div>
                      <div className="bg-red-900/20 rounded-lg p-3">
                        <div className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-1">Risk to Watch</div>
                        <p className="text-slate-300 text-sm">{rec.risk}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Sources */}
            <div className="bg-[#0b1929] border border-slate-700/50 rounded-xl p-5 mt-4">
              <div className="text-slate-500 text-xs uppercase tracking-wider mb-3">Sources</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-500">
                {[
                  ["PeptideLeads", "peptide-therapy-market-2026-growth-trends-and-opportunities", "https://peptideleads.com/blog/peptide-therapy-market-2026-growth-trends-and-opportunities"],
                  ["Health Tech Nerds", "Weekly Reads 3/29/26 — Peptide Craze Analysis", "https://www.healthtechnerds.com/p/weekly-health-tech-reads-3-29-26"],
                  ["Inside Health Policy", "Telehealth Companies Jump Onto Peptides", "https://insidehealthpolicy.com/inside-telehealth-daily-news/telehealth-companies-jump-peptides-amid-expected-fda-ref-relief"],
                  ["Vita Bella", "Vita Bella vs. Competitors Pricing Analysis", "https://vitabella.com/blog/vita-bella-vs-competitors-affordable-peptides/"],
                  ["Hone Health", "Membership & Pricing", "https://honehealth.com"],
                  ["Fountain Life", "Membership Tiers", "https://fountainlife.com/membership"],
                  ["Nubo Spa", "Peptide Therapy Berkeley", "https://nubospa.com/medspa-berkeley/wellness/peptide-therapy/"],
                  ["Luma Lex Law", "AI Telehealth Legal Risks (Medvi)", "https://www.lumalexlaw.com/2026/04/03/medvi-ai-telehealth-legal-risks/"],
                ].map(([source, desc, url], i) => (
                  <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-teal-400 transition-colors">
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                    <span><strong>{source}</strong> — {desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
