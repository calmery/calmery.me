import clsx from "clsx";
import { Icon, type IconProps } from "~/components/Icon";
import { Text } from "~/components/Text";

export const Callout: React.FC<{
  children: string;
  icon: IconProps["icon"];
}> = ({ children, icon }) => {
  return (
    <div
      className={clsx(
        "border",
        "border-border",
        "flex",
        "gap-8",
        "p-8",
        "rounded"
      )}
    >
      <div className={clsx("flex-shrink-0")}>
        <Icon icon={icon} size={18} />
      </div>
      <Text secondary>{children}</Text>
    </div>
  );
};
