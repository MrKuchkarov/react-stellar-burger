import React from 'react';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-total-price.module.css"
import iconPrice from "../../../images/constructor/icon 36x36.svg";

const BurgerTotalPrice = () => {
    return (
        <div>
            <div className={`${style["total-price-container"]} mt-10`}>
                <div className={`${style["total-price"]}`}>
                    <span className={"text text_type_digits-medium"}>
                        610
                    </span>
                    <img src={iconPrice} alt=""/>
                </div>
                    <Button htmlType="button" type="primary" size="large">
                        Нажми на меня
                    </Button>
            </div>
        </div>
    );
};

export default BurgerTotalPrice;