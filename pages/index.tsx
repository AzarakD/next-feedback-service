import { useState } from "react";
import type { NextPage } from "next";

import { withLayout } from "../layout/Layout";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";

const Home: NextPage = () => {
  const [rating, setRating] = useState(3);

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

      <Rating {...{ rating, setRating }} isEditable />
    </>
  );
};

export default withLayout(Home);
