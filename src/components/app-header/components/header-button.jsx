import React from "react";
import style from "./header-button.module.css";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const HeaderButton = (props) => {
    return (
        <Link to={props.to} className={`${style["menu-links"]} p-5`}>
            <p className={`${style["menu-links-text"]} text text_type_main-default`}>
                {props.children}
            </p>
        </Link>
    );
};

HeaderButton.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default HeaderButton;
