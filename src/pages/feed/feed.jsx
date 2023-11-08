import React from 'react';
import style from "./feed.module.css";
import {OrderList} from "../../components/orderList/order-list";
import {OrderBoard} from "../../components/order-board/order-board";
import {useSocket} from "../../hooks/useSocket";

const FeedPage = () => {
    useSocket()

    return (
        <div className={`${style["container"]} pt-10`}>
            <h1 className={`${style["feed-title"]} text text_type_main-large pl-3`}>Лента заказов</h1>
            <div className={`${style["feed-components"]}`}>
                <OrderList/>
                <OrderBoard/>
            </div>

        </div>
    );
};

export {FeedPage};