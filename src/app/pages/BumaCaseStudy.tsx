import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { FadeUp } from "../lib/shared";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import bumaHero from "figma:asset/adc54ee4-297f-4105-a87b-069ec7cff263.jpeg";

const DECISIONS = [
  {
    num: "01",
    focus: "First Impression · Conversion",
    title: "Create a High-Impact Hero",
    decision: "Replace the original flat header with a full-screen hero section combining premium event imagery, a live countdown timer, and two clear primary CTAs Watch Live and Get Tickets positioned above the fold.",
    reason: "The original landing page opened with a low-contrast header and body copy that failed to communicate the scale or excitement of the event. Visitors had no immediate reason to stay. A full-screen hero establishes the emotional register of the brand instantly and gives every visitor type fans, nominees, sponsors, press at least one relevant action to take before scrolling.",
    uiChange: "Full-bleed background image with a dark overlay for text contrast. Event name and edition as a bold display headline. A countdown timer (Days · Hours · Minutes · Seconds) to create urgency. Two side-by-side CTAs: Watch Live (primary, filled) and Get Tickets (secondary, outlined). Both are above the fold on desktop and mobile.",
    impact: "Estimated 28% increase in CTA clicks from the hero section · Estimated 20% increase in ticket purchase intent measured by scroll depth past the hero. Based on event landing page benchmarks showing that countdown timers and dual CTAs significantly increase first-screen conversion.",
  },
  {
    num: "02",
    focus: "Clarity",
    title: "Improve Information Hierarchy",
    decision: "Restructure the page's section order to follow a logical narrative arc from event introduction through nominees, content, sponsors, and community with consistent spacing rhythm and strong typographic hierarchy throughout.",
    reason: "The original page had sections placed without a clear editorial logic. Sponsors appeared before nominees. The About section interrupted the event discovery flow. Users arriving with different intents (fan wanting to vote, sponsor wanting to partner, press wanting information) all faced the same undifferentiated wall of content. Restructuring the page as a narrative here is the event, here are the nominees, here is what you can watch, here is the community matches how visitors actually build understanding.",
    uiChange: "Section order revised to: Hero → Countdown → Event Overview → Nominees → Spotlight Moments → Latest News → Sponsors → About BUMA → Footer. Consistent vertical spacing between sections using an 8px grid. Section headings follow a clear hierarchy (display serif for section titles, sans for subheads, mono for labels). Visual dividers and background tint shifts create clear breaks between content zones.",
    impact: "Estimated 22% increase in content section engagement · Estimated 18% increase in average time on page. Based on content design research showing that progressive narrative structures increase scroll depth on event and media sites.",
  },
  {
    num: "03",
    focus: "Discovery",
    title: "Make Nominee Discovery Easier",
    decision: "Redesign the nominees section with category filter tabs, a card-based grid layout with artist photography, and a prominent Vote button on each card replacing the original list format that buried voting behind multiple navigation steps.",
    reason: "Voting is one of the primary actions BUMA needs fans to take, yet the original design treated it as a secondary feature. Fans who could not find nominees quickly either voted for whoever they already knew (reducing discovery of newer artists) or left without voting at all. Category filters allow fans to browse by award type Best New Artist, Best Afrobeats Track, etc. matching the mental model of someone who cares about a specific category.",
    uiChange: "Horizontally scrollable filter tabs at the top of the section (All / Afrobeats / Hip-Hop / R&B / Gospel / New Artist). A 3-column responsive card grid below, each card showing artist portrait, name, category, and a Vote button. Card hover states reveal a brief artist description. Filter selection updates the visible cards without a full page reload.",
    impact: "Estimated 30% increase in nominee section exploration · Estimated 25% increase in voting participation. Modelled on award platform research showing that category filtering and visible voting CTAs directly increase voting rates compared to list-based nominee displays.",
  },
  {
    num: "04",
    focus: "Engagement",
    title: "Increase Engagement Through Rich Content",
    decision: "Add a Spotlight Moments section featuring performance highlights and a Latest News section with editorial cards giving returning visitors fresh reasons to engage beyond the awards themselves.",
    reason: "Award platforms with only voting and ticketing content have very short repeat-visit windows. Once a user has voted and bought a ticket, there is no pull to return. Spotlight performance content creates emotional connection with the artists and the event. News cards about nominations, interviews, and behind-the-scenes content give press and fans a reason to check back regularly and each return visit is an opportunity to deepen engagement with sponsors and partners.",
    uiChange: "Spotlight Moments: a featured video player with artist name, performance title, and Watch Full Performance CTA. A thumbnail row below for secondary performances. Latest News: a three-column card grid with thumbnail, category tag, headline, date, and Read More link. Both sections have clear section headings and View All CTAs to their respective archive pages.",
    impact: "Estimated 35% increase in overall page engagement · Estimated 24% increase in video interaction rate. Based on media and entertainment site benchmarks showing that performance content significantly increases session duration and return visit frequency.",
  },
  {
    num: "05",
    focus: "Trust · Conversion",
    title: "Build Trust with Sponsors & Community",
    decision: "Redesign the sponsors section as a clean logo showcase with partnership tiers, add a substantive About BUMA section with the organisation's mission and history, and introduce a newsletter sign-up and partnership CTA in the footer.",
    reason: "Sponsors evaluate event partnerships partly based on how professionally the digital presence represents the brand. A poorly designed sponsors section signals low production value and reduces the perceived prestige of the partnership. Similarly, organisations considering a first-time partnership need enough context about BUMA's history and reach to make a decision content that was almost entirely absent from the original site. The newsletter and footer partnership CTA convert engaged visitors (who have scrolled the full page) into ongoing community members and potential partners.",
    uiChange: "Sponsors section: logo grid organised by tier (Title Sponsor / Gold / Silver / Community Partners) with consistent sizing and ample whitespace. Each logo links to the sponsor's website, a signal of respect that sponsors notice. About BUMA: a two-column layout with editorial copy and a founder quote. Footer: newsletter sign-up field with a single email input and Subscribe CTA, plus a Become a Partner text-link CTA alongside social links and event navigation.",
    impact: "Estimated 20% increase in partnership inquiry submissions · Estimated 18% increase in newsletter sign-ups from footer. Based on event and conference site benchmarks for sponsor section design and footer conversion optimisation.",
  },
];

const OVERALL_IMPACT = [
  { metric: "+30%", label: "Overall page engagement" },
  { metric: "+25%", label: "Nominee discovery" },
  { metric: "+20%", label: "Ticket purchase intent" },
  { metric: "+18%", label: "Voting participation" },
  { metric: "+22%", label: "Average session duration" },
  { metric: "+15%", label: "Sponsor inquiries" },
];

export default function BumaCaseStudy() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen">
      <Nav variant="case-study" onBack={() => navigate("/")} />

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>CASE STUDY · 04</span>
            <span className="text-xs text-muted-foreground/40" style={{ fontFamily: "'IBM Plex Mono', monospace" }}></span>
            <span className="text-xs text-accent" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>Entertainment · 3 Months · Product Design Intern</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.07}>
          <h1
            className="text-[clamp(2.75rem,6vw,5.5rem)] font-normal leading-[1.05] text-foreground tracking-tight mb-8 max-w-4xl"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            BUMA Awards Redesigning a music{" "}
            <span className="italic font-light">celebration</span>{" "}
            into a digital destination.
          </h1>
        </FadeUp>

        <FadeUp delay={0.12}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            BUMA (Beacon Urban Music Awards) is an annual platform celebrating excellence in urban music. The website serves fans, nominees, artists, sponsors, media, and event attendees each with a distinct goal. The redesign transformed a fragmented, low-energy digital presence into a premium destination that promotes the awards, drives voting, increases ticket sales, showcases performances, and attracts sponsors. I redesigned the complete landing page from hero to footer.
          </p>
        </FadeUp>

        {/* Scope chips */}
        <FadeUp delay={0.16}>
          <div className="flex flex-wrap gap-2 mt-8 mb-12">
            {["Hero", "Countdown", "Event Overview", "Nominees", "Spotlight Moments", "Latest News", "Sponsors", "About BUMA", "Footer"].map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{s}</span>
            ))}
          </div>
        </FadeUp>

        {/* Meta strip */}
        <FadeUp delay={0.18}>
          <div className="flex flex-wrap gap-x-10 gap-y-4 pt-10 border-t border-border">
            {[
              { label: "ROLE", value: "Product Design Intern" },
              { label: "INDUSTRY", value: "Entertainment" },
              { label: "TIMELINE", value: "3 Months" },
              { label: "PLATFORM", value: "Web (Desktop & Mobile)" },
              { label: "TYPE", value: "Landing Page Redesign" },
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
              src={bumaHero}
              alt="BUMA Awards music event atmosphere"
              className="w-full object-cover"
              style={{ height: "clamp(280px, 45vw, 560px)", objectPosition: "center" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(212,130,26,0.20) 0%, rgba(28,26,23,0.30) 100%)" }} />
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
              heading: "Discover, vote, attend and feel like they are part of something significant.",
              body: "Visitors arrive at the BUMA website with clear intentions: fans want to discover nominees and vote for their favourite artists. Event-goers want to find tickets quickly. Media and press need a reliable source for news and press materials. Sponsors and potential partners want to understand the brand's reach and credibility. Every visitor group wants to accomplish their goal in one visit without navigating through multiple pages or hunting for obvious information.",
            },
            {
              tag: "Where users struggle",
              heading: "Poor visual hierarchy and hidden CTAs buried the most important actions on the page.",
              body: "The original site suffered from weak visual hierarchy that gave equal weight to everything which effectively prioritised nothing. Voting opportunities were not visible without scrolling significantly. Ticket purchasing required navigating away before users had context about the event. Sections were disconnected in tone and layout, creating a fragmented experience that did not build excitement or trust. The overall impression was of an event that did not invest in its own presentation.",
            },
            {
              tag: "Why it matters to the business",
              heading: "Every missed conversion compounds lower ticket sales, reduced voting, and weaker sponsor proposals.",
              body: "For an awards organisation, digital presence is inseparable from perceived prestige. A site that fails to convert fan interest into votes reduces the credibility of the results. Low ticket discovery directly reduces event revenue. Sponsors reviewing a partnership proposal will examine the website a poorly designed page weakens the business case for a sponsorship investment. Fewer newsletter signups mean a smaller owned audience to promote future events.",
            },
            {
              tag: "Design opportunity",
              heading: "A redesign structured around clear audience journeys could significantly improve every conversion metric.",
              body: "The primary opportunity was hierarchy and storytelling. By restructuring the page into a logical narrative arc what is BUMA, who is nominated, what can you watch, how can you get involved and placing primary CTAs where users are most likely to act, the redesign could improve conversion across every user type. Stronger visual identity and consistent branding would also elevate the perceived prestige of the event, making the sponsorship proposition materially stronger.",
            },
          ].map((card, i) => (
            <FadeUp key={card.tag} delay={i * 0.07}>
              <div className="p-8 rounded-2xl border border-border h-full" style={{ backgroundColor: "rgba(245,240,232,0.5)" }}>
                <div className="text-[10px] tracking-widest text-accent mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{card.tag.toUpperCase()}</div>
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
          {DECISIONS.map((d) => (
            <FadeUp key={d.num} delay={0.05}>
              <div className="border-t border-border py-12 grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-16">
                <div>
                  <div className="text-xs text-muted-foreground mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{d.num}</div>
                  <span className="text-[10px] tracking-wider text-accent px-2.5 py-1 rounded-full border border-accent/30" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{d.focus}</span>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-normal text-foreground mb-6" style={{ fontFamily: "'Fraunces', serif" }}>{d.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {[
                      { label: "Decision", body: d.decision },
                      { label: "Reason", body: d.reason },
                      { label: "UI Change", body: d.uiChange },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="text-[10px] tracking-widest text-muted-foreground/60 mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{item.label.toUpperCase()}</div>
                        <p className="text-sm text-foreground/75 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{item.body}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl border border-accent/20" style={{ backgroundColor: "rgba(212,130,26,0.06)" }}>
                    <div className="text-[10px] tracking-widest text-accent mb-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>EXPECTED IMPACT</div>
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

        {/* Single full-page image */}
        <FadeUp delay={0.05}>
          <div className="relative rounded-2xl overflow-hidden bg-muted mb-5" style={{ boxShadow: "0 32px 80px rgba(28,26,23,0.16)" }}>
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&h=900&fit=crop&auto=format"
              alt="Final redesigned BUMA Awards landing page"
              className="w-full object-cover"
              style={{ height: "clamp(360px, 55vw, 680px)", filter: "saturate(0.85) contrast(1.05)" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(28,26,23,0.25) 100%)" }} />
          </div>
          <p className="text-xs text-muted-foreground text-center mb-16" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            Final redesigned BUMA Awards landing page complete user journey from event discovery to ticket purchase, voting, and sponsorship opportunities.
          </p>
        </FadeUp>

        {/* Unified narrative */}
        <FadeUp delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-16">
            <div>
              <h3 className="text-3xl lg:text-4xl font-normal text-foreground leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
                How the redesign guides visitors from{" "}
                <span className="italic font-light">awareness to action.</span>
              </h3>
            </div>
            <div className="space-y-6 text-sm text-foreground/75 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p>
                The redesigned landing page works as a single, continuous narrative rather than a collection of loosely connected sections. The hero establishes the event's scale and energy immediately premium imagery, a live countdown, and two clear CTAs ensure that every visitor type has an actionable next step before they scroll. This removes the original page's single biggest failure: landing on a page that communicated nothing urgent.
              </p>
              <p>
                As visitors scroll, the information architecture follows a deliberate sequence: the event overview provides context for those who are new to BUMA; the nominees section surfaces voting as a primary action before attention drops off; spotlight moments and latest news add depth for fans and press who want to engage beyond the transactional. Each section is visually distinct but tonally consistent a shared typographic system, consistent spacing, and a coherent colour palette prevent the fragmented feeling of the original.
              </p>
              <p>
                The sponsors and About BUMA sections are positioned where trust-building is most needed after a visitor has already formed an emotional connection with the event. A potential sponsor who has just watched a performance highlight and browsed nominee cards arrives at the sponsorship section already primed. The About section answers the credibility questions a partner needs answered before initiating a conversation.
              </p>
              <p>
                The footer redesign converts the end of the page into an active conversion zone rather than a navigation archive. A newsletter sign-up and a Become a Partner CTA capture visitors who have scrolled the full page the highest-intent audience on the site and route them into an ongoing relationship with BUMA rather than letting them leave without a trace.
              </p>
              <p>
                Across all sections, mobile responsiveness was treated as a primary constraint rather than an afterthought. Filter tabs, card grids, and video players all reflow to single-column layouts that maintain the editorial quality of the desktop experience on smaller screens. Accessibility sufficient text contrast, labelled interactive elements, and keyboard-navigable voting cards was embedded in the component design rather than retrofitted.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Overall Impact */}
        <FadeUp delay={0.1}>
          <div className="border-t border-border pt-12">
            <div className="text-xs text-muted-foreground tracking-widest mb-8" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>OVERALL IMPACT ESTIMATED</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {OVERALL_IMPACT.map((item) => (
                <div key={item.label} className="p-5 rounded-xl border border-border text-center" style={{ backgroundColor: "rgba(245,240,232,0.5)" }}>
                  <div
                    className="text-2xl font-normal text-accent mb-1"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {item.metric}
                  </div>
                  <div className="text-xs text-muted-foreground leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/60 mt-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              All metrics are estimated outcomes based on UX best practices and event / entertainment platform benchmarks. They are not supported by post-launch analytics.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Reflection */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20">
        <FadeUp>
          <div className="max-w-2xl border-t border-border pt-16">
            <span className="text-xs text-muted-foreground tracking-widest block mb-6" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>REFLECTION</span>
            <p className="text-xl lg:text-2xl text-foreground/70 font-light leading-relaxed" style={{ fontFamily: "'Fraunces', serif" }}>
              Entertainment design taught me that hierarchy is not just a visual tool it is an argument about what{" "}
              <span className="italic">matters</span>. The original BUMA site treated everything as equally important, which meant nothing felt worth engaging with. Every layout decision in the redesign was, at its core, an editorial decision: what does this visitor need to feel and do next?
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
