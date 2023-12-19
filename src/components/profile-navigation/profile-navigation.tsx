import React from 'react';
import style from "./profile-navigation.module.css";
import CustomNavLinkButton from "../app-header/components/header-button";
import {useLocation} from "react-router-dom";
import {routes} from "../../utils/consts";


const ProfileNavigation = () => {
    const {pathname} = useLocation();
    const isActiveProfile = pathname === routes.profile;
    const isActiveProfileOrder = pathname === routes.profileOrder;
    const isActiveProfileExit = pathname === routes.profileExit;

    return (
        <nav className={`${style["links-navigation"]}`}>
            <CustomNavLinkButton
                to={routes.profile}
                text={"Профиль"}
                className={`${style["links"]} text text_type_main-medium text_color_inactive `}
                isActive={isActiveProfile}
            />
            <CustomNavLinkButton
                to={routes.profileOrder}
                text={"История заказов"}
                className={`${style["links"]} text text_type_main-medium text_color_inactive`}
                isActive={isActiveProfileOrder}
            />
            <CustomNavLinkButton
                to={routes.profileExit}
                className={`${style["exit-button"]} text text_type_main-medium text_color_inactive`}
                isActive={isActiveProfileExit}
            >
                Выход
            </CustomNavLinkButton>
            <p
                className={`${style["description"]} text text_type_main-default text_color_inactive`}
            >
                {pathname === "/profile"
                    ? `В этом разделе вы можете изменить свои персональные данные`
                    : `В этом разделе вы можете просмотреть свою историю заказов`}
            </p>
        </nav>
    );
};

export default ProfileNavigation;