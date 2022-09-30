import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

export const Text: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
  }
> = ({ primary, secondary, tertiary, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(
        "[&>*img]:rounded",
        "text-14",
        {
          "text-primary": primary,
          "text-secondary": secondary,
          "text-tertiary": tertiary,
        },
        props.className
      )}
    />
  );
};
