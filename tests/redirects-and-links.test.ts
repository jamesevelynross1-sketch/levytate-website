import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { publicTrustLinks } from "@/lib/levytate/public-trust-content";
import { levytateManifest } from "@/lib/levytate/pwa-manifest";
import { earlyAccessEndpoint, platformLoginUrl, platformOrigin } from "@/lib/platform";
import { marketingRedirects, resolveMarketingRedirect, resolveMarketingRedirectUrl } from "@/lib/site-redirects";

const root = fileRoot();
const internalPlatformHref = /href\s*=\s*(?:\{)?["'`]\/(?:levytate\/)?(?:login|app)\b[^"'`]*/;

describe("platform URL", () => {
  it("defaults login and early access to the public app origin", () => {
    expect(platformOrigin("")).toBe("https://app.levytate.co.uk");
    expect(platformOrigin(undefined)).toBe("https://app.levytate.co.uk");
    expect(platformLoginUrl()).toBe("https://app.levytate.co.uk/login");
    expect(earlyAccessEndpoint()).toBe("https://app.levytate.co.uk/api/levytate-early-access");
  });

  it("accepts a configured origin and ignores a trailing slash or path", () => {
    expect(platformOrigin("https://preview.levytate.co.uk/")).toBe("https://preview.levytate.co.uk");
    expect(platformLoginUrl("https://preview.levytate.co.uk/ignored")).toBe("https://preview.levytate.co.uk/login");
    expect(earlyAccessEndpoint("https://preview.levytate.co.uk")).toBe(
      "https://preview.levytate.co.uk/api/levytate-early-access",
    );
  });

  it("falls back when the configured value is not an http(s) URL", () => {
    expect(platformOrigin("javascript:alert(1)")).toBe("https://app.levytate.co.uk");
    expect(platformOrigin("not a url")).toBe("https://app.levytate.co.uk");
  });
});

describe("marketing redirects", () => {
  it("sends login and app paths to the platform and keeps the remainder of the path", () => {
    expect(resolveMarketingRedirect("/login")).toBe("https://app.levytate.co.uk/login");
    expect(resolveMarketingRedirect("/app")).toBe("https://app.levytate.co.uk/app");
    expect(resolveMarketingRedirect("/app/learners/123")).toBe("https://app.levytate.co.uk/app/learners/123");
    expect(resolveMarketingRedirect("/levytate/login")).toBe("https://app.levytate.co.uk/login");
    expect(resolveMarketingRedirect("/levytate/app/settings")).toBe("https://app.levytate.co.uk/app/settings");
  });

  it("uses the configured platform origin for app redirects", () => {
    expect(resolveMarketingRedirect("/login", "https://staging.example")).toBe("https://staging.example/login");
    expect(resolveMarketingRedirect("/app/home", "https://staging.example/")).toBe("https://staging.example/app/home");
  });

  it("preserves query strings on the way to the platform", () => {
    expect(resolveMarketingRedirectUrl("/login?next=/app/home")).toBe(
      "https://app.levytate.co.uk/login?next=/app/home",
    );
    expect(resolveMarketingRedirectUrl("/app/learners?tab=reviews")).toBe(
      "https://app.levytate.co.uk/app/learners?tab=reviews",
    );
  });

  it("sends legacy /levytate marketing paths to the clean root paths", () => {
    expect(resolveMarketingRedirect("/levytate")).toBe("/");
    expect(resolveMarketingRedirect("/levytate/early-access")).toBe("/early-access");
    expect(resolveMarketingRedirect("/levytate/privacy")).toBe("/privacy");
    expect(resolveMarketingRedirect("/levytate/early-access-terms")).toBe("/early-access-terms");
    expect(resolveMarketingRedirect("/levytate/data-processing")).toBe("/data-processing");
    expect(resolveMarketingRedirect("/levytate/support")).toBe("/support");
    expect(resolveMarketingRedirect("/levytate/account-help")).toBe("/account-help");
    expect(resolveMarketingRedirect("/levytate/data-rights")).toBe("/data-rights");
    expect(resolveMarketingRedirect("/levytate/manifest.webmanifest")).toBe("/manifest.webmanifest");
    expect(resolveMarketingRedirect("/privacy")).toBeNull();
    expect(resolveMarketingRedirect("/early-access")).toBeNull();
  });

  it("is the redirect table used by Next.js config", () => {
    const config = readFileSync(path.join(root, "next.config.ts"), "utf8");
    expect(config).toContain("marketingRedirects()");
    expect(marketingRedirects().some((rule) => rule.source === "/login" && rule.destination.endsWith("/login"))).toBe(true);
    expect(marketingRedirects().some((rule) => rule.source === "/app/:path*")).toBe(true);
  });
});

describe("public links", () => {
  it("does not link the marketing site back to local login or app routes", () => {
    const offenders = sourceFiles(["app", "components"]).flatMap((file) => {
      const contents = readFileSync(file, "utf8");
      const matches = contents.match(new RegExp(internalPlatformHref, "g")) ?? [];
      return matches.map((match) => `${path.relative(root, file)}: ${match}`);
    });

    expect(offenders).toEqual([]);
  });

  it("points login and sign-in controls at the platform helper", () => {
    const header = readFileSync(path.join(root, "components/levytate-public/PublicHeader.tsx"), "utf8");
    const earlyAccess = readFileSync(path.join(root, "components/levytate-public/EarlyAccessRequestPage.tsx"), "utf8");
    const trust = readFileSync(path.join(root, "components/levytate-public/PublicTrustPage.tsx"), "utf8");
    const employers = readFileSync(path.join(root, "app/solutions/employers/page.tsx"), "utf8");
    const employees = readFileSync(path.join(root, "app/solutions/employees/page.tsx"), "utf8");

    expect(header).toContain("PlatformLoginLink");
    expect(header.match(/PlatformLoginLink/g)?.length).toBeGreaterThanOrEqual(3);
    expect(earlyAccess).toContain("PlatformLoginLink");
    expect(earlyAccess).toContain("earlyAccessEndpoint()");
    expect(earlyAccess).toContain('credentials: "omit"');
    expect(earlyAccess).not.toContain('fetch("/api/');
    expect(trust).toContain("Return to sign in");
    expect(trust).toContain("PlatformLoginLink");
    expect(employers).toContain("platformLoginUrl()");
    expect(employees).toContain("platformLoginUrl()");
  });

  it("keeps trust links and the install manifest on this website", () => {
    expect(publicTrustLinks.map((link) => link.href)).toEqual([
      "/privacy",
      "/early-access-terms",
      "/data-processing",
      "/support",
      "/account-help",
      "/data-rights",
    ]);
    expect(levytateManifest.start_url).toBe("/");
    expect(levytateManifest.scope).toBe("/");
    expect(levytateManifest.id).toBe("/");

    const serviceWorker = readFileSync(path.join(root, "public/levytate-sw.js"), "utf8");
    expect(serviceWorker).not.toContain('startsWith("/levytate/")');
    expect(serviceWorker).toContain("url.origin !== self.location.origin");
  });
});

function fileRoot() {
  return path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
}

function sourceFiles(directories: string[]) {
  return directories.flatMap((directory) => walk(path.join(root, directory)));
}

function walk(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const fullPath = path.join(directory, entry);
    if (statSync(fullPath).isDirectory()) return walk(fullPath);
    return /\.(tsx|ts|jsx|js)$/.test(fullPath) ? [fullPath] : [];
  });
}
