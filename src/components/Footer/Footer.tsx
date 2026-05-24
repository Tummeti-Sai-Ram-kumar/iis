import type { FC, ReactElement } from "react";

import { TwitterIcon } from "./TwitterIcon";
import { InstagramIcon } from "./InstagramIcon";
import { FacebookIcon } from "./FacebookIcon";

import styles from "./Footer.module.css";

export const Footer: FC = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__left}>
        <p className={styles.footer__newsLetterTitle}>Subscribe to our Journal</p>
        <form className={styles.footer__newsLetterInputContainer} onSubmit={(event) => {event.preventDefault();}}>
          <input className={styles.footer__newsLetterInput} type="email" placeholder="abcxyz@gmail.com" required />
          <button type="submit" className={styles.footer__newsLetterButton}>
            Subscribe
          </button>
        </form>
        <p className={styles.footer__followUsTitle}>Follow us</p>
        <div className={styles.footer__quickLinks}>
          <a className={styles.footer__quickLink} href="https://x.com/">
            <TwitterIcon />
          </a>
          <a className={styles.footer__quickLink} href="https://www.instagram.com/">
            <InstagramIcon />
          </a>
          <a className={styles.footer__quickLink} href="https://www.facebook.com/">
            <FacebookIcon />
          </a>
        </div>
        <small className={styles.footer__copyright}>© 2026 Impossible is Nothing. All rights reserved.</small>
      </div>
      <div className={styles.footer__banner}></div>
    </footer>
  );
};
