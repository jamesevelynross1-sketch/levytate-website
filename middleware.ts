import { NextRequest, NextResponse } from "next/server";

const publicStoryPages: Record<string, string> = {
  "/": "/mission-v3/index.html",
  "/apprenticeships": "/mission-v3/apprenticeships.html",
  "/funding": "/mission-v3/funding.html",
  "/manage-apprenticeships": "/mission-v3/manage-apprenticeships.html",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/favicon.ico" || pathname === "/levytate-tab-icon-20261027.png") {
    const destination = request.nextUrl.clone();
    destination.pathname = pathname === "/favicon.ico"
      ? "/brand/levytate-favicon.ico"
      : "/brand/levytate-favicon-32.png";
    return NextResponse.rewrite(destination);
  }

  const publicPage = publicStoryPages[pathname];
  if (publicPage) {
    const destination = request.nextUrl.clone();
    destination.pathname = publicPage;
    return NextResponse.rewrite(destination);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|robots.txt|sitemap.xml|brand|fonts|api).*)"],
};
