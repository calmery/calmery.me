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
    </Column>
  );
};
