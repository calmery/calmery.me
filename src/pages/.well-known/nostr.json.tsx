import { GetServerSideProps } from "next";

const NostrJson = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const data = {
    names: {
      calmery:
        "c77fbc8c82a295c179d384b066ddea762adcb38f1791a8d037e3a2ab2647bc74",
    },
  };

  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify(data));
  res.end();

  return { props: {} };
};

export default NostrJson;
