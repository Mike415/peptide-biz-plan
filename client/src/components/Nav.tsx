import { useState, useEffect, useCallback } from "react";

const navItems = [
  { id: "market", label: "Market" },
  { id: "reclassification", label: "2026 FDA" },
  { id: "competitive", label: "Competition" },
  { id: "branding", label: "Branding" },
  { id: "telehealth", label: "Telehealth Plan" },
  { id: "bayarea", label: "Bay Area Plan" },
  { id: "doctor", label: "For the Doctor" },
  { id: "peptides", label: "Peptide Menu" },
  { id: "revenue", label: "Revenue" },
  { id: "encyclopedia", label: "Encyclopedia" },
  { id: "pharmacy", label: "Pharmacies" },
  { id: "journey", label: "Patient Journey" },
  { id: "financials", label: "Financials" },
  { id: "studyguide", label: "Study Guide" },
  { id: "nextsteps", label: "Next Steps" },
];

function getActiveSection(): string {
  let current = navItems[0].id;
  for (const item of navItems) {
    const el = document.getElementById(item.id);
    if (el && el.getBoundingClientRect().top <= 120) {
      current = item.id;
    }
  }
  return current;
}

export default function Nav() {
  const [active, setActive] = useState(() => {
    // Initialize from URL hash if present
    const hash = window.location.hash.replace("#", "");
    return navItems.find((n) => n.id === hash)?.id ?? navItems[0].id;
  });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to section on mount if hash is present
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        // Small delay to let page render fully
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    }
  }, []);

  // Handle browser back/forward hash navigation
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          setActive(hash);
        }
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Update hash and active state on scroll
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
    const current = getActiveSection();
    if (current !== active) {
      setActive(current);
      // Update URL hash without pushing to history (replaceState keeps history clean)
      history.replaceState(null, "", `#${current}`);
    }
  }, [active]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Update hash immediately on click
      history.pushState(null, "", `#${id}`);
      setActive(id);
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
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollTo(item.id, e)}
              className={`px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 no-underline ${
                active === item.id
                  ? "text-[oklch(0.76_0.12_65)] border-b-2 border-[oklch(0.76_0.12_65)]"
                  : "text-white/60 hover:text-white/90"
              }`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#nextsteps"
          onClick={(e) => scrollTo("nextsteps", e)}
          className="hidden lg:block bg-[oklch(0.52_0.12_175)] hover:bg-[oklch(0.62_0.10_175)] text-white text-xs font-bold px-4 py-2 transition-colors duration-200 tracking-wide uppercase no-underline"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Get Started →
        </a>

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
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollTo(item.id, e)}
              className={`text-left py-2 text-sm font-semibold tracking-wide uppercase transition-colors no-underline ${
                active === item.id ? "text-[oklch(0.76_0.12_65)]" : "text-white/70 hover:text-white"
              }`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
