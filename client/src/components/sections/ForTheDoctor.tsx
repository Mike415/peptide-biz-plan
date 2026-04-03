import { useState } from "react";

const models = [
  {
    id: "async",
    label: "Async Telehealth",
    tagline: "~5 min per patient",
    color: "teal",
    description:
      "In many states (CA, FL, NY, TX), a valid Patient-Provider Relationship (PPR) can be established without a live video call. Patients complete a comprehensive digital intake form and upload lab results. The doctor reviews the file asynchronously and issues a prescription — entirely on their own schedule.",
    steps: [
      "Patient completes digital intake form + uploads labs",
      "Doctor reviews file on their own time (any device)",
      "Doctor issues prescription via e-prescribing platform",
      "Pharmacy ships compounded peptides directly to patient",
    ],
    timeCommitment: "~5 minutes per patient file",
    legalNote: "Valid in CA, FL, NY, TX and many other states for non-controlled substances.",
  },
  {
    id: "np",
    label: "Delegated NP/PA Model",
    tagline: "2–4 hrs/month total",
    color: "gold",
    description:
      "The doctor serves as the Medical Director, creating the standard operating procedures (SOPs), treatment protocols, and standing orders. Hired Nurse Practitioners (NPs) or Physician Assistants (PAs) handle all live patient consultations. The doctor's only clinical duty is periodic chart audits to ensure protocol compliance.",
    steps: [
      "Doctor writes SOPs, protocols, and standing orders (one-time)",
      "NPs/PAs handle all live patient consultations",
      "Doctor reviews 10–20% of charts monthly (audit only)",
      "Doctor signs off on any protocol changes quarterly",
    ],
    timeCommitment: "2–4 hours per month total",
    legalNote: "Requires a written Collaborative Practice Agreement (CPA) with each NP/PA. Regulations vary by state.",
  },
];

const responsibilities = [
  {
    category: "Legal & Compliance",
    items: [
      "Maintain an active, unrestricted medical license in all states where patients are treated",
      "Sign the MSO (Management Services Organization) agreement with the business entity",
      "Approve all treatment protocols and standing orders before launch",
      "Ensure all prescriptions are issued for a valid medical purpose",
    ],
  },
  {
    category: "Clinical Oversight",
    items: [
      "Create and sign off on standardized peptide protocols for each patient archetype",
      "Perform periodic chart audits (10–20% of charts monthly)",
      "Review and update protocols quarterly or when new research emerges",
      "Be available for escalation on adverse events (rare, but required)",
    ],
  },
  {
    category: "Pharmacy Coordination",
    items: [
      "Select and contract with a PCAB-accredited 503A compounding pharmacy",
      "Verify pharmacy's sterility testing and lot tracing documentation",
      "Sign off on the formulary (list of compounded peptides offered)",
    ],
  },
];

export default function ForTheDoctor() {
  const [activeModel, setActiveModel] = useState("async");
  const model = models.find((m) => m.id === activeModel)!;

  return (
    <section id="doctor" className="py-24 bg-[oklch(0.20_0.05_252)]">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[oklch(0.76_0.12_65)]" />
            <span className="section-label" style={{ color: "oklch(0.76_0.12_65)" }}>04 — For the Doctor</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The "Zero Face Time"
            <br />
            <span className="text-[oklch(0.76_0.12_65)]">Strategy</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            The doctor does not need to be on live video calls all day. By structuring the role strategically, the business can scale efficiently without monopolizing the physician's schedule. Two compliant, low-friction models make this possible.
          </p>
        </div>

        {/* Model toggle */}
        <div className="flex gap-2 mb-8">
          {models.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModel(m.id)}
              className={`px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                activeModel === m.id
                  ? m.color === "teal"
                    ? "bg-[oklch(0.52_0.12_175)] text-white"
                    : "bg-[oklch(0.76_0.12_65)] text-[oklch(0.18_0.055_252)]"
                  : "bg-[oklch(0.22_0.05_252)] text-white/50 hover:text-white/80"
              }`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {m.label}
              <span className={`ml-2 text-xs font-normal ${activeModel === m.id ? "opacity-80" : "opacity-40"}`}>
                {m.tagline}
              </span>
            </button>
          ))}
        </div>

        {/* Active model detail */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <div className={`bg-[oklch(0.22_0.05_252)] border-l-4 p-8 ${model.color === "teal" ? "border-[oklch(0.52_0.12_175)]" : "border-[oklch(0.76_0.12_65)]"}`}>
            <p className="text-white/70 text-base leading-relaxed mb-8">{model.description}</p>
            <div className="space-y-3">
              {model.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className={`w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
                      model.color === "teal"
                        ? "bg-[oklch(0.52_0.12_175)] text-white"
                        : "bg-[oklch(0.76_0.12_65)] text-[oklch(0.18_0.055_252)]"
                    }`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {i + 1}
                  </div>
                  <div className="text-white/70 text-sm leading-relaxed">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-[oklch(0.18_0.055_252)] p-6 border border-white/10">
              <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${model.color === "teal" ? "text-[oklch(0.52_0.12_175)]" : "text-[oklch(0.76_0.12_65)]"}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Time Commitment
              </div>
              <div className="text-3xl font-extrabold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {model.timeCommitment}
              </div>
            </div>
            <div className="bg-[oklch(0.18_0.055_252)] p-6 border border-white/10 flex-1">
              <div className="text-[oklch(0.76_0.12_65)] text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Legal Note
              </div>
              <div className="text-white/60 text-sm leading-relaxed">{model.legalNote}</div>
            </div>
            <div className="bg-[oklch(0.18_0.055_252)] p-6 border border-white/10">
              <div className="text-[oklch(0.52_0.12_175)] text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Compensation (Medical Director)
              </div>
              <div className="text-2xl font-extrabold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                $1,000–$2,500/mo
              </div>
              <div className="text-white/40 text-xs">Standard Medical Director retainer fee (if compensated separately from business equity).</div>
            </div>
          </div>
        </div>

        {/* Full responsibilities breakdown */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Complete Responsibility Breakdown
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {responsibilities.map((cat) => (
              <div key={cat.category} className="bg-[oklch(0.18_0.055_252)] border border-white/10 p-6">
                <div className="text-[oklch(0.52_0.12_175)] text-xs font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {cat.category}
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                      <span className="text-[oklch(0.52_0.12_175)] mt-1 flex-shrink-0">▪</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 p-5 bg-[oklch(0.22_0.05_252)] border border-[oklch(0.76_0.12_65/0.2)]">
          <div className="text-[oklch(0.76_0.12_65)] text-xs font-bold uppercase tracking-wide mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Important Legal Note
          </div>
          <div className="text-white/40 text-xs leading-relaxed">
            This document is for informational and planning purposes only and does not constitute legal or medical advice. All business structures, prescribing arrangements, and compliance requirements must be reviewed by a licensed healthcare attorney familiar with your specific state's laws before implementation.
          </div>
        </div>
      </div>
    </section>
  );
}
