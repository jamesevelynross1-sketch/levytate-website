import type { MouseEventHandler, ReactNode } from "react";
import { platformLoginUrl } from "@/lib/platform";

export function PlatformLoginLink({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a href={platformLoginUrl()} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
