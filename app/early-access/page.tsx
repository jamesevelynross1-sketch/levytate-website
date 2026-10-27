import type { Metadata } from "next";
import { EarlyAccessRequestPage } from "@/components/levytate-public/EarlyAccessRequestPage";

export const metadata: Metadata = {
  title: "Request Early Access",
  description:
    "Request early access to the LevyTate beta and help shape a clearer apprenticeship operating system for employers.",
};

export default function LevyTateEarlyAccessPage() {
  return <EarlyAccessRequestPage />;
}
