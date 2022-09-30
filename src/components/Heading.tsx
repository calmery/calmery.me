import clsx from "clsx";
import { useMemo, useState } from "react";
import { Icon, type IconProps } from "./Icon";

interface HeadingProps {
  children: string;
  element?: "h1" | "h2" | "h3";
  icon?: IconProps["icon"];
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  element = "h2",
  icon,
}) => {
  const classes = useMemo(
    () =>
      clsx("font-bold", "text-primary", { "flex gap-4 items-center": !!icon }),
    [icon]
  );

  switch (element) {
    case "h1":
      return (
        <h1 className={clsx(classes, "text-40")}>
          {icon && <Icon icon={icon} size={40} />}
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2 className={clsx(classes, "text-24")}>
          {icon && <Icon icon={icon} size={24} />}
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3 className={clsx(classes, "text-16")}>
          {icon && <Icon icon={icon} size={16} />}
          {children}
        </h3>
      );
  }
};
