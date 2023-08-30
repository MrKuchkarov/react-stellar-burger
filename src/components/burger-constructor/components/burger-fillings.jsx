import React from 'react';
import {CurrencyIcon, DeleteIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-fillings.module.css"
import {data} from "../../../utils/data";

function BurgerFillings() {


    return (
        <>
            <ul className={`${style["burger-fillings"]} custom-scroll`}>
            {data.map(card => (
                <li key={card._id} className={`${style["fillings-container"]} mt-4 mb-4`}>
                    <DragIcon/>
                    <div className={`${style["filling-composition"]} pt-4 pr-6 pb-4 pl-6`}>
                        <img src={card.image} alt="" className={`${style["composition-images"]}`}/>
                        <span className={`${style["composition-title"]} text text_type_main-default mr-5`}>
                        {card.name}
                    </span>
                        <div className={`${style["container-price"]} mr-4`}>
                       <span className={`${style["filling-price"]} text text_type_digits-default`}>
                           {card.price}
                       </span>
                            <CurrencyIcon type="primary"/>
                        </div>
                        <DeleteIcon type="primary"/>
                    </div>
                </li>
            ))}
            </ul>
        </>
    )
}

export default BurgerFillings;