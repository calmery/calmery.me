import clsx from "clsx";
import { Column } from "~/components/Column";
import { Emphasis } from "~/components/Emphasis";
import { Heading } from "~/components/Heading";
import {
  List,
  OpenableListItem,
  OpenableListItemSummary,
  OpenableListItemBody,
} from "~/components/List";
import { Text } from "~/components/Text";
import { ExternalLink } from "../ExternalLink";

// Components

const Internships: React.FC = () => {
  return (
    <Text>
      <List>
        <OpenableListItem>
          <OpenableListItemSummary>
            <Emphasis>2018/10</Emphasis>
            株式会社サイバーエージェント
          </OpenableListItemSummary>
          <OpenableListItemBody>
            <Text className={clsx("font-bold")}>CA Tech JOB</Text>
            React を用いてブラウザ版 REQU の開発を行いました。期間中、Atomic
            Design に則ったコンポーネントの実装だったり、Storybook や Enzyme
            を用いた React コンポーネントのテストを整備、Renovate
            の導入を行いました。
          </OpenableListItemBody>
        </OpenableListItem>

        <OpenableListItem>
          <OpenableListItemSummary>
            <Emphasis>2018/09</Emphasis>
            チームラボ株式会社
          </OpenableListItemSummary>
          <OpenableListItemBody>
            <Text className={clsx("font-bold")}>
              チームラボサマーインターンシップ
            </Text>
            N/A
          </OpenableListItemBody>
        </OpenableListItem>

        <OpenableListItem>
          <OpenableListItemSummary>
            <Emphasis>2018/08</Emphasis>
            株式会社メルカリ
          </OpenableListItemSummary>
          <OpenableListItemBody>
            <Text className={clsx("font-bold")}>
              Summer Internship 2018 / Software Engineer（Frontend）
            </Text>
            React や tupai.js を用いた mercari のブラウザ版の開発を行いました。
          </OpenableListItemBody>
        </OpenableListItem>

        <OpenableListItem>
          <OpenableListItemSummary>
            <Emphasis>2018/03</Emphasis>
            ピクシブ株式会社
          </OpenableListItemSummary>
          <OpenableListItemBody>
            <Text className={clsx("font-bold")}>
              pixiv SPRING BOOT CAMP 2018
            </Text>
            PHP を用いた pixiv
            の開発と、デザイナーの方と連携してフォロー新着作品ページのデザイン改修、提案を行いました。
          </OpenableListItemBody>
        </OpenableListItem>

        <OpenableListItem>
          <OpenableListItemSummary>
            <Emphasis>2017/09</Emphasis>
            クックパッド株式会社
          </OpenableListItemSummary>
          <OpenableListItemBody>
            <Text className={clsx("font-bold")}>
              5day サービス開発インターンシップ
            </Text>
            料理工程の情報をスクレイピングで取得、工程毎にわかりやすく分けて表示する
            Web
            アプリを開発しました。スマートフォンで動くアプリという要件だったので、Apache
            Cordova を用いてアプリ化、URL スキームへの対応まで行いました。
          </OpenableListItemBody>
        </OpenableListItem>

        <OpenableListItem>
          <OpenableListItemSummary>
            <Emphasis>2017/09</Emphasis>
            レバレジーズ株式会社
          </OpenableListItemSummary>
          <OpenableListItemBody>
            <Text className={clsx("font-bold")}>湯けむりハッカソン</Text>
            N/A
          </OpenableListItemBody>
        </OpenableListItem>

        <OpenableListItem>
          <OpenableListItemSummary>
            <Emphasis>2017/08</Emphasis>
            LINE 株式会社
          </OpenableListItemSummary>
          <OpenableListItemBody>
            <Text className={clsx("font-bold")}>
              LINE Summer Internship 2017（エンジニア就業コース）
            </Text>
            LINE GAME、Grafana の API
            を用いて、設定ファイルによりカスタマイズ可能なダッシュボードを Elm
            を使って開発しました。
          </OpenableListItemBody>
        </OpenableListItem>
      </List>
    </Text>
  );
};

const PartTimeJobs: React.FC = () => {
  return (
    <Text>
      <List>
        <OpenableListItem>
          <OpenableListItemSummary>
            <Emphasis>2018/02 ~ 2019/09</Emphasis>
            ピクシブ株式会社
          </OpenableListItemSummary>
          <OpenableListItemBody>
            主に pixiv chatstory の開発に携わっており、Ionic Framework
            を用いたブラウザ版と、Expo と React Native を用いた iOS
            版の開発を行なっていました。Expo と React Native
            を用いた開発では、ページ単位で実装を行いつつ、Jest
            を用いたテストの整備や Renovate の導入、User Timing API
            を用いたパフォーマンスチューニングも行っています（
            <ExternalLink href="https://inside.pixiv.blog/tawachan/6254">
              pixiv chatstoryのiOSアプリをReact
              Native（Expo）でリニューアルしました！
            </ExternalLink>
            ）その他、短い期間ではありますが React を用いた pixivFANBOX
            の開発も行いました。
          </OpenableListItemBody>
        </OpenableListItem>

        <OpenableListItem>
          <OpenableListItemSummary>
            <Emphasis>2016/11 ~ 2018/01</Emphasis>
            株式会社ナレッジコミュニケーション
          </OpenableListItemSummary>
          <OpenableListItemBody>
            HoloLens と Unity、Node.js、WebSocket
            を用いて、視界と音声を他のデバイスとリアルタイムに共有するアプリケーションの開発を行いました。
          </OpenableListItemBody>
        </OpenableListItem>

        <OpenableListItem>
          <OpenableListItemSummary>
            <Emphasis>2016/08 ~ 2017/06</Emphasis>
            合同会社プラスワンズ
          </OpenableListItemSummary>
          <OpenableListItemBody>
            Django を用いた Web サービスの開発を行いました。
          </OpenableListItemBody>
        </OpenableListItem>
      </List>
    </Text>
  );
};

// Main

export const Jobs: React.FC = () => {
  return (
    <Column>
      <Heading element="h2" icon="briefcase" underline>
        職歴
      </Heading>

      <div>
        <Text className={clsx("font-bold", "mb-8")}>
          <Emphasis className={clsx("ml-0")}>2019/10 ~ 現在</Emphasis>
          ピクシブ株式会社 ソフトウェアエンジニア
        </Text>

        <Text secondary>
          現在は BOOTH にて主にフロントエンドの開発に携わっています。
          <br />
          その中で、Slim + jQuery を React + TypeScript
          へ移行したり、社内で開発されているデザインシステムである{" "}
          <ExternalLink href="https://pixiv.github.io/charcoal/docs/#/">
            Charcoal
          </ExternalLink>{" "}
          の BOOTH
          への適用を進めたり、その他、フロントエンドのパフォーマンスチューニングや開発環境の整備などを行なっています。
          <br />
          以前は React と Ruby on Rails を用いた pixiv
          コミックの開発や、pixivFACTORY で Contentful
          を用いた開発を行なっていました。
        </Text>
      </div>

      <Text>
        <List>
          <OpenableListItem>
            <OpenableListItemSummary>アルバイト</OpenableListItemSummary>
            <OpenableListItemBody>
              <div className={clsx("ml-16")}>
                <Text primary>
                  <PartTimeJobs />
                </Text>
              </div>
            </OpenableListItemBody>
          </OpenableListItem>

          <OpenableListItem>
            <OpenableListItemSummary>インターンシップ</OpenableListItemSummary>
            <OpenableListItemBody>
              <div className={clsx("ml-16")}>
                <Text primary>
                  <Internships />
                </Text>
              </div>
            </OpenableListItemBody>
          </OpenableListItem>
        </List>
      </Text>
    </Column>
  );
};
