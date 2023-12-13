import React from "react";
import style from "./app-header.module.css";
import {
    Logo,
    ListIcon,
    ProfileIcon,
    BurgerIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useLocation} from "react-router-dom";
import CustomNavLinkButton from "./components/header-button";
import {routes} from "../../utils/consts";

function AppHeader() {
    const location = useLocation();


    return (
        <header className={style.header}>
            <div className={style["header-container"]}>
                <nav className={style.navigation}>
                    <CustomNavLinkButton
                        to={routes.home}
                        isActive={location.pathname === "/"}
                        className={`${style["header-links"]} pt-5 pr-5 pb-5 text text_type_main-default`}
                    >
                        <BurgerIcon
                            type={location.pathname === "/" ? "primary" : "secondary"}
                        />
                        <span className={location.pathname === "/" ? style.active : ""}>Конструктор</span>
                    </CustomNavLinkButton>
                    <CustomNavLinkButton
                        to={routes.feed}
                        className={`${style["header-links"]} pt-5 pr-5 pb-5 text text_type_main-default`}
                    >
                        <ListIcon
                            type={location.pathname === "/feed" ? "primary" : "secondary"}
                        />
                        <span className={location.pathname === "/feed" ? style.active : ""}>Лента заказов</span>
                    </CustomNavLinkButton>
                </nav>
                <NavLink
                    className={style.logo}
                    to={"/"}
                >
                    <Logo/>
                </NavLink>
                <CustomNavLinkButton
                    to={routes.profile}
                    className={`${style["header-links"]} pt-5 pr-5 pb-5 text text_type_main-default`}
                >
                    <ProfileIcon
                        type={location.pathname === "/profile" || location.pathname === "/profile/orders" ? "primary" : "secondary"}
                    />
                    <span className={location.pathname === "/profile" ? style.active : ""}>Лента заказов</span>
                </CustomNavLinkButton>
            </div>
        </header>
    );
}

export default AppHeader;
