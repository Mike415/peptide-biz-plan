const steps = [
  {
    week: "Week 1–2",
    phase: "Legal Foundation",
    color: "teal",
    tasks: [
      "Engage a healthcare attorney to structure the MSO (Management Services Organization)",
      "Determine state licensing requirements for telehealth prescribing",
      "Draft the Collaborative Practice Agreement (CPA) for NP/PA delegation",
      "Register the business entity (LLC or PC depending on state)",
    ],
  },
  {
    week: "Week 3–4",
    phase: "Platform & Pharmacy Setup",
    color: "teal",
    tasks: [
      "Evaluate and contract with a telehealth platform (OpenLoop, Cerbo, or similar)",
      "Identify and vet 2–3 PCAB-accredited 503A compounding pharmacies",
      "Set up HIPAA-compliant EHR and patient intake system",
      "Open a high-risk merchant account for payment processing",
    ],
  },
  {
    week: "Month 2",
    phase: "Clinical Protocols",
    color: "gold",
    tasks: [
      "Doctor drafts and signs standard treatment protocols for each peptide program",
      "Create patient intake forms, consent documents, and lab requirement lists",
      "Establish the initial formulary (start with Sermorelin, PT-141, and BPC-157 pending reclassification)",
      "Hire and onboard first NP or PA (if using delegated model)",
    ],
  },
  {
    week: "Month 3",
    phase: "Launch & Acquire Patients",
    color: "gold",
    tasks: [
      "Launch website and patient acquisition funnel",
      "Begin content marketing (SEO, social media, physician referral network)",
      "Onboard first 10–20 patients and refine the intake process",
      "Monitor compliance, chart audit, and iterate on protocols",
    ],
  },
  {
    week: "Month 6–12",
    phase: "Scale Telehealth",
    color: "teal",
    tasks: [
      "Expand to 50–150 active patients",
      "Add additional NPs to handle patient volume",
      "Begin accumulating capital for Bay Area clinic buildout",
      "Evaluate 2026 FDA reclassification outcome and expand formulary accordingly",
    ],
  },
  {
    week: "Year 2",
    phase: "Bay Area Clinic",
    color: "gold",
    tasks: [
      "Identify and lease clinic space in target Bay Area location",
      "Hire clinic staff (front desk, medical assistant, additional NP)",
      "Build out and equip the clinic (IV therapy, DEXA, consultation rooms)",
      "Launch in-person services and convert telehealth patients to hybrid model",
    ],
  },
];

const sources = [
  { title: "What Peptides Are Legal in the U.S.?", publisher: "Holt Law", url: "https://djholtlaw.com/what-peptides-are-legal-in-the-u-s-understanding-fda-approval-compounding-and-the-legal-gray-areas/" },
  { title: "Market Report: The US Peptide Industry 2025", publisher: "Holt Law", url: "https://djholtlaw.com/market-report-the-us-peptide-industry-2025/" },
  { title: "FDA Expected to Lift Restriction on Peptides (Mar 2026)", publisher: "The New York Times", url: "https://www.nytimes.com/2026/03/31/health/peptide-ban-fda-rfk-jr.html" },
  { title: "RFK Jr.'s FDA Expected to Lift Restrictions on Risky Peptides", publisher: "Ars Technica", url: "https://arstechnica.com/health/2026/03/rfk-jr-s-fda-expected-to-lift-restrictions-on-risky-unproven-peptides/" },
  { title: "Peptides, Prescriptions & Profit: The White-Label Model", publisher: "Ola Digital Health", url: "https://oladigital.health/peptides-prescriptions-profit-the-white-label-model-that-actually-works/" },
  { title: "Medical Director for Peptide Therapy Clinics", publisher: "Medical Director Co.", url: "https://www.medicaldirectorco.com/clinic-types/medical-director-for-peptide-therapy-clinics/" },
  { title: "Peptide Therapy Clinic Financial Model", publisher: "Financial Models Lab", url: "https://financialmodelslab.com/blogs/how-to-open/peptide-therapy" },
  { title: "How Do I Start Selling Peptides?", publisher: "IntegralPay", url: "https://www.integralpay.com/how-do-i-start-selling-peptides/" },
  { title: "Most In-Demand Peptides in 2026", publisher: "OptimaNtra", url: "https://www.optimantra.com/blog/most-in-demand-peptides-in-2026-trends-benefits-and-clinical-insights" },
  { title: "Navigating Peptides as a Medical Director", publisher: "ShineRx", url: "https://shinerx.com/how-to-navigate-peptides-as-a-medical-director/" },
];

export default function NextSteps() {
  return (
    <section id="nextsteps" className="py-24 bg-[oklch(0.18_0.055_252)]">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[oklch(0.52_0.12_175)]" />
            <span className="section-label">07 — Action Plan</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            From Idea to Launch
            <br />
            <span className="text-[oklch(0.52_0.12_175)]">in 90 Days</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            A step-by-step action plan for a doctor-entrepreneur team to go from zero to a live, revenue-generating peptide telehealth business in 90 days.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="relative md:pl-16">
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 w-4 h-4 hidden md:flex items-center justify-center ${step.color === "teal" ? "bg-[oklch(0.52_0.12_175)]" : "bg-[oklch(0.76_0.12_65)]"}`} />

                <div className="bg-[oklch(0.22_0.05_252)] border border-white/10 p-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className={`text-xs font-bold uppercase tracking-widest px-3 py-1 ${step.color === "teal" ? "bg-[oklch(0.52_0.12_175/0.2)] text-[oklch(0.62_0.10_175)]" : "bg-[oklch(0.76_0.12_65/0.2)] text-[oklch(0.76_0.12_65)]"}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {step.week}
                    </div>
                    <div className="text-white font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {step.phase}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {step.tasks.map((task, j) => (
                      <div key={j} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                        <span className={`mt-1.5 w-1.5 h-1.5 flex-shrink-0 ${step.color === "teal" ? "bg-[oklch(0.52_0.12_175)]" : "bg-[oklch(0.76_0.12_65)]"}`} />
                        {task}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Sources & Citations
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {sources.map((src) => (
              <a
                key={src.title}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-[oklch(0.22_0.05_252)] border border-white/10 hover:border-[oklch(0.52_0.12_175/0.4)] transition-colors group"
              >
                <div className="text-[oklch(0.52_0.12_175)] text-lg flex-shrink-0 mt-0.5 group-hover:text-[oklch(0.62_0.10_175)]">↗</div>
                <div>
                  <div className="text-white text-sm font-semibold leading-tight mb-1 group-hover:text-[oklch(0.62_0.10_175)] transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {src.title}
                  </div>
                  <div className="text-white/40 text-xs">{src.publisher}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Peptide Ventures</div>
            <div className="text-white/30 text-xs">Confidential Business Plan · April 2026</div>
          </div>
          <div className="text-white/20 text-xs max-w-md leading-relaxed">
            This document is for informational and planning purposes only. It does not constitute legal, medical, or financial advice. All business structures must be reviewed by qualified professionals before implementation.
          </div>
        </div>
      </div>
    </section>
  );
}
