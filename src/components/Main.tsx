import clsx from "clsx";
import { mainContents } from "../libs/contents";
import { MainContentRenderer } from "./Main/ContentRenderer";

export const Main: React.FC = () => {
  return (
    <main className={clsx("flex", "flex-col", "gap-32")}>
      {mainContents.map((props, key) => (
        <MainContentRenderer {...props} key={key} />
      ))}
    </main>
  );
};
