import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

export const Text: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  return (
    <div
      {...props}
      className={clsx("[&>*img]:rounded", "text-14", props.className)}
    />
  );
};
