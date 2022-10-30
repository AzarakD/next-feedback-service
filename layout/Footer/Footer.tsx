import clsx from "clsx";
import { format } from "date-fns";

import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={clsx(className, styles.footer)} {...props}>
      <div>
        TopReviews © 2022 - {format(new Date(), "yyyy")} All rights reserved
      </div>
      <a href="#" target="_blank">
        User Agreement
      </a>
      <a href="#" target="_blank">
        Privacy Policy
      </a>
    </footer>
  );
};
