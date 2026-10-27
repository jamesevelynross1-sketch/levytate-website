import { platformOrigin } from "./platform";

export type MarketingRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

const legacyMarketingPaths = [
  "/early-access",
  "/privacy",
  "/early-access-terms",
  "/data-processing",
  "/support",
  "/account-help",
  "/data-rights",
] as const;

export function marketingRedirects(configuredPlatformUrl?: string): MarketingRedirect[] {
  const platform = platformOrigin(configuredPlatformUrl);

  return [
    { source: "/login", destination: `${platform}/login`, permanent: false },
    { source: "/app", destination: `${platform}/app`, permanent: false },
    { source: "/app/:path*", destination: `${platform}/app/:path*`, permanent: false },
    { source: "/levytate/login", destination: `${platform}/login`, permanent: false },
    { source: "/levytate/app", destination: `${platform}/app`, permanent: false },
    { source: "/levytate/app/:path*", destination: `${platform}/app/:path*`, permanent: false },
    { source: "/levytate", destination: "/", permanent: true },
    { source: "/levytate/manifest.webmanifest", destination: "/manifest.webmanifest", permanent: true },
    ...legacyMarketingPaths.map((path) => ({
      source: `/levytate${path}`,
      destination: path,
      permanent: true,
    })),
  ];
}

export function resolveMarketingRedirect(pathname: string, configuredPlatformUrl?: string) {
  for (const rule of marketingRedirects(configuredPlatformUrl)) {
    if (!rule.source.includes(":path*")) {
      if (rule.source === pathname) return rule.destination;
      continue;
    }

    const prefix = rule.source.slice(0, -":path*".length);
    if (!pathname.startsWith(prefix) || pathname.length <= prefix.length) continue;
    return rule.destination.replace(":path*", pathname.slice(prefix.length));
  }

  return null;
}

export function resolveMarketingRedirectUrl(input: string, configuredPlatformUrl?: string) {
  const current = new URL(input, "https://www.levytate.co.uk");
  const destination = resolveMarketingRedirect(current.pathname, configuredPlatformUrl);
  if (!destination) return null;

  const resolved = new URL(destination, "https://www.levytate.co.uk");
  resolved.search = current.search;
  return resolved.toString();
}
