import React from "react";

import styles from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}> CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {list.map(({ id, name }) => {
            if (id > 22) return null; 
            return (
              <li key={id}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ""}`
                  }
                  to={`/categories/${id}`}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link}>
          {" "}
          Help{" "}
        </a>
        <a
          href="/terms"
          target="_blank"
          className={styles.link}
          style={{ textDecoration: "underline" }}
        >
          {" "}
          Term and Conditions{" "}
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
