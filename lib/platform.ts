const DEFAULT_PLATFORM_ORIGIN = "https://app.levytate.co.uk";

export function platformOrigin(value = process.env.NEXT_PUBLIC_PLATFORM_URL) {
  const trimmed = value?.trim() ?? "";
  if (!trimmed) return DEFAULT_PLATFORM_ORIGIN;

  try {
    const url = new URL(trimmed);
    if (url.protocol !== "https:" && url.protocol !== "http:") return DEFAULT_PLATFORM_ORIGIN;
    return url.origin;
  } catch {
    return DEFAULT_PLATFORM_ORIGIN;
  }
}

export function platformLoginUrl(value?: string) {
  return `${platformOrigin(value)}/login`;
}

export function platformPathUrl(pathname: string, value?: string) {
  const normalised = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${platformOrigin(value)}${normalised}`;
}

export function earlyAccessEndpoint(value?: string) {
  return `${platformOrigin(value)}/api/levytate-early-access`;
}
