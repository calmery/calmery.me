import clsx from "clsx";
import React from "react";

export const ExternalLink: React.FC<{
  children: string;
  href: string;
}> = ({ children, href }) => {
  return (
    <a
      className={clsx("underline")}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};
