import React from 'react';
import style from "./header-button.module.css"
import PropTypes from "prop-types";



const HeaderButton = (props) => {
  return (
      <a href="#" className={`${style["menu-links"]} p-5`}>
        <p className={`${style["menu-links-text"]} text text_type_main-default`}>{props.children}</p>
      </a>
  );
}

HeaderButton.propTypes = {
    children: PropTypes.node.isRequired
};

export default HeaderButton;