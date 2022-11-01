import { useState } from "react";
import axios from "axios";
import type { GetStaticProps } from "next";

import { withLayout } from "../layout/Layout";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";
import { MenuItem } from "../interfaces/menu.interface";

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

const Home = ({ menu }: HomeProps) => {
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

      <ul>
        {menu.map((item) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};
