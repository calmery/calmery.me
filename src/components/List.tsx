import clsx from "clsx";
import type { ReactNode } from "react";

export const List: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ul
      className={clsx(
        "[&>li]:py-4",
        "[&>li:first-child]:pt-0",
        "[&>li:last-child]:pb-0"
      )}
    >
      {children}
    </ul>
  );
};

export const ListItem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <li className={clsx("flex", "gap-4", "items-center")}>
      <div className={clsx("bg-primary", "h-4", "rounded", "w-4")} />
      <div>{children}</div>
    </li>
  );
};
