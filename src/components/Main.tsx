import clsx from "clsx";
import { Column } from "./Column";
import { Text } from "~/components/Text";
import { Heading } from "./Heading";

export const Main: React.FC = () => {
  return (
    <main className={clsx("flex", "flex-col", "gap-32")}>
      <Column>
        <Heading icon="camera">はじめに</Heading>
        <Heading element="h3" icon="camera">
          はじめに
        </Heading>
        <Text>
          Calmery（かるめり）といいます。アニメや漫画など、いわゆるサブカルチャーや創作文化が好きです。よろしくお願いします🙇🏻
        </Text>
      </Column>
    </main>
  );
};
