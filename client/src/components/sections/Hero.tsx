import AnimatedCounter from "../AnimatedCounter";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[oklch(0.18_0.055_252)]">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(oklch(0.52_0.12_175) 1px, transparent 1px), linear-gradient(90deg, oklch(0.52_0.12_175) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[oklch(0.52_0.12_175/0.06)] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.18_0.055_252)] to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[oklch(0.52_0.12_175)]" />
            <span className="section-label">Confidential Business Plan · 2026</span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The Peptide
            <br />
            <span className="text-[oklch(0.52_0.12_175)]">Opportunity</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            A physician-led peptide business built for a doctor-entrepreneur partnership. Two paths, one massive market — and the regulatory window is open right now.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => scrollTo("market")}
              className="bg-[oklch(0.52_0.12_175)] hover:bg-[oklch(0.62_0.10_175)] text-white font-bold px-8 py-3 transition-colors duration-200 tracking-wide uppercase text-sm"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Explore the Plan
            </button>
            <button
              onClick={() => scrollTo("doctor")}
              className="border border-[oklch(0.76_0.12_65)] text-[oklch(0.76_0.12_65)] hover:bg-[oklch(0.76_0.12_65/0.1)] font-bold px-8 py-3 transition-colors duration-200 tracking-wide uppercase text-sm"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              For the Doctor →
            </button>
          </div>

          {/* Stat row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
            {[
              { value: 140, prefix: "$", suffix: "B+", label: "Global Market Size", decimals: 0 },
              { value: 52.6, prefix: "$", suffix: "B", label: "US Market (2025)", decimals: 1 },
              { value: 8.7, prefix: "", suffix: "%", label: "Annual Market Growth", decimals: 1 },
              { value: 2026, prefix: "", suffix: "", label: "FDA Reclassification Year", decimals: 0 },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl md:text-4xl font-extrabold text-white mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-xs text-white/40 uppercase tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  );
}
