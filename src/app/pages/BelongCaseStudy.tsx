import { useNavigate } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeUp } from "../lib/shared";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import kycImage from "../../../assets/images/kyc.png";
import sectionThreeImage from "../../../assets/images/Section 3.png";
import mainImage from "../../../assets/images/tHE MAIN IMAGE.png";
import onboardingImage from "../../../assets/images/create account (2).png";

const DECISIONS = [
  {
    num: "01",
    focus: "Onboarding",
    title: "Progressive Onboarding",
    decision: "Break account creation into the smallest possible atomic steps, collecting only what is strictly necessary at each screen before moving the user forward.",
    reason: "First-time investors are already anxious about committing to a new financial platform. A long form at the entry point triggers abandonment before any value is demonstrated. By asking for just a name, email, and password upfront — with the referral code deprioritised as a secondary action — we reduce the perceived cost of starting.",
    uiChange: "A four-screen sequence: Create Account → Verify Phone (OTP) → Set PIN → Confirm PIN. Each screen has a single focused task, a clear primary action, and no competing choices.",
    tradeoff: "Splitting onboarding into more screens means more transitions. The risk is that users feel the flow is too long. This was mitigated by a step indicator showing progress and keeping each screen fast to complete — typically under 10 seconds.",
    impact: "Estimated 22% increase in onboarding completion rate · Estimated 18% reduction in first-screen abandonment",
  },
  {
    num: "02",
    focus: "Trust · Completion",
    title: "Transparent KYC",
    decision: "Open the KYC flow with a dedicated introduction screen that explains exactly what will be requested, why it is legally required, and how long it will take.",
    reason: "KYC is the highest-friction moment in any fintech onboarding. Most platforms drop users directly into a multi-step form with no context. The result is confusion, distrust, and abandonment. Users who understand why they are being asked for personal documents are significantly more likely to complete the process.",
    uiChange: "A KYC overview screen with a visual progress indicator (Personal Info → Residential → Financial → Documents), an estimated time of 3–5 minutes, and a plain-language explanation of data usage. Each subsequent form is grouped by category with clear section headers.",
    tradeoff: "Adding a dedicated intro screen adds one more step before the user reaches their goal. The trade-off is worth it: reducing anxiety at this stage has a greater impact on completion than reducing total screen count.",
    impact: "Estimated 20% improvement in KYC completion rate · Estimated 25% increase in perceived trust scores",
  },
  {
    num: "03",
    focus: "Discovery · Engagement",
    title: "Playlist-style Homepage",
    decision: "Present investment products as curated playlists ('Jams') rather than a financial product catalogue with tickers and technical terms.",
    reason: "The target audience — young Africans beginning their investment journey — has more familiarity with music streaming interfaces than brokerage platforms. By mapping the mental model of 'discovering music you'll love' onto 'discovering investments that suit you', we lower the cognitive barrier to exploration. Familiar browsing patterns reduce cognitive load and make the interface feel intuitive on first use.",
    uiChange: "A personalised greeting with portfolio balance card at the top, followed by horizontally scrollable 'Trending Jams' and 'Recommended for You' rows. Each jam card shows the fund name, category, short-term return, and a visual indicator — mirroring how a playlist shows genre, mood, and popularity.",
    tradeoff: "The playlist metaphor is unconventional for a regulated investment platform. The risk is that it reads as unserious to experienced investors. This was balanced by maintaining precise financial data (exact percentages, fund categories, risk levels) within each card.",
    impact: "Estimated 30% increase in product exploration sessions · Estimated 18% increase in product detail page visits",
  },
  {
    num: "04",
    focus: "Clarity · Conversion",
    title: "Product Detail Experience",
    decision: "Lead with a hero image and a single plain-English sentence explaining what the fund invests in — before showing any performance data or pricing.",
    reason: "Users who do not understand what they are investing in will not invest. Placing the human explanation above the financial data respects the user's need to understand before evaluating returns. This is a deliberate inversion of the typical brokerage product page, which leads with price and performance.",
    uiChange: "A full-bleed hero image sets the thematic context (e.g. real estate, tech, agriculture). Below it: a plain-language description, current price, performance chart with 1W / 1M / 3M / 1Y / All filters, and a persistent 'Invest Now' CTA anchored to the bottom of the screen.",
    tradeoff: "Leading with imagery and copy delays the user's access to financial metrics. For experienced investors this could feel slow. The solution was to make the performance chart immediately visible by scrolling — the hierarchy aids novices without blocking experts.",
    impact: "Estimated 15% increase in first investment conversion · Measurable reduction in pre-investment hesitation signals (rage clicks, back navigation)",
  },
  {
    num: "05",
    focus: "Retention · Engagement",
    title: "Portfolio Experience",
    decision: "Design the portfolio screen as a place of ownership and progress, not just a statement of account.",
    reason: "Users who can clearly see their money growing — even modestly — develop a sense of investment identity that drives repeat engagement. A bare balance figure does not create this. Visual progress cues, allocation breakdowns, and clear quick-actions encourage users to return and reinvest.",
    uiChange: "A balance summary card with total value and percentage change, a performance line chart, a doughnut chart showing investment allocation by category, and three primary quick actions: Invest More, Auto-Invest, and Withdraw — each prominent but clearly hierarchical.",
    tradeoff: "Adding charts and allocation visuals increases the interface's data density. On smaller screens this risks feeling cluttered. Spacing and type scale were carefully adjusted to maintain readability on 375px viewport widths.",
    impact: "Estimated 20% increase in repeat monthly engagement · Estimated 15% adoption rate for auto-invest feature",
  },
];

const FLOW_SECTIONS = [
  {
    id: "onboarding",
    label: "01 — Onboarding Flow",
    title: "Creating momentum from the first screen",
    image: onboardingImage,
    imageFit: "contain" as const,
    imageAlt: "Mobile screens showing the Belong onboarding flow",
    caption: "Belong onboarding — Create Account → Verify Phone → Set PIN → Confirm PIN",
    annotations: [
      { label: "Minimal fields", body: "Only name, email, and password are requested on the first screen. The referral code is collapsed under an optional disclosure — visible but not demanding attention." },
      { label: "OTP verification", body: "Phone verification happens immediately after account creation, establishing trust and securing the account before the user invests any more time." },
      { label: "PIN as ownership", body: "Setting a PIN frames security as a personalisation step rather than a compliance burden. The confirm-PIN screen reinforces the feeling of setting up something that belongs to the user." },
      { label: "Progressive momentum", body: "Each screen moves the user exactly one step forward. There are no dead ends, no optional detours, and no decisions that require leaving the flow." },
    ],
    impact: "Estimated 22% increase in onboarding completion · Estimated 18% reduction in first-screen abandonment. These projections are based on established UX benchmarks for progressive disclosure in mobile fintech onboarding.",
  },
  {
    id: "kyc",
    label: "02 — KYC Flow",
    title: "Making compliance feel like care",
    image: kycImage,
    imageFit: "contain" as const,
    imageAlt: "Mobile screens showing the Belong KYC verification flow",
    caption: "Belong KYC — Overview → Personal Info → Residential → Financial → Document Upload",
    annotations: [
      { label: "KYC overview screen", body: "The first screen explains what will be collected, why it is required by regulation, and provides a 3–5 minute time estimate. Users who know what to expect are less likely to abandon mid-flow." },
      { label: "Progress indicator", body: "A four-step indicator (Personal → Residential → Financial → Documents) is persistent across all KYC screens. Users always know how far they are from completing." },
      { label: "Grouped forms", body: "Questions are organised by logical category — personal details, then address, then financial background, then document upload — mirroring the order users would naturally expect to answer them." },
      { label: "Document upload", body: "The document upload screen includes a preview of an accepted ID format, reducing failed submissions and the need for re-attempts." },
    ],
    impact: "Estimated 20% improvement in KYC completion rate · Estimated 25% increase in perceived trust. Projections based on UX research on transparency and progress visibility in regulated onboarding flows.",
  },
  {
    id: "home",
    label: "03 — Home, Product & Portfolio",
    title: "From browsing to ownership",
    image: sectionThreeImage,
    imageFit: "contain" as const,
    imageAlt: "Mobile screens showing the Belong home, product detail, and portfolio screens",
    caption: "Belong — Home Dashboard · Product Detail · Portfolio Overview",
    subsections: [
      {
        title: "Home Dashboard",
        body: "The home screen opens with a personalised greeting and the user's current portfolio balance — immediately showing what they own. Below this, 'Trending Jams' and 'Recommended for You' rows present investments through the playlist metaphor. Categories are browsable without financial expertise; users can explore by theme (Tech, Real Estate, Agriculture) before committing to reading fund details.",
        impact: "Estimated 30% increase in product exploration · Estimated 18% increase in product detail visits.",
      },
      {
        title: "Product Detail",
        body: "The product page leads with a full-bleed image and a plain-language description — establishing what the fund does before asking users to evaluate performance. A performance chart with time-range filters (1W, 1M, 3M, 1Y) sits below, allowing the user to move from understanding to analysis at their own pace. A persistent 'Invest Now' CTA anchors to the bottom of the screen throughout.",
        impact: "Estimated 15% increase in first investment conversion · Reduction in pre-investment hesitation signals.",
      },
      {
        title: "Portfolio",
        body: "The portfolio screen communicates ownership and growth through a balance summary, a performance chart, and an allocation breakdown. Three quick actions — Invest More, Auto-Invest, and Withdraw — are immediately accessible without navigating away. The goal is to make the user feel that this is their space, encouraging regular return visits.",
        impact: "Estimated 20% increase in monthly return visits · Estimated 15% auto-invest adoption.",
      },
    ],
  },
];

export default function BelongCaseStudy() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen">
      <Nav variant="case-study" onBack={() => navigate("/")} />

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>CASE STUDY · 01</span>
            <span className="text-xs text-muted-foreground/40" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>—</span>
            <span className="text-xs text-primary" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Fintech · 3 Months · Product Designer</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.07}>
          <h1
            className="text-[clamp(2.75rem,6vw,5.5rem)] font-normal leading-[1.05] text-foreground tracking-tight mb-8 max-w-4xl"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Belong — Making investing feel like a{" "}
            <span className="italic font-light">lifestyle</span>, not a lesson.
          </h1>
        </FadeUp>

        <FadeUp delay={0.12}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            Belong is a fintech mobile application that helps young Africans start building wealth by making investment products feel approachable and familiar — organised like music playlists rather than financial instruments. I designed the end-to-end experience across onboarding, KYC, the home dashboard, product detail pages, and portfolio management.
          </p>
        </FadeUp>

        {/* Meta strip */}
        <FadeUp delay={0.16}>
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-10 border-t border-border">
            {[
              { label: "ROLE", value: "Product Designer" },
              { label: "INDUSTRY", value: "Fintech" },
              { label: "TIMELINE", value: "3 Months" },
              { label: "STATUS", value: "In Development" },
              { label: "PLATFORM", value: "Mobile (iOS & Android)" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-[10px] tracking-widest text-muted-foreground/60 mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{m.label}</div>
                <div className="text-sm text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>{m.value}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* Cover image */}
      <FadeUp>
        <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-28">
          <div className="relative rounded-2xl overflow-hidden bg-muted" style={{ boxShadow: "0 32px 80px rgba(28,26,23,0.14)" }}>
            <img
              src={mainImage}
              alt="Belong Investment App — overview"
              className="w-full object-contain h-auto block"
            />
          </div>
        </div>
      </FadeUp>

      {/* Problem Context */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-28">
        <FadeUp>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>PROBLEM CONTEXT</span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {[
            {
              tag: "What users want",
              heading: "Start investing, grow wealth, earn passive income — without needing a finance degree.",
              body: "The target user is a young professional in their 20s or 30s who understands they should be investing but finds the entry point overwhelming. They want to grow their money intelligently, earn passive income alongside their salary, and make smart financial decisions — all without having to become a financial expert first.",
            },
            {
              tag: "Where users struggle",
              heading: "Financial jargon, lack of trust, and overwhelming onboarding stop most first-timers before they start.",
              body: "The friction begins before the first investment is made. Industry terminology (NAV, yield, AUM) creates confusion. Lengthy KYC forms feel intrusive without context. Users with no prior investment experience don't know what questions to ask — and platforms that don't address this lose them at the first hurdle.",
            },
            {
              tag: "Why it matters to the business",
              heading: "Every abandoned onboarding is a lifetime of compounding returns that never materialise.",
              body: "Onboarding abandonment directly reduces funded accounts and conversion to first investment. KYC drop-off creates a pipeline of partially verified users who cannot trade. Low initial engagement compounds into poor retention, shorter customer lifetime, and reduced revenue from management fees and transactions.",
            },
            {
              tag: "Design opportunity",
              heading: "Progressive disclosure, simpler language, and familiar patterns can close the trust gap.",
              body: "Better UX could meaningfully reduce drop-off at each stage: progressive disclosure makes onboarding feel less demanding; plain language and transparency turn KYC from a compliance burden into a confidence-builder; familiar browsing metaphors (playlists, categories, recommendations) lower the barrier to exploration and first investment.",
            },
          ].map((card, i) => (
            <FadeUp key={card.tag} delay={i * 0.07}>
              <div className="p-8 rounded-2xl border border-border h-full" style={{ backgroundColor: "rgba(245,240,232,0.5)" }}>
                <div className="text-[10px] tracking-widest text-primary mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{card.tag.toUpperCase()}</div>
                <h3 className="text-lg font-normal text-foreground mb-4 leading-snug" style={{ fontFamily: "'Fraunces', serif" }}>{card.heading}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{card.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Key Design Decisions */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-28">
        <FadeUp>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>KEY DESIGN DECISIONS</span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </FadeUp>

        <div className="space-y-0">
          {DECISIONS.map((d, i) => (
            <FadeUp key={d.num} delay={0.05}>
              <div className="border-t border-border py-12 grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-16">
                {/* Left */}
                <div>
                  <div className="text-xs text-muted-foreground mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{d.num}</div>
                  <span className="text-[10px] tracking-wider text-primary px-2.5 py-1 rounded-full border border-primary/30" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{d.focus}</span>
                </div>
                {/* Right */}
                <div>
                  <h3 className="text-2xl lg:text-3xl font-normal text-foreground mb-6" style={{ fontFamily: "'Fraunces', serif" }}>{d.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { label: "Decision", body: d.decision },
                      { label: "Reason", body: d.reason },
                      { label: "UI Change", body: d.uiChange },
                      { label: "Trade-off", body: d.tradeoff },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="text-[10px] tracking-widest text-muted-foreground/60 mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{item.label.toUpperCase()}</div>
                        <p className="text-sm text-foreground/75 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{item.body}</p>
                      </div>
                    ))}
                  </div>
                  {/* Impact */}
                  <div className="mt-6 p-4 rounded-xl border border-primary/20" style={{ backgroundColor: "rgba(107,143,113,0.07)" }}>
                    <div className="text-[10px] tracking-widest text-primary mb-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>EXPECTED IMPACT</div>
                    <p className="text-sm text-foreground/75" style={{ fontFamily: "'Inter', sans-serif" }}>{d.impact}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
          <div className="border-t border-border" />
        </div>
      </section>

      {/* Final Solution */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-28">
        <FadeUp>
          <div className="flex items-baseline gap-4 mb-16">
            <span className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>FINAL SOLUTION</span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </FadeUp>

        <div className="space-y-28">
          {FLOW_SECTIONS.map((flow) => (
            <FadeUp key={flow.id}>
              <div>
                <div className="mb-8">
                  <div className="text-xs text-muted-foreground mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{flow.label}</div>
                  <h3 className="text-3xl lg:text-4xl font-normal text-foreground" style={{ fontFamily: "'Fraunces', serif" }}>{flow.title}</h3>
                </div>

                {/* Screen image */}
                <div className="relative rounded-2xl overflow-hidden bg-muted mb-4" style={{ boxShadow: "0 24px 60px rgba(28,26,23,0.12)" }}>
                  <img
                    src={flow.image}
                    alt={flow.imageAlt}
                    className={`w-full ${flow.imageFit === "contain" ? "object-contain h-auto" : "object-cover"}`}
                    style={
                      flow.imageFit === "contain"
                        ? { display: "block" }
                        : { height: "clamp(220px, 40vw, 500px)", filter: "saturate(0.88) contrast(1.02)" }
                    }
                  />
                  {flow.imageFit !== "contain" && (
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,26,23,0.08) 0%, transparent 50%)" }} />
                  )}
                </div>
                <p className="text-xs text-muted-foreground text-center mb-12" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{flow.caption}</p>

                {/* Annotations or subsections */}
                {flow.annotations ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {flow.annotations.map((a) => (
                      <div key={a.label} className="p-6 rounded-xl border border-border" style={{ backgroundColor: "rgba(245,240,232,0.5)" }}>
                        <div className="text-xs font-medium text-foreground mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>{a.label}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{a.body}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-8">
                    {flow.subsections?.map((sub) => (
                      <div key={sub.title} className="border-t border-border pt-8 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6">
                        <h4 className="text-lg font-normal text-foreground" style={{ fontFamily: "'Fraunces', serif" }}>{sub.title}</h4>
                        <div>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>{sub.body}</p>
                          <div className="text-xs text-primary/80 italic" style={{ fontFamily: "'Inter', sans-serif" }}>{sub.impact}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Impact block for annotated flows */}
                {flow.impact && (
                  <div className="mt-8 p-5 rounded-xl border border-primary/20" style={{ backgroundColor: "rgba(107,143,113,0.07)" }}>
                    <div className="text-[10px] tracking-widest text-primary mb-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>IMPACT</div>
                    <p className="text-sm text-foreground/75 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{flow.impact}</p>
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Reflection */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20">
        <FadeUp>
          <div className="max-w-2xl border-t border-border pt-16">
            <span className="text-xs text-muted-foreground tracking-widest block mb-6" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>REFLECTION</span>
            <p className="text-xl lg:text-2xl text-foreground/70 font-light leading-relaxed" style={{ fontFamily: "'Fraunces', serif" }}>
              Designing Belong reinforced something I believe deeply: the biggest design challenge in fintech is not building features — it&apos;s building{" "}
              <span className="italic">confidence</span>. Every decision in this project came back to the same question: does this make the user feel more capable, or less?
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Back CTA */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
        <FadeUp>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors group"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to all work
          </button>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
