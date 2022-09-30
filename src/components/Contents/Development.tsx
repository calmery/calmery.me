import clsx from "clsx";
import { Callout } from "~/components/Callout";
import { Column } from "~/components/Column";
import { ExternalLink } from "~/components/ExternalLink";
import { Heading } from "~/components/Heading";
import { Text } from "~/components/Text";

export const Development: React.FC = () => {
  return (
    <Column>
      <Heading icon="technologist" underline>
        開発
      </Heading>
      <Callout icon="+1">
        Web フロントエンド関連、その中でも TypeScript と React
        を用いた開発が得意です。また、趣味で SVG
        を用いた複雑な画面の開発や、Three.js（react-three-fiber）を用いてブラウザ上で動作する簡単な
        3D ゲームを開発した経験があります。
      </Callout>
      <Callout icon="warning">
        バックエンドに関しては、フロントエンドエンジニアとして働きつつ、機能追加や改善で必要な場合は、既存の
        Ruby on Rails プロダクトへの実装を行うという動きを 1
        年弱行っていました。基本的な実装方針が決まっており、有識者からのレビューの環境が整っていれば、多少時間はかかりますが実装できます。
      </Callout>
      <Text>
        普段は{" "}
        <ExternalLink href="https://github.com/calmery">@calmery</ExternalLink>{" "}
        や{" "}
        <ExternalLink href="https://github.com/calmery">
          @calmery-chan
        </ExternalLink>{" "}
        で開発を行なっています。使用言語などは
        <ExternalLink
          className={clsx("px-4")}
          href="https://profile-summary-for-github.com/user/calmery"
        >
          Profile Summary For GitHub
        </ExternalLink>
        から確認できます。
      </Text>
    </Column>
  );
};
