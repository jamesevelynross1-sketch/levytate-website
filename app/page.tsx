const earlyAccessSubject = "LevyTate Early Access";

const earlyAccessBody = `Hi LevyTate,

I'd love to learn more about early access.

Name:
Company:`;

const mailtoLink = `mailto:hello@levytate.co.uk?subject=${encodeURIComponent(
  earlyAccessSubject
)}&body=${encodeURIComponent(earlyAccessBody)}`;

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="brand" aria-label="LevyTate">
          <span>Levy</span>
          <span>Tate</span>
        </div>

        <h1 className="headline">
          <span className="line mint">The next</span>
          <span className="line coral">big thing</span>
          <span className="line white small">in</span>
          <span className="line mint wide">apprenticeships</span>
          <span className="line coral">is levitating.</span>
        </h1>

        <div className="footer-copy">
          <p className="launching">launching soon.</p>

          <a className="early-button" href={mailtoLink}>
            Request early access
          </a>
        </div>
      </section>
    </main>
  );
}