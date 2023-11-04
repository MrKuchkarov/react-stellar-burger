import React from "react";
import style from "./order-list.module.css"
import {OrderCards} from "../order-cards/order-cards";

const OrderList = () => {
    return (
        <ul>
            <OrderCards/>
        </ul>
    );
};

export {OrderList};