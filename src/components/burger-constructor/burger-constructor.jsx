import React from "react";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import bun2 from "../../images/constructor/ingredient item/bun2.png"
import BurgerFillings from "./components/burger-fillings";
import style from "./burger-constructor.module.css"
import BurgerTotalPrice from "./components/burger-total-price";

const BurgerConstructor = () => {
    return (
         <section className={`${style["main-container"]}`}>
            <div className={style["constructor-container"]}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={bun2}
            />
            </div>
             <ul className={`${style["burger-fillings"]} custom-scroll`}>
                 <BurgerFillings />
             </ul>
             <div className={style["constructor-container"]}>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={bun2}
            />
                 <BurgerTotalPrice />
             </div>
        </section>

    )
}

export default BurgerConstructor;