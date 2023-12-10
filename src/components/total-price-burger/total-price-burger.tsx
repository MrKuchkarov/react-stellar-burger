import React, {FC} from 'react';
import style from "./total-price-burger.module.css"
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

type TTotalPriceBurgerProps = {
    sum: number;
    bigPrice?: boolean;
    count?: number;
}
const TotalPriceBurger: FC<TTotalPriceBurgerProps> = ({sum, bigPrice, count}) => {

    return (
        <div className={`${bigPrice ? style["big-icon-constructor"] : ''} ${style["total-container"]}`}>

            {count && (
                <>
                    <span className={`${style[""]} text text_type_digits-default`}
                    >
                        {count}
                    </span>
                    <span className={`${style[""]} text text_type_digits-default`}
                    >
                        x
                    </span>
                </>
            )}
            <span
                className={bigPrice ? "text text_type_digits-medium" : "text text_type_digits-default"}
            >
                {isNaN(sum) ? 0 : sum}
            </span>
            <CurrencyIcon type={'primary'}/>
        </div>
    );
};


export default TotalPriceBurger;