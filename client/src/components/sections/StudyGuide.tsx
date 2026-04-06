import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Topic = {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  summary: string;
  content: React.ReactNode;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const topics: Topic[] = [
  // ── 1. Peptide Science 101 ──────────────────────────────────────────────────
  {
    id: "science",
    title: "Peptide Science 101",
    tag: "Biology",
    tagColor: "bg-teal-500/20 text-teal-300 border border-teal-500/30",
    summary: "What peptides are, how they work, and why they're different from hormones and steroids.",
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="text-white font-bold text-base mb-2">What Is a Peptide?</h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            Peptides are short chains of 2–50 amino acids linked by peptide bonds. They are smaller than proteins (which are 50+ amino acids) and act as biological signaling molecules — telling cells and organs what to do. Your body already produces hundreds of peptides naturally: insulin, glucagon, oxytocin, and growth hormone-releasing hormone (GHRH) are all peptides.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold text-base mb-2">How They Work</h4>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            Therapeutic peptides work by binding to specific receptors on cell surfaces, triggering downstream signaling cascades. Unlike synthetic hormones that override your body's feedback loops, most peptides <em>stimulate</em> your body's own production — making them more physiologically nuanced and generally safer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { label: "Secretagogues", desc: "Stimulate the pituitary to release growth hormone (e.g., Sermorelin, CJC-1295, Ipamorelin). Preserve natural GH pulsatility." },
              { label: "Tissue Repair", desc: "Accelerate healing by promoting angiogenesis, collagen synthesis, and reducing inflammation (e.g., BPC-157, TB-500, GHK-Cu)." },
              { label: "Metabolic", desc: "Modulate insulin signaling, fat oxidation, and appetite regulation (e.g., Semaglutide, Tirzepatide, AOD-9604)." },
            ].map((c) => (
              <div key={c.label} className="bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="text-teal-400 font-semibold text-xs mb-1">{c.label}</div>
                <p className="text-slate-400 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold text-base mb-2">Peptides vs. Steroids vs. HGH</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 pr-4 text-slate-400 font-semibold">Compound</th>
                  <th className="text-left py-2 pr-4 text-slate-400 font-semibold">Mechanism</th>
                  <th className="text-left py-2 pr-4 text-slate-400 font-semibold">Legal Status</th>
                  <th className="text-left py-2 text-slate-400 font-semibold">Risk Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["GH Secretagogue Peptides", "Stimulate body's own GH release", "Legal (compoundable)", "Low — preserves feedback loops"],
                  ["Synthetic HGH (rHGH)", "Replaces GH directly", "FDA-approved; off-label use common", "Moderate — suppresses natural production"],
                  ["Anabolic Steroids", "Bind androgen receptors", "Schedule III controlled substance", "High — liver, cardiovascular, hormonal"],
                  ["SARMs", "Selective androgen receptor modulators", "Not FDA-approved; research chemicals", "Unknown — no long-term human data"],
                ].map(([c, m, l, r]) => (
                  <tr key={c} className="text-slate-300">
                    <td className="py-2 pr-4 font-medium text-white">{c}</td>
                    <td className="py-2 pr-4">{m}</td>
                    <td className="py-2 pr-4">{l}</td>
                    <td className="py-2">{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold text-base mb-2">Administration Routes</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { route: "Subcutaneous Injection", note: "Most common. Small insulin needle, patient self-administers. Best bioavailability." },
              { route: "Intranasal", note: "Selank, Semax, PT-141. Convenient, lower bioavailability." },
              { route: "Oral / Sublingual", note: "BPC-157 (oral form), NAD+ (sublingual). Emerging but less studied." },
              { route: "Topical", note: "GHK-Cu for skin. Cosmetic applications. Lowest systemic absorption." },
            ].map((r) => (
              <div key={r.route} className="bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="text-amber-400 font-semibold text-xs mb-1">{r.route}</div>
                <p className="text-slate-400 text-xs leading-relaxed">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // ── 2. The 12 Core Peptides ─────────────────────────────────────────────────
  {
    id: "peptides",
    title: "The 12 Core Peptides",
    tag: "Formulary",
    tagColor: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
    summary: "Deep-dive on each peptide: mechanism, clinical evidence, dosing, and business case.",
    content: (
      <div className="space-y-4">
        {[
          {
            name: "Semaglutide",
            category: "GLP-1 / Weight Loss",
            mechanism: "GLP-1 receptor agonist. Slows gastric emptying, reduces appetite, improves insulin sensitivity.",
            evidence: "FDA-approved (Ozempic/Wegovy). Landmark STEP trials: 15–17% body weight loss over 68 weeks.",
            dosing: "0.25mg SQ weekly → titrate to 1–2.4mg weekly over 16–20 weeks.",
            status: "Compoundable (503A)",
            wholesale: "$80–120/mo",
            retail: "$299–499/mo",
            notes: "Anchor product. Highest patient demand. GLP-1 shortage has eased — compounding legal through 2026.",
          },
          {
            name: "Tirzepatide",
            category: "GLP-1 + GIP / Weight Loss",
            mechanism: "Dual GLP-1 and GIP receptor agonist. Superior weight loss vs. semaglutide alone.",
            evidence: "FDA-approved (Mounjaro/Zepbound). SURMOUNT trials: 20–22% body weight loss.",
            dosing: "2.5mg SQ weekly → titrate to 5–15mg weekly.",
            status: "Compoundable (503A)",
            wholesale: "$100–150/mo",
            retail: "$349–549/mo",
            notes: "Premium positioning. Higher efficacy than semaglutide. Strong upsell from semaglutide non-responders.",
          },
          {
            name: "BPC-157",
            category: "Tissue Repair / Gut Health",
            mechanism: "Body Protection Compound. Promotes angiogenesis, upregulates growth factor receptors, reduces inflammation via nitric oxide pathway.",
            evidence: "Extensive animal data. Human case reports for gut healing, tendon repair, and neuroprotection. No RCTs yet.",
            dosing: "250–500mcg SQ daily or BID. Oral: 500mcg–1mg daily for gut protocols.",
            status: "Category 1 (restored Feb 2026)",
            wholesale: "$40–80/mo",
            retail: "$149–299/mo",
            notes: "Extremely popular. Gray market demand was enormous during Category 2 ban. Now legal again.",
          },
          {
            name: "CJC-1295 + Ipamorelin",
            category: "GH Secretagogue / Anti-Aging",
            mechanism: "CJC-1295 is a GHRH analog (extends GH pulse duration). Ipamorelin is a ghrelin mimetic (triggers GH pulse). Together: synergistic GH release without cortisol/prolactin spike.",
            evidence: "Phase I/II trials for CJC-1295. Ipamorelin well-studied in animals. Widely used clinically.",
            dosing: "CJC-1295 (without DAC): 100–200mcg + Ipamorelin 100–200mcg SQ before bed, 5 days/week.",
            status: "Compoundable (503A)",
            wholesale: "$60–100/mo",
            retail: "$199–349/mo",
            notes: "Best-in-class GH stack. Sleep quality, body composition, recovery. Ideal for 35–60 demographic.",
          },
          {
            name: "Sermorelin",
            category: "GH Secretagogue",
            mechanism: "GHRH analog. Stimulates pituitary GH release. Shorter half-life than CJC-1295.",
            evidence: "FDA-approved for pediatric GH deficiency (Geref). Extensive off-label use in adults.",
            dosing: "200–500mcg SQ before bed.",
            status: "FDA-approved (limited); compoundable",
            wholesale: "$50–90/mo",
            retail: "$179–299/mo",
            notes: "Good entry-level GH secretagogue. Lower cost than CJC/Ipamorelin combo. Often used as first protocol.",
          },
          {
            name: "TB-500 (Thymosin Beta-4)",
            category: "Tissue Repair / Recovery",
            mechanism: "Promotes actin polymerization, angiogenesis, and cell migration. Reduces inflammation. Accelerates wound and tissue healing.",
            evidence: "Strong animal data. Human studies limited but clinical use widespread in sports medicine.",
            dosing: "2–2.5mg SQ 2x/week for 4–6 weeks (loading), then 2mg/week maintenance.",
            status: "Category 1 (restored Feb 2026)",
            wholesale: "$50–90/mo",
            retail: "$179–299/mo",
            notes: "Pairs well with BPC-157 for injury protocols. Athletes and active patients are primary market.",
          },
          {
            name: "PT-141 (Bremelanotide)",
            category: "Sexual Health",
            mechanism: "Melanocortin receptor agonist. Acts centrally (brain) to increase sexual desire — not peripheral like PDE5 inhibitors.",
            evidence: "FDA-approved for HSDD in premenopausal women (Vyleesi). Widely used off-label in men.",
            dosing: "1–2mg SQ or intranasal 45–60 min before activity. Max 1x per 24 hours.",
            status: "FDA-approved; compoundable",
            wholesale: "$60–100/mo",
            retail: "$199–349/mo",
            notes: "High-margin, high-demand. Works for both men and women. Complements TRT protocols.",
          },
          {
            name: "NAD+",
            category: "Energy / Longevity",
            mechanism: "Nicotinamide adenine dinucleotide. Essential coenzyme in cellular energy metabolism (Krebs cycle). Declines ~50% by age 60. Supplementation supports mitochondrial function.",
            evidence: "Robust preclinical data. Human trials show improved energy, cognitive function, and metabolic markers.",
            dosing: "IV: 500–1000mg infusion. SQ: 100mg daily. Sublingual: 200–400mg daily.",
            status: "Supplement / compoundable",
            wholesale: "$40–80/mo",
            retail: "$149–249/mo",
            notes: "IV NAD+ is a premium service ($300–600/infusion). SQ form is the scalable telehealth version.",
          },
          {
            name: "GHK-Cu",
            category: "Skin / Regeneration",
            mechanism: "Copper peptide. Stimulates collagen and elastin synthesis, promotes wound healing, anti-inflammatory.",
            evidence: "Strong evidence for topical wound healing and skin regeneration. Injectable use emerging.",
            dosing: "Topical: 1–2% cream/serum daily. Injectable: 1–2mg SQ 2–3x/week.",
            status: "Cosmetic / compoundable",
            wholesale: "$30–60/mo",
            retail: "$99–199/mo",
            notes: "Good upsell for aesthetic-focused patients. Low cost, high perceived value.",
          },
          {
            name: "Thymosin Alpha-1 (Tα1)",
            category: "Immune Modulation",
            mechanism: "Thymic peptide. Enhances T-cell differentiation and NK cell activity. Modulates cytokine production.",
            evidence: "FDA orphan drug status. Used in 35+ countries for hepatitis B/C, cancer support, immunodeficiency.",
            dosing: "1.6mg SQ 2x/week for 6–12 weeks.",
            status: "Category 1 (restored Feb 2026)",
            wholesale: "$80–130/mo",
            retail: "$249–399/mo",
            notes: "Premium immune protocol. Oncology support, post-COVID, chronic illness. High-value patient segment.",
          },
          {
            name: "AOD-9604",
            category: "Fat Loss / Metabolic",
            mechanism: "Fragment of HGH (aa 176–191). Stimulates lipolysis and inhibits lipogenesis without IGF-1 effects of full HGH.",
            evidence: "Phase II/III trials for obesity (Metabolic Pharmaceuticals). No IGF-1 elevation — safer than HGH.",
            dosing: "300–500mcg SQ daily, morning fasted.",
            status: "Category 1 (restored Feb 2026)",
            wholesale: "$40–70/mo",
            retail: "$149–249/mo",
            notes: "Excellent add-on to GLP-1 protocols for fat loss without the HGH side effect profile.",
          },
          {
            name: "Selank / Semax",
            category: "Cognitive / Nootropic",
            mechanism: "Selank: anxiolytic, BDNF-modulating. Semax: ACTH analog, neuroprotective, cognitive enhancing.",
            evidence: "Approved in Russia for anxiety and cognitive disorders. Growing clinical use in US.",
            dosing: "Selank: 250–500mcg intranasal 2x/day. Semax: 200–600mcg intranasal daily.",
            status: "Category 1 (restored Feb 2026)",
            wholesale: "$30–60/mo",
            retail: "$99–199/mo",
            notes: "Niche but growing. High-performance professionals, biohackers, and cognitive health patients.",
          },
        ].map((p) => (
          <div key={p.name} className="bg-white/5 rounded-xl border border-white/10 p-4">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
              <div>
                <span className="text-white font-bold text-sm">{p.name}</span>
                <span className="ml-2 text-xs text-slate-400 bg-white/5 px-2 py-0.5 rounded">{p.category}</span>
              </div>
              <div className="flex gap-3 text-xs">
                <span className="text-slate-400">Wholesale: <span className="text-teal-400 font-semibold">{p.wholesale}</span></span>
                <span className="text-slate-400">Retail: <span className="text-amber-400 font-semibold">{p.retail}</span></span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-slate-500 uppercase tracking-wide mb-0.5">Mechanism</div>
                <p className="text-slate-300 leading-relaxed">{p.mechanism}</p>
              </div>
              <div>
                <div className="text-slate-500 uppercase tracking-wide mb-0.5">Evidence</div>
                <p className="text-slate-300 leading-relaxed">{p.evidence}</p>
              </div>
              <div>
                <div className="text-slate-500 uppercase tracking-wide mb-0.5">Dosing Protocol</div>
                <p className="text-slate-300 leading-relaxed font-mono">{p.dosing}</p>
              </div>
              <div>
                <div className="text-slate-500 uppercase tracking-wide mb-0.5">Business Notes</div>
                <p className="text-slate-300 leading-relaxed">{p.notes}</p>
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-white/5">
              <span className="text-xs text-slate-500">Legal Status: </span>
              <span className="text-xs text-green-400 font-medium">{p.status}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },

  // ── 3. Regulatory & Legal Framework ────────────────────────────────────────
  {
    id: "regulatory",
    title: "Regulatory & Legal Framework",
    tag: "Legal",
    tagColor: "bg-red-500/20 text-red-300 border border-red-500/30",
    summary: "FDA compounding law, 503A vs 503B, the 2026 reclassification, anti-kickback rules, and state telehealth laws.",
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="text-white font-bold text-base mb-3">The Compounding Framework: 503A vs. 503B</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                label: "503A — Traditional Compounding Pharmacy",
                color: "border-teal-500/40 bg-teal-500/5",
                points: [
                  "Compounds for individual patients with a valid prescription",
                  "Cannot manufacture in bulk without patient-specific Rx",
                  "Must comply with USP 795/797 standards",
                  "PCAB accreditation is the gold standard (voluntary)",
                  "Cannot ship across state lines in large quantities",
                  "Most telehealth peptide clinics use 503A pharmacies",
                ],
              },
              {
                label: "503B — Outsourcing Facility",
                color: "border-amber-500/40 bg-amber-500/5",
                points: [
                  "Can produce in bulk without patient-specific Rx",
                  "Registered with FDA; subject to cGMP inspections",
                  "Can sell to hospitals, clinics, and physicians directly",
                  "Higher regulatory burden but greater scale",
                  "Can ship across state lines freely",
                  "Used by larger clinic networks for high-volume compounds",
                ],
              },
            ].map((s) => (
              <div key={s.label} className={`rounded-xl border p-4 ${s.color}`}>
                <div className="text-white font-semibold text-sm mb-3">{s.label}</div>
                <ul className="space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-teal-400 mt-0.5 flex-shrink-0">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-3">The 2026 FDA Reclassification</h4>
          <div className="bg-white/5 rounded-xl border border-white/10 p-4">
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              On February 27, 2026, HHS Secretary RFK Jr. announced that <strong className="text-white">~14 of 19 peptides</strong> previously placed on the FDA's Category 2 restricted list will be moved back to Category 1 — restoring legal compounding access with a physician's prescription.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <div className="text-green-400 font-semibold text-xs mb-2">✓ Restored to Category 1</div>
                <ul className="text-xs text-slate-300 space-y-1">
                  {["BPC-157", "TB-500 (Thymosin Beta-4)", "Thymosin Alpha-1", "AOD-9604", "Selank & Semax", "KPV", "MOTS-C", "GHK-Cu (injectable)", "CJC-1295 + Ipamorelin"].map(p => (
                    <li key={p} className="flex items-center gap-1"><span className="text-green-400">✓</span> {p}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
                <div className="text-amber-400 font-semibold text-xs mb-2">⚠ Still Under Review</div>
                <ul className="text-xs text-slate-300 space-y-1">
                  {["Epithalon", "Follistatin", "IGF-1 LR3", "Humanin", "SS-31"].map(p => (
                    <li key={p} className="flex items-center gap-1"><span className="text-amber-400">?</span> {p}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <div className="text-blue-400 font-semibold text-xs mb-2">ℹ Already Legal</div>
                <ul className="text-xs text-slate-300 space-y-1">
                  {["Semaglutide (503A)", "Tirzepatide (503A)", "Sermorelin", "PT-141", "NAD+"].map(p => (
                    <li key={p} className="flex items-center gap-1"><span className="text-blue-400">✓</span> {p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-slate-400 text-xs mt-3">
              <strong className="text-amber-400">Important:</strong> Category 1 = legal compounding with Rx. It does NOT mean FDA-approved. These remain off-label therapeutics requiring physician supervision and monitoring.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-3">Key Laws Every Operator Must Know</h4>
          <div className="space-y-3">
            {[
              {
                law: "Anti-Kickback Statute (AKS)",
                risk: "Criminal",
                summary: "Federal law prohibiting remuneration in exchange for referrals of federal healthcare program business. Applies even to cash-pay clinics in certain structures.",
                rule: "Clinic cannot receive a percentage of pharmacy revenue. Pharmacy cannot pay clinic for referrals. Safe harbor: clinic can own the pharmacy if properly structured.",
              },
              {
                law: "Stark Law (Physician Self-Referral)",
                risk: "Civil",
                summary: "Prohibits physicians from referring Medicare/Medicaid patients to entities in which they have a financial interest. Less relevant for 100% cash-pay, but watch if you ever accept insurance.",
                rule: "Stay 100% cash-pay to avoid Stark. If you add insurance billing later, get a healthcare attorney to review all referral relationships.",
              },
              {
                law: "FD&C Act § 503A",
                risk: "Regulatory",
                summary: "The federal statute governing traditional compounding pharmacies. Defines what can be compounded, for whom, and under what conditions.",
                rule: "Must have a valid patient-specific prescription. Cannot compound FDA-approved drugs in commercially available doses. Cannot advertise specific compounded drugs.",
              },
              {
                law: "Ryan Haight Online Pharmacy Consumer Protection Act",
                risk: "Criminal",
                summary: "Requires at least one in-person medical evaluation before prescribing controlled substances via telemedicine. DEA has granted COVID-era exceptions that are being phased out.",
                rule: "Peptides are NOT controlled substances — Ryan Haight does not apply. But if you add testosterone (Schedule III) to your formulary, you need in-person evaluation or DEA telemedicine registration.",
              },
              {
                law: "State Telehealth Practice Laws",
                risk: "Licensing",
                summary: "Each state has its own rules about where a physician must be licensed to treat patients via telehealth. Most require the physician to be licensed in the patient's state.",
                rule: "Start in states where your physician is licensed. Expand by adding licenses (or hiring licensed NPs/PAs) in new states. Compact states (IMLC) allow multi-state practice with one application.",
              },
              {
                law: "HIPAA / HITECH",
                risk: "Civil / Criminal",
                summary: "Governs privacy and security of protected health information (PHI). Applies to all healthcare providers, including telehealth.",
                rule: "Use HIPAA-compliant EHR, telehealth, and messaging platforms. Sign BAAs with all vendors. Encrypt PHI at rest and in transit. Have a breach response plan.",
              },
            ].map((l) => (
              <div key={l.law} className="bg-white/5 rounded-xl border border-white/10 p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-white font-semibold text-sm">{l.law}</span>
                  <span className={`text-xs px-2 py-0.5 rounded font-medium ${l.risk === "Criminal" ? "bg-red-500/20 text-red-300" : l.risk === "Civil" ? "bg-amber-500/20 text-amber-300" : "bg-blue-500/20 text-blue-300"}`}>
                    {l.risk} Risk
                  </span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-2">{l.summary}</p>
                <div className="bg-teal-500/10 border border-teal-500/20 rounded p-2">
                  <span className="text-teal-400 text-xs font-semibold">Rule: </span>
                  <span className="text-slate-300 text-xs">{l.rule}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // ── 4. Market Landscape ─────────────────────────────────────────────────────
  {
    id: "market",
    title: "Market Landscape",
    tag: "Market",
    tagColor: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
    summary: "Market size, growth drivers, patient demographics, and the competitive landscape in 2026.",
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="text-white font-bold text-base mb-3">Market Size & Growth</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[
              { label: "Global Peptide Therapeutics", value: "$47.6B", note: "2024 market size" },
              { label: "CAGR (2024–2030)", value: "9.4%", note: "Projected growth rate" },
              { label: "US Telehealth Market", value: "$87B", note: "2026 estimate" },
              { label: "GLP-1 Market (US)", value: "$35B+", note: "2025 annual revenue" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 rounded-xl border border-white/10 p-3 text-center">
                <div className="text-2xl font-black text-teal-400 mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.value}</div>
                <div className="text-white text-xs font-semibold mb-0.5">{s.label}</div>
                <div className="text-slate-500 text-xs">{s.note}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/5 rounded-xl border border-white/10 p-4">
            <h5 className="text-white font-semibold text-sm mb-3">Key Growth Drivers</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "GLP-1 drugs (Ozempic/Wegovy) normalized the concept of injectable weight loss therapy — massive patient education effect",
                "Post-COVID interest in immune health, energy, and longevity drove peptide awareness to mainstream audiences",
                "2026 FDA reclassification restored legal access to 14 previously restricted peptides",
                "Telehealth infrastructure (built during COVID) makes nationwide physician access scalable and low-cost",
                "Aging Millennial demographic (40–55) driving demand for performance and longevity medicine",
                "Biohacker/influencer culture (Huberman Lab, Peter Attia, Bryan Johnson) has educated millions on peptides",
                "Cash-pay model avoids insurance friction — patients who want results pay out of pocket",
                "Compounding pharmacy industry matured — PCAB-accredited pharmacies provide pharmaceutical-grade quality",
              ].map((d) => (
                <div key={d} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="text-teal-400 mt-0.5 flex-shrink-0">→</span>
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-3">Patient Demographics</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                segment: "Weight Loss (GLP-1)",
                profile: "35–65, BMI 27+, failed diet/exercise, often referred by PCP. Motivated by aesthetics and metabolic health.",
                ltv: "$4,000–6,000/yr",
                cac: "$150–300",
                channel: "Google, Meta, word of mouth",
              },
              {
                segment: "Performance & Recovery",
                profile: "28–50, active professionals, athletes, CrossFit/gym community. BPC-157, TB-500, CJC/Ipamorelin.",
                ltv: "$2,400–4,800/yr",
                cac: "$100–200",
                channel: "Instagram, podcasts, gym referrals",
              },
              {
                segment: "Longevity & Anti-Aging",
                profile: "45–70, high-income, health-conscious. NAD+, Thymosin Alpha-1, GHK-Cu, GH secretagogues.",
                ltv: "$6,000–12,000/yr",
                cac: "$200–500",
                channel: "Concierge referrals, longevity clinics, direct",
              },
            ].map((s) => (
              <div key={s.segment} className="bg-white/5 rounded-xl border border-white/10 p-4">
                <div className="text-amber-400 font-semibold text-sm mb-2">{s.segment}</div>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">{s.profile}</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between"><span className="text-slate-500">Annual LTV</span><span className="text-teal-400 font-semibold">{s.ltv}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Est. CAC</span><span className="text-white">{s.cac}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Top Channel</span><span className="text-white">{s.channel}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-3">Competitive Landscape</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  {["Company", "Model", "Pricing", "Strengths", "Weaknesses"].map(h => (
                    <th key={h} className="text-left py-2 pr-4 text-slate-400 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Hims & Hers", "D2C Telehealth", "$199–299/mo", "Brand, scale, marketing machine", "Commoditized, no physician relationship"],
                  ["Noom Med", "App + GLP-1", "$149–249/mo", "Behavioral + medical combo", "Limited peptide formulary"],
                  ["Fountain Life", "Longevity Clinic", "$3,500–25k/yr", "Premium brand, diagnostics", "Not accessible, high CAC"],
                  ["Maximus", "TRT + Peptides", "$150–400/mo", "Strong male health brand", "Male-only, limited formulary"],
                  ["Defy Medical", "Telehealth HRT/TRT", "$200–500/mo", "Physician-led, full formulary", "Dated UX, no D2C marketing"],
                  ["Local Medspa/Clinic", "In-person", "$300–800/visit", "Relationship, trust", "No scale, high overhead"],
                  ["Gray Market (research)", "Unregulated", "$30–80/mo", "Price", "No physician, quality unknown, illegal"],
                ].map(([c, m, p, str, weak]) => (
                  <tr key={c} className="text-slate-300">
                    <td className="py-2 pr-4 font-semibold text-white">{c}</td>
                    <td className="py-2 pr-4">{m}</td>
                    <td className="py-2 pr-4 text-teal-400">{p}</td>
                    <td className="py-2 pr-4 text-green-400">{str}</td>
                    <td className="py-2 text-red-400">{weak}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
            <p className="text-amber-300 text-xs font-semibold mb-1">Our Positioning</p>
            <p className="text-slate-300 text-xs leading-relaxed">
              The gap in the market is <strong className="text-white">physician-led + accessible</strong>. Hims is accessible but not physician-led. Fountain Life is physician-led but not accessible. Nextara Health occupies the middle: real physician oversight, full peptide formulary, telehealth delivery, and pricing that doesn't require a concierge membership.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // ── 5. Platforms & Tech Stack ───────────────────────────────────────────────
  {
    id: "platforms",
    title: "Platforms & Tech Stack",
    tag: "Operations",
    tagColor: "bg-orange-500/20 text-orange-300 border border-orange-500/30",
    summary: "EHR/EMR options, telehealth platforms, pharmacy integrations, CRM tools, and the full recommended tech stack.",
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="text-white font-bold text-base mb-3">EHR / Practice Management Platforms</h4>
          <div className="space-y-3">
            {[
              {
                name: "LUKE Health",
                price: "$499/mo",
                best: "All-in-one for peptide clinics",
                pros: ["Only platform with prescription-gated e-commerce", "8-stage CRM built for consultation workflows", "Field-level HIPAA encryption", "AI patient engagement (chat, SMS, WhatsApp)", "Eliminates 4–5 separate tool subscriptions"],
                cons: ["Higher price point", "Newer platform, smaller community"],
                verdict: "Best choice if budget allows. Purpose-built for this exact use case.",
                score: "9.2/10",
              },
              {
                name: "Cerbo",
                price: "$250/mo",
                best: "Functional medicine EHR",
                pros: ["Excellent customizable intake forms", "Strong lab integration (LabCorp, Quest)", "Good patient portal", "Functional medicine workflow templates"],
                cons: ["No e-commerce", "No CRM", "Requires separate telehealth tool"],
                verdict: "Best pure EHR for the money. Pair with Stripe + Calendly + Doxy.me for full stack.",
                score: "8.2/10",
              },
              {
                name: "OptiMantra",
                price: "$99/mo",
                best: "Budget-conscious starter",
                pros: ["Lowest price point", "Good charting for integrative medicine", "Supplement dispensing via Fullscript"],
                cons: ["No e-commerce, no CRM, no AI engagement", "Requires 3–4 additional tools"],
                verdict: "Good for solo practitioners starting out. Expect to outgrow it.",
                score: "7.8/10",
              },
              {
                name: "Healthie",
                price: "$99–399/mo",
                best: "Nutrition + telehealth practices",
                pros: ["Strong nutrition/wellness workflow", "Built-in telehealth", "Client portal", "Group programs"],
                cons: ["Not built for peptide prescribing", "Limited pharmacy integration"],
                verdict: "Better for nutrition coaching than peptide prescribing. Consider if adding nutrition services.",
                score: "7.0/10",
              },
              {
                name: "Jane App",
                price: "$35/provider/mo",
                best: "Scheduling-first practices",
                pros: ["Excellent scheduling UX", "Online booking", "Insurance billing"],
                cons: ["Canadian-focused (PIPEDA, not HIPAA-first)", "No peptide-specific features"],
                verdict: "Great for scheduling but not the right fit for a US telehealth peptide clinic.",
                score: "6.5/10",
              },
            ].map((p) => (
              <div key={p.name} className="bg-white/5 rounded-xl border border-white/10 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-white font-bold text-sm">{p.name}</span>
                    <span className="ml-2 text-xs text-slate-400 bg-white/5 px-2 py-0.5 rounded">{p.best}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-teal-400 font-semibold text-sm">{p.price}</span>
                    <span className="text-amber-400 font-bold text-sm">{p.score}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <div className="text-green-400 text-xs font-semibold mb-1">Pros</div>
                    <ul className="space-y-0.5">{p.pros.map(pr => <li key={pr} className="text-xs text-slate-300 flex items-start gap-1"><span className="text-green-400">+</span>{pr}</li>)}</ul>
                  </div>
                  <div>
                    <div className="text-red-400 text-xs font-semibold mb-1">Cons</div>
                    <ul className="space-y-0.5">{p.cons.map(c => <li key={c} className="text-xs text-slate-300 flex items-start gap-1"><span className="text-red-400">−</span>{c}</li>)}</ul>
                  </div>
                </div>
                <div className="bg-teal-500/10 border border-teal-500/20 rounded p-2">
                  <span className="text-teal-400 text-xs font-semibold">Verdict: </span>
                  <span className="text-slate-300 text-xs">{p.verdict}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-3">Recommended Full Tech Stack</h4>
          <div className="bg-white/5 rounded-xl border border-white/10 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  phase: "Phase 1 — Launch (Month 1–6)",
                  budget: "~$500–800/mo",
                  stack: [
                    ["EHR / Charting", "Cerbo", "$250/mo"],
                    ["Telehealth Video", "Doxy.me (HIPAA)", "$35/mo"],
                    ["Scheduling", "Calendly (HIPAA)", "$16/mo"],
                    ["Payments", "Stripe", "2.9% + $0.30"],
                    ["Patient Messaging", "Spruce Health", "$99/mo"],
                    ["Lab Orders", "Rupa Health", "Free"],
                    ["Pharmacy", "Empower Pharmacy", "Per order"],
                  ],
                },
                {
                  phase: "Phase 2 — Scale (Month 6+)",
                  budget: "~$800–1,200/mo",
                  stack: [
                    ["All-in-One Platform", "LUKE Health", "$499/mo"],
                    ["CRM / Marketing", "GoHighLevel", "$97/mo"],
                    ["Email Marketing", "Klaviyo", "$150/mo"],
                    ["Lab Integration", "Cerbo or direct", "Included"],
                    ["Pharmacy (primary)", "Empower Pharmacy", "Per order"],
                    ["Pharmacy (backup)", "Strive Pharmacy", "Per order"],
                    ["Analytics", "Google Analytics 4", "Free"],
                  ],
                },
              ].map((s) => (
                <div key={s.phase}>
                  <div className="text-amber-400 font-semibold text-sm mb-1">{s.phase}</div>
                  <div className="text-slate-500 text-xs mb-3">Estimated: {s.budget}</div>
                  <table className="w-full text-xs">
                    <tbody className="divide-y divide-white/5">
                      {s.stack.map(([cat, tool, cost]) => (
                        <tr key={cat}>
                          <td className="py-1.5 pr-3 text-slate-500">{cat}</td>
                          <td className="py-1.5 pr-3 text-white font-medium">{tool}</td>
                          <td className="py-1.5 text-teal-400 text-right">{cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ── 6. Pharmacy Partners ────────────────────────────────────────────────────
  {
    id: "pharmacies",
    title: "Pharmacy Partners",
    tag: "Supply Chain",
    tagColor: "bg-green-500/20 text-green-300 border border-green-500/30",
    summary: "The 5 best 503A compounding pharmacies, how to vet them, and how to set up provider accounts.",
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 text-sm leading-relaxed">
          Not all compounding pharmacies are equal. The difference between a PCAB-accredited pharmacy and an unaccredited one can be the difference between pharmaceutical-grade compounds and inconsistent, potentially contaminated products. Always vet your pharmacy partners before prescribing.
        </p>
        {[
          {
            name: "Empower Pharmacy",
            location: "Houston, TX",
            accreditation: "PCAB + 503A + 503B",
            recommended: true,
            strengths: ["Largest 503A pharmacy in the US", "Full peptide formulary including all Category 1 peptides", "Provider portal with real-time order tracking", "Fast shipping (2–3 days nationwide)", "Competitive wholesale pricing", "Strong compliance documentation"],
            setup: "Apply at empowerpharmacy.com/providers. Requires DEA number, state license, and NPI. Approval in 3–5 business days.",
            notes: "Primary pharmacy recommendation. Use as your default for all peptide orders.",
          },
          {
            name: "Strive Pharmacy",
            location: "Gilbert, AZ",
            accreditation: "PCAB + 503A",
            recommended: true,
            strengths: ["Excellent for smaller clinics starting out", "Responsive provider support", "Good formulary coverage", "Flexible minimum order requirements"],
            setup: "Apply at strivepharmacy.com. Similar documentation requirements to Empower.",
            notes: "Good backup pharmacy. Use when Empower has stock issues or for specific formulations.",
          },
          {
            name: "Belmar Pharmacy",
            location: "Denver, CO",
            accreditation: "PCAB + 503A",
            recommended: true,
            strengths: ["Established provider network", "Strong HRT + peptide formulary", "Good for hormone + peptide combination protocols", "Reliable quality control"],
            setup: "Apply at belmarpharmacy.com/healthcare-providers.",
            notes: "Strong for HRT + peptide combination protocols. Good regional option for Mountain/West patients.",
          },
          {
            name: "CRE8 Pharmacy",
            location: "Multiple locations",
            accreditation: "503A",
            recommended: false,
            strengths: ["Flexible for novel protocols", "Willing to compound less common peptides", "Good for experimental formulations"],
            setup: "Contact directly for provider setup.",
            notes: "Use for novel or less common peptides not available at Empower. Not recommended as primary.",
          },
          {
            name: "Promise Pharmacy",
            location: "Multiple locations",
            accreditation: "503A",
            recommended: false,
            strengths: ["Strong telehealth integrations", "Peptides + hormones formulary", "API integrations available"],
            setup: "Apply at promisepharmacy.com.",
            notes: "Good telehealth API integrations. Consider if you need automated prescription routing.",
          },
        ].map((p) => (
          <div key={p.name} className={`bg-white/5 rounded-xl border p-4 ${p.recommended ? "border-teal-500/30" : "border-white/10"}`}>
            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
              <div>
                <span className="text-white font-bold text-sm">{p.name}</span>
                <span className="ml-2 text-xs text-slate-400">{p.location}</span>
                {p.recommended && <span className="ml-2 text-xs bg-teal-500/20 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded">Recommended</span>}
              </div>
              <span className="text-xs text-slate-400 bg-white/5 px-2 py-0.5 rounded">{p.accreditation}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <div className="text-green-400 text-xs font-semibold mb-1">Strengths</div>
                <ul className="space-y-0.5">{p.strengths.map(s => <li key={s} className="text-xs text-slate-300 flex items-start gap-1"><span className="text-green-400">+</span>{s}</li>)}</ul>
              </div>
              <div>
                <div className="text-blue-400 text-xs font-semibold mb-1">How to Set Up</div>
                <p className="text-xs text-slate-300 leading-relaxed">{p.setup}</p>
              </div>
            </div>
            <div className="bg-white/5 rounded p-2">
              <span className="text-amber-400 text-xs font-semibold">Notes: </span>
              <span className="text-slate-300 text-xs">{p.notes}</span>
            </div>
          </div>
        ))}
        <div className="bg-white/5 rounded-xl border border-white/10 p-4">
          <h5 className="text-white font-semibold text-sm mb-3">Pharmacy Vetting Checklist</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              "PCAB accreditation (Pharmacy Compounding Accreditation Board)",
              "FDA 503A registration (verify at fda.gov)",
              "USP 797 compliance for sterile preparations",
              "USP 795 compliance for non-sterile preparations",
              "Certificate of Analysis (COA) available for each batch",
              "Endotoxin testing for injectable compounds",
              "Sterility testing for all sterile preparations",
              "Cold chain shipping with temperature monitoring",
              "Signed Business Associate Agreement (BAA) for HIPAA",
              "State license in your state and patient's state",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="text-teal-400 mt-0.5 flex-shrink-0">☐</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // ── 7. Getting Started Checklist ────────────────────────────────────────────
  {
    id: "checklist",
    title: "Getting Started Checklist",
    tag: "Action Plan",
    tagColor: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
    summary: "The exact steps to go from zero to first patient, organized by week.",
    content: (
      <div className="space-y-4">
        {[
          {
            week: "Week 1–2",
            title: "Legal & Licensing Foundation",
            items: [
              { task: "Hire a healthcare attorney familiar with telehealth and compounding law", priority: "Critical" },
              { task: "Confirm physician's state medical licenses (need license in each patient's state)", priority: "Critical" },
              { task: "Apply for Interstate Medical Licensure Compact (IMLC) if not already enrolled", priority: "High" },
              { task: "Set up professional LLC or PC (physician-owned in most states)", priority: "Critical" },
              { task: "Obtain DEA registration (required for testosterone; not required for peptides alone)", priority: "Medium" },
              { task: "Review Anti-Kickback Statute compliance with attorney before setting up pharmacy relationships", priority: "Critical" },
            ],
          },
          {
            week: "Week 2–4",
            title: "Technology & Infrastructure",
            items: [
              { task: "Select and set up EHR (Cerbo for Phase 1, LUKE Health for Phase 2)", priority: "Critical" },
              { task: "Set up HIPAA-compliant telehealth platform (Doxy.me or built into EHR)", priority: "Critical" },
              { task: "Configure patient intake forms (health history, goals, current medications, consent)", priority: "Critical" },
              { task: "Set up payment processing (Stripe with HIPAA BAA)", priority: "High" },
              { task: "Create patient portal for secure messaging and document sharing", priority: "High" },
              { task: "Set up lab ordering workflow (Rupa Health for easy patient-pay labs)", priority: "High" },
            ],
          },
          {
            week: "Week 3–5",
            title: "Pharmacy Partnerships",
            items: [
              { task: "Apply for provider account at Empower Pharmacy (primary)", priority: "Critical" },
              { task: "Apply for provider account at Strive Pharmacy (backup)", priority: "High" },
              { task: "Request formulary and pricing sheets from both pharmacies", priority: "High" },
              { task: "Verify PCAB accreditation and request sample COAs", priority: "Critical" },
              { task: "Sign BAA with each pharmacy partner", priority: "Critical" },
              { task: "Set up prescription routing workflow in your EHR", priority: "High" },
            ],
          },
          {
            week: "Week 4–6",
            title: "Clinical Protocols & Documentation",
            items: [
              { task: "Develop standard intake protocol (what labs to order before starting each peptide)", priority: "Critical" },
              { task: "Create protocol templates for top 5 peptides (semaglutide, CJC/Ipamorelin, BPC-157, PT-141, NAD+)", priority: "High" },
              { task: "Draft informed consent forms for each peptide category", priority: "Critical" },
              { task: "Establish monitoring schedule (when to follow up, what to track)", priority: "High" },
              { task: "Create adverse event reporting protocol", priority: "Critical" },
              { task: "Document prescribing rationale template for off-label use", priority: "High" },
            ],
          },
          {
            week: "Week 6–8",
            title: "Marketing & Patient Acquisition",
            items: [
              { task: "Launch website with clear value proposition and booking CTA", priority: "Critical" },
              { task: "Set up Google Business Profile", priority: "High" },
              { task: "Create Instagram and TikTok accounts with educational content strategy", priority: "Medium" },
              { task: "Set up Google Ads campaign targeting weight loss and peptide keywords", priority: "High" },
              { task: "Identify 5–10 local physicians for referral relationship outreach", priority: "High" },
              { task: "Create referral program for existing patients", priority: "Medium" },
            ],
          },
        ].map((phase) => (
          <div key={phase.week} className="bg-white/5 rounded-xl border border-white/10 p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded">{phase.week}</span>
              <span className="text-white font-semibold text-sm">{phase.title}</span>
            </div>
            <div className="space-y-2">
              {phase.items.map((item) => (
                <div key={item.task} className="flex items-start gap-3">
                  <span className={`text-xs px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5 font-medium ${
                    item.priority === "Critical" ? "bg-red-500/20 text-red-300" :
                    item.priority === "High" ? "bg-amber-500/20 text-amber-300" :
                    "bg-blue-500/20 text-blue-300"
                  }`}>{item.priority}</span>
                  <span className="text-slate-300 text-xs leading-relaxed">{item.task}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function StudyGuide() {
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = topics.filter(
    (t) =>
      !search ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.summary.toLowerCase().includes(search.toLowerCase()) ||
      t.tag.toLowerCase().includes(search.toLowerCase())
  );

  const activeTopic = topics.find((t) => t.id === activeTopicId);

  return (
    <section id="studyguide" className="py-20 bg-[oklch(0.15_0.05_252)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-block text-xs font-bold tracking-widest uppercase text-[oklch(0.52_0.12_175)] border border-[oklch(0.52_0.12_175)]/40 px-3 py-1 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Study Guide
          </div>
          <h2 className="text-4xl font-black text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Everything You Need to Know
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            A comprehensive reference for anyone getting involved in the peptide therapy business. Covers the science, the law, the market, the platforms, and the playbook.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md bg-white/5 border border-white/10 text-white placeholder-slate-500 px-4 py-2 text-sm focus:outline-none focus:border-[oklch(0.52_0.12_175)]/60 transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          />
        </div>

        {/* Topic Grid */}
        {!activeTopic ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTopicId(topic.id)}
                className="text-left bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-xl p-5 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${topic.tagColor}`}>{topic.tag}</span>
                  <span className="text-slate-600 group-hover:text-slate-400 text-lg transition-colors">→</span>
                </div>
                <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {topic.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">{topic.summary}</p>
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-3 text-center py-12 text-slate-500">No topics match your search.</div>
            )}
          </div>
        ) : (
          <div>
            {/* Back button */}
            <button
              onClick={() => setActiveTopicId(null)}
              className="flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              ← Back to all topics
            </button>
            {/* Topic header */}
            <div className="mb-6">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded ${activeTopic.tagColor}`}>{activeTopic.tag}</span>
              <h3 className="text-3xl font-black text-white mt-3 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {activeTopic.title}
              </h3>
              <p className="text-slate-400 text-sm">{activeTopic.summary}</p>
            </div>
            {/* Topic content */}
            <div className="bg-white/3 rounded-2xl border border-white/10 p-6">
              {activeTopic.content}
            </div>
            {/* Navigation between topics */}
            <div className="flex justify-between mt-6 pt-4 border-t border-white/10">
              {(() => {
                const idx = topics.findIndex(t => t.id === activeTopic.id);
                const prev = topics[idx - 1];
                const next = topics[idx + 1];
                return (
                  <>
                    {prev ? (
                      <button onClick={() => setActiveTopicId(prev.id)} className="text-slate-400 hover:text-white text-sm transition-colors">
                        ← {prev.title}
                      </button>
                    ) : <div />}
                    {next ? (
                      <button onClick={() => setActiveTopicId(next.id)} className="text-slate-400 hover:text-white text-sm transition-colors">
                        {next.title} →
                      </button>
                    ) : <div />}
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
