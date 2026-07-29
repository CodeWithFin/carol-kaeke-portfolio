import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useScrollY } from "../lib/shared";
import resumePDF from "../../../assets/CAROLINE KAEKE UIUX Resume.pdf?url";
import ckLogo from "../../../assets/logo/carol.png";
import { BackIcon } from "./BackIcon";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#work" },
  { label: "Experience", href: "#experience" },
];

export function Nav({
  variant = "portfolio",
  onBack,
  overDark = false,
}: {
  variant?: "portfolio" | "case-study";
  onBack?: () => void;
  overDark?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollY();
  const solid = scrollY > 60;
  const light = overDark && !solid;

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const ink = light ? "rgba(245,240,232,0.92)" : undefined;
  const inkMuted = light ? "rgba(245,240,232,0.7)" : undefined;

  const logo = (
    <img
      src={ckLogo}
      alt="Caroline Kaeke"
      className="h-[100px] w-auto object-contain"
    />
  );

  return (
    <>
      <header
        style={{
          backgroundColor: solid ? "rgba(245, 240, 232, 0.94)" : "transparent",
          backdropFilter: solid ? "blur(12px)" : "none",
          borderBottom: solid ? "1px solid rgba(28,26,23,0.10)" : "none",
          transition: "background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-[100px] flex items-center justify-between">
          {variant === "case-study" ? (
            <button
              onClick={onBack}
              className="hover:opacity-70 transition-opacity flex items-center gap-2"
              style={{ color: ink ?? "var(--foreground)" }}
              aria-label="Back to portfolio"
            >
              <BackIcon size={22} />
              {logo}
            </button>
          ) : (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:opacity-70 transition-opacity"
              aria-label="Caroline Kaeke — home"
            >
              {logo}
            </button>
          )}

          {variant === "portfolio" && (
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 h-px bg-foreground w-0 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>
          )}

          <div className="hidden md:flex items-center gap-3">
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 border"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: inkMuted ?? "rgba(28,26,23,0.7)",
                borderColor: light ? "rgba(245,240,232,0.3)" : "rgba(28,26,23,0.25)",
              }}
            >
              Resume <ArrowUpRight size={13} strokeWidth={2} />
            </a>
            <a
              href="mailto:carolinekaeke@gmail.com"
              className="text-sm font-medium text-primary-foreground bg-primary hover:opacity-90 px-4 py-1.5 rounded-full transition-opacity"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden"
            style={{ color: ink ?? "var(--foreground)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm flex flex-col pt-24 px-8 gap-8">
          {variant === "portfolio" && NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left text-3xl font-medium text-foreground"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {l.label}
            </button>
          ))}
          {variant === "case-study" && (
            <button
              onClick={() => { setMenuOpen(false); onBack?.(); }}
              className="text-left text-3xl font-medium text-foreground flex items-center gap-3"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              <BackIcon size={28} /> Back to portfolio
            </button>
          )}
          <div className="flex flex-col gap-4 mt-4">
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/70 border border-foreground/25 px-5 py-2.5 rounded-full inline-flex items-center gap-2 w-fit"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Resume <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
