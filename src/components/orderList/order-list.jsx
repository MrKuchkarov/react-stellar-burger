import React from "react";
import style from "./order-list.module.css"
import {OrderCards} from "../order-cards/order-cards";
import {useSelector} from "react-redux";
import {selectOrders} from "../../services/webSocketSlice/ws-selector";

const OrderList = ({showStatus}) => {
    const orders = useSelector(selectOrders);
    return (
        <ul className={`${style["container"]} custom-scroll`}>
            {
                orders.map(order => <OrderCards key={order._id} {...order} showStatus={showStatus}/>)
            }
        </ul>
    );
};

export {OrderList};