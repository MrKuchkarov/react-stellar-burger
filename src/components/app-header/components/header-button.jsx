import React from 'react';
import style from "./header-button.module.css"
import PropTypes from "prop-types";



function HeaderButton(props) {
  return (
      <a className={`${style["menu-links"]} p-5`}>
        <div className={`${style["menu-links-text"]} text text_type_main-default`}>{props.children}</div>
      </a>
  );
}

HeaderButton.propTypes = {
    children: PropTypes.array
};

export default HeaderButton;