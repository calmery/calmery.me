import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

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

export const OpenableListItem: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <li>
      <details>{children}</details>
    </li>
  );
};

export const OpenableListItemBody: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className={clsx("my-8", "text-secondary")}>{children}</div>;
};

export const OpenableListItemSummary: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
  return <summary {...props} />;
};
