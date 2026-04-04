import { useState, useEffect } from "react";

const navItems = [
  { id: "market", label: "Market" },
  { id: "telehealth", label: "Telehealth Plan" },
  { id: "bayarea", label: "Bay Area Plan" },
  { id: "doctor", label: "For the Doctor" },
  { id: "peptides", label: "Peptide Menu" },
  { id: "revenue", label: "Revenue" },
  { id: "encyclopedia", label: "Encyclopedia" },
  { id: "pharmacy", label: "Pharmacies" },
  { id: "financials", label: "Financials" },
  { id: "nextsteps", label: "Next Steps" },
];

export default function Nav() {
  const [active, setActive] = useState("market");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navItems.map((n) => document.getElementById(n.id));
      let current = "market";
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top <= 120) {
          current = section.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.18_0.055_252/0.97)] backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6 max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-[oklch(0.52_0.12_175)] flex items-center justify-center">
            <span className="text-white font-bold text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>P</span>
          </div>
          <span className="text-white font-bold text-sm tracking-wide hidden sm:block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            PEPTIDE VENTURES
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                active === item.id
                  ? "text-[oklch(0.76_0.12_65)] border-b-2 border-[oklch(0.76_0.12_65)]"
                  : "text-white/60 hover:text-white/90"
              }`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo("nextsteps")}
          className="hidden lg:block bg-[oklch(0.52_0.12_175)] hover:bg-[oklch(0.62_0.10_175)] text-white text-xs font-bold px-4 py-2 transition-colors duration-200 tracking-wide uppercase"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Get Started →
        </button>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white/80 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[oklch(0.22_0.05_252)] border-t border-white/10 px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left py-2 text-sm font-semibold tracking-wide uppercase transition-colors ${
                active === item.id ? "text-[oklch(0.76_0.12_65)]" : "text-white/70 hover:text-white"
              }`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
