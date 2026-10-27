import type { Metadata, Viewport } from "next";
import { LevyTatePwaBootstrap } from "@/components/levytate-pwa/LevyTatePwa";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.levytate.co.uk"),
  applicationName: "LevyTate",
  title: {
    default: "LevyTate",
    template: "%s | LevyTate",
  },
  description:
    "LevyTate helps employers manage apprenticeships, workforce development and provider matching in one place.",
  manifest: "/manifest.webmanifest",
  icons: {
    shortcut: "/favicon.ico?v=20261027",
    icon: [{ url: "/levytate-tab-icon-20261027.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-touch-icon.png?v=20261027", type: "image/png", sizes: "180x180" }],
  },
  appleWebApp: {
    capable: true,
    title: "LevyTate",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#17325C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="font-sans antialiased">
        <LevyTatePwaBootstrap />
        {children}
      </body>
    </html>
  );
}
