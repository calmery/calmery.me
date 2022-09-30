import clsx from "clsx";
import { Icon, type IconProps } from "./Icon";

export const IconWithBackground: React.FC<
  Omit<IconProps, "size"> & { description?: string; size?: number }
> = ({ description, size = 32, ...props }) => {
  return (
    <div
      className={clsx("bg-gray", "p-8", "rounded")}
      data-html={!!description}
      data-tip={description}
    >
      <Icon {...props} size={size} />
    </div>
  );
};
