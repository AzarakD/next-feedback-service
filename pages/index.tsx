import type { NextPage } from "next";

import { Button, Htag, Paragraph, Tag } from "../components";

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

      <Paragraph size="lg">Large</Paragraph>
      <Paragraph>Medium</Paragraph>
      <Paragraph size="sm">Small</Paragraph>

      <Tag size="sm" color="primary">
        Primary
      </Tag>
      <Tag>Ghost</Tag>
      <Tag color="red">Red</Tag>
      <Tag color="gray">Gray</Tag>
      <Tag color="green">Green</Tag>
    </>
  );
};

export default Home;
