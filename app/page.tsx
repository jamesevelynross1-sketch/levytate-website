import Image from "next/image";
import InteractiveHub from "./interactive-hub";

const employerHref =
  "mailto:hello@levytate.co.uk?subject=LevyTate%20for%20our%20organisation&body=Hi%20LevyTate%2C%0A%0AI%27d%20like%20to%20see%20how%20LevyTate%20could%20work%20for%20our%20organisation.%0A%0AName%3A%0AOrganisation%3A";

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <div className="ambient ambient-mint" aria-hidden="true" />
      <div className="ambient ambient-coral" aria-hidden="true" />

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
          <a href="#explore">Explore</a>
          <a href="#why">Why LevyTate</a>
          <a href="#journey">The journey</a>
          <a className="nav-cta" href={employerHref}>
            Talk to us
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">The apprenticeship operating system for employers.</p>
          <h1>
            Turn workforce needs into <span>opportunity.</span>
          </h1>
          <p className="hero-lead">
            One connected place to understand apprenticeship opportunity, plan
            investment, coordinate delivery and show the impact.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#explore">
              Explore LevyTate
              <span aria-hidden="true">↓</span>
            </a>
            <a className="secondary-button" href={employerHref}>
              See it with your organisation
            </a>
          </div>

          <div className="hero-principles" aria-label="LevyTate principles">
            <span>People</span>
            <i aria-hidden="true" />
            <span>Opportunity</span>
            <i aria-hidden="true" />
            <span>Investment</span>
            <i aria-hidden="true" />
            <span>Impact</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="LevyTate connected ecosystem">
          <div className="hero-orbit orbit-a" aria-hidden="true" />
          <div className="hero-orbit orbit-b" aria-hidden="true" />
          <div className="hero-icon-wrap">
            <Image
              src="/levytate-icon-final.svg"
              width={313}
              height={320}
              alt="LevyTate connected icon"
              priority
            />
          </div>
          <div className="floating-chip chip-one">
            <span>01</span>
            Find the opportunity
          </div>
          <div className="floating-chip chip-two">
            <span>02</span>
            Plan the investment
          </div>
          <div className="floating-chip chip-three">
            <span>03</span>
            Prove the impact
          </div>
        </div>
      </section>

      <InteractiveHub />

      <section className="change-section" id="why" aria-labelledby="change-heading">
        <div className="section-intro compact">
          <p className="eyebrow">Why LevyTate exists</p>
          <h2 id="change-heading">Make the apprenticeship strategy easier to run.</h2>
          <p>
            LevyTate is not a training provider and it is not another course
            catalogue. It is the connected layer that helps an organisation make
            sense of the apprenticeship opportunity around its people.
          </p>
        </div>

        <div className="change-grid">
          <article>
            <span className="before">Fragmented</span>
            <span className="change-arrow" aria-hidden="true">→</span>
            <strong>Connected</strong>
            <p>Bring workforce needs, decisions, providers and activity into one environment.</p>
          </article>
          <article>
            <span className="before">Reactive</span>
            <span className="change-arrow" aria-hidden="true">→</span>
            <strong>Planned</strong>
            <p>Move from individual requests to a more deliberate workforce investment strategy.</p>
          </article>
          <article>
            <span className="before">Invisible</span>
            <span className="change-arrow" aria-hidden="true">→</span>
            <strong>Visible</strong>
            <p>Make relevant opportunities easier for employees, managers and L&D teams to understand.</p>
          </article>
          <article>
            <span className="before">Activity</span>
            <span className="change-arrow" aria-hidden="true">→</span>
            <strong>Impact</strong>
            <p>Connect apprenticeship participation back to capability, progression and business outcomes.</p>
          </article>
        </div>
      </section>

      <section className="journey-section" id="journey" aria-labelledby="journey-heading">
        <div className="journey-copy">
          <p className="eyebrow">One connected journey</p>
          <h2 id="journey-heading">From opportunity to outcome.</h2>
          <p>
            The public website does not need to reproduce the full platform.
            LevyTate simply makes the whole journey feel joined up.
          </p>
        </div>

        <ol className="journey-strip">
          {["Discover", "Plan", "Apply", "Deliver", "Measure"].map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
      </section>

      <section className="final-cta">
        <div className="final-icon" aria-hidden="true">
          <Image
            src="/levytate-icon-final.svg"
            width={313}
            height={320}
            alt=""
          />
        </div>
        <p className="eyebrow">Ready when you are</p>
        <h2>
          Your apprenticeship strategy already exists.
          <span> LevyTate gives it somewhere to live.</span>
        </h2>
        <p>
          See what LevyTate could look like around your workforce, your
          providers and your apprenticeship priorities.
        </p>
        <a className="primary-button" href={employerHref}>
          See LevyTate with your organisation
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
