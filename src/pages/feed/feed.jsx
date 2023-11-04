import React from 'react';
import style from "./feed.module.css";
import {OrderList} from "../../components/orderList/order-list";

const FeedPage = () => {
    return (
        <div className={`${style["container"]}`}>
            <OrderList/>
            {/*<Dashboard/>*/}
        </div>
    );
};

export {FeedPage};