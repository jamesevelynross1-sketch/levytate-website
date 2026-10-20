import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LevyTate | The apprenticeship operating system for employers",
  description:
    "LevyTate helps employers understand apprenticeship opportunity, plan investment, coordinate delivery and show the impact — in one connected environment.",
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
      <body>{children}</body>
    </html>
  );
}
