import clsx from "clsx";
import Head from "next/head";
import { Column } from "~/components/Column";
import { Heading } from "~/components/Heading";
import { Icon } from "~/components/Icon";
import { SidebarContentRenderer } from "~/components/Sidebar/ContentRenderer";
import { Text } from "~/components/Text";
import { sidebarContents } from "~/libs/contents";

// Components

const Footer: React.FC = () => {
  return (
    <footer
      className={clsx(
        "bg-clip-text",
        "bg-gradient-to-br",
        "flex",
        "font-black",
        "from-gradient-pink",
        "gap-4",
        "items-center",
        "text-16",
        "text-transparent",
        "to-gradient-blue"
      )}
    >
      Made with <Icon icon="sparkling_heart" size={16} /> by Calmery
    </footer>
  );
};

const Main: React.FC = () => {
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

const Sidebar: React.FC = () => {
  return (
    <div className={clsx("flex", "flex-col", "gap-32")}>
      <header className={clsx("flex", "flex-col", "gap-16")}>
        <div className={clsx("flex", "gap-16")}>
          <img
            alt=""
            className={clsx("h-[3.25rem]", "rounded", "w-[3.25rem]")}
            src="/icon.webp"
          />
          <h1
            className={clsx(
              "bg-gradient-to-br",
              "bg-clip-text",
              "font-black",
              "from-gradient-pink",
              "py-4",
              "text-40",
              "text-transparent",
              "to-gradient-blue",
              "w-fit"
            )}
          >
            Calmery
          </h1>
        </div>
        <p className={clsx("font-bold", "text-16", "text-secondary")}>
          銀髪赤眼の女の子が好き。イラスト SNS
          の会社でフロントエンドエンジニアしてます。
        </p>
      </header>

      {sidebarContents.map((props, key) => (
        <SidebarContentRenderer {...props} key={key} />
      ))}
    </div>
  );
};

// Main

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Calmery.me</title>
        <meta
          content={`Calmery（@calmeryme）のプロフィールページです`}
          name="description"
        />
      </Head>
      <div className={clsx("container", "mx-auto", "select-none")}>
        <div
          className={clsx(
            "flex",
            "mx-32",
            "gap-48",
            "mobile:flex-col",
            "mobile:gap-32"
          )}
        >
          <div
            className={clsx("desktop:h-fit", "desktop:sticky", "desktop:top-0")}
          >
            <div
              className={clsx(
                "mt-48",
                "desktop:flex",
                "desktop:flex-col",
                "desktop:gap-32",
                "desktop:mb-48",
                "desktop:w-[19rem]"
              )}
            >
              <Sidebar />
              <div className={clsx("mobile:hidden")}>
                <Footer />
              </div>
            </div>
          </div>
          <div className={clsx("my-48", "w-full", "mobile:my-0")}>
            <Main />
          </div>
          <div className={clsx("desktop:hidden", "mobile:mb-48")}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
