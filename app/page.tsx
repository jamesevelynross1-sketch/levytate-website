import MarketingPlatform from "./marketing-platform";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-intro">
        <div>
          <span>LEVYTATE / PUBLIC WORKSPACE</span>
          <strong>The apprenticeship operating system.</strong>
        </div>
        <p>
          Explore LevyTate as a buyer would use it: one connected workspace,
          built around the questions that matter.
        </p>
      </header>

      <MarketingPlatform />
    </main>
  );
}
