import { ChevronUp } from "lucide-react";
import resumePDF from "../../../assets/project-images/UIUX DESIGNER CV-CAROLINE.pdf?url";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1c1a17" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div
            className="text-sm text-white/40"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            © 2026 Caroline Kaeke.
          </div>
          <nav className="flex flex-wrap items-center gap-6">
            {[
              { label: "Get in Touch", href: "mailto:carolinekaeke@gmail.com" },
              { label: "Download CV", href: resumePDF, target: "_blank" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/caroline-kunga-uiuxdesigner/", target: "_blank" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={"target" in link ? link.target : undefined}
                rel={"target" in link ? "noopener noreferrer" : undefined}
                className="text-sm text-white/50 hover:text-white transition-colors relative group"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px bg-white w-0 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="self-start md:self-auto w-9 h-9 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/50 flex items-center justify-center transition-all"
            aria-label="Back to top"
          >
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
