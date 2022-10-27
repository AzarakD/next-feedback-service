import clsx from "clsx";

import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";

export const Paragraph = ({
  size = "md",
  children,
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={clsx(
        styles.paragraph,
        {
          [styles.sm]: size === "sm",
          [styles.md]: size === "md",
          [styles.lg]: size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};
