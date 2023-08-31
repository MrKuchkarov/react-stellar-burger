import React from 'react';
import style from "./header-button.module.css"
import PropTypes from "prop-types";



function HeaderButton({children}) {
  return (
      <a className={`${style["menu-links"]} p-5`}>
        <div className={`${style["menu-links-text"]} text text_type_main-default`}>{children}</div>
      </a>
  );
};

HeaderButton.prototype = {
    children: PropTypes.string
};

export default HeaderButton;