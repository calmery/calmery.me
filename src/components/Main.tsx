import clsx from "clsx";
import { useUser } from "../hooks/useUser";
import { MainContentRenderer } from "./Main/ContentRenderer";

export const Main: React.FC = () => {
  const { contents } = useUser();

  return (
    <main className={clsx("flex", "flex-col", "gap-32")}>
      {contents.main.map((props, key) => (
        <MainContentRenderer {...props} key={key} />
      ))}
    </main>
  );
};
