import clsx from "clsx";
import PhotoGallery from "react-photo-gallery";
import { MainContent } from "../../hooks/useUser";
import { Heading } from "../Heading";

export const MainContentRenderer: React.FC<MainContent> = ({
  contents,
  heading,
  type,
}) => {
  switch (type) {
    case "gallery":
      return (
        <div className={clsx("flex", "flex-col", "gap-16")}>
          <Heading icon={heading.icon}>{heading.text}</Heading>
          <div className={clsx("-m-8", "[&>*_img]:rounded")}>
            <PhotoGallery margin={8} photos={contents} />
          </div>
        </div>
      );

    default:
      return null;
  }
};
