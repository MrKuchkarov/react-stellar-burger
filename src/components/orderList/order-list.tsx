import React, {FC} from "react";
import style from "./order-list.module.css"
import {OrderCards} from "../order-cards/order-cards";
import {selectUnOrders} from "../../services/webSocketSlice/UnAuthSocketSlice/unauth-ws-selector";
import {selectOrders} from "../../services/webSocketSlice/AuthSocketSlice/auth-ws-selector";
import {useAppSelector} from "../../services/store/store";

type TOrderListProps = {
    showStatus: boolean;
    useUnOrders?: boolean;
}
const OrderList: FC<TOrderListProps> = ({showStatus, useUnOrders}) => {
    const orders = useAppSelector(useUnOrders ? selectUnOrders : selectOrders);
    // I check that orders is not undefined or null, and also that the array is not empty
    return (orders && orders.length > 0) ? (
        <ul className={`${style["container"]} custom-scroll`}>
            {
                orders.map(order => <OrderCards key={order._id} {...order} showStatus={showStatus}/>)
            }
        </ul>
    ) : (
        // If orders is empty or not defined, returned the message (component) "Заказов нет"
        <p className={`${style["null-orders"]} text text_type_main-medium`}>Заказов нет, попробуйте обнавить ленту
            заказов</p>
    )
};

export {OrderList};