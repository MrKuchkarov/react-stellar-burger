import React from 'react';
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import UserForm from "../../components/user-form/user-form";
import style from "./profile.module.css";

const ProfilePage = () => {
    return (
        <div className={`${style["container"]}`}>
            <ProfileNavigation/>
            <UserForm/>
        </div>
    );
};

export {ProfilePage};