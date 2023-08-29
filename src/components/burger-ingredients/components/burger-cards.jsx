import React from "react";
import style from "./burger-cards.module.css"
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {data} from "../../../utils/data";



function BurgerCards() {
    return (
        <div className={style.body}>
        <h2 className={`${style.title_buns} pt-10 pb-5 text text_type_main-medium`}>Булки</h2>
        <ul className={`${style.container} custom-scroll`}>
        {data.map(card => (
            <li className={`${style.cards}`}>
                <img className={`${style.cards_photo} pl-4 pr-4`} src={card.image} alt=""/>
                <div className={style.container_price}>
                    <p className={`${style.cards_price} pt-2 pb-2 pr-4 text text_type_digits-default`}>{card.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`${style.cards_description} text text_type_main-default`}>{card.name}</p>
            </li>
            ))}
        </ul>
        </div>
    )
}

export default BurgerCards;
