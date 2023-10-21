import React from "react";
import style from "./header-button.module.css";
import PropTypes, {exact} from "prop-types";
import {NavLink} from "react-router-dom";

const HeaderButton = ({text, to, exact}) => {
    return (
        <NavLink
            to={to}
            className={`${style["menu-links"]} p-5 text text_type_main-default`}
            exact={exact}
            // activeClassName={`${style["menu-links-active"]}`}
        >
            {text}
        </NavLink>
    );
};

HeaderButton.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default HeaderButton;
