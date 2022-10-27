import { HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}
