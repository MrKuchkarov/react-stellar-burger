import React from "react";
import PropTypes, {exact} from "prop-types";
import {NavLink} from "react-router-dom";

const NavLinkButton = ({text, to, className, activeClassName, children, exact}) => {
    return (
        <NavLink
            exact={exact}
            to={to}
            className={className}
            activeClassName={activeClassName}
        >
            {children}
            {text}
        </NavLink>
    );
};

NavLinkButton.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
};

export default NavLinkButton;
