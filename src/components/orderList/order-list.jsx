import React from "react";
import style from "./order-list.module.css"
import {OrderCards} from "../order-cards/order-cards";
import {useSelector} from "react-redux";
import {selectOrders} from "../../services/webSocketSlice/ws-selector";

const OrderList = ({showStatus}) => {
    const orders = useSelector(selectOrders);

    // Проверяю, что orders не является undefined или null, и также что массив не пуст
    return (orders && orders.length > 0) ? (
        <ul className={`${style["container"]} custom-scroll`}>
            {
                orders.map(order => <OrderCards key={order._id} {...order} showStatus={showStatus}/>)
            }
        </ul>
    ) : (
        // Если orders пуст или не определен, вернул сообщение(компонент) "заказов нет"
        <p>Заказов нет</p>
    )
};

export {OrderList};