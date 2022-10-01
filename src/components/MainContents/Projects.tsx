import clsx from "clsx";
import { type ComponentProps, type MouseEvent, useCallback } from "react";
import PhotoGallery from "react-photo-gallery";
import { Column } from "~/components/Column";
import { ExternalLink } from "~/components/ExternalLink";
import { Heading } from "~/components/Heading";
import { Text } from "~/components/Text";

// Constants

const PHOTOS: (ComponentProps<typeof PhotoGallery>["photos"][number] & {
  "data-url": string;
})[] = [
  {
    alt: "めたねのおくすり個展 クリームソーダの夢路を覗いて",
    "data-url": "https://calmery.notion.site/cbf21fa54bef44a0bb601403fe51fd64",
    height: 630,
    src: "/projects/1.webp",
    width: 1200,
  },
  {
    alt: "おくすりランド",
    "data-url": "https://calmery.notion.site/13378311f91c402684304cf5e4ba4424",
    height: 630,
    src: "/projects/2.webp",
    width: 1200,
  },
  {
    alt: "ノネメちゃんチェキ",
    "data-url": "https://calmery.notion.site/e9a783fb1f504f4bbcd1962817ac7d58",
    height: 630,
    src: "/projects/3.webp",
    width: 1200,
  },
  {
    alt: "かるめりちゃんカメラ",
    "data-url": "https://calmery.notion.site/fc5042c05cd046b9919e8234c514798a",
    height: 630,
    src: "/projects/4.webp",
    width: 1200,
  },
];

// Main

export const Projects: React.FC = () => {
  const handleClickPhoto = useCallback((event: MouseEvent) => {
    window.open(
      (event.currentTarget as HTMLImageElement).getAttribute("data-url"),
      "_blank",
      "noopener noreferrer"
    );
  }, []);

  return (
    <Column>
      <Heading icon="books" underline>
        開発したもの
      </Heading>
      <Text>
        クリックすると詳細ページに遷移します。ここに載せているもの以外、過去に開発したものは
        <ExternalLink href="https://calmery.notion.site/908eff00219045d3a582847476528f70">
          こちら
        </ExternalLink>
        。
      </Text>
      <div
        className={clsx(
          "-m-8",
          "[&>*_img]:rounded",
          "[&>*_img]:border",
          "[&>*_img]:border-border",
          "[&>*_img]:cursor-pointer"
        )}
      >
        <PhotoGallery margin={8} onClick={handleClickPhoto} photos={PHOTOS} />
      </div>
    </Column>
  );
};
