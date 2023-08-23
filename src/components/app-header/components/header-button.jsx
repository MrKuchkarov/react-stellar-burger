import React from 'react';
import styles from "./header-button"
import { NavLink } from 'react-router-dom';


function HeaderButton(text) {
  return (
    <NavLink
      className={`${styles.link} text text_type_main-default text_color_inactive`}
      activeClassName={styles.link__active}
    >
      {text}
    </NavLink>
  );
};

export default HeaderButton;