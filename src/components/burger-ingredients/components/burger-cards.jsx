import React from "react";
import style from "./burger-cards.module.css"
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {data} from "../../../utils/data";

const BurgerCards = () => {
    const ingredientsTypes = [...new Set(data.map((card) => card.type))];

    return (
        <div className={`${style["scroll-ingredients"]} custom-scroll`}>
            {ingredientsTypes.map((type) => (
                <div key={type} style={{maxWidth: "600px"}}>
                    <h2 className={`${style["title-buns"]} pt-10 pb-5 text text_type_main-medium`}>
                        {type === 'bun' ? 'Булки' : type === 'sauce' ? 'Соусы' : 'Начинки'}</h2>
                    <ul className={`${style["cards-list"]} `}>
                        {data.filter((card) => card.type === type).map((card) => (
                            <li key={card._id} className={`${style["cards"]}`}>
                                <img
                                    className={`${style["cards-photo"]} pl-4 pr-4`}
                                    src={card.image}
                                    alt=""
                                />
                                <div className={style["container-price"]}>
                                    <p className={`${style["cards-price"]} pt-2 pb-2 pr-4 text text_type_digits-default`}>
                                        {card.price}
                                    </p>
                                    <CurrencyIcon type="primary" />
                                </div>
                                <p className={`${style["cards-description"]} text text_type_main-default`}>
                                    {card.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default BurgerCards;
