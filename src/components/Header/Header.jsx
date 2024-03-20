import React from "react";

import styles from '../../styles/Header.module.css';
import LOGO from '../../images/logo.svg';


import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Header = () => {
  return (
    <div className={styles.header}>
      
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="stuff logo" />
        </Link>
      </div>

    </div>
  )
}

export default Header;