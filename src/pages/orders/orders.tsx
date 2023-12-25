import React from 'react';
import style from "../feed/feed.module.css";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import {OrderList} from "../../components/orderList/order-list";
import {useSocket} from "../../hooks/useSocket";

const OrdersPage = () => {
    useSocket({useSocketActions: true});
    return (
        <div className={`${style["container-order"]}`}>
            <ProfileNavigation/>
            <OrderList showStatus={true} useUnOrders={false}/>
        </div>
    );
};

export {OrdersPage};