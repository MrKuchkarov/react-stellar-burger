import React from "react";
import style from "./order-list.module.css"
import {OrderCards} from "../order-cards/order-cards";

const OrderList = () => {
    return (
        <ul className={`${style["container"]} custom-scroll`}>
            <OrderCards/>
            <OrderCards/>
            <OrderCards/>
            <OrderCards/>
            <OrderCards/>
            <OrderCards/>
        </ul>
    );
};

export {OrderList};