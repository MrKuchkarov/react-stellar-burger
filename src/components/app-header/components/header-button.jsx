import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const CustomNavLinkButton = ({text, to, className, children}) => {
    return (
        <NavLink
            to={to}
            className={className}
        >
            {children}
            {text}
        </NavLink>
    );
};

CustomNavLinkButton.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
};

export default CustomNavLinkButton;
