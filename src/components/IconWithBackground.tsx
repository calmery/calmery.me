import clsx from "clsx";
import { Icon, type IconProps } from "./Icon";

export const IconWithBackground: React.FC<
  Omit<IconProps, "size"> & { size?: number }
> = ({ size = 32, ...props }) => {
  return (
    <div
      className={clsx("bg-gray", "p-8", "rounded")}
      data-html
      data-tip="Test"
    >
      <Icon {...props} size={size} />
    </div>
  );
};
