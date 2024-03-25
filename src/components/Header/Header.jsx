import React, { useEffect, useState } from "react";

import styles from '../../styles/Header.module.css';
import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/avatar.jpg';
import ICON from '../../images/searchIcon.svg';
import HEART from '../../images/heart.svg';
import CART from '../../images/cart.svg';


import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from '../../features/user/userSlice';

const Header = () => {
  const dispatch = useDispatch();

  const { currnetUser } = useSelector(({ user }) => user);

  const [values, setValues] = useState({ name: 'Guest', avatar: AVATAR});

  useEffect(() => {
    if(!currnetUser) return;

    setValues(currnetUser);
  }, [currnetUser])

  const handleClick = () => {
    if(!currnetUser) dispatch(toggleForm(true))

  }

  return (
    <div className={styles.header}>
      
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="stuff logo" />
        </Link>
      </div>

      <div className={styles.information}>
        <div className={styles.user} onClick={handleClick}>
         <div 
         className={styles.avatar}
         style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={styles.username}>{values.name}</div>
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

        {false && <div className={styles.box}></div>}
        </form>

        
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favorites}>
            <img src={HEART} alt="heart logo" className={styles.heart}/>
          </Link>

          <Link to={ROUTES.CART} className={styles.cart}>
            <img src={CART} alt="heart logo" className={styles.cartLogo}/>

            <span className={styles.count}>2</span>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Header;