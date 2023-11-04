import React from "react";
import style from "./order-cards.module.css";
import {Link, useLocation} from "react-router-dom";
import {ImageList} from "./component/image-list";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";

const OrderCards = () => {
    const location = useLocation();
    return (
        <li className={`${style["list-container"]} custom-scroll`}>
            <Link
                className={`${style["list-link"]} `}
                // to={`${location.pathname}/${_id}`}
                // state={{background: location}}
            >
                <div className={`${style["burger-id-data"]} `}>
                    <p className={`${style["burger-id"]} text text_type_digits-default`}>#696969</p>
                    <FormattedDate
                        date={new Date()}
                        className={`text text_type_main-default text_color_inactive`}
                    />
                </div>
                <div className={`${style["burger-name-container"]} `}>
                    <p className={`${style[""]} text text_type_main-medium`}>Death Star Starship Main бургер</p>
                    <p className={`${style[""]} text text_type_main-default mt-2`}>696969</p>
                </div>
                <div className={`${style["burger-ingredients"]} `}>
                    <ImageList/>
                    <span className={`${style["burger-price"]} text text_type_digits-default`}>
                        6969<CurrencyIcon type={'primary'}/>
                    </span>
                </div>
            </Link>
        </li>
    );
};

export {OrderCards};