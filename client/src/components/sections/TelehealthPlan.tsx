import AnimatedCounter from "../AnimatedCounter";

const advantages = [
  { num: "01", title: "Launch in 60–90 Days", desc: "Go live with under $50K in startup capital. No lease, no buildout, no equipment." },
  { num: "02", title: "Zero Physical Overhead", desc: "$3,000–$8,000/month in operating costs vs. $25,000–$60,000 for a clinic." },
  { num: "03", title: "National Patient Base", desc: "Access patients across all 50 states from Day 1 (with multi-state licensing)." },
  { num: "04", title: "Predictable MRR", desc: "Subscription and program-based revenue creates stable, recurring monthly income." },
  { num: "05", title: "Funds the Clinic", desc: "Year 1 cash flow can self-fund the Bay Area clinic buildout in Year 2." },
];

const platforms = [
  { name: "OpenLoop Health", role: "White-label telehealth platform", detail: "Handles multi-state licensing, EHR, e-prescribing, and pharmacy fulfillment." },
  { name: "Cerbo", role: "EHR + patient portal", detail: "HIPAA-compliant intake forms, async messaging, lab ordering, and prescription management." },
  { name: "PCAB Compounding Pharmacy", role: "503A pharmacy partner", detail: "Manufactures and ships compounded peptides directly to patients under a valid prescription." },
];

export default function TelehealthPlan() {
  return (
    <section id="telehealth" className="py-24 bg-[oklch(0.20_0.05_252)]">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[oklch(0.52_0.12_175)]" />
            <span className="section-label">02 — Telehealth Plan (Phase 1)</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Launch Nationally in
            <br />
            <span className="text-[oklch(0.52_0.12_175)]">60–90 Days</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            The telehealth model is the fastest, lowest-risk path to a profitable peptide business. It requires no physical space, no clinical staff, and can be run by two people with the right platform partners.
          </p>
        </div>

        {/* Revenue projections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { patients: 50, revenue: 45000, label: "Conservative (Month 6)" },
            { patients: 100, revenue: 90000, label: "Growth (Month 9)" },
            { patients: 150, revenue: 150000, label: "Scale (Month 12)" },
          ].map((proj) => (
            <div key={proj.patients} className="bg-[oklch(0.18_0.055_252)] border border-white/10 p-8">
              <div className="text-white/40 text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {proj.label}
              </div>
              <div className="text-5xl font-extrabold text-[oklch(0.52_0.12_175)] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <AnimatedCounter end={proj.patients} suffix=" pts" />
              </div>
              <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                ~$<AnimatedCounter end={proj.revenue / 1000} suffix="K" decimals={0} />/mo
              </div>
              <div className="text-white/40 text-xs">Avg. $900/patient program</div>
            </div>
          ))}
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Advantages */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Why Start Here
            </h3>
            <div className="space-y-4">
              {advantages.map((adv) => (
                <div key={adv.num} className="flex gap-5 items-start">
                  <div
                    className="text-3xl font-extrabold text-white/10 flex-shrink-0 w-12 leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {adv.num}
                  </div>
                  <div className="border-l border-white/10 pl-5">
                    <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {adv.title}
                    </div>
                    <div className="text-white/50 text-sm leading-relaxed">{adv.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack + cost breakdown */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              The Platform Stack
            </h3>
            <div className="space-y-4 mb-10">
              {platforms.map((p) => (
                <div key={p.name} className="bg-[oklch(0.18_0.055_252)] p-5 border-l-2 border-[oklch(0.52_0.12_175)]">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div className="text-white font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {p.name}
                    </div>
                    <div className="text-[oklch(0.52_0.12_175)] text-xs font-semibold whitespace-nowrap" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {p.role}
                    </div>
                  </div>
                  <div className="text-white/50 text-xs leading-relaxed">{p.detail}</div>
                </div>
              ))}
            </div>

            {/* Cost breakdown */}
            <div className="bg-[oklch(0.18_0.055_252)] border border-white/10 p-6">
              <div className="text-[oklch(0.76_0.12_65)] text-xs font-bold uppercase tracking-wide mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Startup Cost Breakdown
              </div>
              <div className="space-y-2">
                {[
                  ["Telehealth platform setup", "$5,000–$10,000"],
                  ["EHR / patient portal", "$2,000–$5,000"],
                  ["Legal (MSO structure, attorney)", "$5,000–$10,000"],
                  ["Multi-state licensing", "$3,000–$8,000"],
                  ["Website + marketing", "$2,000–$5,000"],
                  ["Working capital (3 months)", "$2,000–$8,500"],
                ].map(([item, cost]) => (
                  <div key={item} className="flex justify-between text-sm border-b border-white/5 pb-2">
                    <span className="text-white/60">{item}</span>
                    <span className="text-[oklch(0.76_0.12_65)] font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{cost}</span>
                  </div>
                ))}
                <div className="flex justify-between text-sm pt-2">
                  <span className="text-white font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Total Estimate</span>
                  <span className="text-[oklch(0.52_0.12_175)] font-extrabold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>$19,000–$46,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
