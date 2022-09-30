import clsx from "clsx";
import { sidebarContents } from "../libs/contents";
import { SidebarContentRenderer } from "./Sidebar/ContentRenderer";

export const Sidebar: React.FC = () => {
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
