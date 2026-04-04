import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Users, Repeat, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const revenueStreams = [
  {
    id: "consult",
    icon: "🩺",
    name: "Initial Consultation",
    description: "New patient intake, health history review, lab order, and protocol design.",
    telehealth: { price: "$149–$249", cogs: "$15–$25", margin: "88%", volume: "20–40/mo" },
    bayArea: { price: "$350–$500", cogs: "$50–$80", margin: "84%", volume: "30–60/mo" },
    notes: "Async telehealth: doctor reviews form in ~5 min. Bay Area: 30-min in-person consult with NP.",
  },
  {
    id: "programs",
    icon: "💉",
    name: "Peptide Programs (Core Revenue)",
    description: "Bundled 6–12 week protocols including compounds, dosing calendar, and check-ins.",
    telehealth: { price: "$600–$1,200/program", cogs: "$80–$150", margin: "87%", volume: "15–30/mo" },
    bayArea: { price: "$900–$1,800/program", cogs: "$120–$200", margin: "88%", volume: "25–50/mo" },
    notes: "Highest revenue driver. Includes compound cost from 503A pharmacy + markup. Typical gross margin 85–90%.",
  },
  {
    id: "subscription",
    icon: "🔄",
    name: "Monthly Subscription / Refills",
    description: "Recurring monthly compound refills for ongoing protocols (GLP-1, GH peptides, BPC-157).",
    telehealth: { price: "$249–$699/mo", cogs: "$40–$100", margin: "82%", volume: "50–200 active" },
    bayArea: { price: "$299–$799/mo", cogs: "$50–$120", margin: "83%", volume: "80–300 active" },
    notes: "The subscription flywheel. A patient on a 12-month GLP-1 program = $3,000–$8,400 LTV. Aim for 40%+ of revenue from recurring.",
  },
  {
    id: "labs",
    icon: "🔬",
    name: "Lab Work & Follow-Up",
    description: "Baseline and follow-up bloodwork (IGF-1, testosterone, metabolic panel, CBC).",
    telehealth: { price: "$99–$299 (markup)", cogs: "$30–$80", margin: "70%", volume: "Per patient" },
    bayArea: { price: "$150–$400 (markup)", cogs: "$40–$100", margin: "73%", volume: "Per patient" },
    notes: "Order through LabCorp/Quest at wholesale. Some labs billable to insurance under standard CPT codes.",
  },
  {
    id: "stacks",
    icon: "⚡",
    name: "Add-On Stacks & Upsells",
    description: "PT-141 (sexual health), NAD+ (energy/longevity), GHK-Cu (skin), Glutathione.",
    telehealth: { price: "$100–$350/add-on", cogs: "$15–$50", margin: "85%", volume: "20–40% of patients" },
    bayArea: { price: "$150–$500/add-on", cogs: "$20–$60", margin: "87%", volume: "30–50% of patients" },
    notes: "High-margin upsell. Patients already in the ecosystem are 3–5x more likely to add a second protocol.",
  },
  {
    id: "membership",
    icon: "⭐",
    name: "Concierge Membership (Bay Area)",
    description: "Annual VIP membership: unlimited check-ins, priority scheduling, discounted compounds.",
    telehealth: { price: "N/A", cogs: "N/A", margin: "N/A", volume: "N/A" },
    bayArea: { price: "$2,400–$4,800/yr", cogs: "$200–$400/yr", margin: "92%", volume: "10–30 members" },
    notes: "Bay Area exclusive. Targets tech executives and high-net-worth individuals. Extremely high LTV and retention.",
  },
];

const projections = {
  telehealth: [
    { month: "Month 1–3", patients: "10–25 active", mrr: "$8K–$22K", notes: "Launch, first patients, refine intake flow" },
    { month: "Month 4–6", patients: "25–60 active", mrr: "$22K–$55K", notes: "Word-of-mouth + paid ads kicking in" },
    { month: "Month 7–12", patients: "60–150 active", mrr: "$55K–$130K", notes: "Subscription base compounding" },
    { month: "Year 2", patients: "150–400 active", mrr: "$130K–$350K", notes: "Scale with NP delegation, multi-state" },
  ],
  bayArea: [
    { month: "Month 1–3", patients: "15–30 active", mrr: "$18K–$40K", notes: "Soft launch, referral network building" },
    { month: "Month 4–6", patients: "30–70 active", mrr: "$40K–$90K", notes: "Memberships launching, upsells active" },
    { month: "Month 7–12", patients: "70–150 active", mrr: "$90K–$200K", notes: "Full protocol menu, concierge tier" },
    { month: "Year 2", patients: "150–300 active", mrr: "$200K–$450K", notes: "2nd location or telehealth expansion" },
  ],
};

const costBreakdown = [
  { item: "Compounding Pharmacy (COGS)", telehealth: "8–12%", bayArea: "10–14%", color: "bg-teal-500" },
  { item: "Platform & Software (EHR, telehealth)", telehealth: "3–5%", bayArea: "2–3%", color: "bg-blue-500" },
  { item: "Staff (NP/PA, admin)", telehealth: "10–15%", bayArea: "20–28%", color: "bg-indigo-500" },
  { item: "Marketing & Ads", telehealth: "8–12%", bayArea: "5–8%", color: "bg-purple-500" },
  { item: "Compliance & Legal", telehealth: "2–3%", bayArea: "2–3%", color: "bg-amber-500" },
  { item: "Overhead (rent, utilities)", telehealth: "1–2%", bayArea: "8–12%", color: "bg-orange-500" },
  { item: "Net Profit Margin", telehealth: "55–68%", bayArea: "42–53%", color: "bg-emerald-500" },
];

export default function RevenueBreakdown() {
  const [activeModel, setActiveModel] = useState<"telehealth" | "bayArea">("telehealth");
  const [expandedStream, setExpandedStream] = useState<string | null>("programs");

  return (
    <section id="revenue" className="py-24 bg-[#0d1f35]">
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
            <div className="w-8 h-px bg-[#E0A96D]" />
            <span className="text-[#E0A96D] text-sm font-mono tracking-widest uppercase">Revenue Mechanics</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            How the Money <span className="text-[#136F63]">Actually Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A granular breakdown of every revenue stream, unit economics, gross margins, and realistic monthly projections for both business models.
          </p>
        </motion.div>

        {/* Model Toggle */}
        <div className="flex gap-2 mb-12 bg-[#0B2545] rounded-lg p-1 w-fit">
          <button
            onClick={() => setActiveModel("telehealth")}
            className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
              activeModel === "telehealth"
                ? "bg-[#136F63] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            📱 Telehealth Model
          </button>
          <button
            onClick={() => setActiveModel("bayArea")}
            className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
              activeModel === "bayArea"
                ? "bg-[#136F63] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            🏢 Bay Area Clinic
          </button>
        </div>

        {/* Revenue Streams */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Revenue Streams & Unit Economics
          </h3>
          <div className="space-y-3">
            {revenueStreams.map((stream, i) => {
              const data = activeModel === "telehealth" ? stream.telehealth : stream.bayArea;
              const isExpanded = expandedStream === stream.id;
              const isNA = data.price === "N/A";

              return (
                <motion.div
                  key={stream.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`border rounded-lg overflow-hidden transition-all ${
                    isNA
                      ? "border-gray-700 opacity-50"
                      : isExpanded
                      ? "border-[#136F63]"
                      : "border-[#1a3a5c] hover:border-[#136F63]/50"
                  }`}
                >
                  <button
                    onClick={() => !isNA && setExpandedStream(isExpanded ? null : stream.id)}
                    className="w-full flex items-center gap-4 p-4 bg-[#0B2545] text-left"
                    disabled={isNA}
                  >
                    <span className="text-2xl">{stream.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {stream.name}
                        </span>
                        {isNA && (
                          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded">Bay Area Only</span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mt-0.5">{stream.description}</p>
                    </div>
                    <div className="flex items-center gap-6 shrink-0">
                      {!isNA && (
                        <>
                          <div className="text-right hidden sm:block">
                            <div className="text-[#E0A96D] font-bold text-sm">{data.price}</div>
                            <div className="text-gray-500 text-xs">price</div>
                          </div>
                          <div className="text-right hidden sm:block">
                            <div className="text-[#136F63] font-bold text-sm">{data.margin}</div>
                            <div className="text-gray-500 text-xs">margin</div>
                          </div>
                          <div className="text-right hidden md:block">
                            <div className="text-white font-bold text-sm">{data.volume}</div>
                            <div className="text-gray-500 text-xs">volume</div>
                          </div>
                        </>
                      )}
                      {!isNA && (
                        isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                        )
                      )}
                    </div>
                  </button>

                  {isExpanded && !isNA && (
                    <div className="p-4 bg-[#0d1f35] border-t border-[#136F63]/30">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Retail Price</div>
                          <div className="text-[#E0A96D] font-bold">{data.price}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">COGS</div>
                          <div className="text-white font-bold">{data.cogs}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Gross Margin</div>
                          <div className="text-[#136F63] font-bold">{data.margin}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Monthly Volume</div>
                          <div className="text-white font-bold">{data.volume}</div>
                        </div>
                      </div>
                      <div className="bg-[#0B2545] rounded p-3 text-sm text-gray-300 flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-[#E0A96D] shrink-0 mt-0.5" />
                        {stream.notes}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Growth Projections */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Realistic Revenue Projections
          </h3>
          <div className="overflow-x-auto rounded-lg border border-[#1a3a5c]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0B2545] border-b border-[#1a3a5c]">
                  <th className="text-left p-4 text-gray-400 font-medium">Period</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Active Patients</th>
                  <th className="text-left p-4 text-[#E0A96D] font-medium">Monthly Revenue</th>
                  <th className="text-left p-4 text-gray-400 font-medium hidden md:table-cell">Milestone</th>
                </tr>
              </thead>
              <tbody>
                {projections[activeModel].map((row, i) => (
                  <tr key={i} className={`border-b border-[#1a3a5c] ${i % 2 === 0 ? "bg-[#0d1f35]" : "bg-[#0B2545]/50"}`}>
                    <td className="p-4 text-white font-semibold">{row.month}</td>
                    <td className="p-4 text-gray-300">{row.patients}</td>
                    <td className="p-4 text-[#136F63] font-bold">{row.mrr}</td>
                    <td className="p-4 text-gray-400 hidden md:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            * Projections assume a physician Medical Director + 1–2 NPs, standard 503A pharmacy pricing, and moderate paid marketing ($2K–$5K/mo). Conservative estimates.
          </p>
        </div>

        {/* Cost Structure */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Cost Structure (% of Revenue)
          </h3>
          <div className="overflow-x-auto rounded-lg border border-[#1a3a5c]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0B2545] border-b border-[#1a3a5c]">
                  <th className="text-left p-4 text-gray-400 font-medium">Cost Category</th>
                  <th className="text-left p-4 text-gray-400 font-medium">📱 Telehealth</th>
                  <th className="text-left p-4 text-gray-400 font-medium">🏢 Bay Area Clinic</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[#1a3a5c] ${
                      row.item === "Net Profit Margin"
                        ? "bg-[#136F63]/10 font-bold"
                        : i % 2 === 0
                        ? "bg-[#0d1f35]"
                        : "bg-[#0B2545]/50"
                    }`}
                  >
                    <td className="p-4 text-white flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${row.color} inline-block shrink-0`} />
                      {row.item}
                    </td>
                    <td className={`p-4 font-semibold ${row.item === "Net Profit Margin" ? "text-[#136F63]" : "text-gray-300"}`}>
                      {row.telehealth}
                    </td>
                    <td className={`p-4 font-semibold ${row.item === "Net Profit Margin" ? "text-[#136F63]" : "text-gray-300"}`}>
                      {row.bayArea}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#0B2545] border border-[#1a3a5c] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#E0A96D]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>87%</div>
              <div className="text-gray-400 text-sm mt-1">Avg. Gross Margin on Compounds</div>
            </div>
            <div className="bg-[#0B2545] border border-[#1a3a5c] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#136F63]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>$3K–$8K</div>
              <div className="text-gray-400 text-sm mt-1">Avg. Patient Lifetime Value (12 mo)</div>
            </div>
            <div className="bg-[#0B2545] border border-[#1a3a5c] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>13 mo</div>
              <div className="text-gray-400 text-sm mt-1">Avg. Payback Period on Startup Capital</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
