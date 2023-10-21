import React from "react";
import style from "./app-header.module.css";
import {
    Logo,
    ListIcon,
    ProfileIcon,
    BurgerIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderButton from "./components/header-button";

function AppHeader() {
    return (
        <header className={style.header}>
            <div className={style["header-container"]}>
                <nav className={style.navigation}>
                    <HeaderButton to="/">
                        <BurgerIcon/>
                        Конструктор
                    </HeaderButton>
                    <HeaderButton>
                        <ListIcon/>
                        Лента заказов
                    </HeaderButton>
                </nav>
                <Logo/>
                <HeaderButton to="/profile">
                    <ProfileIcon/>
                    Личный кабинет
                </HeaderButton>
            </div>
        </header>
    );
}

export default AppHeader;
