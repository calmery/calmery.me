import clsx from "clsx";
import { Icon } from "./Icon";

export const Footer: React.FC = () => {
  return (
    <footer
      className={clsx(
        "bg-clip-text",
        "bg-gradient-to-br",
        "flex",
        "font-black",
        "from-gradient-pink",
        "gap-4",
        "items-center",
        "text-16",
        "text-transparent",
        "to-gradient-blue"
      )}
    >
      Made with <Icon icon="sparkling_heart" size={16} /> by Calmery
    </footer>
  );
};
