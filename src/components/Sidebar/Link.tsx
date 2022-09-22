import clsx from "clsx";
import Link from "next/link";
import type { IconProps } from "../Icon";
import { IconWithBackground } from "../IconWithBackground";

interface SidebarLinkProps {
  children: string;
  href: string;
  icon: IconProps["icon"];
}

export const SidebarLink: React.FC<SidebarLinkProps> = ({
  children,
  href,
  icon,
}) => {
  return (
    <Link href={href} passHref>
      <a target="_blank" rel="noopener noreferrer">
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
    </Link>
  );
};
