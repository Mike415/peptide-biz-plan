import Nav from "@/components/Nav";
import PasswordGate from "@/components/PasswordGate";
import Hero from "@/components/sections/Hero";
import Market from "@/components/sections/Market";
import TelehealthPlan from "@/components/sections/TelehealthPlan";
import BayAreaPlan from "@/components/sections/BayAreaPlan";
import ForTheDoctor from "@/components/sections/ForTheDoctor";
import PeptideMenu from "@/components/sections/PeptideMenu";
import RevenueBreakdown from "@/components/sections/RevenueBreakdown";
import PharmacyDirectory from "@/components/sections/PharmacyDirectory";
import PeptideEncyclopedia from "@/components/sections/PeptideEncyclopedia";
import PatientJourney from "@/components/sections/PatientJourney";
import Financials from "@/components/sections/Financials";
import NextSteps from "@/components/sections/NextSteps";

export default function Home() {
  return (
    <PasswordGate>
    <div className="min-h-screen bg-[oklch(0.18_0.055_252)]">
      <Nav />
      <Hero />
      <Market />
      <TelehealthPlan />
      <BayAreaPlan />
      <ForTheDoctor />
      <PeptideMenu />
      <RevenueBreakdown />
      <PeptideEncyclopedia />
      <PharmacyDirectory />
      <PatientJourney />
      <Financials />
      <NextSteps />
    </div>
    </PasswordGate>
  );
}
