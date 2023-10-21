import React from "react";
import style from "./app-header.module.css";
import {
    Logo,
    ListIcon,
    ProfileIcon,
    BurgerIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderButton from "./components/header-button";
import {Link, NavLink} from "react-router-dom";

function AppHeader() {
    return (
        <header className={style.header}>
            <div className={style["header-container"]}>
                <nav className={style.navigation}>
                    <HeaderButton
                        to="/login"
                        text={"Конструктор"}>
                        <BurgerIcon/>
                    </HeaderButton>
                    <HeaderButton to="" text={"Лента заказов"}>
                        <ListIcon/>
                    </HeaderButton>
                </nav>
                <NavLink className={style.logo} to={"/"}>
                    <Logo/>
                </NavLink>
                <HeaderButton to="/profile" text={"Личный кабинет"}>
                    <ProfileIcon/>
                </HeaderButton>
            </div>
        </header>
    );
}

export default AppHeader;
