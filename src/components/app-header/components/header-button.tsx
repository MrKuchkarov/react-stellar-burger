import React, {FC} from "react";
import {NavLink} from "react-router-dom";

type HeaderButton = {
    text: string;
    to: string;
    className: string;
}
const CustomNavLinkButton: FC<HeaderButton> = ({text, to, className, children}) => {
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


export default CustomNavLinkButton;
