import React from "react";


import styles from '../../styles/Footer.module.css';
import LOGO from '../../images/logo.svg';
import TELEGRAM from '../../images/telegram.svg';
import YOUTUBE from '../../images/youtube.svg';
import TWITTER from '../../images/twitter.svg';


import { ROUTES } from "../../utils/routes";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="stuff logo" />
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by Ibragim
      </div>

      <div className={styles.socials}>
        <a href="https://web.telegram.org/a/"
        target="_blank"
        rel="noreferrer">
          <img src={TELEGRAM} alt="" />
        </a>

        <a href="https://www.youtube.com"
        target="_blank"
        rel="noreferrer">
          <img src={YOUTUBE} alt="" />
        </a>

        <a href="https://twitter.com"
        target="_blank"
        rel="noreferrer">
          <img src={TWITTER} alt="" />
        </a>

      </div>
    </section>
  )
}

export default Footer;