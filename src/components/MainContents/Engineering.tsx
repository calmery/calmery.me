import clsx from "clsx";
import { Callout } from "~/components/Callout";
import { Column } from "~/components/Column";
import { ExternalLink } from "~/components/ExternalLink";
import { Heading } from "~/components/Heading";
import { Text } from "~/components/Text";
import { Block } from "../Block";

export const Engineering: React.FC = () => {
  return (
    <Column>
      <Heading icon="technologist" underline>
        得意なこと
      </Heading>

      <Callout icon="memo">
        趣味開発は{" "}
        <ExternalLink href="https://github.com/calmery">@calmery</ExternalLink>{" "}
        や{" "}
        <ExternalLink href="https://github.com/calmery">
          @calmery-chan
        </ExternalLink>{" "}
        で行なっています。使用言語などは
        <ExternalLink
          className={clsx("px-4")}
          href="https://profile-summary-for-github.com/user/calmery"
        >
          Profile Summary For GitHub
        </ExternalLink>
        から確認できます。
      </Callout>

      <Heading element="h3" icon="+1">
        Web フロントエンドの開発が得意です
      </Heading>
      <Text>
        Web フロントエンド関連、その中でも TypeScript と React
        を用いた開発が得意です。趣味開発では SVG
        を用いた複雑な画面の実装や、Three.js（react-three-fiber）を用いてブラウザ上で動作する簡単な
        3D ゲームを開発した経験もあります。
      </Text>

      <Heading element="h3" icon="sob">
        その他、経験はありますが得意ではありません
      </Heading>
      <Text>
        バックエンドに関しては、フロントエンドの開発をメインに進めつつ、機能追加や改善で必要な場合は
        Ruby on Rails
        で開発されているプロダクトの実装や変更を行うという動きを業務で 1
        年程行っていました。形として実装はできますが、設計やコードの良し悪しには全く自信がない状態なので、コードレビューの環境が必須です。ちなみに
        Ruby on Rails 以外では、趣味開発で Node.js（Express +
        Prisma、NestJS）を用いた経験はありますが、その他の、例えば Go
        言語などを用いた開発の経験はありません。
      </Text>

      <Text>
        PC やスマートフォンのアプリ開発に関しては、Electron や Ionic
        Framework、React Native（Expo）の業務での開発経験があります。Kotlin や
        Swift
        を用いて開発をした経験はありません。また、インフラ周りは何もわかりません。
      </Text>
    </Column>
  );
};
