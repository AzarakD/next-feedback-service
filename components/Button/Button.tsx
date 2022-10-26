import clsx from "clsx";

import ArrowIcon from "./arrow.svg";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button = ({
  appearance = "primary",
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        styles.button,
        {
          [styles.primary]: appearance === "primary",
          [styles.ghost]: appearance === "ghost",
        },
        className
      )}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={clsx(styles.arrow, { [styles.down]: arrow === "down" })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
