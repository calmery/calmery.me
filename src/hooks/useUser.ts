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
      contents: ComponentPropsWithoutRef<typeof Icon>["icon"][];
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

const mainContents: MainContent[] = [
  {
    contents: [
      { alt: "Cafe", height: 640, src: `/photos/cafe/0.webp`, width: 1024 },
      { alt: "Cafe", height: 576, src: `/photos/cafe/1.webp`, width: 1024 },
      { alt: "Cafe", height: 576, src: `/photos/cafe/2.webp`, width: 1024 },
      { alt: "Cafe", height: 675, src: `/photos/cafe/3.webp`, width: 1024 },
      { alt: "Cafe", height: 768, src: `/photos/cafe/4.webp`, width: 1024 },
    ],
    heading: {
      icon: "hash",
      text: "Cafe",
    },
    type: "gallery",
  },
  {
    contents: [
      {
        alt: "Cosplay",
        height: 576,
        src: `/photos/cosplay/0.webp`,
        width: 1024,
      },
      {
        alt: "Cosplay",
        height: 1024,
        src: `/photos/cosplay/1.webp`,
        width: 1024,
      },
      {
        alt: "Cosplay",
        height: 768,
        src: `/photos/cosplay/2.webp`,
        width: 1024,
      },
      {
        alt: "Cosplay",
        height: 640,
        src: `/photos/cosplay/3.webp`,
        width: 1024,
      },
      {
        alt: "Cosplay",
        height: 1024,
        src: `/photos/cosplay/4.webp`,
        width: 1024,
      },
      {
        alt: "Cosplay",
        height: 683,
        src: `/photos/cosplay/5.webp`,
        width: 1024,
      },
    ],
    heading: {
      icon: "hash",
      text: "Cosplay",
    },
    type: "gallery",
  },
];

const sidebarContents: SidebarContent[] = [
  {
    contents: ["camera", "bouquet", "coffee", "doughnut"],
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
        children: "@k1y0x0",
        href: "https://twitter.com/k1y0x0",
        icon: "twitter",
      },
      {
        children: "k1y0x0",
        href: "https://instagr.am/k1y0x0",
        icon: "instagram",
      },
      {
        children: "k1y0x0.cosplay",
        href: "https://instagr.am/k1y0x0.cosplay",
        icon: "instagram",
      },
    ],
    direction: "column",
    heading: {
      icon: "link",
      text: "リンク",
    },
    type: "links",
  },
];

// Hooks

export const useUser = () => {
  return {
    contents: {
      main: mainContents,
      sidebar: sidebarContents,
    },
    description: "趣味で写真撮ってます",
    iconUrl: "/icon.webp",
    name: "kiyo*",
    username: "k1y0x0",
  };
};
