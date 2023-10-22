import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./profile-navigation.module.css";

const ProfileNavigation = () => {
    return (
        <nav className={`${style["links-navigation"]}`}>
            <NavLink
                to={"/profile"}
                className={`${style["links"]} text text_type_main-medium text_color_inactive`}
            >
                Профиль
            </NavLink>
            <NavLink
                to={"/profile/orders"}
                className={`${style["links"]} text text_type_main-medium text_color_inactive`}
            >
                История заказов
            </NavLink>
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