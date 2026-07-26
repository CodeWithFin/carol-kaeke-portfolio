import { useState } from "react";
import { useNavigate } from "react-router";
import { Download, ArrowRight } from "lucide-react";
import { FadeUp } from "../lib/shared";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import resumePDF from "../../imports/Caroline_Kaeke-Resume-UI_UX.docx.pdf?url";
import caroHeroImage from "../../../assets/images/caro-face-card.jpeg";
import belongCover from "../../../assets/images/belong-card-image.jpeg";
import skootGasCover from "../../../assets/images/skoot-card-image.jpeg";
import skootRideCover from "../../../assets/images/skoot-ride-card-image.jpeg";
import bumaCover from "../../../assets/images/buma-card-image.jpeg";

const PROJECTS = [
  {
    index: "01",
    title: "Belong Investment App",
    tag: "Fintech • Investment App",
    industry: "Fintech",
    status: "In Development",
    timeline: "3 Months",
    role: "Product Designer",
    overview:
      "A comprehensive investment platform designed to democratize wealth building for young professionals. The app simplifies complex financial concepts and provides an intuitive onboarding experience tailored to first-time investors.",
    focusAreas: ["Investment Onboarding", "Portfolio Management", "KYC", "Payments", "Dashboard"],
    color: "#6b8f71",
    imageBg: "#dfe8df",
    image: belongCover,
    imageFit: "cover" as const,
    slug: "belong",
  },
  {
    index: "02",
    title: "Skoot Gas",
    tag: "On-demand • Fuel Delivery",
    industry: "On-demand Delivery",
    status: null,
    timeline: "1 Week Design Sprint",
    role: "Product Designer",
    overview:
      "A rapid design sprint for an on-demand fuel delivery service that brings gasoline directly to customers' vehicles. The experience required careful consideration of safety protocols while maintaining a seamless user journey.",
    focusAreas: ["Ordering", "Delivery Tracking", "Wallet", "Payments", "Customer Experience"],
    color: "#d4821a",
    imageBg: "#e4ebe8",
    image: skootGasCover,
    imageFit: "cover" as const,
    slug: "skoot-gas",
  },
  {
    index: "03",
    title: "Skoot Ride",
    tag: "Mobility • EV Leasing",
    industry: "Mobility",
    status: null,
    timeline: "1 Week Design Sprint",
    role: "Product Designer",
    overview:
      "A mobility solution for electric moped leasing, designed to make urban transportation accessible and sustainable. The platform handles everything from application to daily usage tracking and payments.",
    focusAreas: ["Lease Application", "KYC", "Payments", "Battery Charging", "Dashboard"],
    color: "#6b8f71",
    imageBg: "#e8e4d8",
    image: skootRideCover,
    imageFit: "cover" as const,
    slug: "skoot-ride",
  },
  {
    index: "04",
    title: "Buma Awards Redesign",
    tag: "Entertainment • Awards Platform",
    industry: "Entertainment",
    status: null,
    timeline: "3 Months",
    role: "Product Design Intern",
    overview:
      "A complete redesign of the Buma Awards digital platform, focusing on improving content discovery and accessibility for music industry professionals and fans alike.",
    focusAreas: ["Information Architecture", "Navigation", "Responsive Design", "Accessibility", "Content Discovery"],
    color: "#d4821a",
    imageBg: "#e6e0d4",
    image: bumaCover,
    imageFit: "cover" as const,
    slug: "buma-awards",
  },
];

const TIMELINE = [
  {
    role: "Product Designer (Contract)",
    company: "Siscom Africa",
    period: "Dec 2025 — Present",
    summary: "Designing end-to-end fintech experiences for investment and lending platforms.",
    subProjects: null,
    highlights: [
      "Led product design for investment and salary advance loan platforms",
      "Designed onboarding, KYC verification, portfolio management, payment flows, and customer dashboards",
      "Facilitated discovery workshops to align business goals with user needs",
      "Built scalable design systems that improved consistency and accelerated development",
      "Worked closely with product managers and engineers from concept through implementation",
      "Simplified complex financial workflows into intuitive user experiences",
    ],
  },
  {
    role: "Product Designer (Freelance)",
    company: "Skoot",
    period: "May 2026",
    summary: "Designed two consumer mobile applications within a one-week product design sprint.",
    subProjects: [
      { name: "Skoot Gas", description: "An on-demand gas cylinder ordering experience with delivery tracking and digital payments." },
      { name: "Skoot Ride", description: "An electric vehicle leasing platform supporting lease applications, repayments, charging, and income generation." },
    ],
    highlights: [
      "Designed complete information architecture for both products",
      "Created reusable design systems across the shared platform",
      "Simplified lease repayment and battery management into clear interfaces",
      "Delivered complete UX and UI independently under tight deadlines",
    ],
  },
  {
    role: "Product Design Intern",
    company: "Voltax Africa",
    period: "Sep 2025 — Dec 2025",
    summary: "Redesigned the Buma Awards platform to improve navigation, discoverability, and engagement.",
    subProjects: null,
    highlights: [
      "Conducted UX audits and usability evaluations",
      "Improved information architecture across award categories and artist pages",
      "Designed responsive wireframes and prototypes",
      "Created reusable interface components for consistent implementation",
      "Collaborated with developers throughout delivery",
    ],
  },
  {
    role: "UI/UX Designer (Volunteer)",
    company: "Tech Sisters Kenya",
    period: "Aug 2025 — Present",
    summary: "Designed digital experiences supporting mentorship, networking, and professional development.",
    subProjects: null,
    highlights: [
      "Designed onboarding and membership journeys",
      "Improved accessibility through responsive layouts",
      "Created scalable UI components",
      "Collaborated with stakeholders to support a growing community of over 1,800 members",
    ],
  },
];

const SKILLS = [
  { group: "Product Design", items: ["User Experience Design", "User Interface Design", "Interaction Design", "Design Systems", "Responsive Design"] },
  { group: "Research", items: ["User Interviews", "Journey Mapping", "Information Architecture", "Wireframing", "Prototyping", "Usability Testing"] },
  { group: "Tools", items: ["Figma", "Adobe XD", "Jira", "HTML & CSS"] },
  { group: "Collaboration", items: ["Design Thinking", "Agile", "Cross-functional Collaboration", "Stakeholder Management", "Product Discovery"] },
];

const PRINCIPLES = [
  { num: "01", title: "Clarity over complexity", body: "Good design removes uncertainty and helps users move forward with confidence." },
  { num: "02", title: "Design for trust", body: "Especially in financial products, trust is built through transparency, consistency, and clear communication." },
  { num: "03", title: "Business and user goals should align", body: "The best products create value for users while supporting measurable business outcomes." },
  { num: "04", title: "Every interaction should reduce friction", body: "Small improvements across the user journey create meaningful product experiences." },
];

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleCTA = () => {
    if (project.slug) navigate(`/case-study/${project.slug}`);
  };

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleCTA}
      className={`group h-full flex flex-col overflow-hidden rounded-2xl bg-card border border-border/60 transition-all duration-400 ${
        project.slug ? "cursor-pointer hover:-translate-y-1 hover:border-border" : "cursor-default"
      }`}
      style={{
        boxShadow: hovered ? "0 18px 40px rgba(28,26,23,0.08)" : "0 4px 16px rgba(28,26,23,0.03)",
      }}
    >
      <div
        className="relative aspect-[4/3] shrink-0 overflow-hidden"
        style={{ backgroundColor: project.imageBg }}
      >
        <img
          src={project.image}
          alt={`${project.title} mockup`}
          className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-out ${
            project.imageFit === "cover" ? "object-cover object-center" : "object-contain p-6 lg:p-8"
          }`}
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
        />
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <span
          className="text-[11px] tracking-[0.14em] uppercase mb-3"
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: project.color }}
        >
          {project.tag}
        </span>

        <h3
          className="text-2xl lg:text-3xl font-normal leading-tight text-foreground mb-2 min-h-[2.5em] transition-colors duration-250"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {project.title}
        </h3>

        <div
          className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground mb-4 min-h-[1.25em]"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          {project.role}
          {project.status && (
            <>
              <span className="mx-2 opacity-40">·</span>
              {project.status}
            </>
          )}
        </div>

        <p
          className="text-sm text-foreground/70 leading-relaxed mb-8 flex-1 line-clamp-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {project.overview}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleCTA();
          }}
          className={`inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase font-medium mt-auto ${
            !project.slug ? "opacity-40 cursor-default" : "cursor-pointer"
          }`}
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: project.color }}
          disabled={!project.slug}
        >
          View Full Case Study
          <ArrowRight
            size={13}
            style={{
              transform: hovered && project.slug ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.25s ease",
            }}
          />
        </button>
      </div>
    </article>
  );
}

function TimelineEntry({ entry, index: i }: { entry: typeof TIMELINE[0]; index: number }) {
  return (
    <FadeUp delay={i * 0.08}>
      <div className="relative pl-10 pb-36 last:pb-0">
        <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-primary bg-background" style={{ zIndex: 1 }} />
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
          <h3 className="text-2xl font-normal text-foreground leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>{entry.role}</h3>
          <span className="text-xs text-muted-foreground whitespace-nowrap mt-1 sm:mt-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{entry.period}</span>
        </div>
        <div className="text-sm font-medium text-primary mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>{entry.company}</div>
        <p className="text-sm text-muted-foreground italic mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>{entry.summary}</p>
        {entry.subProjects && (
          <div className="mb-5 space-y-3">
            {entry.subProjects.map((sp) => (
              <div key={sp.name} className="pl-4 border-l-2 border-accent/40">
                <span className="text-xs font-medium text-accent mr-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{sp.name}</span>
                <span className="text-sm text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{sp.description}</span>
              </div>
            ))}
          </div>
        )}
        <ul className="space-y-2.5">
          {entry.highlights.map((h, j) => (
            <li key={j} className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-3 h-px bg-primary mt-[0.65em]" />
              <span className="text-sm text-foreground/75 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </FadeUp>
  );
}

export default function Portfolio() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background min-h-screen">
      <Nav variant="portfolio" />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 lg:gap-8 items-center">
          <div>
            <div className="text-xs font-medium tracking-widest text-muted-foreground mb-6" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              PRODUCT DESIGNER
            </div>
            <h1
              className="text-[clamp(3rem,7vw,6rem)] font-normal leading-[1.05] text-foreground mb-6 tracking-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Caroline<br />
              <span className="italic font-light">Kaeke</span>
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 font-light leading-snug mb-5 max-w-xl" style={{ fontFamily: "'Fraunces', serif" }}>
              Designing digital products that simplify complex experiences across fintech, mobility, and digital platforms.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              I design user-centered products that balance business goals with intuitive experiences — from investment platforms and on-demand services to mobility solutions and digital experiences.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("#work")}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity group"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                View My Work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground/25 text-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:border-foreground/60 hover:bg-foreground/5 transition-all"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -top-8 -left-8 w-72 h-72 rounded-full opacity-30" style={{ background: "radial-gradient(circle, #6b8f71 0%, transparent 70%)" }} />
            <div className="absolute -bottom-4 right-4 w-48 h-48 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #d4821a 0%, transparent 70%)" }} />
            <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-[40%_60%_55%_45%_/_50%_45%_55%_50%] overflow-hidden" style={{ boxShadow: "0 24px 60px rgba(28,26,23,0.15)" }}>
              <img
                src={caroHeroImage}
                alt="Caroline Kaeke, Product Designer"
                className="w-full h-full object-cover"
                style={{ filter: "saturate(0.85) contrast(1.03) sepia(0.08)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(107,143,113,0.12) 0%, transparent 60%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="px-6 lg:px-12 max-w-7xl mx-auto py-24 lg:py-32">
        <FadeUp>
          <div className="flex items-baseline gap-4 mb-14">
            <span className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>FEATURED WORK</span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {PROJECTS.map((project, i) => (
            <FadeUp key={project.index} delay={i * 0.08} className="h-full">
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 lg:px-12 max-w-7xl mx-auto py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">
          <FadeUp>
            <h2 className="text-4xl lg:text-5xl font-normal text-foreground leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
              Your next product deserves thoughtful design that solves{" "}
              <span className="italic font-light">real</span> user problems.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div>
              <p className="text-base text-muted-foreground leading-relaxed mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                I design intuitive digital experiences that balance user needs with business goals. From fintech platforms and mobility solutions to digital products that improve everyday services, I enjoy transforming complex workflows into simple, accessible experiences that people trust. Whether collaborating with a growing startup or an established team, I bring curiosity, systems thinking, and a user-centered approach to every stage of the design process.
              </p>
              <div className="flex flex-wrap gap-8">
                <button onClick={() => scrollTo("#work")} className="inline-flex items-center gap-2 text-sm font-medium text-foreground relative group" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span className="relative">See What I&apos;ve Built<span className="absolute -bottom-0.5 left-0 h-px bg-foreground w-0 group-hover:w-full transition-all duration-300" /></span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 lg:py-32">
        {/* Intro */}
        <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-20">
          <FadeUp>
            <span className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>EXPERIENCE</span>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="text-5xl lg:text-6xl font-normal text-foreground leading-tight mt-4 max-w-2xl" style={{ fontFamily: "'Fraunces', serif" }}>
              Building products that solve <span className="italic font-light">real</span> problems.
            </h2>
          </FadeUp>
        </div>

        {/* Timeline */}
        <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-28">
          <div className="relative">
            <div className="absolute left-1.5 top-2 bottom-0 w-px bg-border" style={{ zIndex: 0 }} />
            <div className="space-y-0">
              {TIMELINE.map((entry, i) => <TimelineEntry key={entry.company + entry.period} entry={entry} index={i} />)}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="py-20" style={{ backgroundColor: "rgba(28,26,23,0.04)" }}>
          <div className="px-6 lg:px-12 max-w-7xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-12" style={{ fontFamily: "'Fraunces', serif" }}>Selected Skills</h2>
            </FadeUp>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {SKILLS.map((group, i) => (
                <FadeUp key={group.group} delay={i * 0.07}>
                  <div>
                    <div className="text-xs tracking-widest text-muted-foreground mb-4 uppercase" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{group.group}</div>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item}>
                          <span className="inline-block text-sm text-foreground/75 px-2.5 py-1 rounded-full border border-border hover:border-primary hover:text-foreground hover:-translate-y-0.5 transition-all cursor-default" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="px-6 lg:px-12 max-w-7xl mx-auto py-20">
          <FadeUp>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-normal text-foreground mb-2" style={{ fontFamily: "'Fraunces', serif" }}>Design Principles</h2>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>These are the principles that guide every product I design.</p>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRINCIPLES.map((p, i) => (
              <FadeUp key={p.num} delay={i * 0.08}>
                <div className="group p-8 lg:p-10 rounded-2xl border border-border hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 cursor-default" style={{ backgroundColor: "rgba(245,240,232,0.6)" }}>
                  <div className="text-xs text-muted-foreground mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{p.num}</div>
                  <h3 className="text-xl font-normal text-foreground mb-3 leading-snug" style={{ fontFamily: "'Fraunces', serif" }}>{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Beyond Design */}
        <div className="px-6 lg:px-12 max-w-7xl mx-auto pt-4 pb-16">
          <FadeUp>
            <div className="max-w-lg ml-0 lg:ml-[8%] border-t border-border/60 pt-16">
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground/60 block mb-6" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>BEYOND DESIGN</span>
              <p className="text-[1.05rem] text-foreground/55 font-light leading-[1.75] mb-8" style={{ fontFamily: "'Fraunces', serif" }}>
                Outside of product work, I enjoy connecting with communities and people — I&apos;m part of several tech communities and always look forward to our meetups. I&apos;m also curious about emerging technologies, AI-assisted design, and accessibility, and how digital products can create meaningful impact across Africa.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Tech Communities", "AI-Assisted Design", "Accessibility", "Impact-Driven Design"].map((tag) => (
                  <span key={tag} className="text-[10px] px-3 py-1.5 rounded-full border border-foreground/12 text-muted-foreground/50 hover:bg-primary/8 hover:border-primary/25 hover:text-muted-foreground transition-all duration-200 cursor-default" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{tag}</span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Availability */}
      <section id="contact" className="px-6 lg:px-12 max-w-7xl mx-auto py-16">
        <FadeUp>
          <div className="flex items-center gap-4">
            <div className="relative flex-shrink-0 w-2.5 h-2.5">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
              <span className="absolute inset-0 rounded-full bg-primary" />
            </div>
            <p className="text-base text-foreground/70 font-light" style={{ fontFamily: "'Fraunces', serif" }}>
              Currently available for freelance projects, contract roles, and full-time Product Design opportunities.
            </p>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
