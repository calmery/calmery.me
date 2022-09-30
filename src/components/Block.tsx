import clsx from "clsx";
import type { ReactElement } from "react";

export const Block: React.FC<{
  children:
    | ReactElement
    | [ReactElement, ReactElement]
    | [ReactElement, ReactElement, ReactElement];
}> = ({ children }) => {
  const hasMultipleChildren = Array.isArray(children);

  return (
    <div
      className={clsx("gap-16", "mobile:flex", "mobile:flex-col", {
        "desktop:grid": hasMultipleChildren,
        "desktop:grid-cols-2": hasMultipleChildren && children.length === 2,
        "desktop:grid-cols-3": hasMultipleChildren && children.length === 3,
      })}
    >
      {children}
    </div>
  );
};
