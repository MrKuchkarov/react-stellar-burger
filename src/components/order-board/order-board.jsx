import React, {useMemo} from "react";
import style from "./order-board.module.css";
import {useSelector} from "react-redux";
import {selectUnWebSocket} from "../../services/webSocketSlice/unauth-ws-selector";


const OrderBoard = () => {
    const {total, totalToday, UnOrders} = useSelector(selectUnWebSocket)

    const statusOrders = useMemo(() => ({
        successfulOrders: UnOrders.filter((order) => order.status === "done"),
        ordersArePending: UnOrders.filter((order) => order.status === "pending")
    }), [UnOrders])

    return (
        <section className={`${style["container"]}`}>
            <div className={`${style["container-list"]}`}>
                <div className={`${style["dashboard-status"]}`}>
                    <p className={`${style["dashboard-status-title"]} text text_type_main-medium mb-6`}>Готовы:</p>
                    <ul className={`${style["dashboard-list"]} text text_type_digits-default text_color_success`}>
                        {statusOrders.successfulOrders.slice(0, 20).map((order) => (
                            <li
                                key={order._id}
                                className={`${style["dashboard-list-items"]} text text_type_digits-default`}
                            >
                                {order.number}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`${style[""]}`}>
                    <p className={`${style["dashboard-status-title"]} text text_type_main-medium mb-6`}>В работе:</p>
                    <ul className={`${style["dashboard-list"]}`}>
                        {statusOrders.ordersArePending.length > 0 ? (
                            statusOrders.ordersArePending.map((order) =>
                                <li
                                    key={order._id}
                                    className={`${style["dashboard-list-items"]} text text_type_digits-default`}
                                >
                                    {order.number}
                                </li>)
                        ) : (
                            <p className={`${style[""]} text text_type_main-small`}>
                                Нет активных заказов
                            </p>
                        )}
                    </ul>
                </div>
            </div>
            <div className={`${style["container-total"]}`}>
                <p className={`${style[""]} text text_type_main-medium`}>
                    Выполнено за все время:
                </p>
                <p className={`${style["title-total"]} text text_type_digits-large`}>
                    {total}
                </p>
            </div>
            <div className={`${style["container-total-today"]}`}>
                <p className={`${style[""]} text text_type_main-medium`}>
                    Выполнено за сегодня:
                </p>
                <p className={`${style["title-total"]} text text_type_digits-large`}>
                    {totalToday}
                </p>
            </div>
        </section>
    );
};

export {OrderBoard};