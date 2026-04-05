import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  TrendingUp,
  XCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Zap,
} from "lucide-react";

// Design: Deep navy bg, teal/gold accents, Space Grotesk display, data-forward pitch deck style

const timelineEvents = [
  {
    date: "2023",
    title: "FDA Restricts 19 Peptides",
    description:
      "The FDA moves 19 peptides to the Category 2 'do not compound' list, citing safety concerns and lack of clinical trial data. Compounding pharmacies can no longer legally produce them for human use.",
    type: "negative",
    icon: XCircle,
  },
  {
    date: "2023–2025",
    title: "Gray Market Explodes",
    description:
      "Demand does not disappear. Patients turn to 'research use only' online vendors — unregulated, unverified, and potentially dangerous. A December 2025 investigation finds these products widely available with no purity or dosing guarantees.",
    type: "warning",
    icon: AlertTriangle,
  },
  {
    date: "Feb 27, 2026",
    title: "RFK Jr. Announces Reversal",
    description:
      "HHS Secretary Robert F. Kennedy Jr., appearing on Joe Rogan's podcast, announces his intention to end the FDA's 'war on peptides' and reclassify approximately 14 of the 19 restricted peptides back to Category 1 status.",
    type: "positive",
    icon: Zap,
  },
  {
    date: "Mar 22, 2026",
    title: "Wall Street Journal Confirms",
    description:
      "The WSJ reports Kennedy is 'poised' to follow through. The legal basis cited: the FDA lacked the required safety signal to justify the original restrictions in the first place.",
    type: "positive",
    icon: FileText,
  },
  {
    date: "Mar 31, 2026",
    title: "NYT: FDA Moving on 14 Peptides",
    description:
      "The New York Times reports the FDA is actively moving to allow compounding pharmacies to produce 14 currently restricted peptides. Top FDA leaders reportedly have 'reservations' about political optics but the process is underway.",
    type: "positive",
    icon: TrendingUp,
  },
  {
    date: "Q2–Q3 2026",
    title: "Expected Formal Reclassification",
    description:
      "The formal regulatory update is expected to publish, officially moving ~14 peptides from Category 2 back to Category 1. Licensed 503A pharmacies will be permitted to compound them again under physician prescription.",
    type: "upcoming",
    icon: Clock,
  },
];

const allPeptides = [
  { name: "BPC-157", use: "Tissue repair, gut health, injury recovery", expected: true, priority: "High" },
  { name: "Thymosin Alpha-1", use: "Immune modulation", expected: true, priority: "High" },
  { name: "TB-500 (Thymosin Beta-4)", use: "Tissue regeneration and recovery", expected: true, priority: "High" },
  { name: "GHK-Cu", use: "Skin rejuvenation and wound healing", expected: true, priority: "High" },
  { name: "AOD-9604", use: "Metabolic support and fat metabolism", expected: true, priority: "High" },
  { name: "CJC-1295", use: "Growth hormone signaling", expected: true, priority: "High" },
  { name: "Ipamorelin", use: "Growth hormone stimulation", expected: true, priority: "High" },
  { name: "GHRP-2", use: "Growth hormone releasing peptide", expected: true, priority: "Medium" },
  { name: "GHRP-6", use: "Growth hormone releasing peptide", expected: true, priority: "Medium" },
  { name: "Epitalon", use: "Longevity and telomere research", expected: true, priority: "Medium" },
  { name: "KPV", use: "Anti-inflammatory research", expected: true, priority: "Medium" },
  { name: "MOTS-C", use: "Mitochondrial metabolism research", expected: true, priority: "Medium" },
  { name: "Semax", use: "Cognitive and neurological research", expected: true, priority: "Medium" },
  { name: "Selank", use: "Anxiety and immune signaling research", expected: true, priority: "Medium" },
  { name: "Kisspeptin-10", use: "Hormonal regulation", expected: false, priority: "Low" },
  { name: "Melanotan II", use: "Skin pigmentation research", expected: false, priority: "Low" },
  { name: "Cathelicidin LL-37", use: "Antimicrobial peptide", expected: false, priority: "Low" },
  { name: "Emideltide (DSIP)", use: "Sleep regulation research", expected: false, priority: "Low" },
  { name: "PEG-MGF", use: "Muscle growth factor signaling", expected: false, priority: "Low" },
];

const businessImplications = [
  {
    icon: TrendingUp,
    title: "Massive Market Unlock",
    description:
      "The reclassification opens an estimated $2–4B in previously suppressed demand. Patients who were buying gray-market peptides will migrate to legitimate physician-led clinics — creating an immediate patient acquisition opportunity.",
    color: "teal",
  },
  {
    icon: CheckCircle2,
    title: "First-Mover Advantage",
    description:
      "Clinics that are operational and credentialed before the formal reclassification publishes will be positioned to capture the initial surge. Being ready at the moment of announcement is a significant competitive advantage.",
    color: "gold",
  },
  {
    icon: FileText,
    title: "Compliance Is the Moat",
    description:
      "The reclassification does NOT mean peptides become OTC or unregulated. They still require a licensed physician prescription and a 503A-accredited pharmacy. This is exactly why having a physician co-founder is the business's core defensibility.",
    color: "teal",
  },
  {
    icon: AlertTriangle,
    title: "Gray Market Patients Are Your Target",
    description:
      "Millions of Americans are currently self-administering unverified peptides from online vendors. The reclassification gives them a reason to switch to a supervised, legitimate provider. Your marketing message writes itself.",
    color: "gold",
  },
];

export default function FDAReclassification() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedPeptides = showAll ? allPeptides : allPeptides.slice(0, 10);

  return (
    <section
      id="reclassification"
      className="py-24"
      style={{ background: "oklch(0.16 0.05 252)" }}
    >
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
            <span
              className="px-3 py-1 text-xs font-bold tracking-widest uppercase rounded"
              style={{ background: "rgba(224,169,109,0.15)", color: "#E0A96D" }}
            >
              Breaking — April 2026
            </span>
            <span
              className="px-3 py-1 text-xs font-bold tracking-widest uppercase rounded animate-pulse"
              style={{ background: "rgba(19,111,99,0.2)", color: "#4ECDC4" }}
            >
              Market Catalyst
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0F4FF" }}
          >
            The 2026 FDA Reclassification
          </h2>
          <p className="text-lg max-w-3xl" style={{ color: "oklch(0.75 0.03 252)" }}>
            For the first time since 2023, up to 14 restricted peptides are expected to return to legal
            compounding status. This is the single biggest regulatory event in the peptide industry in
            years — and it creates a once-in-a-generation window to launch a physician-led clinic.
          </p>
        </motion.div>

        {/* Category Explainer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          <div
            className="rounded-xl p-6 border"
            style={{
              background: "rgba(220,50,50,0.08)",
              borderColor: "rgba(220,50,50,0.25)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <XCircle className="w-6 h-6" style={{ color: "#FF6B6B" }} />
              <h3 className="text-lg font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FF6B6B" }}>
                Category 2 — "Do Not Compound"
              </h3>
            </div>
            <p className="text-sm mb-3" style={{ color: "oklch(0.7 0.03 252)" }}>
              Peptides on this list cannot be produced by compounding pharmacies for human use. Prescribing
              them exposes physicians to significant legal risk. Patients can only access them via gray/black
              markets — unregulated, unverified, and dangerous.
            </p>
            <div
              className="text-sm font-semibold px-3 py-2 rounded"
              style={{ background: "rgba(220,50,50,0.12)", color: "#FF6B6B" }}
            >
              Current status of 19 peptides since 2023
            </div>
          </div>

          <div
            className="rounded-xl p-6 border"
            style={{
              background: "rgba(19,111,99,0.1)",
              borderColor: "rgba(19,111,99,0.3)",
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle2 className="w-6 h-6" style={{ color: "#4ECDC4" }} />
              <h3 className="text-lg font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#4ECDC4" }}>
                Category 1 — "Compoundable"
              </h3>
            </div>
            <p className="text-sm mb-3" style={{ color: "oklch(0.7 0.03 252)" }}>
              Peptides on this list can be legally compounded by licensed 503A pharmacies and prescribed by
              physicians for individual patients. This is the legal, supervised, high-quality pathway that
              patients and providers need.
            </p>
            <div
              className="text-sm font-semibold px-3 py-2 rounded"
              style={{ background: "rgba(19,111,99,0.15)", color: "#4ECDC4" }}
            >
              Expected status for ~14 peptides in Q2–Q3 2026
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0F4FF" }}
          >
            Regulatory Timeline
          </h3>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 hidden md:block"
              style={{ background: "oklch(0.3 0.04 252)" }}
            />
            <div className="space-y-4">
              {timelineEvents.map((event, i) => {
                const Icon = event.icon;
                const isExpanded = expandedEvent === i;
                const colors = {
                  negative: { icon: "#FF6B6B", bg: "rgba(220,50,50,0.08)", border: "rgba(220,50,50,0.2)" },
                  warning: { icon: "#E0A96D", bg: "rgba(224,169,109,0.08)", border: "rgba(224,169,109,0.2)" },
                  positive: { icon: "#4ECDC4", bg: "rgba(19,111,99,0.1)", border: "rgba(19,111,99,0.25)" },
                  upcoming: { icon: "#A78BFA", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)" },
                };
                const c = colors[event.type as keyof typeof colors];

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="md:pl-16 relative"
                  >
                    {/* Dot on timeline */}
                    <div
                      className="absolute left-4 top-5 w-4 h-4 rounded-full border-2 hidden md:block"
                      style={{
                        background: c.icon,
                        borderColor: "oklch(0.16 0.05 252)",
                        boxShadow: `0 0 8px ${c.icon}`,
                      }}
                    />
                    <button
                      onClick={() => setExpandedEvent(isExpanded ? null : i)}
                      className="w-full text-left rounded-xl p-5 border transition-all"
                      style={{
                        background: isExpanded ? c.bg : "oklch(0.2 0.04 252)",
                        borderColor: isExpanded ? c.border : "oklch(0.28 0.04 252)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: c.icon }} />
                          <div>
                            <span
                              className="text-xs font-bold tracking-widest uppercase mr-3"
                              style={{ color: c.icon }}
                            >
                              {event.date}
                            </span>
                            <span
                              className="font-semibold"
                              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0F4FF" }}
                            >
                              {event.title}
                            </span>
                          </div>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.5 0.03 252)" }} />
                        ) : (
                          <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: "oklch(0.5 0.03 252)" }} />
                        )}
                      </div>
                      {isExpanded && (
                        <p className="mt-3 text-sm pl-8" style={{ color: "oklch(0.7 0.03 252)" }}>
                          {event.description}
                        </p>
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* The 19 Peptides Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0F4FF" }}
            >
              The 19 Restricted Peptides
            </h3>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#4ECDC4" }} />
                <span style={{ color: "oklch(0.7 0.03 252)" }}>Expected Category 1</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(0.4 0.04 252)" }} />
                <span style={{ color: "oklch(0.7 0.03 252)" }}>Likely to remain restricted</span>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl border overflow-hidden"
            style={{ borderColor: "oklch(0.28 0.04 252)" }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "oklch(0.22 0.05 252)" }}>
                  <th className="text-left px-5 py-3 font-semibold" style={{ color: "oklch(0.6 0.03 252)", fontFamily: "'Space Grotesk', sans-serif" }}>
                    Peptide
                  </th>
                  <th className="text-left px-5 py-3 font-semibold hidden md:table-cell" style={{ color: "oklch(0.6 0.03 252)", fontFamily: "'Space Grotesk', sans-serif" }}>
                    Primary Research Area
                  </th>
                  <th className="text-center px-5 py-3 font-semibold" style={{ color: "oklch(0.6 0.03 252)", fontFamily: "'Space Grotesk', sans-serif" }}>
                    2026 Status
                  </th>
                  <th className="text-center px-5 py-3 font-semibold hidden md:table-cell" style={{ color: "oklch(0.6 0.03 252)", fontFamily: "'Space Grotesk', sans-serif" }}>
                    Business Priority
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedPeptides.map((p, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "oklch(0.19 0.045 252)" : "oklch(0.21 0.048 252)",
                      borderTop: "1px solid oklch(0.26 0.04 252)",
                    }}
                  >
                    <td className="px-5 py-3 font-semibold" style={{ color: p.expected ? "#4ECDC4" : "oklch(0.55 0.03 252)", fontFamily: "'Space Grotesk', sans-serif" }}>
                      {p.name}
                    </td>
                    <td className="px-5 py-3 hidden md:table-cell" style={{ color: "oklch(0.65 0.03 252)" }}>
                      {p.use}
                    </td>
                    <td className="px-5 py-3 text-center">
                      {p.expected ? (
                        <span
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold"
                          style={{ background: "rgba(19,111,99,0.2)", color: "#4ECDC4" }}
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          Expected Cat. 1
                        </span>
                      ) : (
                        <span
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold"
                          style={{ background: "oklch(0.26 0.04 252)", color: "oklch(0.5 0.03 252)" }}
                        >
                          <XCircle className="w-3 h-3" />
                          Likely Restricted
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3 text-center hidden md:table-cell">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded"
                        style={{
                          background:
                            p.priority === "High"
                              ? "rgba(224,169,109,0.15)"
                              : p.priority === "Medium"
                              ? "rgba(19,111,99,0.12)"
                              : "oklch(0.26 0.04 252)",
                          color:
                            p.priority === "High"
                              ? "#E0A96D"
                              : p.priority === "Medium"
                              ? "#4ECDC4"
                              : "oklch(0.5 0.03 252)",
                        }}
                      >
                        {p.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="w-full py-3 text-sm font-semibold transition-colors"
                style={{
                  background: "oklch(0.22 0.05 252)",
                  color: "#4ECDC4",
                  borderTop: "1px solid oklch(0.28 0.04 252)",
                }}
              >
                Show all 19 peptides ↓
              </button>
            )}
          </div>
          <p className="text-xs mt-3" style={{ color: "oklch(0.5 0.03 252)" }}>
            * Source: Skytale Group (March 2026) · Elevate Functional Medicine (April 2026) · Ars Technica (March 2026). Final list not yet formally published by FDA.
          </p>
        </motion.div>

        {/* Business Implications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0F4FF" }}
          >
            What This Means for Your Business
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {businessImplications.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl p-6 border"
                  style={{
                    background: "oklch(0.2 0.045 252)",
                    borderColor: item.color === "teal" ? "rgba(19,111,99,0.3)" : "rgba(224,169,109,0.25)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="p-2.5 rounded-lg flex-shrink-0"
                      style={{
                        background: item.color === "teal" ? "rgba(19,111,99,0.2)" : "rgba(224,169,109,0.15)",
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: item.color === "teal" ? "#4ECDC4" : "#E0A96D" }}
                      />
                    </div>
                    <div>
                      <h4
                        className="font-bold mb-2"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0F4FF" }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "oklch(0.68 0.03 252)" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Important Caveat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl p-6 border"
          style={{
            background: "rgba(224,169,109,0.07)",
            borderColor: "rgba(224,169,109,0.25)",
          }}
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#E0A96D" }} />
            <div>
              <h4
                className="font-bold mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#E0A96D" }}
              >
                Important: Reclassification ≠ FDA Approval
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.68 0.03 252)" }}>
                Moving to Category 1 does <strong style={{ color: "#F0F4FF" }}>not</strong> mean these peptides become FDA-approved drugs.
                Full approval requires extensive randomized controlled trials — a process that has not occurred for most of these compounds.
                What reclassification means is that licensed 503A compounding pharmacies can prepare them again for patients under physician
                supervision with a valid prescription. A licensed physician co-founder is not optional — it is the legal requirement that
                makes this entire business model work.
              </p>
              <a
                href="https://arstechnica.com/health/2026/03/rfk-jr-s-fda-expected-to-lift-restrictions-on-risky-unproven-peptides/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold"
                style={{ color: "#E0A96D" }}
              >
                Read the full Ars Technica analysis <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
