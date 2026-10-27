import type { MetadataRoute } from "next";
import { levytateManifest } from "@/lib/levytate/pwa-manifest";

export default function manifest(): MetadataRoute.Manifest {
  return levytateManifest;
}
