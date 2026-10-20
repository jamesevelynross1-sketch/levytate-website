'use client';

import Image from "next/image";
import { useMemo, useState } from "react";

type Perspective = "employer" | "provider";
type HubKey = "find" | "plan" | "open" | "run" | "prove";

type HubView = {
  label: string;
  cue: string;
  headline: string;
  body: string;
  result: string;
  flow: [string, string, string];
};

type HubItem = {
  id: HubKey;
  colour: "mint" | "coral" | "navy";
  employer: HubView;
  provider: HubView;
};

const hubItems: HubItem[] = [
  {
    id: "find",
    colour: "mint",
    employer: {
      label: "Find",
      cue: "See where apprenticeships fit.",
      headline: "Find where apprenticeships fit.",
      body:
        "Turn workforce needs into clear apprenticeship opportunities. See who could benefit, where the fit is and what to do next.",
      result: "Opportunity becomes visible before someone has to ask for it.",
      flow: ["Roles", "Need", "Opportunity"],
    },
    provider: {
      label: "Demand",
      cue: "See the need behind the enquiry.",
      headline: "See the need behind the enquiry.",
      body:
        "Understand the employer context before the programme conversation starts — the role, the workforce need and the outcome they are trying to create.",
      result: "Better-fit employer opportunities.",
      flow: ["Employer need", "Role", "Demand"],
    },
  },
  {
    id: "plan",
    colour: "navy",
    employer: {
      label: "Plan",
      cue: "Use levy with intent.",
      headline: "Plan levy around workforce need.",
      body:
        "See what is committed, what is coming next and where capacity remains. Treat levy as planned workforce investment, not a balance to chase.",
      result: "Funding decisions become deliberate.",
      flow: ["Levy", "Demand", "Plan"],
    },
    provider: {
      label: "Fit",
      cue: "Show where your programmes belong.",
      headline: "Be found for the right reasons.",
      body:
        "Position programmes against real workforce need rather than presenting another catalogue. Make the fit clear before the sales conversation.",
      result: "Stronger programme relevance.",
      flow: ["Priority", "Fit", "Programme"],
    },
  },
  {
    id: "open",
    colour: "coral",
    employer: {
      label: "Open",
      cue: "Make opportunity easy to access.",
      headline: "Make opportunity easy to access.",
      body:
        "Give employees and managers a clear way to understand options, express interest and move forward without having to decode apprenticeships first.",
      result: "More of the right people can engage.",
      flow: ["Explore", "Decide", "Apply"],
    },
    provider: {
      label: "Access",
      cue: "Remove friction before enrolment.",
      headline: "Reduce friction before enrolment.",
      body:
        "Help employers clarify the opportunity, internal decision and funding position before the learner reaches delivery.",
      result: "Cleaner, better-prepared starts.",
      flow: ["Clarity", "Decision", "Start"],
    },
  },
  {
    id: "run",
    colour: "navy",
    employer: {
      label: "Run",
      cue: "Keep the journey connected.",
      headline: "Keep the journey connected.",
      body:
        "Bring approvals, providers and delivery into one joined-up flow. Everyone sees what they need without the employer stitching the process together.",
      result: "Less friction. Clearer ownership.",
      flow: ["Approve", "Deliver", "Track"],
    },
    provider: {
      label: "Deliver",
      cue: "Join a clearer employer journey.",
      headline: "Join a clearer employer journey.",
      body:
        "Work inside a more structured route from employer need to learner delivery, with clearer expectations and fewer disconnected hand-offs.",
      result: "A better transition into delivery.",
      flow: ["Employer", "Learner", "Delivery"],
    },
  },
  {
    id: "prove",
    colour: "mint",
    employer: {
      label: "Prove",
      cue: "Show what the investment changed.",
      headline: "Show what the investment changed.",
      body:
        "Connect apprenticeship activity to progression, capability and business outcomes — not just starts and completions.",
      result: "Value is easier to evidence and defend.",
      flow: ["Activity", "Progress", "Impact"],
    },
    provider: {
      label: "Value",
      cue: "Evidence outcomes employers can use.",
      headline: "Evidence value employers can use.",
      body:
        "Help employers connect learning to the changes they need to show internally — capability, progression and business impact.",
      result: "A stronger story about value.",
      flow: ["Learning", "Change", "Value"],
    },
  },
];

export default function InteractiveHub() {
  const [perspective, setPerspective] = useState<Perspective>("employer");
  const [selectedId, setSelectedId] = useState<HubKey>("find");
  const [previewId, setPreviewId] = useState<HubKey>("find");

  const activeItem = useMemo(
    () => hubItems.find((item) => item.id === previewId) ?? hubItems[0],
    [previewId]
  );

  const activeView = activeItem[perspective];

  const contactHref =
    perspective === "employer"
      ? "mailto:hello@levytate.co.uk?subject=LevyTate%20walkthrough&body=Hi%20LevyTate%2C%0A%0AI%27d%20like%20to%20book%20a%20walkthrough.%0A%0AName%3A%0AOrganisation%3A"
      : "mailto:hello@levytate.co.uk?subject=LevyTate%20provider%20conversation&body=Hi%20LevyTate%2C%0A%0AI%27d%20like%20to%20understand%20the%20provider%20opportunity.%0A%0AName%3A%0AOrganisation%3A";

  return (
    <section className="system-section" id="hub" aria-labelledby="hub-title">
      <div className="system-head">
        <div className="section-number inverse">02</div>
        <div>
          <p className="eyebrow inverse">The LevyTate hub</p>
          <h2 id="hub-title">Five jobs. One system.</h2>
        </div>

        <div className="perspective-tabs" aria-label="Choose your perspective">
          <button
            type="button"
            className={perspective === "employer" ? "active" : ""}
            aria-pressed={perspective === "employer"}
            onClick={() => setPerspective("employer")}
          >
            Employer
          </button>
          <button
            type="button"
            className={perspective === "provider" ? "active" : ""}
            aria-pressed={perspective === "provider"}
            onClick={() => setPerspective("provider")}
          >
            Provider
          </button>
        </div>
      </div>

      <div className="system-grid">
        <nav className="system-index" aria-label="Explore LevyTate">
          {hubItems.map((item, index) => {
            const view = item[perspective];
            const active = previewId === item.id;

            return (
              <button
                type="button"
                key={item.id}
                className={active ? "active" : ""}
                aria-pressed={selectedId === item.id}
                onMouseEnter={() => setPreviewId(item.id)}
                onMouseLeave={() => setPreviewId(selectedId)}
                onFocus={() => setPreviewId(item.id)}
                onBlur={() => setPreviewId(selectedId)}
                onClick={() => {
                  setSelectedId(item.id);
                  setPreviewId(item.id);
                }}
              >
                <span className="system-index-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="system-index-copy">
                  <strong>{view.label}</strong>
                  <small>{view.cue}</small>
                </span>
                <span className="system-index-arrow" aria-hidden="true">↗</span>
              </button>
            );
          })}
        </nav>

        <div className={`system-core colour-${activeItem.colour}`} aria-hidden="true">
          <span className="core-axis core-axis-x" />
          <span className="core-axis core-axis-y" />
          <span className="core-ring core-ring-a" />
          <span className="core-ring core-ring-b" />
          <span className="core-tag core-tag-top">
            {perspective === "employer" ? "EMPLOYER" : "PROVIDER"} / {activeView.label.toUpperCase()}
          </span>
          <Image
            src="/levytate-icon-final.svg"
            width={313}
            height={320}
            alt=""
            priority
          />
          <span className="core-tag core-tag-bottom">LEVYTATE / 02</span>
        </div>

        <aside className="system-readout" aria-live="polite">
          <div className="readout-meta">
            <span>{activeView.label}</span>
            <span>{perspective === "employer" ? "Employer view" : "Provider view"}</span>
          </div>

          <h3>{activeView.headline}</h3>
          <p>{activeView.body}</p>

          <div className="readout-flow" aria-label="Simple flow">
            {activeView.flow.map((step, index) => (
              <span key={step}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                <strong>{step}</strong>
              </span>
            ))}
          </div>

          <div className="readout-result">
            <span>Result</span>
            <strong>{activeView.result}</strong>
          </div>

          <a className="system-link" href={contactHref}>
            {perspective === "employer" ? "Book a walkthrough" : "Talk to LevyTate"}
            <span aria-hidden="true">→</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
