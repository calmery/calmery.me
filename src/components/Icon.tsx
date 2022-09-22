import clsx from "clsx";
import { useMemo } from "react";

export interface IconProps {
  alt?: string;
  icon:
    | "bouquet"
    | "camera"
    | "coffee"
    | "doughnut"
    | "hash"
    | "instagram"
    | "link"
    | "sparkling_heart"
    | "twitter";
  size: number;
}

export const Icon: React.FC<IconProps> = ({ alt = "", icon, size }) => {
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
    <div style={{ height: `${rem}rem`, width: `${rem}rem` }}>
      <img
        alt={alt}
        className={clsx("align-bottom", "h-full", "w-full")}
        src={`/icons/${icon}.svg`}
      />
    </div>
  );
};
