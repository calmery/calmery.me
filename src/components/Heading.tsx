import clsx from "clsx";
import { Icon, type IconProps } from "./Icon";

interface HeadingProps {
  children: string;
  icon: IconProps["icon"];
}

export const Heading: React.FC<HeadingProps> = ({ children, icon }) => {
  return (
    <h2
      className={clsx(
        "flex",
        "font-bold",
        "gap-4",
        "items-center",
        "text-16",
        "text-primary"
      )}
    >
      <Icon icon={icon} size={16} />
      {children}
    </h2>
  );
};
