import React from 'react';
import style from "../feed/feed.module.css";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import {OrderList} from "../../components/orderList/order-list";

const OrdersPage = () => {
    return (
        <div className={`${style["container"]}`}>
            <ProfileNavigation/>
            <OrderList/>
        </div>
    );
};

export {OrdersPage};