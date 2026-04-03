import AnimatedCounter from "../AnimatedCounter";

const marketSegments = [
  { label: "Peptide Therapeutics (Global)", value: 140, suffix: "B+", growth: "+8.7% CAGR", color: "teal" },
  { label: "US Peptide Market", value: 52.6, suffix: "B", growth: "+8.7% CAGR", color: "teal", decimals: 1 },
  { label: "Peptide Cosmetics", value: 5.8, suffix: "B", growth: "+9.7% CAGR by 2032", color: "gold", decimals: 1 },
  { label: "GLP-1 / Metabolic Segment", value: 20, suffix: "%", growth: "YoY growth rate", color: "gold" },
];

const regulatoryTimeline = [
  {
    year: "2023",
    event: "FDA Restricts 19 Peptides",
    detail: "BPC-157, CJC-1295, Ipamorelin and others placed on Category 2 list — banned from compounding pharmacies.",
    type: "risk",
  },
  {
    year: "2025",
    event: "GLP-1 Crackdown Begins",
    detail: "FDA declares semaglutide shortage 'resolved,' initiating enforcement against compounding pharmacies producing GLP-1 agonists.",
    type: "risk",
  },
  {
    year: "2026",
    event: "FDA Reclassification Expected",
    detail: "Under RFK Jr., the FDA is expected to reclassify ~14 peptides (including BPC-157, CJC-1295, Ipamorelin) back to Category 1 — compoundable with a valid prescription.",
    type: "opportunity",
  },
];

export default function Market() {
  return (
    <section id="market" className="py-24 bg-[oklch(0.18_0.055_252)]">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[oklch(0.52_0.12_175)]" />
            <span className="section-label">01 — Market Opportunity</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            A $140B+ Market at a
            <br />
            <span className="text-[oklch(0.52_0.12_175)]">Regulatory Inflection Point</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            The global peptide market is one of the fastest-growing segments in healthcare. And in 2026, a major FDA policy shift is expected to unlock the most in-demand peptides for compounding — creating a once-in-a-generation entry window.
          </p>
        </div>

        {/* Market stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {marketSegments.map((seg) => (
            <div
              key={seg.label}
              className="bg-[oklch(0.22_0.05_252)] border border-white/10 p-6"
            >
              <div
                className={`text-4xl font-extrabold mb-2 ${seg.color === "teal" ? "text-[oklch(0.52_0.12_175)]" : "text-[oklch(0.76_0.12_65)]"}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                $<AnimatedCounter end={seg.value} suffix={seg.suffix} decimals={seg.decimals ?? 0} />
              </div>
              <div className="text-white text-sm font-semibold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {seg.label}
              </div>
              <div className="text-white/40 text-xs">{seg.growth}</div>
            </div>
          ))}
        </div>

        {/* Two columns: Why Now + Regulatory Timeline */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Why Now */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Why the Timing Is Perfect
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: "📈",
                  title: "Explosive Consumer Demand",
                  text: "Driven by the longevity movement, biohacking culture, and GLP-1 weight loss mania, consumer awareness and demand for peptides has never been higher.",
                },
                {
                  icon: "🏥",
                  title: "Physician Shortage in the Space",
                  text: "Most peptide telehealth companies are blocked by the lack of a prescribing physician. A doctor co-founder eliminates the single biggest barrier to entry.",
                },
                {
                  icon: "⚖️",
                  title: "Regulatory Tailwind in 2026",
                  text: "The FDA's expected reclassification of 14+ peptides back to compoundable status opens a legal, scalable business model that was previously unavailable.",
                },
                {
                  icon: "💰",
                  title: "Premium Pricing Power",
                  text: "Patients pay $600–$3,500+ per program. The Bay Area market specifically has the highest willingness to pay for premium health services in the US.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 bg-[oklch(0.22_0.05_252)] border-l-2 border-[oklch(0.52_0.12_175)]">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {item.title}
                    </div>
                    <div className="text-white/50 text-sm leading-relaxed">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              The Regulatory Timeline
            </h3>
            <div className="relative pl-6 border-l border-white/20 space-y-8">
              {regulatoryTimeline.map((item, i) => (
                <div key={i} className="relative">
                  <div
                    className={`absolute -left-[1.65rem] w-4 h-4 border-2 ${
                      item.type === "opportunity"
                        ? "bg-[oklch(0.52_0.12_175)] border-[oklch(0.52_0.12_175)]"
                        : "bg-[oklch(0.18_0.055_252)] border-[oklch(0.76_0.12_65)]"
                    }`}
                  />
                  <div
                    className={`text-xs font-bold tracking-widest uppercase mb-1 ${
                      item.type === "opportunity" ? "text-[oklch(0.52_0.12_175)]" : "text-[oklch(0.76_0.12_65)]"
                    }`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.year}
                  </div>
                  <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.event}
                  </div>
                  <div className="text-white/50 text-sm leading-relaxed">{item.detail}</div>
                </div>
              ))}
            </div>

            {/* Source note */}
            <div className="mt-8 p-4 bg-[oklch(0.22_0.05_252)] border border-[oklch(0.52_0.12_175/0.3)]">
              <div className="text-[oklch(0.52_0.12_175)] text-xs font-bold uppercase tracking-wide mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Sources
              </div>
              <div className="text-white/40 text-xs leading-relaxed">
                Grand View Research · Holt Law US Peptide Industry Report 2025 · New York Times (Mar 2026) · Ars Technica (Mar 2026) · NPR (Mar 2026)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
