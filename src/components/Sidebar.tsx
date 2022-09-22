import clsx from "clsx";
import { useUser } from "../hooks/useUser";
import { SidebarContentRenderer } from "./Sidebar/ContentRenderer";

export const Sidebar: React.FC = () => {
  const { contents, description, iconUrl, name } = useUser();

  return (
    <div className={clsx("flex", "flex-col", "gap-32")}>
      <header className={clsx("flex", "flex-col", "gap-16")}>
        <div className={clsx("flex", "gap-16")}>
          <img
            alt={name}
            className={clsx("h-[3.25rem]", "rounded", "w-[3.25rem]")}
            src={iconUrl}
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
            {name}
          </h1>
        </div>
        <p className={clsx("font-bold", "text-16", "text-secondary")}>
          {description}
        </p>
      </header>

      {contents.sidebar.map((props, key) => (
        <SidebarContentRenderer {...props} key={key} />
      ))}
    </div>
  );
};
