import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useScrollY } from "../lib/shared";
import resumePDF from "../../imports/Caroline_Kaeke-Resume-UI_UX.docx.pdf?url";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#work" },
  { label: "Experience", href: "#experience" },
];

export function Nav({
  variant = "portfolio",
  onBack,
}: {
  variant?: "portfolio" | "case-study";
  onBack?: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollY();
  const solid = scrollY > 60;

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {variant === "case-study" ? (
            <button
              onClick={onBack}
              className="font-serif text-foreground text-lg font-medium tracking-tight hover:opacity-70 transition-opacity flex items-center gap-2"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              <span className="text-base">←</span> CK
            </button>
          ) : (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-serif text-foreground text-lg font-medium tracking-tight hover:opacity-70 transition-opacity"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              CK
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
              className="text-sm font-medium text-foreground/70 hover:text-foreground border border-foreground/25 hover:border-foreground/60 px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5"
              style={{ fontFamily: "'Inter', sans-serif" }}
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
            className="md:hidden text-foreground"
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
