import type { NextPage } from "next";

import Htag from "../components/Htag/Htag";

const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Htag tag="h2">Text</Htag>
      <Htag tag="h3">Text</Htag>
    </>
  );
};

export default Home;
