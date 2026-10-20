import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "LevyTate | The apprenticeship operating system",
  description:
    "LevyTate gives employers one place to find apprenticeship opportunity, plan investment, run the journey and prove value.",
  icons: {
    icon: "/levytate-icon-final.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
