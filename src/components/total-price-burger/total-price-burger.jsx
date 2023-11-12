import React from 'react';
import PropTypes from 'prop-types';
import style from "./total-price-burger.module.css"
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const TotalPriceBurger = props => {
    const {sum, bigPrice, count} = props;

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

TotalPriceBurger.propTypes = {
    sum: PropTypes.number.isRequired,
    bigPrice: PropTypes.bool,
    count: PropTypes.number,
};

export default TotalPriceBurger;