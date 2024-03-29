import React from "react";

import styles from "../../styles/Sidebar.module.css";
import stylesCategory from '../../styles/Category.module.css'

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const handleClick = () => {
  const wrapper = document.querySelector(`.${stylesCategory.wrapper}`);
  if (wrapper) {
    wrapper.scrollIntoView({ behavior: 'smooth' });
  }
};

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}> CATEGORIES</div>
      <nav>
      <ul className={styles.menu}>
      {list.map(({ id, name }) => {
        if (id > 6) return null; 
        return (
          <li key={id}>
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              to={`/categories/${id}`}
              onClick={handleClick}
            >
              {name}
            </NavLink>
          </li>
        );
      })}
    </ul>
      </nav>

      
    </section>
  );
};

export default Sidebar;
