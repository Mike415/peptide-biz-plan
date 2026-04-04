import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, Shield, AlertTriangle, CheckCircle, Clock } from "lucide-react";

type LegalStatus = "prescribable" | "reclassified-2026" | "restricted" | "fda-approved";

interface Peptide {
  id: string;
  name: string;
  aka?: string;
  category: string;
  emoji: string;
  legalStatus: LegalStatus;
  legalNote: string;
  mechanism: string;
  primaryUses: string[];
  clinicalEvidence: "strong" | "moderate" | "emerging";
  evidenceNote: string;
  sideEffects: string[];
  typicalProtocol: string;
  clinicPrice: string;
  cogs: string;
  demandRating: number;
  prescribingNotes: string;
  furtherReading: { title: string; url: string; source: string }[];
}

const peptides: Peptide[] = [
  {
    id: "semaglutide",
    name: "Semaglutide",
    aka: "Ozempic / Wegovy",
    category: "Metabolic",
    emoji: "⚖️",
    legalStatus: "fda-approved",
    legalNote: "FDA-approved (Ozempic/Wegovy). Compounded versions allowed when brand unavailable — currently in flux as shortage status changes.",
    mechanism: "GLP-1 receptor agonist. Slows gastric emptying, reduces appetite, improves insulin sensitivity.",
    primaryUses: ["Weight loss (15–20% body weight)", "Type 2 diabetes management", "Cardiovascular risk reduction"],
    clinicalEvidence: "strong",
    evidenceNote: "Extensive Phase 3 trial data (STEP trials). Real-world data confirms 14–16.5% mean weight loss at 1 year.",
    sideEffects: ["Nausea (most common, transient)", "Vomiting", "Constipation", "Rare: pancreatitis"],
    typicalProtocol: "Weekly SQ injection. Titrate from 0.25mg → 2.4mg over 16–20 weeks.",
    clinicPrice: "$299–$499/month (compounded)",
    cogs: "$40–$80/month",
    demandRating: 5,
    prescribingNotes: "Highest demand peptide in the market. Requires BMI ≥30 or ≥27 with comorbidity for on-label use. Off-label prescribing is common and legal. Compounded versions require 503A pharmacy.",
    furtherReading: [
      { title: "STEP 1 Trial: Semaglutide 2.4mg for Obesity", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183", source: "NEJM" },
      { title: "Real-World Weight Loss with Semaglutide", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12579654/", source: "PMC / NIH" },
    ],
  },
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    aka: "Mounjaro / Zepbound",
    category: "Metabolic",
    emoji: "🔥",
    legalStatus: "fda-approved",
    legalNote: "FDA-approved (Mounjaro/Zepbound). Compounded versions allowed during shortage periods.",
    mechanism: "Dual GIP + GLP-1 receptor agonist. More potent than semaglutide alone for weight loss.",
    primaryUses: ["Weight loss (20–22% body weight — superior to semaglutide)", "Type 2 diabetes", "NASH/fatty liver"],
    clinicalEvidence: "strong",
    evidenceNote: "SURMOUNT trials show superior weight loss vs semaglutide. Meta-analysis confirms tirzepatide reduces body weight ~16.5% vs ~14.1% for semaglutide.",
    sideEffects: ["Nausea", "Diarrhea", "Decreased appetite", "Injection site reactions"],
    typicalProtocol: "Weekly SQ injection. Titrate from 2.5mg → 15mg over 20 weeks.",
    clinicPrice: "$349–$549/month (compounded)",
    cogs: "$50–$100/month",
    demandRating: 5,
    prescribingNotes: "Growing faster than semaglutide in 2025–2026. Same prescribing criteria. Compounded tirzepatide is legal during shortage. Highest patient satisfaction scores.",
    furtherReading: [
      { title: "Comparative Efficacy: Tirzepatide vs Semaglutide", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12151102/", source: "PMC / NIH" },
      { title: "SURMOUNT-1 Trial Results", url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038", source: "NEJM" },
    ],
  },
  {
    id: "bpc157",
    name: "BPC-157",
    aka: "Body Protection Compound",
    category: "Recovery",
    emoji: "🩹",
    legalStatus: "reclassified-2026",
    legalNote: "Reclassified to Category 1 in March 2026 — now legally compoundable by licensed 503A pharmacies with a valid prescription.",
    mechanism: "Derived from human gastric juice protein. Promotes fibroblast activity, angiogenesis, modulates nitric oxide system, and reduces inflammation.",
    primaryUses: ["Tendon & ligament repair", "Gut healing (leaky gut, IBD)", "Joint inflammation", "Post-surgical recovery", "Muscle injury"],
    clinicalEvidence: "moderate",
    evidenceNote: "Robust animal studies. Limited human RCTs but strong clinical anecdotal evidence. NIH 2026 paper confirms mechanism in orthopedics.",
    sideEffects: ["Generally well-tolerated", "Mild nausea (rare)", "Injection site discomfort"],
    typicalProtocol: "250–500mcg SQ or IM daily for 4–8 weeks. Can also be taken orally for gut-specific effects.",
    clinicPrice: "$350–$495/month",
    cogs: "$30–$60/month",
    demandRating: 5,
    prescribingNotes: "One of the most requested peptides post-2026 reclassification. Ideal for athletic recovery programs and post-surgical patients. Often stacked with TB-500.",
    furtherReading: [
      { title: "Therapeutic Peptides in Orthopaedics (2026)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12753158/", source: "PMC / NIH" },
      { title: "BPC-157 Reclassification — Purefico", url: "https://www.purefico.com/post/fda-peptide-reclassification/", source: "Purefico" },
      { title: "Beginner's Guide to Peptide Therapy 2026", url: "https://www.innerbody.com/beginners-guide-to-peptide-therapy", source: "InnerBody" },
    ],
  },
  {
    id: "cjc-ipamorelin",
    name: "CJC-1295 / Ipamorelin",
    aka: "GH Stack",
    category: "Anti-Aging",
    emoji: "💪",
    legalStatus: "reclassified-2026",
    legalNote: "Both reclassified to Category 1 in 2026. Previously banned from compounding in 2023. Now legally available via 503A pharmacy with prescription.",
    mechanism: "CJC-1295 is a GHRH analogue; Ipamorelin is a ghrelin mimetic. Together they produce a synergistic, pulsatile release of growth hormone from the pituitary.",
    primaryUses: ["Anti-aging / longevity", "Muscle mass & recovery", "Fat loss", "Sleep quality improvement", "Skin elasticity"],
    clinicalEvidence: "moderate",
    evidenceNote: "Ipamorelin has solid Phase 2 data. CJC-1295 has published human trials showing sustained GH elevation. Combination is widely used in clinical practice.",
    sideEffects: ["Water retention (initial)", "Mild fatigue", "Tingling/numbness", "Headache (rare)"],
    typicalProtocol: "100–200mcg of each, SQ injection, 5 nights/week before sleep. 3–6 month cycles.",
    clinicPrice: "$350–$600/month",
    cogs: "$50–$90/month",
    demandRating: 4,
    prescribingNotes: "The most popular anti-aging stack. Excellent for patients 35+ concerned with body composition, energy, and recovery. Requires IGF-1 baseline lab.",
    furtherReading: [
      { title: "CJC-1295/Ipamorelin Complete Guide", url: "https://wittmerrejuvenationclinic.com/cjc1295-ipamorelin-complete-guide/", source: "Wittmer Clinic" },
      { title: "Your Guide to Peptide Stacking", url: "https://driphydration.com/blog/peptide-stacking/", source: "Drip Hydration" },
    ],
  },
  {
    id: "sermorelin",
    name: "Sermorelin",
    aka: "GHRH Analogue",
    category: "Anti-Aging",
    emoji: "🌙",
    legalStatus: "prescribable",
    legalNote: "Legally prescribable and compoundable. Has been available through compounding pharmacies consistently. One of the most established peptides in clinical use.",
    mechanism: "Synthetic analogue of growth hormone-releasing hormone (GHRH). Stimulates the pituitary gland to produce and secrete natural GH.",
    primaryUses: ["Growth hormone deficiency (adult)", "Anti-aging / longevity", "Sleep improvement", "Fat loss", "Energy & libido"],
    clinicalEvidence: "strong",
    evidenceNote: "FDA-approved for pediatric GH deficiency. Extensive off-label use in adults with solid clinical data. Considered safer than synthetic HGH.",
    sideEffects: ["Injection site redness", "Flushing", "Headache", "Dizziness (rare)"],
    typicalProtocol: "200–500mcg SQ injection nightly before sleep. 3–6 month cycles with breaks.",
    clinicPrice: "$300–$600/month",
    cogs: "$40–$80/month",
    demandRating: 4,
    prescribingNotes: "The 'safe' GH peptide. Ideal for patients hesitant about stronger secretagogues. Requires IGF-1 monitoring. Great entry-level anti-aging protocol.",
    furtherReading: [
      { title: "Ultimate Guide to Peptides 2025", url: "https://vitalizemedical.com/the-ultimate-guide-to-peptides-2025-types-benefits-and-fda-regulations/", source: "Vitalize Medical" },
      { title: "Can Doctors Prescribe Peptides? 2026 Legal Guide", url: "https://floridahealthcarelawfirm.com/can-doctors-prescribe-peptides/", source: "FL Healthcare Law" },
    ],
  },
  {
    id: "tb500",
    name: "TB-500",
    aka: "Thymosin Beta-4",
    category: "Recovery",
    emoji: "🔧",
    legalStatus: "reclassified-2026",
    legalNote: "Reclassified to Category 1 in March 2026. Previously removed from compounding in 2023. Now legally available via 503A pharmacy.",
    mechanism: "Promotes actin polymerization, cell migration, and tissue regeneration. Reduces inflammation and oxidative stress in injured tissue.",
    primaryUses: ["Muscle tear recovery", "Tendon repair", "Cardiac tissue protection", "Wound healing", "Flexibility improvement"],
    clinicalEvidence: "moderate",
    evidenceNote: "Strong animal data. Human clinical trials limited but promising. Widely used in sports medicine. Often stacked with BPC-157 for synergistic healing.",
    sideEffects: ["Generally well-tolerated", "Mild fatigue", "Headache (rare)"],
    typicalProtocol: "2–2.5mg SQ injection, 2x/week for 4–6 weeks (loading), then 1x/week maintenance.",
    clinicPrice: "$400–$600/month",
    cogs: "$60–$100/month",
    demandRating: 4,
    prescribingNotes: "Frequently stacked with BPC-157 as the 'ultimate recovery stack.' Highly popular with athletes, weekend warriors, and post-surgical patients.",
    furtherReading: [
      { title: "Beginner's Guide to Peptide Therapy 2026", url: "https://www.innerbody.com/beginners-guide-to-peptide-therapy", source: "InnerBody" },
      { title: "Peptide Stacking Guide", url: "https://driphydration.com/blog/peptide-stacking/", source: "Drip Hydration" },
    ],
  },
  {
    id: "pt141",
    name: "PT-141",
    aka: "Bremelanotide",
    category: "Sexual Health",
    emoji: "❤️",
    legalStatus: "prescribable",
    legalNote: "FDA-approved as Vyleesi (for female hypoactive sexual desire disorder). Compounded versions widely available for both men and women.",
    mechanism: "Melanocortin receptor agonist (MC3R/MC4R). Acts centrally on the brain to increase sexual desire — unlike PDE5 inhibitors which work peripherally.",
    primaryUses: ["Female sexual dysfunction (HSDD)", "Male erectile dysfunction (non-vascular)", "Libido enhancement", "Sexual arousal"],
    clinicalEvidence: "strong",
    evidenceNote: "FDA-approved for women (Vyleesi). Multiple RCTs confirm efficacy. Unique mechanism makes it effective when Viagra/Cialis fail.",
    sideEffects: ["Nausea (most common, 40%)", "Flushing", "Transient blood pressure increase", "Headache"],
    typicalProtocol: "1.75mg SQ injection 45 min before sexual activity. Max 1x/24 hours.",
    clinicPrice: "$100–$250/dose (2–4 doses/month)",
    cogs: "$15–$35/dose",
    demandRating: 4,
    prescribingNotes: "High-margin, high-demand upsell. Patients rarely discuss with primary care doctors — your clinic becomes their trusted source. Works for both men and women.",
    furtherReading: [
      { title: "PT-141: The Powerful, Passionate Peptide", url: "https://peptideresearch.us/pt-141-the-powerful-passionate-peptide/", source: "Peptide Research" },
      { title: "FDA Approval: Vyleesi (Bremelanotide)", url: "https://www.fda.gov/drugs/drug-approvals-and-databases/drug-trials-snapshots-vyleesi", source: "FDA.gov" },
    ],
  },
  {
    id: "nad",
    name: "NAD+",
    aka: "Nicotinamide Adenine Dinucleotide",
    category: "Longevity",
    emoji: "⚡",
    legalStatus: "prescribable",
    legalNote: "Not a peptide technically, but universally offered alongside peptide therapy. Available as IV infusion, SQ injection, or oral supplement. No prescription required for oral/topical forms.",
    mechanism: "Essential coenzyme in cellular energy metabolism (ATP production). Activates sirtuins and PARP enzymes involved in DNA repair and aging.",
    primaryUses: ["Energy & fatigue", "Cognitive function", "Addiction recovery", "Anti-aging / longevity", "Athletic performance"],
    clinicalEvidence: "moderate",
    evidenceNote: "Strong preclinical data. Human trials show benefits in energy, cognitive function, and metabolic health. IV form produces most dramatic results.",
    sideEffects: ["Flushing during IV infusion", "Nausea", "Fatigue post-infusion (temporary)"],
    typicalProtocol: "IV: 500–1000mg over 2–4 hours, 1–3x/week. SQ: 100mg daily. Oral: 500mg/day NMN or NR.",
    clinicPrice: "$150–$400/IV session; $75–$150/month SQ",
    cogs: "$20–$60/session",
    demandRating: 4,
    prescribingNotes: "Premium longevity offering. IV NAD+ is a high-perceived-value service perfect for Bay Area tech clients. SQ version great for telehealth subscription.",
    furtherReading: [
      { title: "NAD+ and Aging: Mechanisms and Interventions", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7238909/", source: "PMC / NIH" },
      { title: "Profit Models & Pricing Strategies", url: "https://shinerx.com/profit-models-pricing-strategies/", source: "ShineRx" },
    ],
  },
  {
    id: "ghkcu",
    name: "GHK-Cu",
    aka: "Copper Peptide",
    category: "Anti-Aging",
    emoji: "✨",
    legalStatus: "reclassified-2026",
    legalNote: "Reclassified to Category 1 in 2026. Available via 503A compounding pharmacy with prescription. Also available in topical form without prescription.",
    mechanism: "Naturally occurring copper complex. Stimulates collagen synthesis, promotes wound healing, and has antioxidant and anti-inflammatory properties.",
    primaryUses: ["Skin rejuvenation & anti-aging", "Hair loss (topical)", "Wound healing", "Collagen production"],
    clinicalEvidence: "moderate",
    evidenceNote: "Multiple human studies confirm skin benefits. Topical formulations well-studied. Injectable form increasingly used in aesthetics.",
    sideEffects: ["Minimal — generally very well tolerated", "Mild skin irritation (topical)"],
    typicalProtocol: "Topical: 1–2x daily. Injectable: 1–2mg SQ 2–3x/week.",
    clinicPrice: "$150–$350/month",
    cogs: "$20–$50/month",
    demandRating: 3,
    prescribingNotes: "Excellent add-on for aesthetics-focused patients. Can be offered as topical without a prescription, making it a low-barrier entry product.",
    furtherReading: [
      { title: "GHK-Cu: A Review of Biological Properties", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4940426/", source: "PMC / NIH" },
      { title: "2026 FDA Peptide Reclassification", url: "https://www.purefico.com/post/fda-peptide-reclassification/", source: "Purefico" },
    ],
  },
  {
    id: "thymosin-alpha",
    name: "Thymosin Alpha-1",
    aka: "Tα1 / Zadaxin",
    category: "Immune",
    emoji: "🛡️",
    legalStatus: "reclassified-2026",
    legalNote: "Reclassified to Category 1 in March 2026. FDA-approved in 40+ countries as Zadaxin. Now compoundable in the US via 503A pharmacy.",
    mechanism: "Modulates T-cell activity and enhances innate and adaptive immune responses. Increases IL-2 and interferon production.",
    primaryUses: ["Immune system support", "Chronic infections", "Post-COVID recovery", "Cancer adjunct therapy", "Autoimmune conditions"],
    clinicalEvidence: "strong",
    evidenceNote: "Approved in 40+ countries. Extensive clinical data from hepatitis B/C trials. Growing evidence for long COVID and immune optimization.",
    sideEffects: ["Injection site discomfort", "Mild fatigue", "Generally very well tolerated"],
    typicalProtocol: "1.6mg SQ injection, 2x/week for 6–12 weeks.",
    clinicPrice: "$400–$700/month",
    cogs: "$80–$150/month",
    demandRating: 3,
    prescribingNotes: "Niche but growing rapidly post-COVID. Ideal for patients with chronic fatigue, frequent illness, or post-viral syndromes. High perceived value.",
    furtherReading: [
      { title: "Thymosin Alpha-1 Clinical Review", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7310678/", source: "PMC / NIH" },
      { title: "2026 FDA Peptide Reclassification", url: "https://www.purefico.com/post/fda-peptide-reclassification/", source: "Purefico" },
    ],
  },
];

const categories = ["All", "Metabolic", "Recovery", "Anti-Aging", "Sexual Health", "Longevity", "Immune"];

const statusConfig: Record<LegalStatus, { label: string; color: string; icon: React.ReactNode }> = {
  "fda-approved": {
    label: "FDA Approved",
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    icon: <CheckCircle className="w-3 h-3" />,
  },
  "prescribable": {
    label: "Prescribable",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    icon: <Shield className="w-3 h-3" />,
  },
  "reclassified-2026": {
    label: "Reclassified 2026 ✦",
    color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    icon: <Clock className="w-3 h-3" />,
  },
  "restricted": {
    label: "Restricted",
    color: "bg-red-500/20 text-red-400 border-red-500/30",
    icon: <AlertTriangle className="w-3 h-3" />,
  },
};

const evidenceConfig = {
  strong: { label: "Strong Evidence", color: "text-emerald-400" },
  moderate: { label: "Moderate Evidence", color: "text-amber-400" },
  emerging: { label: "Emerging Evidence", color: "text-blue-400" },
};

function DemandDots({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((d) => (
        <div
          key={d}
          className={`w-2 h-2 rounded-full ${d <= rating ? "bg-[#E0A96D]" : "bg-gray-700"}`}
        />
      ))}
    </div>
  );
}

export default function PeptideEncyclopedia() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedPeptide, setExpandedPeptide] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? peptides
    : peptides.filter((p) => p.category === activeCategory);

  return (
    <section id="encyclopedia" className="py-24 bg-[#0B2545]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#E0A96D]" />
            <span className="text-[#E0A96D] text-sm font-mono tracking-widest uppercase">Peptide Encyclopedia</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            What to <span className="text-[#136F63]">Prescribe</span> & Why
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A clinical reference for the most commercially relevant peptides — covering mechanism, evidence, legal status, prescribing notes, and further reading.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mt-6">
            {Object.entries(statusConfig).map(([key, val]) => (
              <div key={key} className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${val.color}`}>
                {val.icon}
                {val.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? "bg-[#136F63] text-white border-[#136F63]"
                  : "text-gray-400 border-[#1a3a5c] hover:border-[#136F63]/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Peptide Cards */}
        <div className="space-y-4">
          {filtered.map((peptide, i) => {
            const status = statusConfig[peptide.legalStatus];
            const evidence = evidenceConfig[peptide.clinicalEvidence];
            const isExpanded = expandedPeptide === peptide.id;

            return (
              <motion.div
                key={peptide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`border rounded-xl overflow-hidden transition-all ${
                  isExpanded ? "border-[#136F63]" : "border-[#1a3a5c] hover:border-[#136F63]/50"
                }`}
              >
                {/* Card Header */}
                <button
                  onClick={() => setExpandedPeptide(isExpanded ? null : peptide.id)}
                  className="w-full flex items-start gap-4 p-5 bg-[#0d1f35] text-left"
                >
                  <span className="text-3xl mt-0.5">{peptide.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {peptide.name}
                      </h3>
                      {peptide.aka && (
                        <span className="text-gray-500 text-sm">({peptide.aka})</span>
                      )}
                      <span className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border ${status.color}`}>
                        {status.icon}
                        {status.label}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-2">{peptide.mechanism}</p>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <div>
                        <span className="text-xs text-gray-500">Demand </span>
                        <DemandDots rating={peptide.demandRating} />
                      </div>
                      <div>
                        <span className={`text-xs font-medium ${evidence.color}`}>{evidence.label}</span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">Clinic price: </span>
                        <span className="text-xs text-[#E0A96D] font-semibold">{peptide.clinicPrice}</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 mt-1">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="p-5 bg-[#0B2545] border-t border-[#136F63]/30 space-y-5">
                    {/* Legal Status */}
                    <div className={`rounded-lg p-3 border text-sm ${status.color}`}>
                      <div className="flex items-center gap-2 font-semibold mb-1">
                        {status.icon}
                        Legal & Prescribing Status
                      </div>
                      <p className="text-gray-300">{peptide.legalNote}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Left Column */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Primary Uses</h4>
                          <ul className="space-y-1">
                            {peptide.primaryUses.map((use, j) => (
                              <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#136F63] shrink-0" />
                                {use}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Typical Protocol</h4>
                          <p className="text-sm text-gray-300 bg-[#0d1f35] rounded p-3">{peptide.typicalProtocol}</p>
                        </div>

                        <div>
                          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Side Effects</h4>
                          <div className="flex flex-wrap gap-2">
                            {peptide.sideEffects.map((se, j) => (
                              <span key={j} className="text-xs text-gray-400 bg-[#0d1f35] px-2 py-1 rounded">
                                {se}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Clinical Evidence</h4>
                          <p className="text-sm text-gray-300 bg-[#0d1f35] rounded p-3">
                            <span className={`font-semibold ${evidence.color}`}>{evidence.label}: </span>
                            {peptide.evidenceNote}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Unit Economics</h4>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-[#0d1f35] rounded p-3">
                              <div className="text-xs text-gray-500 mb-1">Clinic Price</div>
                              <div className="text-[#E0A96D] font-bold text-sm">{peptide.clinicPrice}</div>
                            </div>
                            <div className="bg-[#0d1f35] rounded p-3">
                              <div className="text-xs text-gray-500 mb-1">COGS (pharmacy)</div>
                              <div className="text-white font-bold text-sm">{peptide.cogs}</div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Prescribing Notes</h4>
                          <p className="text-sm text-gray-300 bg-[#0d1f35] rounded p-3">{peptide.prescribingNotes}</p>
                        </div>
                      </div>
                    </div>

                    {/* Further Reading */}
                    <div>
                      <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-3">Further Reading</h4>
                      <div className="flex flex-wrap gap-2">
                        {peptide.furtherReading.map((link, j) => (
                          <a
                            key={j}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-[#136F63] hover:text-[#E0A96D] bg-[#0d1f35] border border-[#1a3a5c] hover:border-[#136F63] px-3 py-1.5 rounded-full transition-all"
                          >
                            <ExternalLink className="w-3 h-3 shrink-0" />
                            {link.title}
                            <span className="text-gray-600">· {link.source}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 p-4 bg-[#0d1f35] border border-[#1a3a5c] rounded-lg">
          <p className="text-xs text-gray-500">
            <span className="text-gray-400 font-semibold">Disclaimer:</span> This reference is for business planning purposes only. All prescribing decisions must be made by a licensed physician based on individual patient evaluation. Legal status of compounded peptides is subject to change. Consult a healthcare attorney before launching clinical operations. Sources: FDA.gov, PubMed/NIH, Purefico (March 2026), Vitalize Medical, ShineRx, InnerBody (Jan 2026).
          </p>
        </div>
      </div>
    </section>
  );
}
