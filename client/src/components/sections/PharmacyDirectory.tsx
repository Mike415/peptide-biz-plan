import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle, MapPin, Phone, Globe, Star, AlertCircle } from "lucide-react";

const pharmacies = [
  {
    id: "empower",
    name: "Empower Pharmacy",
    tagline: "North America's largest compounding facility",
    location: "Houston, TX",
    states: "All 50 states",
    website: "https://www.empowerpharmacy.com",
    phone: "1-800-515-4110",
    accreditations: ["PCAB Accredited", "503A + 503B", "FDA-Registered"],
    tier: "Enterprise",
    tierColor: "text-[#E0A96D] bg-[#E0A96D]/10 border-[#E0A96D]/30",
    rating: 5,
    bestFor: "High-volume telehealth, GLP-1 programs, full formulary",
    formulary: ["Semaglutide", "Tirzepatide", "Sermorelin", "NAD+", "BPC-157*", "CJC-1295", "PT-141", "Testosterone", "HCG", "GHK-Cu"],
    pricing: [
      { peptide: "Semaglutide (2.5mg/mL, 5mL vial)", wholesale: "$45–$65/vial", retail: "$250–$399/vial" },
      { peptide: "Tirzepatide (5mg/mL, 5mL vial)", wholesale: "$55–$80/vial", retail: "$299–$450/vial" },
      { peptide: "Sermorelin (15mg, 30-day supply)", wholesale: "$35–$55/month", retail: "$149–$249/month" },
      { peptide: "NAD+ (100mg/mL, 10mL vial)", wholesale: "$40–$60/vial", retail: "$199–$299/vial" },
      { peptide: "PT-141 (10mg, 30-day supply)", wholesale: "$30–$50/month", retail: "$149–$199/month" },
    ],
    onboarding: "Online portal — 24–48 hour setup",
    minOrder: "No minimum",
    shipping: "2–3 day nationwide, cold chain",
    pros: ["Largest formulary in the industry", "Both 503A and 503B facilities", "Robust provider portal with API", "Excellent customer support"],
    notes: "Best first call for a new telehealth practice. High volume = better pricing tiers.",
    noteType: "positive",
  },
  {
    id: "promise",
    name: "Promise Pharmacy",
    tagline: "One portal, 600+ clinic partners",
    location: "Palm Harbor, FL",
    states: "42 states licensed",
    website: "https://promisepharmacy.com",
    phone: "727-772-0500",
    accreditations: ["LegitScript Certified", "503A", "3rd Party Tested"],
    tier: "Telehealth-First",
    tierColor: "text-[#136F63] bg-[#136F63]/10 border-[#136F63]/30",
    rating: 5,
    bestFor: "Telehealth startups, EMR integration, streamlined onboarding",
    formulary: ["Semaglutide", "Tirzepatide", "Sermorelin", "BPC-157*", "PT-141", "Testosterone", "Hormone Therapy", "Anti-Aging Compounds"],
    pricing: [
      { peptide: "Semaglutide (monthly program)", wholesale: "$50–$70/month", retail: "$299–$399/month" },
      { peptide: "Tirzepatide (monthly program)", wholesale: "$60–$85/month", retail: "$349–$449/month" },
      { peptide: "Sermorelin (monthly program)", wholesale: "$30–$50/month", retail: "$149–$229/month" },
      { peptide: "BPC-157 (monthly program)*", wholesale: "$25–$45/month", retail: "$149–$249/month" },
      { peptide: "PT-141 (monthly program)", wholesale: "$28–$48/month", retail: "$129–$199/month" },
    ],
    onboarding: "Instant provider setup — same-day approval",
    minOrder: "No minimum",
    shipping: "Next-day shipping available",
    pros: ["Instant provider onboarding", "API + EMR integrations built for telehealth", "Volume discounts available", "Dedicated success manager"],
    notes: "Ideal starting partner for a lean telehealth launch. Designed specifically for high-growth telehealth workflows.",
    noteType: "positive",
  },
  {
    id: "strive",
    name: "Strive Pharmacy",
    tagline: "Tailored medicine for powerful outcomes",
    location: "Scottsdale, AZ (+ 6 locations)",
    states: "All 50 states",
    website: "https://www.strivepharmacy.com",
    phone: "1-877-878-4837",
    accreditations: ["PCAB Accredited", "503A", "LegitScript Certified"],
    tier: "Premium",
    tierColor: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    rating: 4,
    bestFor: "Bay Area clinic, premium positioning, provider education",
    formulary: ["Semaglutide", "Sermorelin", "NAD+", "LDN", "Testosterone", "Hormone Therapy", "Mental Health", "Gut Health", "Hair Growth"],
    pricing: [
      { peptide: "Semaglutide/Glycine/B12 (monthly)", wholesale: "$55–$75/month", retail: "$279–$399/month" },
      { peptide: "Sermorelin (monthly)", wholesale: "$38–$58/month", retail: "$159–$249/month" },
      { peptide: "NAD+ Flex-Dose Tablets (monthly)", wholesale: "$30–$50/month", retail: "$149–$229/month" },
      { peptide: "Testosterone Cypionate (monthly)", wholesale: "$20–$35/month", retail: "$99–$179/month" },
    ],
    onboarding: "Become a Provider application — 2–5 day review",
    minOrder: "No minimum",
    shipping: "2–3 day nationwide",
    pros: ["Strong provider education resources + webinars", "Premium brand positioning", "1,000+ employees — highly reliable", "Excellent for hormone + peptide combo protocols"],
    notes: "Strong choice for a Bay Area clinic that wants a premium pharmacy brand to co-market with. Less GLP-1 focused than Empower.",
    noteType: "positive",
  },
  {
    id: "belmar",
    name: "Belmar Pharma Solutions",
    tagline: "Telehealth-specialized since 1985",
    location: "Lakewood, CO (6 locations nationwide)",
    states: "All 50 states",
    website: "https://www.belmarpharmasolutions.com",
    phone: "1-800-525-9473",
    accreditations: ["PCAB Accredited", "503A", "LegitScript Certified"],
    tier: "Established",
    tierColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    rating: 4,
    bestFor: "Hormone therapy, HRT, established practices, reliability",
    formulary: ["Sermorelin", "Testosterone", "HCG", "Progesterone", "Estradiol", "Thyroid", "NAD+", "DHEA"],
    pricing: [
      { peptide: "Sermorelin (monthly)", wholesale: "$35–$55/month", retail: "$149–$249/month" },
      { peptide: "Testosterone Cypionate (monthly)", wholesale: "$18–$32/month", retail: "$89–$169/month" },
      { peptide: "HCG (monthly)", wholesale: "$25–$40/month", retail: "$99–$179/month" },
      { peptide: "NAD+ (monthly)", wholesale: "$38–$58/month", retail: "$169–$279/month" },
    ],
    onboarding: "Provider application — 3–7 day review",
    minOrder: "No minimum",
    shipping: "2–4 day nationwide, cold chain",
    pros: ["40+ years in business — extremely reliable", "6 locations = redundancy and fast shipping", "Dedicated telehealth support team", "Strong hormone therapy formulary"],
    notes: "Best for a clinic that wants a proven, conservative partner. Formulary is more hormone-focused than peptide-focused.",
    noteType: "neutral",
  },
  {
    id: "cre8",
    name: "CRE8 Pharmacy",
    tagline: "Doctor's best choice for compounding",
    location: "Orlando, FL",
    states: "Select states — verify current licensure",
    website: "https://www.cre8pharmacy.com",
    phone: "407-730-0909",
    accreditations: ["503A", "Sterile Compounding Certified"],
    tier: "Boutique",
    tierColor: "text-rose-400 bg-rose-400/10 border-rose-400/30",
    rating: 4,
    bestFor: "Boutique clinic, personalized service, GLP-1 programs",
    formulary: ["Tirzepatide", "Semaglutide", "BPC-157*", "Sermorelin", "Testosterone", "Custom Blends"],
    pricing: [
      { peptide: "Tirzepatide 40mg program", wholesale: "$120–$160 (10-vial bulk)", retail: "$595–$795/program" },
      { peptide: "Semaglutide (monthly)", wholesale: "$45–$65/month", retail: "$249–$399/month" },
      { peptide: "BPC-157 (monthly)*", wholesale: "$25–$40/month", retail: "$149–$249/month" },
    ],
    onboarding: "Direct provider contact — personalized setup",
    minOrder: "Low minimums — boutique friendly",
    shipping: "2–3 day, cold chain",
    pros: ["Highly personalized provider relationships", "Competitive bulk pricing on GLP-1s", "Flexible custom formulations", "Good for Bay Area clinic with lower initial volume"],
    notes: "Verify current state licensure before partnering. Best for a Bay Area clinic that wants a boutique, high-touch pharmacy relationship.",
    noteType: "warning",
  },
];

const pricingNote = "* BPC-157 and other previously restricted peptides are subject to the 2026 FDA reclassification. Pricing shown reflects expected availability post-reclassification. Confirm current formulary availability directly with each pharmacy.";

export default function PharmacyDirectory() {
  const [expanded, setExpanded] = useState<string | null>("empower");
  const [activeTab, setActiveTab] = useState<"overview" | "pricing">("overview");

  return (
    <section id="pharmacy" className="py-24 bg-[oklch(0.22_0.05_252)]">
      <div className="container mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[oklch(0.52_0.12_175)]" />
            <span className="text-[oklch(0.76_0.12_65)] text-sm font-mono tracking-widest uppercase">07 — Pharmacy Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Pharmacy Partner<br />
            <span className="text-[oklch(0.52_0.12_175)]">Directory</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            Five vetted 503A compounding pharmacies that actively work with telehealth providers and physician-led clinics. Includes real wholesale pricing ranges, formulary coverage, and onboarding details.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-full">
              <CheckCircle className="w-3.5 h-3.5 text-[#136F63]" />
              All pharmacies are licensed 503A facilities
            </div>
            <div className="flex items-center gap-2 text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-full">
              <CheckCircle className="w-3.5 h-3.5 text-[#136F63]" />
              Pricing reflects wholesale rates for provider accounts
            </div>
            <div className="flex items-center gap-2 text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-full">
              <AlertCircle className="w-3.5 h-3.5 text-[#E0A96D]" />
              Always verify current state licensure before partnering
            </div>
          </div>
        </motion.div>

        {/* Pharmacy Cards */}
        <div className="space-y-4 mb-12">
          {pharmacies.map((pharmacy, idx) => (
            <motion.div
              key={pharmacy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#0B2545] border border-[#1a3a5c] rounded-xl overflow-hidden"
            >
              {/* Card Header — always visible */}
              <button
                onClick={() => setExpanded(expanded === pharmacy.id ? null : pharmacy.id)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-white/2 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  {/* Number */}
                  <div className="w-8 h-8 rounded-full bg-[#136F63]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#136F63] text-xs font-bold">{idx + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {pharmacy.name}
                      </h3>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${pharmacy.tierColor}`}>
                        {pharmacy.tier}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm">{pharmacy.tagline}</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="flex items-center gap-1 text-xs text-white/40">
                        <MapPin className="w-3 h-3" />{pharmacy.location}
                      </span>
                      <span className="text-xs text-white/40">•</span>
                      <span className="text-xs text-white/40">{pharmacy.states}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {/* Stars */}
                  <div className="hidden sm:flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < pharmacy.rating ? "text-[#E0A96D] fill-[#E0A96D]" : "text-white/20"}`} />
                    ))}
                  </div>
                  <span className="text-white/40 text-lg">{expanded === pharmacy.id ? "−" : "+"}</span>
                </div>
              </button>

              {/* Expanded Content */}
              {expanded === pharmacy.id && (
                <div className="border-t border-[#1a3a5c] px-6 pb-6">
                  {/* Accreditations */}
                  <div className="flex flex-wrap gap-2 pt-4 mb-6">
                    {pharmacy.accreditations.map((acc) => (
                      <span key={acc} className="flex items-center gap-1 text-xs bg-[#136F63]/15 text-emerald-400 border border-[#136F63]/30 px-2.5 py-1 rounded-full">
                        <CheckCircle className="w-3 h-3" />{acc}
                      </span>
                    ))}
                  </div>

                  {/* Tab Toggle */}
                  <div className="flex gap-1 bg-[#0d1f35] rounded-lg p-1 w-fit mb-6">
                    <button
                      onClick={() => setActiveTab("overview")}
                      className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${activeTab === "overview" ? "bg-[#136F63] text-white" : "text-gray-400 hover:text-white"}`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveTab("pricing")}
                      className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${activeTab === "pricing" ? "bg-[#136F63] text-white" : "text-gray-400 hover:text-white"}`}
                    >
                      Wholesale Pricing
                    </button>
                  </div>

                  {activeTab === "overview" && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left col */}
                      <div className="space-y-5">
                        <div>
                          <div className="text-xs font-bold text-[#E0A96D] uppercase tracking-wider mb-2">Best For</div>
                          <p className="text-white/70 text-sm">{pharmacy.bestFor}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#E0A96D] uppercase tracking-wider mb-2">Formulary Highlights</div>
                          <div className="flex flex-wrap gap-1.5">
                            {pharmacy.formulary.map((item) => (
                              <span key={item} className="text-xs bg-white/5 text-white/60 px-2 py-0.5 rounded">{item}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#E0A96D] uppercase tracking-wider mb-2">Key Advantages</div>
                          <ul className="space-y-1.5">
                            {pharmacy.pros.map((p) => (
                              <li key={p} className="flex items-start gap-2 text-sm text-white/70">
                                <span className="text-[#136F63] mt-0.5 shrink-0">✓</span>{p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {/* Right col */}
                      <div className="space-y-5">
                        <div>
                          <div className="text-xs font-bold text-[#E0A96D] uppercase tracking-wider mb-3">Logistics</div>
                          <div className="space-y-2">
                            {[
                              { label: "Onboarding", value: pharmacy.onboarding },
                              { label: "Min. Order", value: pharmacy.minOrder },
                              { label: "Shipping", value: pharmacy.shipping },
                            ].map((item) => (
                              <div key={item.label} className="flex justify-between items-start gap-4 py-1.5 border-b border-white/5 text-sm">
                                <span className="text-white/40">{item.label}</span>
                                <span className="text-white/80 text-right">{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={`p-4 rounded-lg border ${
                          pharmacy.noteType === "positive" ? "bg-[#136F63]/10 border-[#136F63]/30" :
                          pharmacy.noteType === "warning" ? "bg-[#E0A96D]/10 border-[#E0A96D]/30" :
                          "bg-white/5 border-white/10"
                        }`}>
                          <div className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${
                            pharmacy.noteType === "positive" ? "text-emerald-400" :
                            pharmacy.noteType === "warning" ? "text-[#E0A96D]" :
                            "text-white/40"
                          }`}>Our Take</div>
                          <p className="text-sm text-white/70">{pharmacy.notes}</p>
                        </div>
                        <div className="flex gap-3">
                          <a
                            href={pharmacy.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-semibold text-[#136F63] hover:text-emerald-400 transition-colors"
                          >
                            <Globe className="w-3.5 h-3.5" />Visit Website
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          <span className="text-white/20">|</span>
                          <span className="flex items-center gap-2 text-xs text-white/40">
                            <Phone className="w-3.5 h-3.5" />{pharmacy.phone}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "pricing" && (
                    <div>
                      <div className="overflow-x-auto rounded-lg border border-[#1a3a5c]">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-[#0d1f35] border-b border-[#1a3a5c]">
                              <th className="text-left p-4 text-gray-400 font-medium">Compound</th>
                              <th className="text-right p-4 text-red-400 font-medium">Wholesale (Your Cost)</th>
                              <th className="text-right p-4 text-[#136F63] font-medium">Typical Retail Price</th>
                              <th className="text-right p-4 text-[#E0A96D] font-medium hidden sm:table-cell">Gross Margin</th>
                            </tr>
                          </thead>
                          <tbody>
                            {pharmacy.pricing.map((row, i) => {
                              const wholesale = parseInt(row.wholesale.replace(/[^0-9]/g, "").slice(0, 2));
                              const retail = parseInt(row.retail.replace(/[^0-9]/g, "").slice(0, 3));
                              const margin = retail > 0 ? Math.round(((retail - wholesale) / retail) * 100) : 0;
                              return (
                                <tr key={i} className={`border-b border-[#1a3a5c] ${i % 2 === 0 ? "bg-[#0B2545]" : "bg-[#0d1f35]"}`}>
                                  <td className="p-4 text-white/80">{row.peptide}</td>
                                  <td className="p-4 text-right text-red-400 font-semibold">{row.wholesale}</td>
                                  <td className="p-4 text-right text-[#136F63] font-semibold">{row.retail}</td>
                                  <td className="p-4 text-right hidden sm:table-cell">
                                    <span className="text-[#E0A96D] font-bold">~{margin}%</span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-white/30 mt-3 leading-relaxed">{pricingNote}</p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA / Recommendation */}
        <div className="bg-[#0B2545] border border-[#136F63]/40 rounded-xl p-8">
          <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Our Recommendation: Start with Two Partners
          </h3>
          <p className="text-white/60 text-sm mb-6 leading-relaxed max-w-3xl">
            Don't rely on a single pharmacy from day one. The industry standard is to have a primary pharmacy and a backup. This protects you against formulary changes, shipping delays, and regulatory disruptions.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-[#136F63]/10 border border-[#136F63]/30 rounded-lg p-4">
              <div className="text-[#136F63] font-bold text-sm mb-1">Primary Partner (Telehealth Phase)</div>
              <div className="text-white font-semibold">Promise Pharmacy or Empower Pharmacy</div>
              <div className="text-white/50 text-xs mt-1">Best telehealth integrations, instant onboarding, full GLP-1 formulary</div>
            </div>
            <div className="bg-[#E0A96D]/10 border border-[#E0A96D]/30 rounded-lg p-4">
              <div className="text-[#E0A96D] font-bold text-sm mb-1">Secondary Partner (Bay Area Clinic)</div>
              <div className="text-white font-semibold">Strive Pharmacy or Belmar Pharma</div>
              <div className="text-white/50 text-xs mt-1">Premium brand positioning, reliable hormone + peptide combo protocols</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
