import { Contributions } from "~/components/MainContents/Contributions";
import { Engineering } from "~/components/MainContents/Engineering";
import { Greeting } from "~/components/MainContents/Greeting";
import { Introduction } from "~/components/MainContents/Introduction";
import { Jobs } from "~/components/MainContents/Jobs";
import { Projects } from "~/components/MainContents/Projects";
import { Block } from "~/components/Block";

export const MainContents: React.FC = () => {
  return (
    <>
      <Greeting />
      <Introduction />
      <Projects />
      <Engineering />
      <Block>
        <Jobs />
        <Contributions />
      </Block>
    </>
  );
};
