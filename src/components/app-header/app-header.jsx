import React from "react";
import style from "./app-header.module.css";
import {
    Logo,
    ListIcon,
    ProfileIcon,
    BurgerIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useMatch} from "react-router-dom";
import NavLinkButton from "./components/header-button";

function AppHeader() {
    const isConstructorActive = useMatch("/");
    const isOrdersActive = useMatch("/feed");
    const isProfileActive = useMatch("/profile");


    return (
        <header className={style.header}>
            <div className={style["header-container"]}>
                <nav className={style.navigation}>
                    <NavLinkButton
                        to="/login"
                        text={"Конструктор"}
                        className={`${style["header-links"]} pt-5 pr-5 pb-5 text text_type_main-default ${isConstructorActive ? style.active : ""}`}
                    >
                        <BurgerIcon
                            type={isConstructorActive ? 'secondary' : 'primary'}
                        />
                    </NavLinkButton>
                    <NavLinkButton
                        to="/feed"
                        text={"Лента заказов"}
                        className={`${style["header-links"]} p-5 text text_type_main-default ${isOrdersActive ? style.active : ""}`}
                    >
                        <ListIcon
                            type={isOrdersActive ? 'secondary' : 'primary'}
                        />
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
                    text={"Личный кабинет"}
                    className={`${style["header-links"]} pt-5 pb-5 pl-5 text text_type_main-default ${isProfileActive ? style.active : ""}`}
                >
                    <ProfileIcon
                        type={isProfileActive ? 'secondary' : 'primary'}
                    />
                </NavLinkButton>
            </div>
        </header>
    );
}

export default AppHeader;
