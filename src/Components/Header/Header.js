import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";
const Header = () => {
  return (
    <header className={styles.header__container}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.link_active : "")}
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          to="/saved-contacts"
          className={({ isActive }) => (isActive ? styles.link_active : "")}
        >
          Saved Contacts
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
