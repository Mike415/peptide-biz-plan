const scenarios = [
  {
    phase: "Phase 1: Telehealth Launch",
    timeline: "Months 1–12",
    color: "teal",
    rows: [
      { label: "Startup Capital Required", value: "$20K–$47K", note: "" },
      { label: "Patients at Month 6", value: "50 patients", note: "" },
      { label: "Monthly Revenue (Mo. 6)", value: "~$45,000", note: "$900 avg. program" },
      { label: "Operating Costs/Month", value: "$5,000–$8,000", note: "Platform, licensing, NP" },
      { label: "Monthly Profit (Mo. 6)", value: "~$37,000", note: "~82% margin" },
      { label: "Patients at Month 12", value: "150 patients", note: "" },
      { label: "Monthly Revenue (Mo. 12)", value: "~$150,000", note: "" },
      { label: "Year 1 Total Revenue", value: "~$600K–$1.2M", note: "Conservative–growth" },
    ],
  },
  {
    phase: "Phase 2: Bay Area Clinic",
    timeline: "Year 2+",
    color: "gold",
    rows: [
      { label: "Clinic Buildout Capital", value: "$150K–$500K", note: "Self-funded from Phase 1" },
      { label: "Break-Even Timeline", value: "~13 months", note: "From clinic open date" },
      { label: "Revenue per Patient", value: "$1,200–$3,500", note: "vs. $600–$1,200 telehealth" },
      { label: "Target Monthly Patients", value: "80–120", note: "At capacity" },
      { label: "Monthly Revenue (Yr 2)", value: "$150K–$350K", note: "Clinic + telehealth combined" },
      { label: "EBITDA Margin", value: "34–55%", note: "Industry benchmark" },
      { label: "Year 2 EBITDA Target", value: "$500K–$1M+", note: "" },
      { label: "Valuation (5x EBITDA)", value: "$2.5M–$5M+", note: "Conservative exit multiple" },
    ],
  },
];

const risks = [
  {
    risk: "FDA Policy Reversal",
    severity: "High",
    mitigation: "Maintain a diversified formulary. Sermorelin and PT-141 are compoundable today regardless of 2026 reclassification outcome.",
  },
  {
    risk: "Payment Processing",
    severity: "Medium",
    mitigation: "Use a specialized high-risk merchant account (e.g., PaymentCloud, Durango Merchant Services) from Day 1. Never use Stripe or Square.",
  },
  {
    risk: "Physician License Risk",
    severity: "High",
    mitigation: "Strict protocol adherence, mandatory chart audits, malpractice insurance, and a healthcare attorney review all standing orders before launch.",
  },
  {
    risk: "Compounding Pharmacy Quality",
    severity: "Medium",
    mitigation: "Partner exclusively with PCAB-accredited 503A pharmacies. Require sterility testing certificates and lot tracing for every batch.",
  },
  {
    risk: "Competition / Price Compression",
    severity: "Low",
    mitigation: "The physician co-founder is a durable competitive moat. Differentiate on clinical quality, not price.",
  },
];

export default function Financials() {
  return (
    <section id="financials" className="py-24 bg-[oklch(0.20_0.05_252)]">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[oklch(0.52_0.12_175)]" />
            <span className="section-label">06 — Financial Projections</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The Numbers
            <br />
            <span className="text-[oklch(0.52_0.12_175)]">Two-Phase Model</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            Phase 1 (Telehealth) is designed to be profitable within 90 days and self-fund Phase 2 (Bay Area Clinic) by the end of Year 1. No outside investment required.
          </p>
        </div>

        {/* Financial tables */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {scenarios.map((scenario) => (
            <div key={scenario.phase} className={`bg-[oklch(0.18_0.055_252)] border-t-4 ${scenario.color === "teal" ? "border-[oklch(0.52_0.12_175)]" : "border-[oklch(0.76_0.12_65)]"} p-8`}>
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

        {/* Risk table */}
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
