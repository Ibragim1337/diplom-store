import React, { useEffect, useState } from "react";

import styles from '../../styles/Header.module.css';
import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/profilepic.jpg';
import ICON from '../../images/searchIcon.svg';
import CART from '../../images/cart.svg';


import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from '../../features/user/userSlice';
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const { currentUser, cart } = useSelector(({ user }) => user);

  const [values, setValues] = useState({ name: "Guest", avatar: AVATAR });

  const { data, isLoading } = useGetProductsQuery({ title: searchValue });

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };

  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };

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
         style={{ backgroundImage: `url(${values.avatar})` }}
          />
          <div className={styles.username}>{values.name}</div>
        </div>

        <form className={styles.form} onSubmit={e => e.preventDefault()}>
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
          onChange={handleSearch} 
          value={searchValue}/>
        </div>

        {searchValue && <div className={styles.box}>
        {isLoading
                ? "Loading"
                : !data.length
                ? "No results"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue("")}
                        className={styles.item}
                        to={`/products/${id}`}
                      >
                        <div
                          className={styles.image}
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className={styles.title}>{title}</div>
                      </Link>
                    );
                  })}
                  </div>}
        </form>

        
        <div className={styles.account}>
          {/* <Link to={ROUTES.HOME} className={styles.favorites}>
            <img src={HEART} alt="heart logo" className={styles.heart}/>
          </Link> */}

          <Link to={ROUTES.CART} className={styles.cart}>
            <img src={CART} alt="heart logo" className={styles.cartLogo}/>

            {!!cart.length && <span className={styles.count}>{cart.length}</span>}
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Header;