import { FunctionComponent } from "react";
import clsx from "clsx";

import { Header } from "./Header/Header";
import { SideBar } from "./SideBar/SideBar";
import { Footer } from "./Footer/Footer";

import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>
        <SideBar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) =>
  function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
