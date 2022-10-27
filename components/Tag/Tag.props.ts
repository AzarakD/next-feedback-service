import { HTMLAttributes, ReactNode } from "react";

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md";
  color?: "primary" | "ghost" | "red" | "gray" | "green";
  href?: "string";
  children: ReactNode;
}
