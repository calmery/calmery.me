import clsx from "clsx";
import type { IconProps } from "./Icon";
import { IconWithBackground } from "./IconWithBackground";

interface LinkWithIconProps {
  children: string;
  href: string;
  icon: IconProps["icon"];
}

export const LinkWithIcon: React.FC<LinkWithIconProps> = ({
  children,
  href,
  icon,
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className={clsx("cursor-pointer", "flex", "gap-16")}>
        <IconWithBackground icon={icon} />
        <div className={clsx("flex", "flex-col", "gap-2", "py-4")}>
          <p className={clsx("font-black", "text-16", "text-secondary")}>
            {children}
          </p>
          <p className={clsx("font-black", "text-14", "text-tertiary")}>
            {href.replace(/^https?:\/\//g, "")}
          </p>
        </div>
      </div>
    </a>
  );
};
