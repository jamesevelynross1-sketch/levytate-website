import Image from "next/image";
import InteractiveHub from "./interactive-hub";

const employerHref =
  "mailto:hello@levytate.co.uk?subject=LevyTate%20walkthrough&body=Hi%20LevyTate%2C%0A%0AI%27d%20like%20to%20book%20a%20walkthrough.%0A%0AName%3A%0AOrganisation%3A";

const providerHref =
  "mailto:hello@levytate.co.uk?subject=LevyTate%20provider%20conversation&body=Hi%20LevyTate%2C%0A%0AI%27d%20like%20to%20understand%20the%20provider%20opportunity.%0A%0AName%3A%0AOrganisation%3A";

const shifts = [
  ["Scattered information", "One source of truth"],
  ["Course-led choices", "Workforce-led decisions"],
  ["Reactive levy spend", "Planned investment"],
  ["Manual hand-offs", "Connected delivery"],
  ["Starts and completions", "Business value"],
];

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="LevyTate home">
          <Image
            className="header-icon"
            src="/levytate-icon-final.svg"
            width={313}
            height={320}
            alt=""
            priority
          />
          <Image
            className="header-wordmark"
            src="/levytate-wordmark-approved.svg"
            width={640}
            height={168}
            alt="LevyTate"
            priority
          />
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#hub">The hub</a>
          <a href="#why">Why LevyTate</a>
          <a className="nav-contact" href={employerHref}>
            Book a walkthrough
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span>LEVYTATE / PUBLIC</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">The apprenticeship operating system</p>
          <h1>
            Make apprenticeships
            <span>easier to use.</span>
          </h1>
          <p className="hero-lead">
            One place to find opportunity, plan investment, run the journey and
            prove value.
          </p>

          <div className="hero-actions">
            <a className="action-primary" href="#hub">
              Enter the hub
              <span aria-hidden="true">↘</span>
            </a>
            <a className="action-text" href={employerHref}>
              Book a walkthrough
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="hero-mark" aria-label="LevyTate connected symbol">
          <div className="hero-mark-rule rule-x" aria-hidden="true" />
          <div className="hero-mark-rule rule-y" aria-hidden="true" />
          <span className="hero-coordinate coordinate-top">PEOPLE / SKILLS</span>
          <span className="hero-coordinate coordinate-bottom">
            BRIGHTER / FUTURES
          </span>
          <Image
            src="/levytate-icon-final.svg"
            width={313}
            height={320}
            alt="LevyTate connected icon"
            priority
          />
        </div>

        <div className="hero-foot">
          <span>For employers</span>
          <span>Built to work with providers</span>
          <span>One connected environment</span>
        </div>
      </section>

      <InteractiveHub />

      <section className="shift-section" id="why" aria-labelledby="shift-title">
        <div className="section-number">03</div>
        <div className="shift-heading">
          <p className="eyebrow">The shift</p>
          <h2 id="shift-title">
            From apprenticeship activity
            <span>to apprenticeship strategy.</span>
          </h2>
        </div>

        <div className="shift-table">
          {shifts.map(([from, to], index) => (
            <div className="shift-row" key={from}>
              <span className="shift-id">{String(index + 1).padStart(2, "0")}</span>
              <span className="shift-from">{from}</span>
              <span className="shift-arrow" aria-hidden="true">→</span>
              <strong>{to}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <div className="closing-mark" aria-hidden="true">
          <Image
            src="/levytate-icon-final.svg"
            width={313}
            height={320}
            alt=""
          />
        </div>
        <div className="closing-copy">
          <p className="eyebrow">See it in your context</p>
          <h2 id="closing-title">See LevyTate around your organisation.</h2>
          <p>
            A focused walkthrough using your workforce, priorities and current
            apprenticeship setup.
          </p>
          <a className="action-primary light" href={employerHref}>
            Book a walkthrough
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <a className="provider-link" href={providerHref}>
          Training provider? See where you fit
          <span aria-hidden="true">→</span>
        </a>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image
            src="/levytate-icon-final.svg"
            width={313}
            height={320}
            alt=""
          />
          <Image
            src="/levytate-wordmark-approved.svg"
            width={640}
            height={168}
            alt="LevyTate"
          />
        </div>
        <p>People. Skills. Brighter futures.</p>
        <a href="mailto:hello@levytate.co.uk">hello@levytate.co.uk</a>
      </footer>
    </main>
  );
}
