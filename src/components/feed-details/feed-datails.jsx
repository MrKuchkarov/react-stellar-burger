import React from 'react';
import style from "./feed-details.module.css";
import {CurrencyIcon, FormattedDate} from "@ya.praktikum/react-developer-burger-ui-components";

const FeedDetails = () => {

    return (
        <section className={`${style["container-feed-details"]} `}>
            <p className={`${style["order-number"]} `}>#696969</p>
            <h1 className={`${style["title-ingredients"]} `}>Black Hole Singularity острый бургер</h1>
            <p className={`${style["burger-status"]} `}>Выполнен</p>
            <h2 className={`${style["composition-burger"]} `}>Состав:</h2>
            <ul className={`${style["lists"]} `}>
                <li className={`${style["list-ingredients"]} `}>
                    <img className={`${style["image-ingredients"]} `} src="" alt=""/>
                    <p className={`${style["name-ingredients"]} `}>Флюоресцентная булка R2-D3</p>
                    <span className={`${style["ingredients-price"]} text text_type_digits-default`}>
                        6969
                        <CurrencyIcon type={'primary'}/>
                    </span>
                </li>
            </ul>
            <div>
                <FormattedDate
                    date={new Date()}
                    className={`text text_type_main-default text_color_inactive`}
                />
                <span className={`${style["ingredients-price"]} text text_type_digits-default`}>
                        6969
                        <CurrencyIcon type={'primary'}/>
                    </span>
            </div>
        </section>
    );
};

export {FeedDetails};