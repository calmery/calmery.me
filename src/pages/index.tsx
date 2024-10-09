import clsx from "clsx";
import { Tooltip } from "react-tooltip";
import { Heading } from "~/components/Heading";
import { Icon } from "~/components/Icon";
import { IconWithBackground } from "~/components/IconWithBackground";
import { LinkWithIcon } from "~/components/LinkWithIcon";
import { MainContents } from "~/components/MainContents";

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
      <MainContents />
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
            loading="lazy"
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
          の会社でソフトウェアエンジニアしてます。
        </p>
      </header>

      <section className={clsx("flex", "flex-col", "gap-16")}>
        <Heading element="h3" icon="sparkling_heart">
          好きなもの
        </Heading>
        <div className={clsx("flex", "gap-16", "flex-row")}>
          <Tooltip id="like" />

          <div data-tooltip-content="PC" data-tooltip-id="like">
            <IconWithBackground icon="laptop" />
          </div>
          <div data-tooltip-content="カメラ" data-tooltip-id="like">
            <IconWithBackground icon="camera" />
          </div>
          <div data-tooltip-content="ゲーム" data-tooltip-id="like">
            <IconWithBackground icon="game" />
          </div>
          <div data-tooltip-content="カフェ" data-tooltip-id="like">
            <IconWithBackground icon="coffee" />
          </div>
          <div data-tooltip-content="スイーツ" data-tooltip-id="like">
            <IconWithBackground icon="doughnut" />
          </div>
        </div>
      </section>

      <section className={clsx("flex", "flex-col", "gap-16")}>
        <Heading element="h3" icon="link">
          SNS
        </Heading>
        <div className={clsx("flex", "gap-16", "flex-col")}>
          <nav className={clsx("flex", "flex-col", "gap-16")}>
            <LinkWithIcon href="https://x.com/calmeryme" icon="x">
              X
            </LinkWithIcon>
            <LinkWithIcon href="https://github.com/calmery" icon="github">
              GitHub
            </LinkWithIcon>
            <LinkWithIcon href="https://instagr.am/c41m3ry" icon="instagram">
              Instagram
            </LinkWithIcon>
          </nav>
        </div>
      </section>

      <section className={clsx("flex", "flex-col", "gap-16")}>
        <Heading element="h3" icon="link">
          SNS
        </Heading>
        <div className={clsx("flex", "gap-16", "flex-col")}>
          <nav className={clsx("flex", "flex-col", "gap-16")}>
            <LinkWithIcon href="https://qiita.com/calmery" icon="link">
              Qiita
            </LinkWithIcon>
            <LinkWithIcon href="https://calmery.hatenablog.com" icon="link">
              はてなブログ
            </LinkWithIcon>
          </nav>
        </div>
      </section>
    </div>
  );
};

// Main

const Index: React.FC = () => {
  return (
    <div className={clsx("container", "mx-auto")}>
      <div
        className={clsx(
          "flex",
          "mx-32",
          "gap-48",
          "mobile:flex-col",
          "mobile:gap-32"
        )}
      >
        {/* Sidebar */}
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

        {/* Main */}
        <div className={clsx("my-48", "w-full", "mobile:my-0")}>
          <Main />
        </div>

        {/* Footer */}
        <div className={clsx("desktop:hidden", "mobile:mb-48")}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
