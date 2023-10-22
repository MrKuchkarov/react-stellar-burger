import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./profile-navigation.module.css";
import NavLinkButton from "../app-header/components/header-button";

const ProfileNavigation = () => {
    return (
        <nav className={`${style["links-navigation"]}`}>
            <NavLinkButton
                exact
                to="/profile"
                text={"Профиль"}
                className={`${style["links"]} text text_type_main-medium text_color_inactive`}
                activeClassName={style.active}
            />
            <NavLinkButton
                exact
                to={"/profile/orders"}
                text={"История заказов"}
                className={`${style["links"]} text text_type_main-medium text_color_inactive`}
                activeClassName={style.active}
            />
            <button
                className={`${style["exit-button"]} text text_type_main-medium text_color_inactive`}
            >
                Выход
            </button>
            <p
                className={`${style["description"]} text text_type_main-default text_color_inactive`}
            >
                В этом разделе вы можете изменить свои персональные данные
            </p>
        </nav>
    );
};

export default ProfileNavigation;