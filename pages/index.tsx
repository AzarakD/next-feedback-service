import type { NextPage } from "next";

import { Button, Htag } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Htag tag="h2">Text</Htag>
      <Htag tag="h3">Text</Htag>
      <Button>Click</Button>
      <Button appearance="ghost" arrow="right">
        Click
      </Button>
    </>
  );
};

export default Home;
