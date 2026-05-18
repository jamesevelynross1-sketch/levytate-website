import type { Metadata } from "next";
import { Cherry_Bomb_One } from "next/font/google";
import "./globals.css";

const cherry = Cherry_Bomb_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bubble",
});

export const metadata: Metadata = {
  title: "LevyTate",
  description: "Launching soon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cherry.variable}>{children}</body>
    </html>
  );
}