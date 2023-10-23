import React from 'react';
import style from "./profile-navigation.module.css";
import CustomNavLinkButton from "../app-header/components/header-button";
import {useMatch} from "react-router-dom";

const ProfileNavigation = () => {
    const isProfileActive = useMatch("/profile");
    const isProfileOrderActive = useMatch("/profile/orders");
    return (
        <nav className={`${style["links-navigation"]}`}>
            <CustomNavLinkButton
                to="/profile"
                text={"Профиль"}
                className={`${style["links"]} text text_type_main-medium text_color_inactive ${isProfileActive ? style.active : ""}`}
            />
            <CustomNavLinkButton
                to={"/profile/orders"}
                text={"История заказов"}
                className={`${style["links"]} text text_type_main-medium text_color_inactive ${isProfileOrderActive ? style.active : ""}`}
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