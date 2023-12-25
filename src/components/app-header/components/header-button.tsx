import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import style from "./header-button.module.css";

type HeaderButton = {
    text?: string;
    to: string;
    className?: string;
    isActive?: boolean
    children?: React.ReactNode;
}
const CustomNavLinkButton: FC<HeaderButton> = ({text, isActive, to, className, children}) => {
    const linkClass = isActive ? `${className} ${style["active-link"]}` : className;
    return (
        <NavLink
            to={to}
            className={linkClass}
        >
            {children}
            {text}
        </NavLink>
    );
};


export default CustomNavLinkButton;
