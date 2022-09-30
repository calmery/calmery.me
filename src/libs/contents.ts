import type { ComponentPropsWithoutRef } from "react";
import PhotoGallery from "react-photo-gallery";
import { Icon, type IconProps } from "../components/Icon";

// Types

interface ContentHeading {
  icon: IconProps["icon"];
  text: string;
}

export interface MainContent {
  contents: React.ComponentProps<typeof PhotoGallery>["photos"];
  heading: ContentHeading;
  type: "gallery";
}

export type SidebarContent =
  | {
      contents: {
        icon: ComponentPropsWithoutRef<typeof Icon>["icon"];
      }[];
      direction: "column" | "row";
      heading: ContentHeading;
      type: "emojis";
    }
  | {
      contents: {
        href: string;
        icon: ComponentPropsWithoutRef<typeof Icon>["icon"];
        children: string;
      }[];
      direction: "column" | "row";
      heading: ContentHeading;
      type: "links";
    };

// Contents

export const mainContents: MainContent[] = [];

export const sidebarContents: SidebarContent[] = [
  {
    contents: [
      {
        icon: "laptop",
      },
      {
        icon: "camera",
      },
      {
        icon: "game",
      },
      {
        icon: "coffee",
      },
      {
        icon: "doughnut",
      },
    ],
    direction: "row",
    heading: {
      icon: "sparkling_heart",
      text: "好きなもの",
    },
    type: "emojis",
  },
  {
    contents: [
      {
        children: "Twitter",
        href: "https://twitter.com/calmeryme",
        icon: "twitter",
      },
      {
        children: "GitHub",
        href: "https://github.com/calmery",
        icon: "github",
      },
      {
        children: "Instagram",
        href: "https://instagr.am/c41m3ry",
        icon: "instagram",
      },
    ],
    direction: "column",
    heading: {
      icon: "link",
      text: "SNS",
    },
    type: "links",
  },
  {
    contents: [
      {
        children: "Calmery.moe",
        href: "https://calmery.moe",
        icon: "sparkling_heart",
      },
      {
        children: "かるめりちゃんカメラ",
        href: "https://camera.calmery.moe",
        icon: "camera",
      },
      {
        children: "めたねのあーと",
        href: "https://metaneno.art",
        icon: "palette",
      },
    ],
    direction: "column",
    heading: {
      icon: "link",
      text: "作ったもの",
    },
    type: "links",
  },
  {
    contents: [
      {
        children: "Qiita",
        href: "https://qiita.com/calmery",
        icon: "link",
      },
      {
        children: "はてなブログ",
        href: "https://calmery.hatenablog.com",
        icon: "link",
      },
    ],
    direction: "column",
    heading: {
      icon: "link",
      text: "その他",
    },
    type: "links",
  },
];
