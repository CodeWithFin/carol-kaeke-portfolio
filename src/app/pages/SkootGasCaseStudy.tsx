import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { FadeUp } from "../lib/shared";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

const DECISIONS = [
  {
    num: "01",
    focus: "Clarity · Prevention",
    title: "Smart Gas Monitoring Dashboard",
    decision: "Surface remaining gas level, estimated days of usage, and a refill recommendation as the very first thing a user sees when they open the app.",
    reason: "The core anxiety of a gas delivery user is not 'how do I order?' — it's 'am I about to run out without knowing?' Most users only think about ordering when gas runs out. By making the gas level the hero element of the home screen, we shift the user from reactive to proactive. A percentage indicator and estimated days remaining give concrete information that replaces vague worry with actionable awareness.",
    uiChange: "A prominent gas-level visualisation (circular progress indicator) sits at the top of the home dashboard alongside a percentage readout, an estimated days-remaining figure, and a colour-coded health status (Full → Good → Low → Critical). A refill recommendation banner appears contextually when levels drop below 30%.",
    tradeoff: "Making the monitoring UI the centrepiece means less screen real estate for promotions or discovery content. For new users with full cylinders, the dashboard can feel passive. This was addressed by showing relevant contextual content (past orders, supplier ratings) when gas levels are high.",
    impact: "Estimated 35% increase in earlier refill orders · Estimated 40% reduction in emergency refill requests. Projections based on UX research on proactive notification systems in utility and delivery apps.",
  },
  {
    num: "02",
    focus: "Conversion",
    title: "Streamlined Checkout",
    decision: "Reduce the checkout flow to a single scrollable screen with pre-filled information, making placing an order a confirmation rather than a data-entry task.",
    reason: "Every additional field or decision point in a checkout flow is a potential exit. For a household utility like gas, the user's intent to purchase is already formed — the checkout should validate and confirm, not interrogate. Pre-populating the delivery address, saved phone number, and preferred payment method removes the most common sources of mid-checkout abandonment.",
    uiChange: "A consolidated checkout screen showing order summary with editable quantity, delivery address with a one-tap edit option, pre-filled phone number, an optional delivery notes field (collapsed by default), and a single prominent Pay button. Price breakdown is always visible — no hidden totals revealed only at the final step.",
    tradeoff: "Pre-filling information requires users to trust that their saved data is accurate. If a user has moved or changed their number, they may not notice the pre-fill is wrong. An inline edit affordance and a confirmation nudge ('Delivering to: [address] — correct?') mitigates this without adding friction for the majority.",
    impact: "Estimated 20% increase in checkout completion · Estimated 18% reduction in cart abandonment. Based on industry benchmarks for pre-filled mobile checkout flows.",
  },
  {
    num: "03",
    focus: "Trust · Completion",
    title: "Transparent Order Management",
    decision: "Give users a dedicated orders screen that clearly separates ongoing and completed orders, with delivery ETA always visible on active orders.",
    reason: "After placing an order, the highest-anxiety moment for a delivery user is uncertainty: did it go through? When will it arrive? Is anything happening? An orders screen that surfaces ETA and current status prominently answers these questions before the user has to ask — which is what drives support contacts. Visibility of past orders also supports repeat ordering with fewer decisions.",
    uiChange: "A tabbed orders screen with Ongoing and Completed tabs. Ongoing order cards show order details, delivery ETA, current status badge, and a prominent Track Order CTA. Completed orders show delivery timestamp and a quick Reorder action. The screen is reachable from the bottom navigation on one tap.",
    tradeoff: "A dedicated orders screen adds depth to the navigation hierarchy. Users unfamiliar with tab-based order history may not immediately find it. Placing it in the primary tab bar (not buried in a profile menu) was a deliberate choice to surface it as a core feature rather than a utility.",
    impact: "Estimated 25% increase in customer confidence scores · Estimated 30% reduction in support contacts. Modelled on delivery platform benchmarks where ETA visibility directly correlates with support ticket reduction.",
  },
  {
    num: "04",
    focus: "Trust",
    title: "Live Delivery Tracking",
    decision: "Show a step-by-step delivery timeline with live progress, named milestones, and rider status updates — not just a single 'Order Placed' confirmation.",
    reason: "The period between placing an order and receiving a delivery is where trust is won or lost. Users who can see that their order is moving — confirmed, picked up, en route, nearby — are significantly less anxious and less likely to cancel or contact support. Named milestones (Order Confirmed → Supplier Preparing → Rider Picked Up → On the Way → Arriving) make the wait feel structured rather than opaque.",
    uiChange: "A tracking screen with a vertical progress timeline, each milestone shown as a labelled node with a timestamp when completed. The current stage is highlighted. A live status banner at the top shows the rider's name and estimated arrival time. The screen auto-refreshes without requiring the user to pull-to-refresh.",
    tradeoff: "Real-time tracking requires reliable backend updates from suppliers and riders. If status updates are delayed, the tracking UI can misrepresent reality and damage trust more than a simple ETA would. Designing for graceful degradation — showing the last known status with a timestamp — was a key consideration.",
    impact: "Estimated 35% reduction in 'Where is my order?' support requests · Estimated 20% increase in customer satisfaction scores. Based on delivery platform studies correlating tracking visibility with satisfaction.",
  },
  {
    num: "05",
    focus: "Retention",
    title: "Wallet & Payment Experience",
    decision: "Introduce an in-app wallet with a visible balance, transaction history, and the ability to top up prepaid credit — making Skoot Gas a financial relationship, not just a transactional one.",
    reason: "Users who maintain a wallet balance on a delivery platform are more likely to reorder without comparing alternatives, because the money is already committed. A wallet also removes payment friction at checkout — the user sees their balance and taps once to pay. Transparent transaction history builds financial trust by letting users see exactly where their money went and when.",
    uiChange: "A wallet screen showing available balance prominently, a top-up action, and a scrollable transaction history with date, order reference, and amount for each entry. At checkout, wallet balance is surfaced as the default payment option when sufficient funds are available.",
    tradeoff: "Introducing a wallet means users must pre-load funds, which is a trust barrier for first-time users. The wallet was positioned as an optional fast-payment method — not the only payment option — to avoid blocking users who prefer card-on-delivery or direct card payments.",
    impact: "Estimated 18% increase in repeat purchases · Estimated 22% wallet adoption rate · Estimated 15% faster repeat checkout times. Projections based on wallet adoption patterns in comparable delivery platforms.",
  },
];

const FLOW_SECTIONS = [
  {
    id: "dashboard",
    label: "01 — Smart Home Dashboard",
    title: "Understanding gas status at a glance",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=700&fit=crop&auto=format",
    imageAlt: "Skoot Gas home dashboard showing gas level monitoring",
    caption: "Skoot Gas — Home Dashboard with real-time gas level visualisation and refill recommendation",
    annotations: [
      { label: "Personalised greeting", body: "The screen opens with the user's name and a contextual status message based on their current gas level — 'Good morning, Sarah. Your gas is running low.' This immediately frames the session around their most relevant need." },
      { label: "Gas level visualisation", body: "A circular progress indicator shows remaining gas percentage alongside an estimated days-remaining figure. The colour shifts from green (full) to amber (low) to red (critical), giving instant status without reading a number." },
      { label: "Refill recommendation banner", body: "When gas drops below 30%, a contextual banner appears recommending a refill and surfacing the primary Order Gas CTA. The banner disappears once an order is placed to avoid unnecessary noise." },
      { label: "Health status indicator", body: "A labelled status tag (Full / Good / Low / Critical) gives users a human-readable summary of their gas health — useful for users who find percentage figures abstract." },
    ],
    impact: "Estimated 35% increase in earlier refill ordering · Estimated 40% reduction in emergency gas shortages · Estimated 25% increase in engagement with refill reminders. These are projected outcomes based on UX benchmarks for proactive monitoring interfaces in household utility apps.",
  },
  {
    id: "checkout",
    label: "02 — Checkout Experience",
    title: "From decision to order in under 30 seconds",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=700&fit=crop&auto=format",
    imageAlt: "Skoot Gas checkout screen with pre-filled delivery information",
    caption: "Skoot Gas — Streamlined checkout with pre-filled address, phone, and transparent pricing",
    annotations: [
      { label: "Simplified order summary", body: "The item, quantity selector, and total are shown at the top — giving users a clear anchor for what they are purchasing before they see the delivery details." },
      { label: "Pricing transparency", body: "The price breakdown (item cost, delivery fee, total) is always visible in the summary. There are no surprise totals revealed only at the payment step." },
      { label: "Editable delivery information", body: "The delivery address and phone number are pre-filled from the user's profile. Each field has a visible edit affordance so users can change details without hunting through settings." },
      { label: "Optional delivery notes", body: "A collapsed 'Delivery instructions' field is available for users who need it (e.g. 'Leave at the gate') but does not demand attention from users who don't." },
    ],
    impact: "Estimated 20% increase in checkout completion rate · Estimated 18% reduction in checkout abandonment. Benchmarked against mobile commerce pre-fill patterns across delivery and e-commerce platforms.",
  },
  {
    id: "orders",
    label: "03 — Order Management",
    title: "Every order, always visible",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=700&fit=crop&auto=format",
    imageAlt: "Skoot Gas orders screen showing ongoing and completed orders",
    caption: "Skoot Gas — Orders screen with Ongoing and Completed tabs, ETA visibility, and Track Order CTA",
    annotations: [
      { label: "Ongoing/completed tabs", body: "Segmenting active and historical orders into tabs prevents the screen from becoming a mixed list. Active orders are always surfaced first — the most time-sensitive information leads." },
      { label: "Delivery ETA on active cards", body: "Each active order card shows the estimated delivery time prominently. Users don't need to open the tracking screen just to check when their order will arrive." },
      { label: "Prominent Track Order CTA", body: "A single clearly labelled action on each active order card routes the user directly to the live tracking screen — no hunting through menus." },
      { label: "Quick Reorder on completed cards", body: "Completed orders offer a Reorder action that pre-fills the same item and delivery address, making repeat purchasing a one-tap decision." },
    ],
    impact: "Estimated 25% increase in order tracking engagement · Estimated 30% reduction in customer support contacts. Based on delivery app research showing that ETA visibility on order list screens significantly reduces inbound support volume.",
  },
  {
    id: "tracking",
    label: "04 — Live Order Tracking",
    title: "Turning waiting into watching",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&h=700&fit=crop&auto=format",
    imageAlt: "Skoot Gas live order tracking screen with delivery milestone timeline",
    caption: "Skoot Gas — Live tracking with named delivery milestones, rider updates, and progress timeline",
    annotations: [
      { label: "Delivery milestone timeline", body: "A vertical timeline lists each stage of the delivery journey — Order Confirmed, Supplier Preparing, Rider Picked Up, On the Way, Arriving — with timestamps for completed stages. Users understand the full delivery arc, not just the current moment." },
      { label: "Current stage highlight", body: "The active milestone is visually distinguished from completed and pending stages, making it immediately clear where in the journey the order sits without reading every label." },
      { label: "Rider status banner", body: "A live banner at the top of the screen shows the rider's name and a real-time ETA. This personalises the delivery and reduces the feeling of dealing with an anonymous logistics system." },
      { label: "Auto-refresh", body: "The tracking screen updates automatically without requiring the user to pull-to-refresh. Removing this interaction reduces the friction of monitoring a live delivery." },
    ],
    impact: "Estimated 35% reduction in 'Where is my order?' support requests · Estimated 20% increase in customer satisfaction. Derived from delivery platform research consistently showing that live tracking is the single highest-impact feature for post-order satisfaction.",
  },
  {
    id: "wallet",
    label: "05 — Wallet & Payments",
    title: "Making repeat purchases feel effortless",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=700&fit=crop&auto=format",
    imageAlt: "Skoot Gas wallet screen showing balance, top-up, and transaction history",
    caption: "Skoot Gas — Wallet with available balance, top-up action, and transparent transaction history",
    annotations: [
      { label: "Available balance prominence", body: "The wallet balance is the first thing on the screen — not buried below a list of transactions. Users with enough balance to cover a refill see that immediately and feel ready to order." },
      { label: "Transaction history", body: "A scrollable list of past transactions shows date, order reference, and amount. Users can verify their spending history without contacting support — reducing financial anxiety and building trust." },
      { label: "Top-up action", body: "A clearly labelled top-up button allows users to add credit in one step. Positioning it next to the balance — rather than in settings — keeps the wallet feeling active rather than administrative." },
      { label: "Wallet-first checkout", body: "When wallet balance is sufficient, it is surfaced as the default payment option at checkout. Users who have pre-loaded credit experience a faster, one-tap payment without re-entering card details." },
    ],
    impact: "Estimated 18% increase in repeat purchases · Estimated 22% wallet adoption rate · Estimated 15% faster repeat checkout times. Projected based on wallet adoption benchmarks from comparable on-demand delivery platforms operating in similar markets.",
  },
];

export default function SkootGasCaseStudy() {
  const navigate = useNavigate();

  return (
    <div className="bg-background min-h-screen">
      <Nav variant="case-study" onBack={() => navigate("/")} />

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs text-muted-foreground tracking-widest" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>CASE STUDY · 02</span>
            <span className="text-xs text-muted-foreground/40" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>—</span>
            <span className="text-xs text-accent" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>On-demand Delivery · 1 Week Design Sprint · Product Designer</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.07}>
          <h1
            className="text-[clamp(2.75rem,6vw,5.5rem)] font-normal leading-[1.05] text-foreground tracking-tight mb-8 max-w-4xl"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Skoot Gas — You should never have to wonder if you&apos;ll run out of{" "}
            <span className="italic font-light">gas.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.12}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
            Skoot Gas is an on-demand gas delivery platform that connects households with trusted suppliers for fast doorstep refills. The core promise — you never run out of gas — required combining IoT-powered monitoring, predictive alerts, live order tracking, and digital payments into one seamless mobile experience. I designed the end-to-end flow across the home dashboard, checkout, order management, live tracking, and wallet.
          </p>
        </FadeUp>

        {/* Meta strip */}
        <FadeUp delay={0.16}>
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-10 border-t border-border">
            {[
              { label: "ROLE", value: "Product Designer" },
              { label: "INDUSTRY", value: "On-demand Delivery" },
              { label: "TIMELINE", value: "1 Week Design Sprint" },
              { label: "PLATFORM", value: "Mobile (iOS & Android)" },
              { label: "TYPE", value: "Consumer App" },
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
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=700&fit=crop&auto=format"
              alt="Skoot Gas — on-demand gas delivery app overview"
              className="w-full object-cover"
              style={{ height: "clamp(280px, 45vw, 560px)", filter: "saturate(0.88) contrast(1.03)" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(212,130,26,0.15) 0%, rgba(107,143,113,0.08) 100%)" }} />
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
              color: "text-accent",
              heading: "Peace of mind — never unexpectedly running out of gas.",
              body: "Users want to monitor their gas levels passively, receive alerts before they run low, and order a refill quickly when needed. They want to track deliveries in real time and manage household gas spending without friction. The underlying goal is not 'order gas' — it is 'never be caught without gas when cooking for my family.'",
            },
            {
              tag: "Where users struggle",
              color: "text-accent",
              heading: "Gas cylinders run empty without warning, and delivery uncertainty makes things worse.",
              body: "Most households only notice they are out of gas when a meal is mid-cook. There is no visibility into remaining levels, no reminder to reorder, and no reliable way to know when a delivery will arrive after placing an order. Unreliable ETAs and the absence of tracking create a cycle of anxiety that discourages users from trusting the service.",
            },
            {
              tag: "Why it matters to the business",
              color: "text-accent",
              heading: "Unreliable experiences kill retention in a category where loyalty should be easy to earn.",
              body: "Gas is a recurring household need — repeat purchase frequency should be high. But without proactive monitoring, orders are reactive rather than planned, leading to abandoned carts when users find alternatives in the moment. Support costs rise with 'where is my order?' contacts. Low trust in delivery reliability directly reduces subscription and auto-refill adoption, which represents the highest-LTV customer segment.",
            },
            {
              tag: "Design opportunity",
              color: "text-accent",
              heading: "Proactive monitoring and transparent delivery can turn a stressful utility into a trusted service.",
              body: "The biggest design lever is shifting users from reactive to proactive: showing them their gas level before they need to think about it, and making ordering feel low-effort enough that they do it comfortably in advance. Transparent tracking and wallet integration remove the two biggest post-order pain points — uncertainty and payment friction — turning a one-time user into a loyal repeat customer.",
            },
          ].map((card, i) => (
            <FadeUp key={card.tag} delay={i * 0.07}>
              <div className="p-8 rounded-2xl border border-border h-full" style={{ backgroundColor: "rgba(245,240,232,0.5)" }}>
                <div className={`text-[10px] tracking-widest mb-4 ${card.color}`} style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{card.tag.toUpperCase()}</div>
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
                  <div className="mt-6 p-4 rounded-xl border border-accent/20" style={{ backgroundColor: "rgba(212,130,26,0.06)" }}>
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

        <div className="space-y-28">
          {FLOW_SECTIONS.map((flow) => (
            <FadeUp key={flow.id}>
              <div>
                <div className="mb-8">
                  <div className="text-xs text-muted-foreground mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{flow.label}</div>
                  <h3 className="text-3xl lg:text-4xl font-normal text-foreground" style={{ fontFamily: "'Fraunces', serif" }}>{flow.title}</h3>
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-muted mb-4" style={{ boxShadow: "0 24px 60px rgba(28,26,23,0.12)" }}>
                  <img
                    src={flow.image}
                    alt={flow.imageAlt}
                    className="w-full object-cover"
                    style={{ height: "clamp(220px, 40vw, 500px)", filter: "saturate(0.88) contrast(1.02)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,26,23,0.08) 0%, transparent 50%)" }} />
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

                <div className="mt-8 p-5 rounded-xl border border-accent/20" style={{ backgroundColor: "rgba(212,130,26,0.06)" }}>
                  <div className="text-[10px] tracking-widest text-accent mb-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>IMPACT</div>
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
              A one-week sprint forces a kind of design clarity that longer timelines sometimes dilute. Every decision had to be justified immediately, and every feature had to earn its place. Skoot Gas taught me that the most important thing a utility app can do is{" "}
              <span className="italic">make uncertainty disappear</span> — and that is almost always a communication problem before it is a technology problem.
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
