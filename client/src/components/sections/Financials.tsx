import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, ArrowRight, Info } from "lucide-react";

// ─── MODEL A: Patient Buys at Pharmacy ────────────────────────────────────────
const modelAExample = {
  title: "Model A — Patient Buys Direct from Pharmacy",
  subtitle: "You write the prescription. The pharmacy ships directly to the patient. You collect a consultation + program management fee only.",
  color: "border-blue-500",
  accentColor: "text-blue-400",
  badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  steps: [
    { label: "Patient pays pharmacy", value: "$250/month", note: "Pharmacy sets the price (e.g., BPC-157 30-day supply)" },
    { label: "Pharmacy pays doctor (if any)", value: "$0", note: "Doctors CANNOT receive a kickback from the pharmacy — illegal under anti-kickback statute" },
    { label: "Your clinic charges", value: "$149–$249 consult fee", note: "One-time intake fee billed directly to patient" },
    { label: "Monthly program management fee", value: "$75–$150/month", note: "Ongoing check-in, protocol adjustments, refill authorization" },
    { label: "Your gross revenue per patient/month", value: "~$75–$150", note: "After initial consult is amortized" },
    { label: "Your COGS", value: "~$0", note: "You never touch or buy the compound — zero inventory risk" },
    { label: "Your net margin", value: "~90%+", note: "Pure service revenue — almost no overhead per patient" },
  ],
  pros: [
    "Zero inventory risk — you never buy or hold compounds",
    "No pharmacy licensing required",
    "Simplest compliance structure",
    "Works perfectly for telehealth at scale",
  ],
  cons: [
    "Lower revenue per patient ($75–$150/mo vs $400–$800/mo)",
    "You don't control pricing or product quality",
    "Patient relationship is split between you and the pharmacy",
    "Harder to upsell — patient sees two separate bills",
  ],
};

// ─── MODEL B: Clinic Dispenses / Buys at Wholesale ────────────────────────────
const modelBExample = {
  title: "Model B — Clinic Buys Wholesale, Sells at Markup",
  subtitle: "Your clinic purchases compounds from a 503A pharmacy at wholesale cost, then dispenses them to patients at a marked-up retail price as part of a bundled program.",
  color: "border-[#136F63]",
  accentColor: "text-[#136F63]",
  badgeColor: "bg-[#136F63]/20 text-emerald-400 border-[#136F63]/30",
  steps: [
    { label: "Clinic buys from 503A pharmacy (wholesale)", value: "$40–$80/month", note: "e.g., BPC-157 30-day supply at wholesale cost" },
    { label: "Clinic sells to patient (retail program price)", value: "$350–$495/month", note: "Bundled as '8-Week Recovery Protocol' — patient pays clinic" },
    { label: "Gross profit on compound alone", value: "$270–$415/month", note: "Before any overhead" },
    { label: "Add: Consultation fee", value: "$249 one-time", note: "Initial intake, labs review, protocol design" },
    { label: "Add: Follow-up / check-in fee", value: "$75–$100/month", note: "Monthly protocol management" },
    { label: "Total revenue per patient/month", value: "$425–$595/month", note: "Compound + management fee combined" },
    { label: "Total COGS per patient/month", value: "$40–$80/month", note: "Compound cost only — the dominant cost" },
    { label: "Gross profit per patient/month", value: "$345–$515/month", note: "~85–87% gross margin" },
  ],
  pros: [
    "5–7x more revenue per patient vs. Model A",
    "You control the full patient experience and pricing",
    "Bundled programs feel premium — higher perceived value",
    "Subscription model creates predictable recurring revenue",
  ],
  cons: [
    "Requires upfront inventory purchase (cash flow consideration)",
    "More complex compliance — must document dispensing properly",
    "Requires a physician to authorize each dispensing",
    "Some states require additional dispensing permits",
  ],
};

// ─── WORKED EXAMPLE ───────────────────────────────────────────────────────────
const workedExample = {
  peptide: "Semaglutide (GLP-1) — 12-Week Weight Loss Program",
  pharmacy_cost: "$60",
  clinic_price: "$399",
  consult: "$249",
  monthly_mgmt: "$99",
  rows: [
    { label: "Pharmacy wholesale cost (per month)", revenue: "—", cost: "$60", profit: "—", note: "What clinic pays 503A pharmacy" },
    { label: "Compound retail price (per month)", revenue: "$399", cost: "$60", profit: "$339", note: "85% gross margin on compound" },
    { label: "Initial consultation (one-time)", revenue: "$249", cost: "$15", profit: "$234", note: "~94% margin — mostly physician time" },
    { label: "Monthly management fee", revenue: "$99", cost: "$8", profit: "$91", note: "~92% margin — async check-in" },
    { label: "Month 1 total (consult + compound + mgmt)", revenue: "$747", cost: "$83", profit: "$664", note: "89% gross margin in Month 1" },
    { label: "Month 2–12 (recurring, no consult)", revenue: "$498/mo", cost: "$68/mo", profit: "$430/mo", note: "86% gross margin recurring" },
    { label: "12-Month Patient LTV (total revenue)", revenue: "$6,227", cost: "$823", profit: "$5,404", note: "87% blended gross margin over 12 months" },
  ],
};

// ─── SCALE TABLE ──────────────────────────────────────────────────────────────
const scaleRows = [
  { patients: 10, modelA_rev: "$1,250", modelA_profit: "$1,125", modelB_rev: "$4,980", modelB_profit: "$4,300" },
  { patients: 25, modelA_rev: "$3,125", modelA_profit: "$2,813", modelB_rev: "$12,450", modelB_profit: "$10,750" },
  { patients: 50, modelA_rev: "$6,250", modelA_profit: "$5,625", modelB_rev: "$24,900", modelB_profit: "$21,500" },
  { patients: 100, modelA_rev: "$12,500", modelA_profit: "$11,250", modelB_rev: "$49,800", modelB_profit: "$43,000" },
  { patients: 200, modelA_rev: "$25,000", modelA_profit: "$22,500", modelB_rev: "$99,600", modelB_profit: "$86,000" },
];

// ─── SCENARIOS ────────────────────────────────────────────────────────────────
const scenarios = [
  {
    phase: "Phase 1: Telehealth Launch",
    timeline: "Months 1–12",
    color: "teal",
    rows: [
      { label: "Startup Capital Required", value: "$20K–$47K", note: "" },
      { label: "Patients at Month 3", value: "15–25 active", note: "Word of mouth + soft launch" },
      { label: "Monthly Revenue (Mo. 3)", value: "$12K–$22K", note: "Model B avg. $498/patient/mo" },
      { label: "Patients at Month 6", value: "50 active", note: "" },
      { label: "Monthly Revenue (Mo. 6)", value: "~$45,000", note: "$498 avg. recurring/patient" },
      { label: "COGS (Mo. 6)", value: "~$3,500", note: "$70/patient avg. compound cost" },
      { label: "Operating Costs (Mo. 6)", value: "$5,000–$8,000", note: "Platform, NP, compliance" },
      { label: "Net Profit (Mo. 6)", value: "~$33,500–$36,500", note: "~74–81% net margin" },
      { label: "Patients at Month 12", value: "150 active", note: "" },
      { label: "Monthly Revenue (Mo. 12)", value: "~$150,000", note: "" },
      { label: "Year 1 Total Revenue", value: "$600K–$1.2M", note: "Conservative–growth scenario" },
    ],
  },
  {
    phase: "Phase 2: Bay Area Clinic",
    timeline: "Year 2+",
    color: "gold",
    rows: [
      { label: "Clinic Buildout Capital", value: "$150K–$500K", note: "Self-funded from Phase 1 profits" },
      { label: "Break-Even Timeline", value: "~13 months", note: "From clinic open date" },
      { label: "Revenue per Patient (in-person)", value: "$1,200–$3,500", note: "Premium bundled programs" },
      { label: "Target Monthly Patients", value: "80–120", note: "At capacity" },
      { label: "Monthly Revenue (Yr 2)", value: "$150K–$350K", note: "Clinic + telehealth combined" },
      { label: "COGS (Yr 2)", value: "10–14% of revenue", note: "Compound cost as % of revenue" },
      { label: "EBITDA Margin", value: "42–55%", note: "After all staff and overhead" },
      { label: "Year 2 EBITDA Target", value: "$500K–$1M+", note: "" },
      { label: "Valuation (5x EBITDA)", value: "$2.5M–$5M+", note: "Conservative exit multiple" },
    ],
  },
];

// ─── RISKS ────────────────────────────────────────────────────────────────────
const risks = [
  { risk: "FDA Policy Reversal", severity: "High", mitigation: "Maintain a diversified formulary. Sermorelin and PT-141 are compoundable today regardless of 2026 reclassification outcome." },
  { risk: "Payment Processing", severity: "Medium", mitigation: "Use a specialized high-risk merchant account (e.g., PaymentCloud, Durango Merchant Services) from Day 1. Never use Stripe or Square." },
  { risk: "Physician License Risk", severity: "High", mitigation: "Strict protocol adherence, mandatory chart audits, malpractice insurance, and a healthcare attorney review all standing orders before launch." },
  { risk: "Compounding Pharmacy Quality", severity: "Medium", mitigation: "Partner exclusively with PCAB-accredited 503A pharmacies. Require sterility testing certificates and lot tracing for every batch." },
  { risk: "Competition / Price Compression", severity: "Low", mitigation: "The physician co-founder is a durable competitive moat. Differentiate on clinical quality, not price." },
];

export default function Financials() {
  const [activeModel, setActiveModel] = useState<"A" | "B">("B");

  return (
    <section id="financials" className="py-24 bg-[oklch(0.20_0.05_252)]">
      <div className="container mx-auto max-w-7xl px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[oklch(0.52_0.12_175)]" />
            <span className="text-[oklch(0.76_0.12_65)] text-sm font-mono tracking-widest uppercase">06 — Financial Breakdown</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Revenue vs. Profit —<br />
            <span className="text-[oklch(0.52_0.12_175)]">How You Actually Make Money</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            There are two fundamentally different ways to structure revenue. Understanding the difference between a service-only model and a clinic-dispensed model is the single most important financial decision you'll make.
          </p>
        </motion.div>

        {/* ── The Two Models ── */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            The Two Revenue Models
          </h3>
          <p className="text-white/50 text-sm mb-8">
            The core question: does the patient pay the pharmacy directly, or does your clinic buy the compound wholesale and sell it at a markup?
          </p>

          {/* Model Toggle */}
          <div className="flex gap-2 mb-8 bg-[#0B2545] rounded-lg p-1 w-fit">
            <button
              onClick={() => setActiveModel("A")}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${activeModel === "A" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}
            >
              Model A — Patient Pays Pharmacy
            </button>
            <button
              onClick={() => setActiveModel("B")}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${activeModel === "B" ? "bg-[#136F63] text-white" : "text-gray-400 hover:text-white"}`}
            >
              Model B — Clinic Dispenses ★ Recommended
            </button>
          </div>

          {/* Model Detail */}
          {[modelAExample, modelBExample].map((model, idx) => {
            if ((idx === 0 && activeModel !== "A") || (idx === 1 && activeModel !== "B")) return null;
            return (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`border-l-4 ${model.color} bg-[#0B2545] rounded-r-xl p-6 mb-6`}
              >
                <h4 className={`text-xl font-bold mb-1 ${model.accentColor}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {model.title}
                </h4>
                <p className="text-white/50 text-sm mb-6">{model.subtitle}</p>

                {/* Money Flow */}
                <div className="space-y-2 mb-6">
                  {model.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4 py-2.5 border-b border-white/5">
                      <div className="flex-1">
                        <div className="text-white/80 text-sm">{step.label}</div>
                        <div className="text-white/30 text-xs mt-0.5">{step.note}</div>
                      </div>
                      <div className={`text-sm font-bold whitespace-nowrap ${model.accentColor}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {step.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pros / Cons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#0d1f35] rounded-lg p-4">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">Advantages</div>
                    <ul className="space-y-2">
                      {model.pros.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                          <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#0d1f35] rounded-lg p-4">
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">Considerations</div>
                    <ul className="space-y-2">
                      {model.cons.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                          <span className="text-amber-400 mt-0.5 shrink-0">→</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Worked Example ── */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Worked Example (Model B)
          </h3>
          <p className="text-white/50 text-sm mb-6">
            A single patient on a 12-month Semaglutide weight loss program. All numbers use real 503A pharmacy wholesale pricing.
          </p>
          <div className="bg-[#0B2545] rounded-xl border border-[#1a3a5c] overflow-hidden">
            <div className="p-4 bg-[#136F63]/10 border-b border-[#136F63]/30">
              <div className="text-[#136F63] font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                📋 {workedExample.peptide}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0d1f35] border-b border-[#1a3a5c]">
                    <th className="text-left p-4 text-gray-400 font-medium">Item</th>
                    <th className="text-right p-4 text-[#E0A96D] font-medium">Revenue</th>
                    <th className="text-right p-4 text-red-400 font-medium">COGS</th>
                    <th className="text-right p-4 text-[#136F63] font-medium">Gross Profit</th>
                    <th className="text-left p-4 text-gray-500 font-medium hidden md:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {workedExample.rows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-[#1a3a5c] ${
                        i === workedExample.rows.length - 1
                          ? "bg-[#136F63]/10 font-bold"
                          : i % 2 === 0 ? "bg-[#0B2545]" : "bg-[#0d1f35]"
                      }`}
                    >
                      <td className="p-4 text-white">{row.label}</td>
                      <td className="p-4 text-right text-[#E0A96D] font-semibold">{row.revenue}</td>
                      <td className="p-4 text-right text-red-400 font-semibold">{row.cost}</td>
                      <td className={`p-4 text-right font-bold ${row.profit === "—" ? "text-gray-600" : "text-[#136F63]"}`}>{row.profit}</td>
                      <td className="p-4 text-gray-500 text-xs hidden md:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 p-4 bg-[#136F63]/10 border border-[#136F63]/30 rounded-lg flex items-start gap-3">
            <Info className="w-4 h-4 text-[#136F63] shrink-0 mt-0.5" />
            <p className="text-sm text-white/70">
              <span className="text-white font-semibold">Key insight:</span> The compound itself costs the clinic $60/month. The patient pays $399/month for it as part of a bundled program. That $339 spread — multiplied across 100–200 patients — is the engine of this business. The consultation and management fees are gravy on top.
            </p>
          </div>
        </div>

        {/* ── Scale Table ── */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Revenue at Scale: Model A vs. Model B
          </h3>
          <p className="text-white/50 text-sm mb-6">
            Monthly recurring revenue comparison at different patient volumes. Model A assumes $125/patient/mo avg. Model B assumes $498/patient/mo avg.
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#1a3a5c]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0d1f35] border-b border-[#1a3a5c]">
                  <th className="text-left p-4 text-gray-400 font-medium">Active Patients</th>
                  <th className="text-right p-4 text-blue-400 font-medium">Model A Revenue</th>
                  <th className="text-right p-4 text-blue-300 font-medium">Model A Profit</th>
                  <th className="text-right p-4 text-[#E0A96D] font-medium">Model B Revenue</th>
                  <th className="text-right p-4 text-[#136F63] font-medium">Model B Profit</th>
                  <th className="text-right p-4 text-gray-500 font-medium hidden sm:table-cell">Difference</th>
                </tr>
              </thead>
              <tbody>
                {scaleRows.map((row, i) => (
                  <tr key={i} className={`border-b border-[#1a3a5c] ${i % 2 === 0 ? "bg-[#0B2545]" : "bg-[#0d1f35]"}`}>
                    <td className="p-4 text-white font-bold">{row.patients} patients</td>
                    <td className="p-4 text-right text-blue-400">{row.modelA_rev}</td>
                    <td className="p-4 text-right text-blue-300">{row.modelA_profit}</td>
                    <td className="p-4 text-right text-[#E0A96D] font-semibold">{row.modelB_rev}</td>
                    <td className="p-4 text-right text-[#136F63] font-bold">{row.modelB_profit}</td>
                    <td className="p-4 text-right text-gray-400 hidden sm:table-cell">
                      {`${(parseInt(row.modelB_profit.replace(/[$K,]/g, "")) / parseInt(row.modelA_profit.replace(/[$K,]/g, ""))).toFixed(1)}x more`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">* Profit estimates use 90% margin for Model A (pure service) and 86% gross margin for Model B. Does not include operating overhead.</p>
        </div>

        {/* ── Phase Projections ── */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Two-Phase Financial Projections
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {scenarios.map((scenario) => (
              <div
                key={scenario.phase}
                className={`bg-[oklch(0.18_0.055_252)] border-t-4 ${scenario.color === "teal" ? "border-[oklch(0.52_0.12_175)]" : "border-[oklch(0.76_0.12_65)]"} p-8 rounded-b-xl`}
              >
                <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${scenario.color === "teal" ? "text-[oklch(0.52_0.12_175)]" : "text-[oklch(0.76_0.12_65)]"}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {scenario.timeline}
                </div>
                <h3 className="text-xl font-extrabold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {scenario.phase}
                </h3>
                <div className="space-y-2">
                  {scenario.rows.map((row) => (
                    <div key={row.label} className="flex justify-between items-start gap-4 py-2 border-b border-white/5">
                      <div>
                        <div className="text-white/70 text-sm">{row.label}</div>
                        {row.note && <div className="text-white/30 text-xs">{row.note}</div>}
                      </div>
                      <div className={`text-sm font-bold whitespace-nowrap ${scenario.color === "teal" ? "text-[oklch(0.52_0.12_175)]" : "text-[oklch(0.76_0.12_65)]"}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {row.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Risk Table ── */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Key Risks & Mitigations
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/40 text-xs uppercase tracking-widest pb-3 pr-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Risk</th>
                  <th className="text-left text-white/40 text-xs uppercase tracking-widest pb-3 pr-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Severity</th>
                  <th className="text-left text-white/40 text-xs uppercase tracking-widest pb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Mitigation</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((r) => (
                  <tr key={r.risk} className="border-b border-white/5">
                    <td className="py-4 pr-6 text-white font-semibold whitespace-nowrap" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{r.risk}</td>
                    <td className="py-4 pr-6">
                      <span className={`text-xs font-bold px-2 py-1 ${
                        r.severity === "High"
                          ? "bg-[oklch(0.76_0.12_65/0.15)] text-[oklch(0.76_0.12_65)]"
                          : r.severity === "Medium"
                          ? "bg-[oklch(0.52_0.12_175/0.15)] text-[oklch(0.62_0.10_175)]"
                          : "bg-white/5 text-white/40"
                      }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {r.severity}
                      </span>
                    </td>
                    <td className="py-4 text-white/50 leading-relaxed">{r.mitigation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
