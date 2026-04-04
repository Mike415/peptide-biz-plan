import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ClipboardList, Video, FlaskConical, Package, MessageCircle,
  RefreshCw, Star, MapPin, Calendar, CreditCard, Stethoscope, UserCheck,
  Truck, PhoneCall, TrendingUp, Award, Clock, DollarSign, ChevronDown, ChevronUp
} from "lucide-react";

// ─── TELEHEALTH JOURNEY ───────────────────────────────────────────────────────
const telehealthSteps = [
  {
    id: 1,
    phase: "Discovery",
    timeframe: "Day 0",
    icon: Search,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
    title: "Patient Finds You Online",
    patientPOV: "A 38-year-old software engineer in San Francisco Googles 'peptide therapy for recovery Bay Area' or sees your Instagram post about BPC-157. They land on your website.",
    whatHappens: [
      "Patient browses your website — reads about programs, sees pricing, reads doctor bio",
      "They fill out a 2-minute intake quiz: age, goals, health history, current medications",
      "Quiz results show them which program they're a candidate for (e.g., 'You may be a candidate for our Recovery Protocol')",
      "They see a clear CTA: 'Book a Free 15-Minute Discovery Call' or 'Start Your Assessment — $149'",
    ],
    clinicAction: "Your website + intake quiz does 100% of the work. No staff needed at this stage.",
    patientCost: "$0 (pre-purchase)",
    patientFeeling: "Curious, hopeful, slightly skeptical — they want to know if this is legit",
    touchpoints: ["Website", "Intake Quiz", "Email Auto-responder"],
    revenue: "$0",
  },
  {
    id: 2,
    phase: "Intake",
    timeframe: "Day 1–3",
    icon: ClipboardList,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/30",
    title: "Medical Intake & Lab Order",
    patientPOV: "Patient pays the $149 intake fee and receives a detailed health questionnaire via email. They spend 15 minutes filling it out — medical history, goals, current supplements, lifestyle.",
    whatHappens: [
      "Patient completes full medical history form in your EHR portal (e.g., Cerbo or Osmind)",
      "They receive a lab requisition order via email — standard panel: CBC, metabolic panel, hormone levels, IGF-1",
      "Patient walks into any LabCorp or Quest location (no appointment needed) and gets blood drawn",
      "Results are sent directly to your clinic portal within 24–72 hours",
    ],
    clinicAction: "Your NP or doctor reviews the intake form and lab order asynchronously — takes 5–10 minutes per patient. No live call needed yet.",
    patientCost: "$149 intake fee + $50–$150 for labs (often covered by insurance)",
    patientFeeling: "Engaged and invested — they've paid and are waiting for results. Excitement building.",
    touchpoints: ["EHR Portal", "Email", "LabCorp/Quest"],
    revenue: "$149",
  },
  {
    id: 3,
    phase: "Consultation",
    timeframe: "Day 4–7",
    icon: Video,
    color: "text-[#136F63]",
    bgColor: "bg-[#136F63]/10",
    borderColor: "border-[#136F63]/30",
    title: "Async Protocol Review (No Video Call Required)",
    patientPOV: "Patient receives a detailed personalized report in their portal. It explains their lab results in plain English, identifies any concerns, and recommends a specific peptide protocol with clear rationale.",
    whatHappens: [
      "Doctor or NP reviews labs + intake form and writes a personalized protocol recommendation",
      "Patient receives a portal notification: 'Your results are ready'",
      "They log in and see: lab interpretation, recommended protocol (e.g., '12-Week Semaglutide + BPC-157 Recovery Stack'), dosing schedule, expected outcomes, and FAQ",
      "Patient can message the provider directly with questions — responses within 24 hours",
      "Patient approves the protocol and proceeds to checkout",
    ],
    clinicAction: "Provider spends 8–12 minutes writing the protocol note. This is the core clinical work — everything else is automated.",
    patientCost: "$0 at this step (covered by intake fee)",
    patientFeeling: "Impressed by the thoroughness. Feels like they're getting real medical care, not a cookie-cutter program.",
    touchpoints: ["EHR Portal", "Secure Messaging", "Protocol PDF"],
    revenue: "$0 (included in intake)",
  },
  {
    id: 4,
    phase: "Purchase",
    timeframe: "Day 7–10",
    icon: CreditCard,
    color: "text-[#E0A96D]",
    bgColor: "bg-[#E0A96D]/10",
    borderColor: "border-[#E0A96D]/30",
    title: "Program Purchase & Prescription",
    patientPOV: "Patient selects their program in the portal and pays. They see a clean breakdown: what they're getting, how long the program runs, what's included. It feels like buying a premium subscription.",
    whatHappens: [
      "Patient selects program tier (e.g., '12-Week Recovery Protocol — $1,197' or monthly at '$399/month')",
      "Payment processed via high-risk merchant account (PaymentCloud or Durango)",
      "HSA/FSA card accepted — system automatically generates a superbill for reimbursement",
      "Doctor electronically signs and sends prescription to your partner pharmacy (e.g., Empower or Promise)",
      "Patient receives confirmation email: 'Your prescription has been sent to the pharmacy. Expect delivery in 3–5 days.'",
    ],
    clinicAction: "Doctor spends 2–3 minutes reviewing and e-signing the prescription. Pharmacy handles the rest.",
    patientCost: "$399–$1,197 depending on program",
    patientFeeling: "Committed and excited. The process felt professional and trustworthy.",
    touchpoints: ["Payment Portal", "EHR e-Prescribe", "Pharmacy System", "Email Confirmation"],
    revenue: "$399–$1,197",
  },
  {
    id: 5,
    phase: "Fulfillment",
    timeframe: "Day 10–14",
    icon: Package,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/30",
    title: "Pharmacy Ships Directly to Patient",
    patientPOV: "A discreet, temperature-controlled package arrives at their door. Inside: vials, syringes, alcohol swabs, and a printed instruction card. A QR code links to a video tutorial on self-injection.",
    whatHappens: [
      "Pharmacy (Empower/Promise) compounds the prescription and ships cold-chain within 24–48 hours",
      "Patient receives tracking number via text/email",
      "Package arrives in a plain, discreet box — no pharmacy branding visible",
      "Inside: medication, supplies, and a branded instruction card from YOUR clinic",
      "Patient scans QR code → watches your clinic's 3-minute injection tutorial video",
    ],
    clinicAction: "Zero clinic involvement in fulfillment. Pharmacy handles 100% of this step.",
    patientCost: "$0 (included in program price)",
    patientFeeling: "Wow moment — the packaging feels premium. The QR code video makes them feel supported.",
    touchpoints: ["Pharmacy Shipping", "SMS/Email Tracking", "Branded Packaging Insert", "Video Tutorial"],
    revenue: "$0 (already collected)",
  },
  {
    id: 6,
    phase: "Active Program",
    timeframe: "Weeks 2–12",
    icon: TrendingUp,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/30",
    title: "Weekly Check-ins & Progress Tracking",
    patientPOV: "Every week, patient gets a short check-in message in their portal. They log their progress — weight, energy, sleep, recovery scores. They can message their provider anytime. They feel monitored and cared for.",
    whatHappens: [
      "Automated weekly check-in survey sent via portal (takes patient 2 minutes to complete)",
      "AI-assisted flagging: if patient reports side effects or concerns, provider is alerted immediately",
      "Monthly async protocol review: provider reviews progress data and adjusts dosing if needed",
      "Patient receives a monthly progress summary: 'You're in Week 6. Here's what your data shows...'",
      "At Week 8: patient receives an email about program renewal and optional add-on protocols",
    ],
    clinicAction: "Provider spends ~5 minutes/month per patient reviewing check-in data. NP handles routine messages.",
    patientCost: "$99/month management fee (ongoing)",
    patientFeeling: "Feels like they have a personal doctor watching their progress. High satisfaction, low churn.",
    touchpoints: ["Portal Check-ins", "Automated Surveys", "Secure Messaging", "Progress Reports"],
    revenue: "$99/month management + $399/month compound = $498/month recurring",
  },
  {
    id: 7,
    phase: "Renewal & Upsell",
    timeframe: "Month 3+",
    icon: RefreshCw,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    borderColor: "border-pink-400/30",
    title: "Renewal, Referrals & Upsells",
    patientPOV: "At the end of their program, patient has lost 18 lbs, their recovery time from workouts has dropped by 40%, and their sleep score is up. They're a believer. They renew immediately and tell three friends.",
    whatHappens: [
      "Patient receives a 'Program Complete' summary with before/after data and outcome metrics",
      "Renewal offer: 'Continue your protocol at $349/month (10% loyalty discount)'",
      "Upsell offer: 'Add NAD+ to your stack for $149/month — your labs suggest you'd benefit'",
      "Referral program: 'Give a friend $50 off, get $50 off your next month'",
      "Patient leaves a Google review and tags your clinic on Instagram",
    ],
    clinicAction: "Automated email sequence handles renewal and upsell. Provider writes a brief renewal note.",
    patientCost: "$349–$498/month (renewed rate)",
    patientFeeling: "Loyal advocate. They feel like they discovered something most people don't know about.",
    touchpoints: ["Outcome Report Email", "Renewal Portal", "Referral System", "Review Request"],
    revenue: "$349–$647/month recurring (renewed + upsell)",
  },
];

// ─── BAY AREA CLINIC JOURNEY ──────────────────────────────────────────────────
const clinicSteps = [
  {
    id: 1,
    phase: "Discovery",
    timeframe: "Day 0",
    icon: MapPin,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
    title: "Patient Discovers the Clinic",
    patientPOV: "A 45-year-old VC partner in Palo Alto hears about your clinic from a colleague at the gym. They Google you, see your Google reviews (4.9 stars), and browse your website. The clinic looks like a premium wellness brand.",
    whatHappens: [
      "Patient finds clinic via Google Maps, referral, or Instagram",
      "They browse the website: clean, medical-grade aesthetic, doctor bio with credentials, before/after testimonials",
      "They see the service menu with transparent pricing (e.g., 'Initial Consultation — $350')",
      "They book online using your scheduling software (e.g., Jane App or Calendly)",
    ],
    clinicAction: "Website and booking system handles this. Front desk receives appointment notification.",
    patientCost: "$0 pre-booking",
    patientFeeling: "Intrigued and impressed. The premium positioning justifies the price in their mind.",
    touchpoints: ["Google Maps", "Website", "Online Booking", "Confirmation Email"],
    revenue: "$0",
  },
  {
    id: 2,
    phase: "Intake",
    timeframe: "Day 1–3 (Pre-Visit)",
    icon: ClipboardList,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/30",
    title: "Pre-Visit Intake & Lab Work",
    patientPOV: "Two days before their appointment, patient receives an email with a health history form and a lab order. They get bloodwork done at a nearby Quest. They feel like this is a serious medical practice.",
    whatHappens: [
      "Patient completes digital intake form (15 min) covering health history, goals, medications",
      "Lab order sent via email — patient visits LabCorp/Quest at their convenience",
      "Results routed directly to clinic EHR before the appointment",
      "Reminder email sent 24 hours before visit with parking info and what to expect",
    ],
    clinicAction: "Front desk sends intake forms. Provider reviews labs before the appointment.",
    patientCost: "$0 pre-visit (labs may be covered by insurance)",
    patientFeeling: "Feels prepared and respected — their time is being taken seriously.",
    touchpoints: ["EHR Portal", "Lab Order Email", "Appointment Reminder"],
    revenue: "$0",
  },
  {
    id: 3,
    phase: "Consultation",
    timeframe: "Visit Day",
    icon: Stethoscope,
    color: "text-[#136F63]",
    bgColor: "bg-[#136F63]/10",
    borderColor: "border-[#136F63]/30",
    title: "In-Person Consultation with the Doctor",
    patientPOV: "Patient arrives at a sleek, minimalist clinic in a professional building. They're greeted by name, offered water or tea. The waiting area has curated health content on a screen. The doctor walks in exactly on time.",
    whatHappens: [
      "Patient arrives — greeted by name, shown to a private consultation room",
      "Doctor reviews labs and intake form with patient on a shared screen (15 minutes)",
      "Doctor explains findings in plain language: 'Your IGF-1 is low for your age — here's what that means'",
      "Doctor presents 2–3 protocol options with clear rationale, pricing, and expected outcomes",
      "Patient selects a protocol and signs informed consent digitally on an iPad",
      "Doctor writes the prescription on the spot — pharmacy notified immediately",
    ],
    clinicAction: "Doctor spends 30–45 minutes with patient. This is the highest-value touchpoint in the entire journey.",
    patientCost: "$350 consultation fee",
    patientFeeling: "Blown away by the quality of care. Feels like they're getting access to something exclusive.",
    touchpoints: ["In-Person Consultation", "EHR Review", "Digital Consent", "e-Prescription"],
    revenue: "$350",
  },
  {
    id: 4,
    phase: "Treatment",
    timeframe: "Same Day or Day 2",
    icon: FlaskConical,
    color: "text-[#E0A96D]",
    bgColor: "bg-[#E0A96D]/10",
    borderColor: "border-[#E0A96D]/30",
    title: "First Treatment & Injection Training",
    patientPOV: "After the consultation, patient is taken to a treatment room. A medical assistant walks them through their first injection — they do it themselves under supervision. It's less scary than they expected.",
    whatHappens: [
      "Medical assistant prepares the first dose from clinic inventory (Model B — clinic-dispensed)",
      "Patient receives hands-on injection training: site selection, technique, disposal",
      "First injection administered in-clinic under supervision",
      "Patient receives a take-home kit: remaining vials, supplies, printed protocol card",
      "QR code on the card links to a video library of injection tutorials and FAQ",
    ],
    clinicAction: "Medical assistant handles training (30 minutes). Doctor available for questions.",
    patientCost: "$599–$1,499 for first program (bundled with consultation)",
    patientFeeling: "Empowered and confident. They did it themselves. The 'wow' moment of the entire experience.",
    touchpoints: ["Treatment Room", "Injection Training", "Take-Home Kit", "QR Code Library"],
    revenue: "$599–$1,499 (program purchase)",
  },
  {
    id: 5,
    phase: "Follow-Up",
    timeframe: "Week 2, 4, 8",
    icon: PhoneCall,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/30",
    title: "Structured Follow-Up Check-ins",
    patientPOV: "Patient gets a text at Week 2: 'How are you feeling? Any questions about your protocol?' They reply in 30 seconds. At Week 4, they come back in for a brief in-person check-in and updated labs.",
    whatHappens: [
      "Week 2: Automated text check-in — patient rates energy, recovery, side effects (1–5 scale)",
      "Week 4: 20-minute in-person follow-up — weight, measurements, updated labs if needed",
      "Doctor reviews progress and adjusts dosing if needed (takes 5 minutes)",
      "Patient receives updated protocol note in their portal",
      "Week 8: Mid-program review — patient sees their progress data visualized",
    ],
    clinicAction: "Week 2 is automated. Week 4 follow-up is 20 minutes of doctor/NP time. Week 8 is async.",
    patientCost: "$150 follow-up visit fee (Week 4 in-person)",
    patientFeeling: "Feels monitored and supported. The in-person check-in reinforces the premium experience.",
    touchpoints: ["SMS Check-in", "In-Person Follow-up", "Lab Results Portal", "Progress Dashboard"],
    revenue: "$150 (follow-up visit)",
  },
  {
    id: 6,
    phase: "Results",
    timeframe: "Week 12",
    icon: Award,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/30",
    title: "Program Completion & Results Review",
    patientPOV: "At Week 12, patient comes in for a final visit. Doctor shows them a side-by-side comparison of their labs and metrics from Day 1 vs. today. The numbers speak for themselves. Patient is emotional.",
    whatHappens: [
      "Final in-person visit: full lab panel, body composition analysis, outcome metrics review",
      "Doctor presents a visual 'Before & After' report: IGF-1 levels, weight, recovery scores, sleep data",
      "Doctor recommends a maintenance protocol: 'Here's what I'd suggest to maintain your results'",
      "Patient is presented with renewal options and a loyalty pricing tier",
      "Clinic requests a Google review and offers a referral incentive",
    ],
    clinicAction: "Doctor spends 30 minutes on final visit. This is the highest-leverage retention moment.",
    patientCost: "$150 final visit fee",
    patientFeeling: "Transformed. They are now a lifetime patient and an active referral source.",
    touchpoints: ["In-Person Final Visit", "Outcome Report", "Renewal Offer", "Referral Program"],
    revenue: "$150 (final visit) + renewal commitment",
  },
  {
    id: 7,
    phase: "Retention",
    timeframe: "Month 4+",
    icon: Star,
    color: "text-pink-400",
    bgColor: "bg-pink-400/10",
    borderColor: "border-pink-400/30",
    title: "Maintenance Protocol & Lifetime Value",
    patientPOV: "Patient is now on a quarterly maintenance protocol. They come in every 3 months for a check-in and refill. They've referred two colleagues. They consider this clinic part of their health stack — like their personal trainer or nutritionist.",
    whatHappens: [
      "Patient enrolls in a quarterly maintenance program: $349/month for ongoing compound + management",
      "Quarterly in-person visit (30 min) replaces monthly check-ins",
      "Patient receives birthday discount and annual labs as a loyalty perk",
      "Referral program: 'Refer a friend, get a free month'",
      "Patient becomes a case study (with consent) — featured in clinic marketing materials",
    ],
    clinicAction: "Quarterly visits are 30 minutes. The rest is automated. Patient is essentially self-managing.",
    patientCost: "$349/month maintenance",
    patientFeeling: "Loyal advocate. This clinic is part of their identity and health routine.",
    touchpoints: ["Quarterly Visits", "Loyalty Program", "Referral System", "Annual Labs"],
    revenue: "$349/month recurring (LTV: $4,188+/year)",
  },
];

// ─── COMPARISON TABLE ─────────────────────────────────────────────────────────
const comparisonRows = [
  { metric: "First Touchpoint", telehealth: "Google / Instagram / SEO", clinic: "Referral / Google Maps / Word of Mouth" },
  { metric: "Time to First Revenue", telehealth: "Same day (intake fee)", clinic: "Day of consultation" },
  { metric: "Doctor Time per Patient", telehealth: "~20 min/month (async)", clinic: "~2 hrs (initial) + 30 min/quarter" },
  { metric: "Patient Acquisition Cost", telehealth: "$30–$80 (digital ads)", clinic: "$50–$150 (local marketing)" },
  { metric: "Average Program Price", telehealth: "$399–$599/month", clinic: "$1,200–$3,500/program" },
  { metric: "Patient LTV (Year 1)", telehealth: "$3,000–$5,000", clinic: "$5,000–$12,000" },
  { metric: "Churn Risk", telehealth: "Higher (no physical bond)", clinic: "Lower (in-person relationship)" },
  { metric: "Referral Rate", telehealth: "~15–20% of patients", clinic: "~35–50% of patients" },
  { metric: "Scalability", telehealth: "Unlimited (no geography)", clinic: "Limited by clinic capacity" },
  { metric: "Wow Moment", telehealth: "Package arrives at door", clinic: "First in-person injection training" },
];

export default function PatientJourney() {
  const [activeModel, setActiveModel] = useState<"telehealth" | "clinic">("telehealth");
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  const steps = activeModel === "telehealth" ? telehealthSteps : clinicSteps;

  return (
    <section id="journey" className="py-24 bg-[oklch(0.18_0.055_252)]">
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
            <span className="text-[oklch(0.76_0.12_65)] text-sm font-mono tracking-widest uppercase">08 — Patient Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            The Patient Journey<br />
            <span className="text-[oklch(0.52_0.12_175)]">End-to-End Walkthrough</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed" style={{ fontWeight: 300 }}>
            What does a patient actually experience from first Google search to loyal subscriber? Here's the complete journey for both models — including what they feel at each step, what it costs them, and what it earns you.
          </p>
        </motion.div>

        {/* Model Toggle */}
        <div className="flex gap-2 bg-[#0B2545] rounded-xl p-1.5 w-fit mb-10 border border-[#1a3a5c]">
          <button
            onClick={() => { setActiveModel("telehealth"); setExpandedStep(1); }}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeModel === "telehealth" ? "bg-[#136F63] text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            📱 Telehealth Model
          </button>
          <button
            onClick={() => { setActiveModel("clinic"); setExpandedStep(1); }}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeModel === "clinic" ? "bg-[#E0A96D] text-[#0B2545] shadow-lg" : "text-gray-400 hover:text-white"}`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            🏥 Bay Area Clinic
          </button>
        </div>

        {/* Journey Steps */}
        <div className="relative mb-20">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#136F63] via-[#1a3a5c] to-transparent hidden md:block" />

          <div className="space-y-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isExpanded = expandedStep === step.id;

              return (
                <motion.div
                  key={`${activeModel}-${step.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="md:pl-16 relative"
                >
                  {/* Step dot on timeline */}
                  <div className={`absolute left-3.5 top-5 w-5 h-5 rounded-full border-2 ${isExpanded ? "border-[#136F63] bg-[#136F63]" : "border-[#1a3a5c] bg-[#0B2545]"} hidden md:flex items-center justify-center transition-colors z-10`}>
                    <span className="text-white text-xs font-bold">{step.id}</span>
                  </div>

                  <div className={`bg-[#0B2545] border ${isExpanded ? "border-[#136F63]/50" : "border-[#1a3a5c]"} rounded-xl overflow-hidden transition-all`}>
                    {/* Step Header */}
                    <button
                      onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                      className="w-full text-left p-5 flex items-center gap-4 hover:bg-white/2 transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-lg ${step.bgColor} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-5 h-5 ${step.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <span className={`text-xs font-bold uppercase tracking-wider ${step.color}`}>{step.phase}</span>
                          <span className="text-xs text-white/30 bg-white/5 px-2 py-0.5 rounded-full">{step.timeframe}</span>
                        </div>
                        <h3 className="text-white font-bold text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {step.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <div className="hidden sm:block text-right">
                          <div className="text-xs text-white/30">Revenue</div>
                          <div className="text-sm font-bold text-[#E0A96D]">{step.revenue}</div>
                        </div>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-white/40" /> : <ChevronDown className="w-4 h-4 text-white/40" />}
                      </div>
                    </button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[#1a3a5c] p-5 space-y-5">
                            {/* Patient POV */}
                            <div className={`border-l-4 ${step.borderColor} pl-4 py-2`}>
                              <div className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${step.color}`}>
                                👤 Patient's Perspective
                              </div>
                              <p className="text-white/80 text-sm leading-relaxed italic">"{step.patientPOV}"</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                              {/* What Happens */}
                              <div>
                                <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">What Happens</div>
                                <ul className="space-y-2">
                                  {step.whatHappens.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                                      <span className={`${step.color} mt-0.5 shrink-0 font-bold`}>{i + 1}.</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Right col */}
                              <div className="space-y-4">
                                {/* Clinic Action */}
                                <div className="bg-[#0d1f35] rounded-lg p-4">
                                  <div className="text-xs font-bold text-[#136F63] uppercase tracking-wider mb-2">🏥 Your Clinic's Action</div>
                                  <p className="text-sm text-white/70">{step.clinicAction}</p>
                                </div>

                                {/* Patient Feeling */}
                                <div className="bg-[#0d1f35] rounded-lg p-4">
                                  <div className="text-xs font-bold text-[#E0A96D] uppercase tracking-wider mb-2">💭 Patient Feeling</div>
                                  <p className="text-sm text-white/70">{step.patientFeeling}</p>
                                </div>

                                {/* Metrics row */}
                                <div className="grid grid-cols-2 gap-3">
                                  <div className="bg-[#0d1f35] rounded-lg p-3">
                                    <div className="text-xs text-white/30 mb-1">Patient Cost</div>
                                    <div className="text-sm font-bold text-white">{step.patientCost}</div>
                                  </div>
                                  <div className="bg-[#0d1f35] rounded-lg p-3">
                                    <div className="text-xs text-white/30 mb-1">Your Revenue</div>
                                    <div className="text-sm font-bold text-[#E0A96D]">{step.revenue}</div>
                                  </div>
                                </div>

                                {/* Touchpoints */}
                                <div>
                                  <div className="text-xs text-white/30 mb-2">Touchpoints</div>
                                  <div className="flex flex-wrap gap-1.5">
                                    {step.touchpoints.map((t) => (
                                      <span key={t} className="text-xs bg-white/5 text-white/50 px-2 py-0.5 rounded">{t}</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Side-by-Side Comparison
          </h3>
          <p className="text-white/50 text-sm mb-6">Key patient experience metrics across both models.</p>
          <div className="overflow-x-auto rounded-xl border border-[#1a3a5c]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0d1f35] border-b border-[#1a3a5c]">
                  <th className="text-left p-4 text-gray-400 font-medium">Metric</th>
                  <th className="text-left p-4 text-[#136F63] font-medium">📱 Telehealth</th>
                  <th className="text-left p-4 text-[#E0A96D] font-medium">🏥 Bay Area Clinic</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={`border-b border-[#1a3a5c] ${i % 2 === 0 ? "bg-[#0B2545]" : "bg-[#0d1f35]"}`}>
                    <td className="p-4 text-white/60 font-medium">{row.metric}</td>
                    <td className="p-4 text-white/80">{row.telehealth}</td>
                    <td className="p-4 text-white/80">{row.clinic}</td>
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
