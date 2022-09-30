import clsx from "clsx";
import PhotoGallery from "react-photo-gallery";
import { Column } from "~/components/Column";
import { Heading } from "~/components/Heading";
import { Text } from "~/components/Text";

export const Introduction: React.FC = () => {
  return (
    <Column>
      <Heading icon="hand" underline>
        はじめに
      </Heading>
      <Text>
        Calmery（かるめり）といいます。アニメや漫画など、いわゆるサブカルチャーや創作文化が好きです。よろしくお願いします🙇🏻
      </Text>
      <Text>
        <div
          className={clsx(
            "-m-8",
            "[&>*_img]:rounded",
            "[&>*_img]:border",
            "[&>*_img]:border-border"
          )}
        >
          <PhotoGallery
            margin={8}
            photos={[
              {
                alt: "ストレングスファインダー",
                height: 1067,
                src: "/1.webp",
                width: 970,
              },
              {
                alt: "16Personalities",
                height: 900,
                src: "/2.webp",
                width: 1440,
              },
              {
                alt: "mgram",
                height: 1200,
                src: "/3.webp",
                width: 1200,
              },
            ]}
          />
        </div>
      </Text>
    </Column>
  );
};
