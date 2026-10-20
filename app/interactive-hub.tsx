'use client';

import Image from "next/image";
import { useMemo, useState } from "react";

type Perspective = "employer" | "provider";
type HubKey = "workforce" | "opportunity" | "investment" | "delivery" | "impact";

type HubView = {
  title: string;
  hover: string;
  headline: string;
  body: string;
  outcome: string;
  signal: [string, string, string];
};

type HubItem = {
  id: HubKey;
  label: string;
  tone: "mint" | "coral" | "navy";
  employer: HubView;
  provider: HubView;
};

const hubItems: HubItem[] = [
  {
    id: "workforce",
    label: "Workforce",
    tone: "mint",
    employer: {
      title: "Workforce",
      hover: "See where apprenticeship opportunity exists across your organisation.",
      headline: "Find the opportunity already inside your workforce.",
      body:
        "Move beyond isolated requests. LevyTate helps employers think at workforce level — connecting roles, skills needs and development potential so apprenticeship planning starts with the organisation, not with a course list.",
      outcome: "A clearer view of who could develop, where and why.",
      signal: ["Roles", "Skills", "Potential"],
    },
    provider: {
      title: "Employer demand",
      hover: "Understand employer need in context, not as isolated course enquiries.",
      headline: "See the workforce need behind the programme.",
      body:
        "LevyTate gives providers a better context for employer demand. The conversation starts with roles, workforce priorities and development needs — creating a more useful route into the right programmes and the right delivery relationship.",
      outcome: "Better-aligned conversations with employers around genuine demand.",
      signal: ["Need", "Context", "Demand"],
    },
  },
  {
    id: "opportunity",
    label: "Opportunity",
    tone: "coral",
    employer: {
      title: "Opportunity",
      hover: "Turn roles and business needs into relevant development routes.",
      headline: "Make apprenticeship opportunity easier to understand.",
      body:
        "Employees and managers should not need to understand the apprenticeship system before they can use it. LevyTate translates workforce needs into clearer development opportunities and gives people a route to explore what could fit.",
      outcome: "More relevant opportunities, presented in language people can use.",
      signal: ["Need", "Pathway", "Action"],
    },
    provider: {
      title: "Programme relevance",
      hover: "Position programmes against the workforce problems they can solve.",
      headline: "Put your programmes in the context employers care about.",
      body:
        "Instead of leading with a catalogue, providers can show where their programmes fit an employer's workforce priorities. LevyTate helps make the connection between organisational need, employee development and delivery.",
      outcome: "A stronger reason for employers to engage with the right programme.",
      signal: ["Priority", "Fit", "Programme"],
    },
  },
  {
    id: "investment",
    label: "Investment",
    tone: "navy",
    employer: {
      title: "Investment",
      hover: "Treat levy and funding as planned workforce investment.",
      headline: "Move from levy spend to workforce investment.",
      body:
        "LevyTate gives employers a clearer way to think about apprenticeship funding: what is already committed, what is likely to come next and where unused opportunity may remain. The aim is not simply to spend levy, but to connect investment to workforce priorities.",
      outcome: "More confident planning and a clearer financial picture.",
      signal: ["Available", "Planned", "Committed"],
    },
    provider: {
      title: "Funding confidence",
      hover: "Help employers understand how delivery fits their funding position.",
      headline: "Make the funding conversation easier to navigate.",
      body:
        "Providers often enter the conversation after an employer has already struggled with funding questions. LevyTate creates a clearer planning environment so programme decisions can sit alongside affordability, timing and workforce need.",
      outcome: "Fewer disconnected funding conversations and better-informed demand.",
      signal: ["Plan", "Afford", "Commit"],
    },
  },
  {
    id: "delivery",
    label: "Delivery",
    tone: "coral",
    employer: {
      title: "Delivery",
      hover: "Bring employees, managers, L&D and providers into one journey.",
      headline: "Give the apprenticeship journey somewhere to live.",
      body:
        "From initial interest through internal decisions and provider delivery, LevyTate creates a connected environment around the apprenticeship journey. Everyone sees the part that matters to them without the employer having to stitch the process together manually.",
      outcome: "A more structured journey with less fragmentation.",
      signal: ["Employee", "Manager", "Provider"],
    },
    provider: {
      title: "Connected delivery",
      hover: "Sit inside a clearer employer journey from need to delivery.",
      headline: "Join the employer journey at the right point.",
      body:
        "LevyTate gives providers a clearer place in the employer's operating model. The delivery relationship becomes part of a connected process rather than a separate hand-off, supporting better expectations and a stronger learner experience.",
      outcome: "A cleaner transition from employer need into delivery.",
      signal: ["Employer", "Learner", "Delivery"],
    },
  },
  {
    id: "impact",
    label: "Impact",
    tone: "mint",
    employer: {
      title: "Impact",
      hover: "Connect apprenticeship activity back to organisational outcomes.",
      headline: "Show what apprenticeship investment is producing.",
      body:
        "Starts alone do not tell the story. LevyTate is designed to help employers connect apprenticeship activity to progression, capability and business outcomes so the value of the strategy is easier to understand and communicate.",
      outcome: "A stronger evidence base for future apprenticeship investment.",
      signal: ["Activity", "Progress", "Outcomes"],
    },
    provider: {
      title: "Employer impact",
      hover: "Evidence the outcomes employers need to take back to the business.",
      headline: "Make delivery easier to connect to employer outcomes.",
      body:
        "Provider performance matters, but employers increasingly need to explain what development changed. LevyTate creates a place for delivery and organisational impact to sit closer together.",
      outcome: "A better story about value, not simply participation.",
      signal: ["Learning", "Change", "Value"],
    },
  },
];

export default function InteractiveHub() {
  const [perspective, setPerspective] = useState<Perspective>("employer");
  const [selectedId, setSelectedId] = useState<HubKey>("workforce");
  const [previewId, setPreviewId] = useState<HubKey>("workforce");

  const selectedItem = useMemo(
    () => hubItems.find((item) => item.id === previewId) ?? hubItems[0],
    [previewId]
  );

  const selectedView = selectedItem[perspective];

  const contactHref =
    perspective === "employer"
      ? "mailto:hello@levytate.co.uk?subject=LevyTate%20for%20our%20organisation&body=Hi%20LevyTate%2C%0A%0AI%27d%20like%20to%20see%20how%20LevyTate%20could%20work%20for%20our%20organisation.%0A%0AName%3A%0AOrganisation%3A"
      : "mailto:hello@levytate.co.uk?subject=Joining%20LevyTate%20as%20a%20provider&body=Hi%20LevyTate%2C%0A%0AI%27d%20like%20to%20talk%20about%20joining%20LevyTate%20as%20a%20training%20provider.%0A%0AName%3A%0AOrganisation%3A";

  return (
    <section className="hub-section" id="explore" aria-labelledby="hub-heading">
      <div className="section-intro">
        <p className="eyebrow">Explore LevyTate</p>
        <h2 id="hub-heading">One connected apprenticeship environment.</h2>
        <p>
          Explore the areas that matter to you. Hover for the idea, click for the
          detail. This is not the full platform — it is the LevyTate way of
          thinking.
        </p>
      </div>

      <div className="perspective-switch" aria-label="Choose your perspective">
        <button
          type="button"
          className={perspective === "employer" ? "active" : ""}
          aria-pressed={perspective === "employer"}
          onClick={() => setPerspective("employer")}
        >
          For employers
        </button>
        <button
          type="button"
          className={perspective === "provider" ? "active" : ""}
          aria-pressed={perspective === "provider"}
          onClick={() => setPerspective("provider")}
        >
          For training providers
        </button>
      </div>

      <div className="hub-layout">
        <div className="hub-map" aria-label="Interactive LevyTate hub">
          <div className="hub-orbit hub-orbit-one" aria-hidden="true" />
          <div className="hub-orbit hub-orbit-two" aria-hidden="true" />

          <div className="hub-centre">
            <div className="hub-centre-mark">
              <Image
                src="/levytate-icon-final.svg"
                width={313}
                height={320}
                alt=""
                priority
              />
            </div>
            <span>LevyTate</span>
            <small>connected hub</small>
          </div>

          {hubItems.map((item) => {
            const view = item[perspective];
            const isActive = previewId === item.id;

            return (
              <button
                type="button"
                key={item.id}
                className={`hub-node node-${item.id} tone-${item.tone} ${isActive ? "active" : ""}`}
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
                <span className="node-dot" aria-hidden="true" />
                <strong>{item.label}</strong>
                <span>{view.hover}</span>
              </button>
            );
          })}
        </div>

        <aside className={`hub-detail tone-${selectedItem.tone}`} aria-live="polite">
          <div className="detail-topline">
            <span className="detail-kicker">{selectedView.title}</span>
            <span className="detail-perspective">
              {perspective === "employer" ? "Employer view" : "Provider view"}
            </span>
          </div>

          <h3>{selectedView.headline}</h3>
          <p>{selectedView.body}</p>

          <div className="signal-card" aria-label="Example LevyTate flow">
            {selectedView.signal.map((label, index) => (
              <div className="signal-step" key={label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>

          <div className="detail-outcome">
            <span>What changes</span>
            <strong>{selectedView.outcome}</strong>
          </div>

          <a className="text-link" href={contactHref}>
            {perspective === "employer"
              ? "See LevyTate with your organisation"
              : "Talk to us about joining LevyTate"}
            <span aria-hidden="true">→</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
