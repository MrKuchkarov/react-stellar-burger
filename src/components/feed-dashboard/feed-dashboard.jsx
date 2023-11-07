import React from "react";
import style from "./feed-dashboard.module.css";
import {useSelector} from "react-redux";
import {selectWebSocket} from "../../services/webSocketSlice/ws-selector";

const FeedDashboard = () => {
    const {total, totalToday, orders} = useSelector(selectWebSocket)

    const successfulOrders = orders.filter((order) => order.status === "done");
    const ordersArePending = orders.filter((order) => order.status === "pending");

    return (
        <section className={`${style["container"]}`}>
            <div className={`${style["container-list"]}`}>
                <div className={`${style["dashboard-status"]}`}>
                    <p className={`${style["dashboard-status-title"]} text text_type_main-medium mb-6`}>Готовы:</p>
                    <ul className={`${style["dashboard-list"]}`}>
                        <li className={`${style["dashboard-list-items"]} text text_type_digits-default`}>
                            696969
                        </li>
                    </ul>
                </div>
                <div className={`${style[""]}`}>
                    <p className={`${style["dashboard-status-title"]} text text_type_main-medium mb-6`}>В работе:</p>
                    <ul className={`${style["dashboard-list"]}`}>
                        <li className={`${style["dashboard-list-items"]} text text_type_digits-default`}>
                            696969
                        </li>
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

export {FeedDashboard};