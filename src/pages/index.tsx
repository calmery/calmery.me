import clsx from "clsx";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Sidebar } from "../components/Sidebar";

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
