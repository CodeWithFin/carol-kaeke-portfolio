import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { FadeUp } from "../lib/shared";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { CaseStudyHero } from "../components/CaseStudyHero";
import skootRideCoverImage from "../../../assets/images/iPhone-13-Pro-Front-4.png";
import leaseSelectionImage from "../../../assets/images/iPhone-13-Pro-Front-3.png";
import vehicleSelectionImage from "../../../assets/images/iPhone-13-Pro-Front-1.png";
import identityVerificationImage from "../../../assets/images/iPhone-13-Pro-Front-2.png";
import walletImage from "../../../assets/images/iPhone-13-Pro-Front (2).png";
import skootRideCardImage from "../../../assets/images/skoot-ride-card-image.jpeg";

const DECISIONS = [
  {
    num: "01",
    focus: "Discovery · Conversion",
    title: "Guided Lease Selection",
    decision: "Present exactly two lease options — Standard Lease and Lease-to-Own — side by side with a clear recommendation badge on the most popular choice, and a simplified benefit comparison that avoids financial jargon.",
    reason: "When users face a financial commitment with unfamiliar terminology, decision paralysis is the most common failure mode. Most users arriving on Skoot Ride are not experienced with leasing — they are aspiring riders who want to start earning, not financial analysts evaluating contract terms. Surfacing two clear options with a recommended path removes the burden of open-ended research and replaces it with a guided choice.",
    uiChange: "A two-card comparison layout with the recommended option visually distinguished by a badge and a subtle highlight treatment. Each card shows the plan name, a one-line benefit summary, weekly/monthly rate, and a Continue CTA. A collapsible 'Learn more' section is available for users who want detail without it dominating the screen for users who don't.",
    tradeoff: "Reducing the comparison to two options means some nuance in the plans (excess mileage charges, early exit terms) is not immediately visible. This was addressed through progressive disclosure — the detail is available, but not foregrounded at the point of initial choice.",
    impact: "Estimated 24% increase in lease selection completion · Estimated 18% reduction in decision-stage abandonment · Estimated 15% faster onboarding. Projections based on UX research on guided decision flows in financial and subscription products.",
  },
  {
    num: "02",
    focus: "Discovery",
    title: "Simplified Vehicle Discovery",
    decision: "Display available vehicles as visual cards with imagery, category filters (tuk-tuk / e-bike), weekly lease price, and lease duration — allowing users to browse and compare before committing to a selection.",
    reason: "Choosing a vehicle is one of the most emotionally significant moments in the leasing journey. Users are not just evaluating a product — they are imagining their daily working life. Visual browsing with clear pricing visible upfront (rather than revealed only after selecting a vehicle) respects that weight. Category filters allow users with a specific vehicle type in mind to reduce the list quickly without scrolling through irrelevant options.",
    uiChange: "A scrollable vehicle catalogue with filter tabs across the top (All / Tuk-Tuk / E-Bike). Each vehicle card shows a product image, vehicle name, lease type label, weekly rate, lease duration, and a prominent Select Vehicle CTA. Tapping the card expands a detail view with specifications before committing.",
    tradeoff: "Showing pricing on the browse screen means users may filter out vehicles before understanding the full value proposition (insurance included, maintenance covered, etc.). A brief value summary beneath the price — 'Includes insurance & maintenance' — was added to prevent premature price-based rejection.",
    impact: "Estimated 20% increase in vehicle selection completion · Estimated 15% faster time-to-selection. Based on product browsing benchmarks showing that visible pricing and visual imagery together reduce selection abandonment.",
  },
  {
    num: "03",
    focus: "Trust · Completion",
    title: "Transparent Identity Verification",
    decision: "Open the KYC flow with a clear document checklist showing exactly what is required before the user begins uploading, with individual upload progress states for each document.",
    reason: "KYC abandonment in leasing applications is almost always caused by surprise — users encounter a document requirement they weren't expecting (a utility bill, a second form of ID) and exit to retrieve it, often not returning. Showing the complete document list upfront eliminates this surprise. Upload progress states for each document (Not Uploaded → Uploading → Uploaded) give users a visible sense of momentum and allow them to complete the verification in stages without losing their place.",
    uiChange: "A verification screen with a static list of required documents at the top (National ID, Driver's License, Proof of Residence, Passport photo). Each document has an upload button and a status indicator. A progress summary at the top shows how many of the required documents have been submitted. The Submit Application CTA only activates once all required documents are uploaded.",
    tradeoff: "Showing the full document list upfront can feel daunting if the list is long. The design mitigated this by grouping documents by category (Identity / Address / Photo) and using a step-count indicator ('3 of 4 uploaded') to reinforce progress rather than remaining work.",
    impact: "Estimated 28% improvement in KYC completion · Estimated 25% reduction in verification abandonment. Based on research showing that transparency about document requirements before upload begins significantly reduces mid-flow exits.",
  },
  {
    num: "04",
    focus: "Clarity · Trust",
    title: "Lease Management Dashboard",
    decision: "Design the central dashboard to always communicate the rider's current lease status — including application review, approval, active lease health, payment schedule, and vehicle immobilisation warnings — through a single, scannable screen.",
    reason: "A leasing relationship spans weeks or months. The dashboard is not a one-time onboarding screen — it is the place riders return to daily. If this screen fails to answer 'what is happening with my lease right now?', riders contact support. Every status state the lease can be in (Under Review, Approved, Active, Payment Overdue, Immobilised) needs a clear, unambiguous visual treatment. Ambiguity at this point does not just create anxiety — it creates churn.",
    uiChange: "A status-first dashboard layout where the lease state is communicated in a prominent card at the top — colour-coded and labelled (Active / Under Review / Warning / Immobilised). Below this: lease overview (vehicle, plan, weekly rate, next payment), vehicle information card, and quick action buttons (Make Payment, View Schedule, Contact Support). Contextual alert banners appear at the top of the screen for time-sensitive states (missed payment, immobilisation warning).",
    tradeoff: "Using colour coding to communicate lease state (green / amber / red) requires that the meaning of each colour is clearly labelled — colour alone is not accessible. Each state card includes both a colour indicator and a plain-language label to meet accessibility requirements and ensure the meaning is unambiguous.",
    impact: "Estimated 30% increase in dashboard engagement · Estimated 35% reduction in lease-related support contacts · Estimated 18% increase in lease renewal intent. Based on dashboard UX research across fintech and mobility platforms.",
  },
  {
    num: "05",
    focus: "Retention · Completion",
    title: "Charging & Wallet Experience",
    decision: "Surface charging session information (duration, energy consumed, live progress) and wallet balance as closely connected experiences, since both directly affect the rider's ability to operate their vehicle and earn income.",
    reason: "For an electric vehicle rider, charging is not a passive background event — it is a direct dependency of their working day. If a rider does not know how long charging will take, or whether their wallet balance is sufficient for the next lease payment, they face operational uncertainty that reduces confidence in the platform. Connecting charging visibility with wallet transparency makes the platform feel like a reliable working tool rather than a device management app.",
    uiChange: "A charging screen showing session duration (elapsed and estimated total), live energy consumption in kWh, a progress indicator, and a Stop Charging action with a confirmation step to prevent accidental taps. The wallet screen shows available balance prominently, a transaction history filtered by category (Lease Payments / Top-ups / Charging), and a top-up flow reachable in one tap.",
    tradeoff: "Combining charging and wallet into related but distinct screens (rather than a single unified screen) was a deliberate choice. Merging them risked creating a screen that tried to do too much and communicated neither function clearly. The bottom navigation links both screens with one tap between them.",
    impact: "Estimated 20% increase in charging session completion · Estimated 22% wallet adoption rate · Estimated 18% improvement in rider retention. Projected based on EV platform UX benchmarks and wallet adoption patterns in comparable mobility-as-a-service products.",
  },
];

const FLOW_SECTIONS = [
  {
    id: "lease-selection",
    label: "01 — Lease Selection",
    title: "Removing the anxiety of a financial choice",
    image: leaseSelectionImage,
    imageFit: "contain" as const,
    imageAlt: "Skoot Ride lease selection screen showing Standard Lease and Lease-to-Own options",
    caption: "Skoot Ride — Choose Lease Type with recommended badge, benefit comparison, and Continue CTA",
    annotations: [
      { label: "Two-option comparison", body: "Presenting exactly two lease options removes the cognitive overhead of evaluating a long list. The user's job becomes a binary comparison, not an open-ended search." },
      { label: "Recommendation badge", body: "A 'Most Popular' badge on the Lease-to-Own option provides social proof and a clear default for undecided users — they can choose it with confidence without needing to understand every detail of the alternative." },
      { label: "Simplified benefits", body: "Each option shows three to four benefit statements in plain language rather than contract terms. 'Own the vehicle after 12 months' communicates the value of Lease-to-Own more effectively than 'residual value transfer clause.'" },
      { label: "Progressive disclosure", body: "A collapsible 'Learn more' section is available for users who want the full terms, but it is collapsed by default. The primary flow is never blocked by detail that most users don't need at this stage." },
    ],
    impact: "Estimated 24% increase in lease selection completion · Estimated 18% reduction in decision-stage abandonment · Estimated 15% faster onboarding to vehicle selection. These are projected outcomes based on guided decision-flow research in financial and subscription product design.",
  },
  {
    id: "vehicle-selection",
    label: "02 — Vehicle Selection",
    title: "Making the right vehicle feel obvious",
    image: vehicleSelectionImage,
    imageFit: "contain" as const,
    imageAlt: "Skoot Ride vehicle selection screen showing tuk-tuk and e-bike options with pricing",
    caption: "Skoot Ride — Choose Vehicle with category filters, vehicle cards, lease pricing, and Select Vehicle CTA",
    annotations: [
      { label: "Category filters", body: "Tabs filtering by vehicle type (All / Tuk-Tuk / E-Bike) allow users who already know what they want to reduce the list in one tap. Users who are undecided can browse the full catalogue." },
      { label: "Pricing on browse", body: "The weekly lease rate is visible on each vehicle card — not hidden until after selection. Users can make a financially informed shortlist without needing to tap into each vehicle's detail page." },
      { label: "Value summary beneath price", body: "'Includes insurance & maintenance' appears beneath each price to prevent users from rejecting options based on rate alone before understanding what is included in the lease." },
      { label: "Select Vehicle CTA", body: "A prominent CTA on each card eliminates ambiguity about how to proceed. Tapping the card image expands a detail view for users who want specs before committing." },
    ],
    impact: "Estimated 20% increase in vehicle selection completion · Estimated 15% reduction in time-to-vehicle-selection. Based on product browsing benchmarks across mobility and e-commerce platforms.",
  },
  {
    id: "kyc",
    label: "03 — Identity Verification",
    title: "No surprises, no abandoned applications",
    image: identityVerificationImage,
    imageFit: "contain" as const,
    imageAlt: "Skoot Ride identity verification screen showing document checklist and upload states",
    caption: "Skoot Ride — Verify Identity with required document list, upload progress indicators, and Submit CTA",
    annotations: [
      { label: "Document checklist upfront", body: "The complete list of required documents is shown before the user begins uploading. Users can check they have everything available before starting — eliminating mid-flow exits to retrieve missing documents." },
      { label: "Per-document progress states", body: "Each document has its own status indicator (Not Uploaded → Uploading → Uploaded ✓). Users can see at a glance which documents are complete and which remain — supporting partial completion and return visits." },
      { label: "Upload count indicator", body: "A header summary shows '3 of 4 documents uploaded', framing the task in terms of progress made rather than work remaining. This mirrors the psychology of completion rather than deficit." },
      { label: "Conditional Submit CTA", body: "The Submit Application button is inactive until all required documents are uploaded, preventing incomplete submissions and the support overhead of chasing missing documents after submission." },
    ],
    impact: "Estimated 28% improvement in KYC completion · Estimated 25% reduction in document upload abandonment. Projected based on UX research showing that pre-disclosure of document requirements significantly reduces mid-flow exits in leasing and financial applications.",
  },
  {
    id: "dashboard",
    label: "04 — Lease Dashboard & Application Status",
    title: "Always knowing where you stand",
    image: leaseSelectionImage,
    imageFit: "contain" as const,
    imageAlt: "Skoot Ride lease dashboard showing application status, lease overview, and quick actions",
    caption: "Skoot Ride — Lease Dashboard across Application Review, Approved, Active, Warning, and Immobilised states",
    annotations: [
      { label: "Status-first layout", body: "The lease state is communicated in the first card a user sees — colour-coded and labelled in plain language. Under Review, Approved, Active, Payment Due, and Immobilised each have distinct visual treatments so the state is scannable in under two seconds." },
      { label: "Contextual alert banners", body: "Time-sensitive states (missed payment, immobilisation warning) trigger a prominent banner at the top of the screen, ensuring riders see critical information without needing to scroll. Banners are dismissible once the user acknowledges the action required." },
      { label: "Lease overview card", body: "Vehicle name, plan type, weekly rate, and next payment date are summarised in a persistent card below the status indicator. Riders never need to navigate away from the dashboard to find their basic lease terms." },
      { label: "Quick actions", body: "Make Payment, View Schedule, and Contact Support are surfaced as labelled action buttons rather than buried in a menu. For the most common post-onboarding tasks, the dashboard is the only screen a rider ever needs." },
    ],
    impact: "Estimated 30% increase in dashboard daily engagement · Estimated 35% reduction in lease-related support contacts · Estimated 18% increase in lease renewal intent. Based on lease management UX research and mobility platform dashboard benchmarks.",
  },
  {
    id: "charging",
    label: "05 — Charging Experience",
    title: "Making charging feel in control, not opaque",
    image: skootRideCoverImage,
    imageFit: "contain" as const,
    imageAlt: "Skoot Ride charging screen showing session duration, energy usage, and stop charging action",
    caption: "Skoot Ride — Charging Session with live duration, energy consumption, progress indicator, and Stop Charging CTA",
    annotations: [
      { label: "Session duration display", body: "Elapsed time and estimated completion time are both shown — 'Charging for 24 min · Est. 1h 10min remaining'. Showing both eliminates the anxiety of not knowing how long the session will take." },
      { label: "Live energy consumption", body: "kWh consumed updates in real time during the session. For riders who pay per unit of energy, this provides financial transparency alongside operational awareness." },
      { label: "Progress indicator", body: "A visual charging progress bar gives an at-a-glance summary for users who check the screen briefly and don't want to read numbers. It mirrors the familiar pattern of a phone charging indicator." },
      { label: "Stop Charging with confirmation", body: "The Stop Charging action requires a single confirmation step to prevent accidental taps — particularly important for a session that, once interrupted, may affect the rider's working range for the day." },
    ],
    impact: "Estimated 20% increase in charging session completion without interruption · Estimated 15% reduction in unplanned charging stops. Projected based on EV user behaviour research and smart charging interface benchmarks.",
  },
  {
    id: "wallet",
    label: "06 — Wallet & Payments",
    title: "Financial clarity for riders managing a lease",
    image: walletImage,
    imageFit: "contain" as const,
    imageAlt: "Skoot Ride wallet screen showing balance, transaction history, and top-up action",
    caption: "Skoot Ride — Wallet with available balance, categorised transaction history, and Top Up CTA",
    annotations: [
      { label: "Balance prominence", body: "Available wallet balance is the dominant element on the screen — not a secondary figure beneath a graph or buried in settings. Riders need to know at a glance whether they can cover their next lease payment." },
      { label: "Categorised transaction history", body: "Transactions are categorised (Lease Payments / Top-ups / Charging) so riders can quickly audit their spending without scrolling through a mixed-purpose ledger. Each entry shows date, category, and amount." },
      { label: "Top-up in one tap", body: "The Top Up button is immediately adjacent to the balance display — where a rider's attention already is when they realise they need to add credit. No navigation or menu required." },
      { label: "Lease payment records", body: "Past lease payments are visible in the transaction history with their reference numbers. Riders can verify payments without contacting support, which reduces inbound queries and builds confidence in the platform." },
    ],
    impact: "Estimated 22% wallet adoption rate · Estimated 18% improvement in rider retention · Estimated 15% faster repeat lease payments. Projected based on wallet adoption patterns in comparable mobility-as-a-service and fintech lease management platforms.",
  },
];

export default function SkootRideCaseStudy() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen">
      <Nav variant="case-study" overDark onBack={() => navigate("/")} />

      <CaseStudyHero
        image={skootRideCardImage}
        title="Skoot Ride"
        subtitle="Mobility · Mobile App"
        accent="#6b8f71"
      />

      {/* Overview */}
      <section className="pt-16 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeUp>
          <h2
            className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal leading-[1.15] text-foreground tracking-tight mb-6 max-w-3xl"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Making electric vehicle leasing a{" "}
            <span className="italic font-light">path to income</span>, not a barrier to it.
          </h2>
        </FadeUp>

        <FadeUp delay={0.08}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            Skoot Ride is an electric mobility leasing platform that connects aspiring riders and delivery partners with electric tuk-tuks and e-bikes through affordable lease plans. Instead of purchasing a vehicle outright — a barrier most users cannot clear — riders lease and immediately begin earning. I designed the full experience across lease selection, vehicle discovery, KYC, the lease management dashboard, charging, and wallet.
          </p>
        </FadeUp>

        {/* Meta strip */}
        <FadeUp delay={0.12}>
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-10 border-t border-border">
            {[
              { label: "ROLE", value: "Product Designer" },
              { label: "INDUSTRY", value: "Mobility" },
              { label: "TIMELINE", value: "1 Week Design Sprint" },
              { label: "PLATFORM", value: "Mobile (iOS & Android)" },
              { label: "VEHICLES", value: "Electric Tuk-Tuk · E-Bike" },
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
          <div
            className="relative rounded-2xl overflow-hidden bg-muted flex items-center justify-center p-8 sm:p-12 lg:p-16"
            style={{ height: "clamp(360px, 55vw, 600px)", boxShadow: "0 32px 80px rgba(28,26,23,0.14)" }}
          >
            <img
              src={skootRideCoverImage}
              alt="Skoot Ride — electric mobility leasing platform"
              className="max-h-full max-w-full object-contain block"
              style={{ maxHeight: "78%" }}
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
              heading: "A reliable income — and a vehicle is the only thing standing between them and it.",
              body: "Users on Skoot Ride are not vehicle enthusiasts — they are aspiring riders and delivery partners who see an electric vehicle as a tool for financial independence. They want to earn a reliable income, become self-employed, and start working quickly. Their goal is not 'lease a vehicle'; it is 'change my economic situation'. The design needed to honour that weight.",
            },
            {
              tag: "Where users struggle",
              heading: "Electric vehicles are expensive, leasing is confusing, and the approval process feels like a black box.",
              body: "The barriers are financial and informational. EVs are unaffordable to purchase outright for most of Skoot Ride's target users. Traditional leasing processes involve dense documentation, unclear requirements, and no feedback after submission. Users who don't know what documents to prepare abandon mid-application. Users who submit and hear nothing assume they've been rejected.",
            },
            {
              tag: "Why it matters to the business",
              heading: "Application abandonment and incomplete verifications mean fewer leased vehicles on the road.",
              body: "Every abandoned application represents a potential long-term revenue relationship that never starts. Incomplete KYC submissions require manual follow-up, increasing operational cost. Low visibility into lease status drives support contacts. Without a reliable dashboard, riders miss payments — leading to vehicle immobilisation, lease termination, and poor unit economics for the platform.",
            },
            {
              tag: "Design opportunity",
              heading: "Transparency and progressive disclosure can make a complex leasing process feel manageable.",
              body: "The design opportunity was to replace uncertainty with clarity at every stage. Transparent lease option comparisons reduce decision paralysis. A document checklist before KYC starts eliminates surprise. A status-first dashboard answers 'what is happening with my lease' before riders have to ask. Charging visibility and wallet transparency make day-to-day vehicle operations feel reliable rather than stressful.",
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
          {DECISIONS.map((d) => (
            <FadeUp key={d.num} delay={0.05}>
              <div className="border-t border-border py-12 grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8 lg:gap-16">
                <div>
                  <div className="text-xs text-muted-foreground mb-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{d.num}</div>
                  <span className="text-[10px] tracking-wider text-primary px-2.5 py-1 rounded-full border border-primary/30" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{d.focus}</span>
                </div>
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

                <div className="relative rounded-2xl overflow-hidden bg-muted mb-4 flex items-center justify-center" style={{ height: "clamp(280px, 42vw, 520px)", boxShadow: "0 24px 60px rgba(28,26,23,0.12)" }}>
                  <img
                    src={flow.image}
                    alt={flow.imageAlt}
                    className={flow.imageFit === "contain" ? "max-h-full max-w-full object-contain block" : "w-full h-full object-cover"}
                    style={
                      flow.imageFit === "contain"
                        ? { maxHeight: "78%", maxWidth: "78%" }
                        : { filter: "saturate(0.88) contrast(1.02)" }
                    }
                  />
                  {flow.imageFit !== "contain" && (
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,26,23,0.08) 0%, transparent 50%)" }} />
                  )}
                </div>
                <p className="text-xs text-muted-foreground text-center mb-12" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{flow.caption}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {flow.annotations.map((a) => (
                    <div key={a.label} className="p-6 rounded-xl border border-border" style={{ backgroundColor: "rgba(245,240,232,0.5)" }}>
                      <div className="text-xs font-medium text-foreground mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>{a.label}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{a.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-xl border border-primary/20" style={{ backgroundColor: "rgba(107,143,113,0.07)" }}>
                  <div className="text-[10px] tracking-widest text-primary mb-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>IMPACT</div>
                  <p className="text-sm text-foreground/75 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{flow.impact}</p>
                </div>
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
              Skoot Ride reminded me that when the stakes are high for users — when a product directly affects someone&apos;s ability to earn a living — the designer&apos;s responsibility extends beyond usability. Every moment of uncertainty we remove is a moment of{" "}
              <span className="italic">confidence we give back</span>. That is the work that matters.
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
