export function LevyTateLogo({ className = "" }: { className?: string }) {
  return (
    <>
      <style>{`
        @font-face {
          font-family: "Cherry Bomb One";
          src: url("/fonts/cherry-bomb-one-latin.woff2") format("woff2");
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }

        .levytate-wordmark {
          display: inline-flex;
          align-items: center;
          gap: 0.06em;
          width: max-content;
          max-width: 100%;
          font-family: "Cherry Bomb One", Arial, Helvetica, sans-serif;
          font-size: var(--levytate-logo-size, clamp(2.25rem, 4vw, 3.1rem));
          line-height: 0.78;
          letter-spacing: -0.05em;
          text-shadow: 2px 2px 0 #17325c;
          white-space: nowrap;
          transform: translateZ(0);
        }

        .levytate-wordmark span:first-child {
          color: #c7f0e4;
        }

        .levytate-wordmark span:last-child {
          color: #ff8e95;
        }
      `}</style>
      <div className={`levytate-wordmark ${className}`} aria-label="LevyTate" role="img">
        <span>Levy</span>
        <span>Tate</span>
      </div>
    </>
  );
}
