import React from "react";
import style from "./app-header.module.css";
import {
    Logo,
    ListIcon,
    ProfileIcon,
    BurgerIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";
import NavLinkButton from "./components/header-button";

function AppHeader() {

    return (
        <header className={style.header}>
            <div className={style["header-container"]}>
                <nav className={style.navigation}>
                    <NavLinkButton
                        to="/login"
                        exact
                        text={"Конструктор"}
                        className={`${style["header-links"]} p-5 text text_type_main-default`}
                        // activeClassName={style.active}
                    >
                        <BurgerIcon/>
                    </NavLinkButton>
                    <NavLinkButton
                        to="/ingredients"
                        text={"Лента заказов"}
                        className={`${style["header-links"]} p-5 text text_type_main-default`}
                    >
                        <ListIcon/>
                    </NavLinkButton>
                </nav>
                <NavLink
                    className={style.logo}
                    to={"/"}
                >
                    <Logo/>
                </NavLink>
                <NavLinkButton
                    to="/profile"
                    exact
                    text={"Личный кабинет"}
                    className={`${style["header-links"]} p-5 text text_type_main-default`}
                    // activeClassName={style.active}
                >
                    <ProfileIcon/>
                </NavLinkButton>
            </div>
        </header>
    );
}

export default AppHeader;
