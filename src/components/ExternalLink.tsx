import clsx from "clsx";
import type { ReactNode } from "react";

export const ExternalLink: React.FC<{
  children: ReactNode;
  className?: string;
  href: string;
}> = ({ children, className, href }) => {
  return (
    <a
      className={clsx("underline", className)}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};
