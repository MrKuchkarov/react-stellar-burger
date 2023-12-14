import React, {MouseEventHandler} from 'react';
import style from "./profile-navigation.module.css";
import CustomNavLinkButton from "../app-header/components/header-button";
import {useLocation, useMatch} from "react-router-dom";

import {fetchLogout} from "../../services/auth/auth-async-thunks";
import {useAppDispatch} from "../../services/store/store";


const ProfileNavigation = () => {
    const dispatch = useAppDispatch()
    const {pathname} = useLocation();
    const isProfileActive = useMatch("/profile");
    const isProfileOrderActive = useMatch("/profile/orders");

    const logout: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(fetchLogout());
    };
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
                onClick={logout}
            >
                Выход
            </button>
            <p
                className={`${style["description"]} text text_type_main-default text_color_inactive`}
            >
                {pathname === '/profile'
                    ? `В этом разделе вы можете изменить свои персональные данные`
                    : `В этом разделе вы можете просмотреть свою историю заказов`}
            </p>
        </nav>
    );
};

export default ProfileNavigation;