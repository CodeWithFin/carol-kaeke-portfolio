import { FadeUp } from "../lib/shared";

export function CaseStudyHero({
  image,
  title,
  subtitle,
  accent = "#d4821a",
}: {
  image: string;
  title: string;
  subtitle: string;
  accent?: string;
}) {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(28,26,23,0.55) 0%, rgba(28,26,23,0.72) 45%, rgba(28,26,23,0.82) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, rgba(28,26,23,0.45) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 px-6 text-center max-w-4xl mx-auto pt-16">
        <FadeUp>
          <span
            className="inline-block text-xs tracking-[0.2em] uppercase mb-6"
            style={{ fontFamily: "'IBM Plex Mono', monospace", color: accent }}
          >
            Case Study
          </span>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h1
            className="text-[clamp(2.5rem,7vw,5.5rem)] font-normal leading-[1.05] tracking-tight mb-5"
            style={{ fontFamily: "'Fraunces', serif", color: "#f5f0e8" }}
          >
            {title}
          </h1>
        </FadeUp>

        <FadeUp delay={0.14}>
          <p
            className="text-sm lg:text-base tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,240,232,0.78)" }}
          >
            {subtitle}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
