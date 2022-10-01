import clsx from "clsx";
import { useMemo } from "react";

export interface IconProps {
  alt?: string;
  icon:
    | "+1"
    | "books"
    | "bow"
    | "briefcase"
    | "camera"
    | "coffee"
    | "doughnut"
    | "game"
    | "github"
    | "hand"
    | "hash"
    | "instagram"
    | "laptop"
    | "link"
    | "memo"
    | "notion"
    | "palette"
    | "sparkling_heart"
    | "technologist"
    | "twitter"
    | "warning"
    | "wave";
  inline?: boolean;
  size: number;
}

export const Icon: React.FC<IconProps> = ({
  alt = "",
  icon,
  inline = false,
  size,
}) => {
  const basePxSize = useMemo(() => {
    if (typeof window === "undefined") {
      return 16;
    }

    const basePxSize = parseInt(
      getComputedStyle(document.documentElement).fontSize
    );

    if (isNaN(basePxSize)) {
      return 16;
    }

    return basePxSize;
  }, []);
  const rem = useMemo(() => size / basePxSize, [basePxSize, size]);

  return (
    <div
      className={clsx({
        "inline-block": inline,
      })}
      style={{ height: `${rem}rem`, width: `${rem}rem` }}
    >
      <img
        alt={alt}
        className={clsx("align-bottom", "h-full", "w-full")}
        loading="lazy"
        src={`/icons/${icon}.svg`}
      />
    </div>
  );
};
