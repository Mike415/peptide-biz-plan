const services = [
  { name: "IV NAD+ Therapy", price: "$300–$600/session", icon: "💉" },
  { name: "Supervised Injectable Protocols", price: "$200–$500/visit", icon: "🧬" },
  { name: "DEXA Body Composition Scan", price: "$150–$300/scan", icon: "📊" },
  { name: "Advanced Biomarker Panels", price: "$300–$800/panel", icon: "🔬" },
  { name: "Concierge Membership", price: "$1,500–$3,500/quarter", icon: "⭐" },
  { name: "Peptide Programs (all types)", price: "$800–$3,500/program", icon: "💊" },
];

const locations = [
  { name: "Palo Alto / Menlo Park", note: "Highest density of tech executives and longevity-focused HNW individuals." },
  { name: "San Francisco (Pacific Heights / Marina)", note: "Premium real estate, health-conscious demographic, strong brand visibility." },
  { name: "Los Gatos / Saratoga", note: "Affluent South Bay suburb, lower competition, strong family health market." },
  { name: "Marin County (Mill Valley / Tiburon)", note: "Wellness-forward culture, high disposable income, underserved market." },
];

export default function BayAreaPlan() {
  return (
    <section id="bayarea" className="py-24 bg-[oklch(0.18_0.055_252)]">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[oklch(0.76_0.12_65)]" />
            <span className="section-label" style={{ color: "oklch(0.76_0.12_65)" }}>03 — Bay Area Clinic (Phase 2)</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            A Premium Physical Clinic
            <br />
            <span className="text-[oklch(0.76_0.12_65)]">Funded by Telehealth Profits</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            The Bay Area is one of the few markets in the world where a premium peptide clinic can charge $200–$500 per visit and maintain a waitlist. The in-person model unlocks services that are impossible via telehealth and commands 2–3x higher revenue per patient.
          </p>
        </div>

        {/* Comparison callout */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[oklch(0.22_0.05_252)] border-t-4 border-[oklch(0.52_0.12_175)] p-8">
            <div className="text-[oklch(0.52_0.12_175)] text-xs font-bold uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Telehealth Revenue per Patient
            </div>
            <div className="text-5xl font-extrabold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              $600–$1,200
            </div>
            <div className="text-white/40 text-sm">Per program (6–12 weeks)</div>
          </div>
          <div className="bg-[oklch(0.22_0.05_252)] border-t-4 border-[oklch(0.76_0.12_65)] p-8">
            <div className="text-[oklch(0.76_0.12_65)] text-xs font-bold uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Bay Area Clinic Revenue per Patient
            </div>
            <div className="text-5xl font-extrabold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              $1,200–$3,500+
            </div>
            <div className="text-white/40 text-sm">Per program + ongoing services</div>
          </div>
        </div>

        {/* Services + Locations */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              In-Person Services (Unlocked by a Physical Clinic)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((svc) => (
                <div key={svc.name} className="bg-[oklch(0.22_0.05_252)] p-5 border border-white/10 hover:border-[oklch(0.76_0.12_65/0.4)] transition-colors">
                  <div className="text-2xl mb-3">{svc.icon}</div>
                  <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {svc.name}
                  </div>
                  <div className="text-[oklch(0.76_0.12_65)] text-xs font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {svc.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location strategy + costs */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Recommended Locations
            </h3>
            <div className="space-y-4 mb-10">
              {locations.map((loc) => (
                <div key={loc.name} className="flex gap-4 items-start p-4 bg-[oklch(0.22_0.05_252)] border-l-2 border-[oklch(0.76_0.12_65)]">
                  <div className="text-[oklch(0.76_0.12_65)] text-lg flex-shrink-0">📍</div>
                  <div>
                    <div className="text-white font-bold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {loc.name}
                    </div>
                    <div className="text-white/50 text-xs leading-relaxed">{loc.note}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Clinic cost breakdown */}
            <div className="bg-[oklch(0.22_0.05_252)] border border-white/10 p-6">
              <div className="text-[oklch(0.76_0.12_65)] text-xs font-bold uppercase tracking-wide mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Clinic Startup Cost Estimate
              </div>
              <div className="space-y-2">
                {[
                  ["Lease deposit + buildout", "$80,000–$250,000"],
                  ["Medical equipment (IV, DEXA, etc.)", "$30,000–$80,000"],
                  ["Licensing, permits, legal", "$10,000–$30,000"],
                  ["Staffing (first 3 months)", "$30,000–$90,000"],
                  ["Marketing + launch", "$10,000–$30,000"],
                  ["Working capital", "$20,000–$50,000"],
                ].map(([item, cost]) => (
                  <div key={item} className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-white/60">{item}</span>
                    <span className="text-[oklch(0.76_0.12_65)] font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{cost}</span>
                  </div>
                ))}
                <div className="flex justify-between text-sm pt-2">
                  <span className="text-white font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Total Estimate</span>
                  <span className="text-[oklch(0.76_0.12_65)] font-extrabold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>$150,000–$500,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy note */}
        <div className="bg-[oklch(0.22_0.05_252)] border border-[oklch(0.76_0.12_65/0.3)] p-8">
          <div className="flex items-start gap-6">
            <div className="text-4xl flex-shrink-0">💡</div>
            <div>
              <div className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                The "Fund-the-Clinic" Strategy
              </div>
              <div className="text-white/60 text-sm leading-relaxed max-w-3xl">
                The telehealth business generates $45K–$150K/month in recurring revenue within 6–12 months. This cash flow can be used to self-fund the Bay Area clinic buildout, eliminating the need for outside investment and preserving full equity ownership. The clinic becomes a <strong className="text-white">risk-free Phase 2 expansion</strong> rather than a Day 1 financial bet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
