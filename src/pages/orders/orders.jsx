import React from 'react';
import style from "../feed/feed.module.css";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import {OrderList} from "../../components/orderList/order-list";
import {useAuthSocket} from "../../hooks/useAuthSocket";

const OrdersPage = () => {
    useAuthSocket()
    return (
        <div className={`${style["container-order"]}`}>
            <ProfileNavigation/>
            <OrderList showStatus={true} useUnOrders={false}/>
        </div>
    );
};

export {OrdersPage};