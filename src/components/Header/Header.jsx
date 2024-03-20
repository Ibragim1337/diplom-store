import React from "react";

import styles from '../../styles/Header.module.css';
import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/avatar.jpg';
import ICON from '../../images/searchIcon.svg';
import HEART from '../../images/heart.svg'


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

      <div className={styles.information}>
        <div className={styles.user}>
         <div 
         className={styles.avatar}
         style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={styles.username}>Guest</div>
        </div>

        <form className={styles.form}>
        <div className={styles.icon}>
          <img 
          className={styles.searchIcon}
          src={ICON} 
          alt="search logo"/>
        </div>

        <div className={styles.inputContainer}>
          <input
          className={styles.input} 
          type="search" 
          name="search" 
          placeholder="Search ..." 
          autoComplete="off" 
          onChange={() => {} } 
          value=''/>
        </div>

        <div className={styles.box}>


        </div>
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.HOME}>
            <img src={HEART} alt="heart logo" />
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Header;