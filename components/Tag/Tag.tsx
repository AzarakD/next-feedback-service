import clsx from "clsx";

import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";

export const Tag = ({
  size = "md",
  color = "ghost",
  href,
  children,
  className,
  ...props
}: TagProps) => {
  return (
    <div
      className={clsx(
        styles.tag,
        {
          [styles.sm]: size === "sm",
          [styles.md]: size === "md",
          [styles.primary]: color === "primary",
          [styles.ghost]: color === "ghost",
          [styles.red]: color === "red",
          [styles.gray]: color === "gray",
          [styles.green]: color === "green",
        },
        className
      )}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
