import clsx from "clsx";
import type { SidebarContent } from "../../libs/contents";
import { Heading } from "../Heading";
import { IconWithBackground } from "../IconWithBackground";
import { SidebarLink } from "./Link";

const ContentRenderer: React.FC<Pick<SidebarContent, "contents" | "type">> = ({
  contents,
  type,
}) => {
  switch (type) {
    case "emojis":
      return (
        <>
          {contents.map((icon, index) => (
            <IconWithBackground key={`${icon}/${index}`} icon={icon} />
          ))}
        </>
      );

    case "links":
      return (
        <nav className={clsx("flex", "flex-col", "gap-16")}>
          {contents.map((props) => (
            <SidebarLink {...props} key={props.href} />
          ))}
        </nav>
      );

    default:
      return null;
  }
};

export const SidebarContentRenderer: React.FC<SidebarContent> = ({
  direction,
  heading,
  ...props
}) => {
  return (
    <section className={clsx("flex", "flex-col", "gap-16")}>
      <Heading icon={heading.icon}>{heading.text}</Heading>
      <div
        className={clsx("flex", "gap-16", {
          "flex-col": direction === "column",
          "flex-row": direction === "row",
        })}
      >
        <ContentRenderer {...props} />
      </div>
    </section>
  );
};
