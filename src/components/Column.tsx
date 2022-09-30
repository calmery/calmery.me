import clsx from "clsx";
import type { ReactNode } from "react";

export const Column: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={clsx("flex", "flex-col", "gap-16")}>{children}</div>;
};
