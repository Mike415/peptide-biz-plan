import { useState } from "react";

const categories = ["All", "Recovery", "Metabolic", "Cognitive", "Anti-Aging", "Hormonal"];

const peptides = [
  {
    name: "BPC-157",
    category: "Recovery",
    status: "2026 Reclassification",
    statusColor: "teal",
    use: "Tissue repair, gut healing, tendon/ligament recovery",
    route: "Injectable or oral",
    price: "$150–$300/vial",
    demand: "Very High",
    notes: "One of the most requested peptides. Expected to return to compoundable status in 2026.",
  },
  {
    name: "CJC-1295 / Ipamorelin",
    category: "Hormonal",
    status: "2026 Reclassification",
    statusColor: "teal",
    use: "Growth hormone stimulation, body composition, sleep quality",
    route: "Injectable (combo)",
    price: "$200–$400/vial",
    demand: "Very High",
    notes: "Most popular GH secretagogue stack. Widely used for anti-aging and athletic recovery.",
  },
  {
    name: "Semaglutide (GLP-1)",
    category: "Metabolic",
    status: "Restricted (Rx Only)",
    statusColor: "gold",
    use: "Weight loss, metabolic health, blood sugar regulation",
    route: "Injectable",
    price: "$250–$600/month",
    demand: "Extreme",
    notes: "FDA cracking down on compounding. Requires brand-name Rx or FDA-approved generic. High liability.",
  },
  {
    name: "Tirzepatide (GIP/GLP-1)",
    category: "Metabolic",
    status: "Restricted (Rx Only)",
    statusColor: "gold",
    use: "Weight loss, type 2 diabetes, metabolic syndrome",
    route: "Injectable",
    price: "$300–$700/month",
    demand: "Extreme",
    notes: "Mounjaro/Zepbound. Same restrictions as semaglutide. Compounding still under legal challenge.",
  },
  {
    name: "Thymosin Alpha-1 (Tα1)",
    category: "Recovery",
    status: "2026 Reclassification",
    statusColor: "teal",
    use: "Immune modulation, chronic infections, post-viral recovery",
    route: "Injectable",
    price: "$200–$450/vial",
    demand: "High",
    notes: "Strong post-COVID demand. Immune support and anti-inflammatory applications.",
  },
  {
    name: "TB-500 (Thymosin Beta-4)",
    category: "Recovery",
    status: "Research Use Only",
    statusColor: "neutral",
    use: "Wound healing, muscle repair, inflammation reduction",
    route: "Injectable",
    price: "$150–$350/vial",
    demand: "High",
    notes: "Currently in regulatory gray area. Widely used by athletes. Monitor 2026 reclassification list.",
  },
  {
    name: "Sermorelin",
    category: "Hormonal",
    status: "FDA Approved (Compound)",
    statusColor: "green",
    use: "Growth hormone deficiency, anti-aging, body composition",
    route: "Injectable",
    price: "$150–$300/vial",
    demand: "Moderate",
    notes: "Fully compoundable today. Solid, lower-risk option to launch with immediately.",
  },
  {
    name: "PT-141 (Bremelanotide)",
    category: "Hormonal",
    status: "FDA Approved (Vyleesi)",
    statusColor: "green",
    use: "Sexual dysfunction (male and female), libido enhancement",
    route: "Injectable or nasal",
    price: "$150–$300/vial",
    demand: "High",
    notes: "FDA-approved for HSDD in women. Strong demand from both genders. Compoundable.",
  },
  {
    name: "Selank / Semax",
    category: "Cognitive",
    status: "2026 Reclassification",
    statusColor: "teal",
    use: "Anxiety reduction, cognitive enhancement, neuroprotection",
    route: "Nasal spray",
    price: "$100–$250/vial",
    demand: "Moderate",
    notes: "Russian-developed peptides with strong nootropic following. Expected in 2026 reclassification.",
  },
  {
    name: "GHK-Cu (Copper Peptide)",
    category: "Anti-Aging",
    status: "Cosmetic / Compoundable",
    statusColor: "green",
    use: "Skin regeneration, collagen synthesis, wound healing",
    route: "Topical or injectable",
    price: "$80–$200/vial",
    demand: "High",
    notes: "Dual-use: topical skincare AND injectable. Opens the cosmetics revenue stream.",
  },
  {
    name: "Epithalon",
    category: "Anti-Aging",
    status: "Research Use Only",
    statusColor: "neutral",
    use: "Telomere extension, longevity, sleep regulation",
    route: "Injectable",
    price: "$150–$350/vial",
    demand: "Moderate",
    notes: "Highly popular in the longevity community. Regulatory status unclear — monitor 2026 list.",
  },
  {
    name: "AOD-9604",
    category: "Metabolic",
    status: "2026 Reclassification",
    statusColor: "teal",
    use: "Fat metabolism, weight loss (without GLP-1 side effects)",
    route: "Injectable or oral",
    price: "$100–$250/vial",
    demand: "High",
    notes: "GH fragment. Positioned as a safer alternative to GLP-1 agonists for fat loss.",
  },
];

const statusColors: Record<string, string> = {
  teal: "bg-[oklch(0.52_0.12_175/0.15)] text-[oklch(0.62_0.10_175)] border-[oklch(0.52_0.12_175/0.3)]",
  gold: "bg-[oklch(0.76_0.12_65/0.15)] text-[oklch(0.76_0.12_65)] border-[oklch(0.76_0.12_65/0.3)]",
  green: "bg-[oklch(0.55_0.15_145/0.15)] text-[oklch(0.65_0.12_145)] border-[oklch(0.55_0.15_145/0.3)]",
  neutral: "bg-white/5 text-white/50 border-white/10",
};

const demandColors: Record<string, string> = {
  "Extreme": "text-[oklch(0.76_0.12_65)] font-extrabold",
  "Very High": "text-[oklch(0.52_0.12_175)] font-bold",
  "High": "text-white/80 font-semibold",
  "Moderate": "text-white/50",
};

export default function PeptideMenu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? peptides
    : peptides.filter((p) => p.category === activeCategory);

  return (
    <section id="peptides" className="py-24 bg-[oklch(0.18_0.055_252)]">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[oklch(0.52_0.12_175)]" />
            <span className="section-label">05 — Peptide Formulary</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What to Prescribe
            <br />
            <span className="text-[oklch(0.52_0.12_175)]">& What to Avoid</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            Not all peptides are created equal from a business perspective. This formulary ranks each peptide by demand, regulatory status, and profitability to help you build the right menu from Day 1.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            { color: "teal", label: "2026 Reclassification (Opportunity)" },
            { color: "green", label: "Currently Compoundable" },
            { color: "gold", label: "Restricted / High Risk" },
            { color: "neutral", label: "Research Use Only (Gray Area)" },
          ].map((l) => (
            <div key={l.label} className={`flex items-center gap-2 px-3 py-1.5 border text-xs ${statusColors[l.color]}`}>
              <div className="w-2 h-2 rounded-full bg-current" />
              {l.label}
            </div>
          ))}
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[oklch(0.52_0.12_175)] text-white"
                  : "bg-[oklch(0.22_0.05_252)] text-white/50 hover:text-white/80 border border-white/10"
              }`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Peptide grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <div
              key={p.name}
              className="bg-[oklch(0.22_0.05_252)] border border-white/10 p-6 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-white font-extrabold text-lg leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {p.name}
                </div>
                <div className={`text-xs px-2 py-1 border whitespace-nowrap flex-shrink-0 ${statusColors[p.statusColor]}`} style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                  {p.status}
                </div>
              </div>

              <div className="text-white/50 text-sm leading-relaxed">{p.use}</div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <div className="text-white/30 uppercase tracking-wide mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Route</div>
                  <div className="text-white/70">{p.route}</div>
                </div>
                <div>
                  <div className="text-white/30 uppercase tracking-wide mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Price</div>
                  <div className="text-[oklch(0.76_0.12_65)] font-semibold">{p.price}</div>
                </div>
                <div>
                  <div className="text-white/30 uppercase tracking-wide mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Demand</div>
                  <div className={`${demandColors[p.demand]} text-xs`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.demand}</div>
                </div>
              </div>

              <div className="text-white/40 text-xs leading-relaxed border-t border-white/5 pt-3">
                {p.notes}
              </div>
            </div>
          ))}
        </div>

        {/* Source note */}
        <div className="mt-8 p-4 bg-[oklch(0.22_0.05_252)] border border-white/10">
          <div className="text-white/30 text-xs leading-relaxed">
            <strong className="text-white/50">Sources:</strong> Holt Law US Peptide Industry Report 2025 · EliteNP FDA Reclassification 2026 · OptimaNtra Most In-Demand Peptides 2026 · Medical Director Co. Peptide Therapy Guide · FDA Compounding Category Lists (503A)
          </div>
        </div>
      </div>
    </section>
  );
}
