import React from "react";
import style from "./order-list.module.css"
import {OrderCards} from "../order-cards/order-cards";
import {useSelector} from "react-redux";
import {selectUnOrders} from "../../services/webSocketSlice/unauth-ws-selector";
import {selectOrders} from "../../services/webSocketSlice/auth-ws-selector";

const OrderList = ({showStatus, useUnOrders}) => {
    const orders = useSelector(useUnOrders ? selectUnOrders : selectOrders);
    // Проверяю, что orders не является undefined или null, и также что массив не пуст
    return (orders && orders.length > 0) ? (
        <ul className={`${style["container"]} custom-scroll`}>
            {
                orders.map(order => <OrderCards key={order._id} {...order} showStatus={showStatus}/>)
            }
        </ul>
    ) : (
        // Если orders пуст или не определен, вернул сообщение(компонент) "заказов нет"
        <p className={`${style["null-orders"]} text text_type_main-medium`}>Заказов нет, попробуйте обнавить ленту
            заказов</p>
    )
};

export {OrderList};