'use client';

import Image from "next/image";
import { useMemo, useState } from "react";

type Perspective = "employer" | "provider";
type SectionKey =
  | "overview"
  | "workforce"
  | "investment"
  | "journey"
  | "impact"
  | "providers"
  | "demand"
  | "fit"
  | "delivery"
  | "evidence"
  | "join";

type Section = {
  id: SectionKey;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
};

const employerSections: Section[] = [
  {
    id: "overview",
    label: "Overview",
    eyebrow: "Employer workspace",
    title: "One place to run your apprenticeship strategy.",
    intro:
      "LevyTate connects workforce need, levy planning, internal decisions, providers and impact in one employer environment.",
  },
  {
    id: "workforce",
    label: "Workforce",
    eyebrow: "Find the opportunity",
    title: "See where apprenticeships fit.",
    intro:
      "Start with your organisation — roles, skills needs and business priorities — then identify where an apprenticeship can genuinely help.",
  },
  {
    id: "investment",
    label: "Levy & funding",
    eyebrow: "Plan the investment",
    title: "Plan levy around workforce need.",
    intro:
      "Bring demand and funding into the same view so apprenticeship investment can be planned, not chased at the end of the cycle.",
  },
  {
    id: "journey",
    label: "Journey",
    eyebrow: "Make it easier to use",
    title: "One route from interest to start.",
    intro:
      "Give employees, managers, L&D and providers a clearer journey with fewer hand-offs and less manual coordination.",
  },
  {
    id: "impact",
    label: "Impact",
    eyebrow: "Show the value",
    title: "Show what the investment changed.",
    intro:
      "Move beyond starts and completions. Connect apprenticeship activity to capability, progression, productivity and business outcomes.",
  },
  {
    id: "providers",
    label: "Providers",
    eyebrow: "Choose against need",
    title: "Provider choice with context.",
    intro:
      "Compare delivery partners against the role, programme need and employer priorities — not just a list of courses.",
  },
];

const providerSections: Section[] = [
  {
    id: "overview",
    label: "Overview",
    eyebrow: "Provider workspace",
    title: "Be discovered in context.",
    intro:
      "LevyTate puts provider capability inside the employer's planning journey, where programme relevance can be understood against real workforce need.",
  },
  {
    id: "demand",
    label: "Employer demand",
    eyebrow: "See the need",
    title: "Understand what the employer is solving.",
    intro:
      "Engage around the role, capability gap and organisational priority — not an isolated request for a course.",
  },
  {
    id: "fit",
    label: "Programme fit",
    eyebrow: "Show relevance",
    title: "Make the fit obvious.",
    intro:
      "Position programmes against the employer need they address, the roles they support and the outcomes they are designed to create.",
  },
  {
    id: "delivery",
    label: "Delivery",
    eyebrow: "Join the journey",
    title: "Enter a better-qualified employer journey.",
    intro:
      "Move into delivery with clearer context, clearer expectations and fewer disconnected hand-offs before enrolment.",
  },
  {
    id: "evidence",
    label: "Evidence",
    eyebrow: "Show value",
    title: "Give employers a stronger impact story.",
    intro:
      "Help employers connect learning to progression, capability and business outcomes in the language their organisation understands.",
  },
  {
    id: "join",
    label: "Join LevyTate",
    eyebrow: "Provider network",
    title: "A curated route into employer demand.",
    intro:
      "LevyTate is building a focused provider network around relevance, delivery quality and employer need.",
  },
];

const questions = [
  {
    q: "Why not just work directly with a provider?",
    a:
      "You should. LevyTate does not replace providers. It gives the employer a neutral operating layer to identify need, plan investment, manage the journey and choose the right delivery partner with better context.",
  },
  {
    q: "What problem is LevyTate solving?",
    a:
      "Apprenticeships are often managed across spreadsheets, inboxes, provider portals and individual conversations. LevyTate gives the strategy one connected home.",
  },
  {
    q: "Is this the full LevyTate platform?",
    a:
      "No. This public workspace is designed to let you feel how LevyTate works while explaining the buying case. The live platform contains the operational tools behind the experience.",
  },
];

function OverviewScreen({ perspective }: { perspective: Perspective }) {
  if (perspective === "provider") {
    return (
      <div className="screen-grid overview-screen">
        <div className="screen-primary">
          <div className="strategy-track">
            <div>
              <span>01</span>
              <strong>Employer need</strong>
              <p>Roles, capability gaps and business priorities.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Programme fit</strong>
              <p>Where your delivery is relevant and why.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Qualified conversation</strong>
              <p>Better context before commercial engagement.</p>
            </div>
            <div>
              <span>04</span>
              <strong>Employer value</strong>
              <p>Delivery connected back to the outcome.</p>
            </div>
          </div>
        </div>
        <aside className="screen-aside">
          <p className="panel-label">Why providers use LevyTate</p>
          <h3>Less catalogue. More context.</h3>
          <p>
            LevyTate helps employers understand what they need before they choose
            who should deliver it.
          </p>
          <dl className="compact-list">
            <div><dt>Demand</dt><dd>Better qualified</dd></div>
            <div><dt>Fit</dt><dd>Easier to demonstrate</dd></div>
            <div><dt>Value</dt><dd>Closer to employer outcomes</dd></div>
          </dl>
        </aside>
      </div>
    );
  }

  return (
    <div className="screen-grid overview-screen">
      <div className="screen-primary">
        <div className="strategy-track">
          <div>
            <span>01</span>
            <strong>Workforce</strong>
            <p>Where could apprenticeships fit?</p>
          </div>
          <div>
            <span>02</span>
            <strong>Investment</strong>
            <p>What should we fund and when?</p>
          </div>
          <div>
            <span>03</span>
            <strong>Delivery</strong>
            <p>How do we move people through?</p>
          </div>
          <div>
            <span>04</span>
            <strong>Impact</strong>
            <p>What changed because we invested?</p>
          </div>
        </div>
      </div>
      <aside className="screen-aside">
        <p className="panel-label">What LevyTate brings together</p>
        <h3>One source of truth.</h3>
        <p>
          Workforce opportunity, funding, internal decisions, provider delivery
          and impact — connected instead of managed separately.
        </p>
        <dl className="compact-list">
          <div><dt>Replace</dt><dd>Spreadsheets and inbox chasing</dd></div>
          <div><dt>Reduce</dt><dd>Disconnected provider conversations</dd></div>
          <div><dt>Improve</dt><dd>Visibility and decision-making</dd></div>
        </dl>
      </aside>
    </div>
  );
}

function WorkforceScreen() {
  return (
    <div className="screen-grid">
      <div className="screen-primary">
        <div className="data-table">
          <div className="data-row data-head">
            <span>Area</span><span>Signal</span><span>What LevyTate reveals</span>
          </div>
          <div className="data-row">
            <strong>Operations</strong><span>Manual, repeatable work</span><span>Automation & improvement opportunity</span>
          </div>
          <div className="data-row">
            <strong>Data</strong><span>Reporting demand</span><span>Capability and development gap</span>
          </div>
          <div className="data-row">
            <strong>Managers</strong><span>Change responsibility</span><span>Leadership and enablement need</span>
          </div>
          <div className="data-row">
            <strong>Early careers</strong><span>Growth roles</span><span>Structured entry pathway</span>
          </div>
        </div>
      </div>
      <aside className="screen-aside">
        <p className="panel-label">The buying case</p>
        <h3>Stop waiting for apprenticeship requests.</h3>
        <p>
          LevyTate helps you surface opportunity proactively, then makes it easier
          for the right people to understand what is available.
        </p>
      </aside>
    </div>
  );
}

function InvestmentScreen() {
  return (
    <div className="screen-grid">
      <div className="screen-primary">
        <div className="funding-visual">
          <div className="funding-head">
            <span>Illustrative planning view</span>
            <strong>Annual apprenticeship investment</strong>
          </div>
          <div className="funding-bar" aria-label="Illustrative funding allocation">
            <span className="funding-committed" style={{ width: "52%" }} />
            <span className="funding-planned" style={{ width: "28%" }} />
            <span className="funding-open" style={{ width: "20%" }} />
          </div>
          <div className="funding-legend">
            <span><i className="dot committed" />Committed <strong>52%</strong></span>
            <span><i className="dot planned" />Planned <strong>28%</strong></span>
            <span><i className="dot open" />Available <strong>20%</strong></span>
          </div>
          <div className="funding-note">
            <span>Planning question</span>
            <strong>Where can the remaining investment solve a real workforce need?</strong>
          </div>
        </div>
      </div>
      <aside className="screen-aside">
        <p className="panel-label">The buying case</p>
        <h3>Funding and demand in the same conversation.</h3>
        <p>
          LevyTate helps employers move from “how do we spend the levy?” to “where
          should we invest it?”
        </p>
      </aside>
    </div>
  );
}

function JourneyScreen() {
  const steps = [
    ["Discover", "See relevant opportunity"],
    ["Discuss", "Manager and employee context"],
    ["Approve", "Internal decision"],
    ["Match", "Right programme and provider"],
    ["Start", "Clear hand-off into delivery"],
  ];

  return (
    <div className="screen-grid">
      <div className="screen-primary">
        <div className="journey-line">
          {steps.map(([title, text], index) => (
            <div className="journey-step" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <aside className="screen-aside">
        <p className="panel-label">The buying case</p>
        <h3>Fewer hand-offs. Clearer ownership.</h3>
        <p>
          LevyTate gives every participant a clearer route through the journey
          without forcing the employer to coordinate it manually.
        </p>
      </aside>
    </div>
  );
}

function ImpactScreen() {
  const rows = [
    ["People", "Progression, confidence, retention"],
    ["Capability", "New skills applied in role"],
    ["Productivity", "Projects, automation, improvement"],
    ["Investment", "Better use of apprenticeship funding"],
  ];

  return (
    <div className="screen-grid">
      <div className="screen-primary">
        <div className="impact-matrix">
          {rows.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
      <aside className="screen-aside">
        <p className="panel-label">The buying case</p>
        <h3>Make the value easier to defend.</h3>
        <p>
          Give HR, L&D and leadership a clearer picture of what apprenticeship
          investment is actually changing.
        </p>
      </aside>
    </div>
  );
}

function ProvidersScreen() {
  return (
    <div className="screen-grid">
      <div className="screen-primary">
        <div className="provider-flow">
          <div><span>Employer need</span><strong>What are we trying to solve?</strong></div>
          <i aria-hidden="true">→</i>
          <div><span>Programme fit</span><strong>Which route best fits the role?</strong></div>
          <i aria-hidden="true">→</i>
          <div><span>Provider fit</span><strong>Who can deliver it well?</strong></div>
        </div>
        <div className="provider-principles">
          <span>Employer-led</span>
          <span>Provider-neutral</span>
          <span>Fit before catalogue</span>
        </div>
      </div>
      <aside className="screen-aside">
        <p className="panel-label">The buying case</p>
        <h3>Choice without the noise.</h3>
        <p>
          LevyTate helps employers compare providers in the context of the
          workforce need, programme and delivery model.
        </p>
      </aside>
    </div>
  );
}

function ProviderScreen({ section }: { section: SectionKey }) {
  const content: Record<string, { rows: [string, string][]; side: string }> = {
    demand: {
      rows: [
        ["Role", "What job or team is changing?"],
        ["Need", "What capability is missing?"],
        ["Priority", "Why does the employer care now?"],
        ["Demand", "Where does an apprenticeship fit?"],
      ],
      side: "LevyTate lets you enter the conversation with more context than a programme enquiry alone.",
    },
    fit: {
      rows: [
        ["Employer priority", "Start with the business need"],
        ["Programme", "Show the relevant route"],
        ["Delivery model", "Explain how it fits"],
        ["Outcome", "Make expected value clear"],
      ],
      side: "The strongest provider proposition is not “we deliver this standard”. It is “this is why our delivery fits your need”.",
    },
    delivery: {
      rows: [
        ["Before start", "Clear employer decision"],
        ["At hand-off", "Context travels with the learner"],
        ["During delivery", "Employer expectations stay visible"],
        ["At review", "Progress connects back to value"],
      ],
      side: "A more structured employer journey creates a cleaner route into delivery.",
    },
    evidence: {
      rows: [
        ["Learning", "What capability developed?"],
        ["Application", "How was it used in role?"],
        ["Change", "What improved?"],
        ["Value", "What can the employer evidence?"],
      ],
      side: "Help the employer tell a stronger story internally and you strengthen the case for future investment.",
    },
    join: {
      rows: [
        ["Relevance", "Clear fit to employer need"],
        ["Quality", "Strong learner and employer experience"],
        ["Evidence", "Outcomes employers can use"],
        ["Partnership", "A collaborative employer-first approach"],
      ],
      side: "LevyTate is building a curated network rather than an open directory.",
    },
  };

  const active = content[section] ?? content.demand;

  return (
    <div className="screen-grid">
      <div className="screen-primary">
        <div className="provider-table">
          {active.rows.map(([a, b], index) => (
            <div key={a}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{a}</strong>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </div>
      <aside className="screen-aside">
        <p className="panel-label">Why it matters</p>
        <h3>{active.side}</h3>
        {section === "join" ? (
          <a className="inline-cta" href="mailto:hello@levytate.co.uk?subject=LevyTate%20provider%20network">
            Talk to LevyTate <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </aside>
    </div>
  );
}

function ScreenContent({
  section,
  perspective,
}: {
  section: SectionKey;
  perspective: Perspective;
}) {
  if (section === "overview") return <OverviewScreen perspective={perspective} />;
  if (perspective === "provider") return <ProviderScreen section={section} />;
  if (section === "workforce") return <WorkforceScreen />;
  if (section === "investment") return <InvestmentScreen />;
  if (section === "journey") return <JourneyScreen />;
  if (section === "impact") return <ImpactScreen />;
  return <ProvidersScreen />;
}

export default function MarketingPlatform() {
  const [perspective, setPerspective] = useState<Perspective>("employer");
  const [activeId, setActiveId] = useState<SectionKey>("overview");
  const [askOpen, setAskOpen] = useState(false);
  const [answerIndex, setAnswerIndex] = useState(0);

  const sections = perspective === "employer" ? employerSections : providerSections;
  const activeSection = useMemo(
    () => sections.find((item) => item.id === activeId) ?? sections[0],
    [activeId, sections]
  );

  function switchPerspective(next: Perspective) {
    setPerspective(next);
    setActiveId("overview");
  }

  return (
    <section className="platform-stage" aria-label="Explore LevyTate">
      <div className="platform-frame">
        <aside className="platform-sidebar">
          <div className="platform-brand">
            <Image src="/levytate-icon-final.svg" width={313} height={320} alt="" priority />
            <Image
              src="/levytate-wordmark-approved.svg"
              width={640}
              height={168}
              alt="LevyTate"
              priority
            />
          </div>

          <div className="workspace-select">
            <span className="workspace-dot" aria-hidden="true" />
            <div>
              <small>Public workspace</small>
              <strong>{perspective === "employer" ? "Employer view" : "Provider view"}</strong>
            </div>
          </div>

          <nav className="platform-nav" aria-label="LevyTate workspace navigation">
            {sections.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={activeId === item.id ? "active" : ""}
                onClick={() => setActiveId(item.id)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.label}</strong>
              </button>
            ))}
          </nav>

          <div className="sidebar-bottom">
            <button type="button" className="ask-button" onClick={() => setAskOpen(true)}>
              <span className="ask-icon" aria-hidden="true">✦</span>
              <span>
                <small>Need context?</small>
                <strong>Ask LevyTate</strong>
              </span>
              <i aria-hidden="true">→</i>
            </button>
            <p>Marketing workspace · illustrative</p>
          </div>
        </aside>

        <div className="platform-main">
          <header className="platform-topbar">
            <div className="breadcrumb">
              <span>LevyTate</span>
              <i>/</i>
              <strong>{activeSection.label}</strong>
            </div>

            <div className="topbar-actions">
              <div className="view-switch" aria-label="Choose perspective">
                <button
                  type="button"
                  className={perspective === "employer" ? "active" : ""}
                  onClick={() => switchPerspective("employer")}
                >
                  Employer
                </button>
                <button
                  type="button"
                  className={perspective === "provider" ? "active" : ""}
                  onClick={() => switchPerspective("provider")}
                >
                  Provider
                </button>
              </div>
              <a
                className="walkthrough-link"
                href="mailto:hello@levytate.co.uk?subject=LevyTate%20walkthrough"
              >
                Book walkthrough
              </a>
            </div>
          </header>

          <main className="workspace-canvas">
            <div className="workspace-head">
              <div>
                <p>{activeSection.eyebrow}</p>
                <h1>{activeSection.title}</h1>
              </div>
              <span className="illustrative-tag">Illustrative view</span>
            </div>

            <p className="workspace-intro">{activeSection.intro}</p>

            <ScreenContent section={activeSection.id} perspective={perspective} />
          </main>

          <footer className="workspace-footer">
            <span>Explore the public LevyTate workspace</span>
            <span>Nothing here uses live employer data</span>
          </footer>
        </div>

        {askOpen ? (
          <aside className="ask-panel" aria-label="Ask LevyTate">
            <div className="ask-panel-head">
              <div>
                <small>Website guide</small>
                <strong>Ask LevyTate</strong>
              </div>
              <button type="button" aria-label="Close Ask LevyTate" onClick={() => setAskOpen(false)}>
                ×
              </button>
            </div>

            <div className="ask-answer" aria-live="polite">
              <span>Question</span>
              <h2>{questions[answerIndex].q}</h2>
              <p>{questions[answerIndex].a}</p>
            </div>

            <div className="ask-options">
              {questions.map((item, index) => (
                <button
                  type="button"
                  key={item.q}
                  className={answerIndex === index ? "active" : ""}
                  onClick={() => setAnswerIndex(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.q}
                </button>
              ))}
            </div>

            <a
              className="ask-cta"
              href="mailto:hello@levytate.co.uk?subject=LevyTate%20question"
            >
              Ask us something specific <span aria-hidden="true">→</span>
            </a>
          </aside>
        ) : null}
      </div>

      <div className="below-platform">
        <p>
          LevyTate is the connected operating layer between workforce need,
          apprenticeship investment, providers and impact.
        </p>
        <a href="mailto:hello@levytate.co.uk?subject=LevyTate%20walkthrough">
          See LevyTate with your organisation <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
