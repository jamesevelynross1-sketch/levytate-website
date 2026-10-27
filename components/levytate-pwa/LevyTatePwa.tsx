"use client";

import { useEffect, useState } from "react";

export function LevyTatePwaBootstrap() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if ("serviceWorker" in navigator && window.isSecureContext) {
      void navigator.serviceWorker.register("/levytate-sw.js", { scope: "/" }).catch(() => undefined);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (online) return null;

  return (
    <div role="status" className="fixed inset-x-0 top-0 z-[100] bg-[#17325c] px-4 py-2 text-center text-xs font-semibold text-white shadow-lg">
      LevyTate needs an internet connection to load live apprenticeship data.
    </div>
  );
}
