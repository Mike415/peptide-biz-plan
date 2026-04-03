import { useState, useEffect } from "react";

const CORRECT_PASSWORD = "Morelli";
const STORAGE_KEY = "peptide_plan_auth";

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "true") setUnlocked(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
    } else {
      setError(true);
      setShake(true);
      setInput("");
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen bg-[oklch(0.18_0.055_252)] flex flex-col items-center justify-center px-6">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(oklch(0.52_0.12_175) 1px, transparent 1px), linear-gradient(90deg, oklch(0.52_0.12_175) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12 justify-center">
          <div className="w-8 h-8 bg-[oklch(0.52_0.12_175)] flex items-center justify-center">
            <span className="text-white font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>P</span>
          </div>
          <span className="text-white font-bold text-base tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            PEPTIDE VENTURES
          </span>
        </div>

        {/* Card */}
        <div className="bg-[oklch(0.22_0.05_252)] border border-white/10 p-8">
          <div className="mb-6">
            <div className="w-8 h-px bg-[oklch(0.52_0.12_175)] mb-4" />
            <h1
              className="text-2xl font-extrabold text-white mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Confidential Access
            </h1>
            <p className="text-white/40 text-sm leading-relaxed">
              This business plan is private. Enter the access password to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div
              className={`transition-all duration-150 ${shake ? "translate-x-2" : ""}`}
              style={{
                animation: shake ? "shake 0.4s ease-in-out" : "none",
              }}
            >
              <input
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter password"
                autoFocus
                className={`w-full bg-[oklch(0.18_0.055_252)] border px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:border-[oklch(0.52_0.12_175)] transition-colors ${
                  error ? "border-[oklch(0.76_0.12_65)]" : "border-white/10"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              {error && (
                <div
                  className="text-[oklch(0.76_0.12_65)] text-xs mt-2 font-semibold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Incorrect password. Please try again.
                </div>
              )}
            </div>

            <button
              type="submit"
              className="bg-[oklch(0.52_0.12_175)] hover:bg-[oklch(0.62_0.10_175)] text-white font-bold py-3 text-sm uppercase tracking-widest transition-colors duration-200 w-full"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Unlock →
            </button>
          </form>
        </div>

        <div className="text-center mt-6 text-white/20 text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Peptide Ventures · Confidential Business Plan · 2026
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );
}
