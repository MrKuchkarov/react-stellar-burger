import React, {useMemo} from "react";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerFillings from "./components/burger-fillings";
import style from "./burger-constructor.module.css";
import BurgerTotalPrice from "./components/burger-total-price";

import {selectFillingBun, selectFillingOther} from "../../services/constructorSlice/constructor-selector";
import {useAppSelector} from "../../services/store/store";
import useIngredientDrop from "../../hooks/useIngredientDrop";


const BurgerConstructor = () => {
    const seBun = useAppSelector(selectFillingBun);
    const setOther = useAppSelector(selectFillingOther);
    // Checking if there is a selected bun and other ingredients
    const bun = seBun || null;
    const otherIngredients = useMemo(() => setOther || [], [setOther]);

    // Getting the upper and lower buns
    const topBun = bun;
    const bottomBun = bun;
    //

    // Condition if the constructor is empty, you cannot place an order.
    const isOrderButtonEnabled = topBun && otherIngredients.length > 0;

    // DROP to add ingredients to the constructor
    const {dropTarget, border} = useIngredientDrop();

    return (
        <section className={style["main-container"]} ref={dropTarget}>
            <div className={style["constructor-container"]}>
                {topBun && (
                    <ConstructorElement
                        key={topBun._id}
                        type="top"
                        isLocked={true}
                        text={`(${topBun.name}) (верх)`}
                        price={topBun.price}
                        thumbnail={topBun.image}
                    />
                )}
                {!topBun && (
                    <div className={`${style["top-buns-container"]}`} style={{border}}>
                        {/* The container that is displayed when topBun is null */}
                        Добавьте булку, чтобы создать бургер
                    </div>
                )}
            </div>
            {otherIngredients.length === 0 ? (
                <div className={`${style["other-ingredients-container"]}`} style={{border}}>
                    Добавьте ингредиенты, чтобы создать бургер
                </div>
            ) : (
                <ul className={`${style["burger-fillings"]} custom-scroll`}>
                    {otherIngredients.map((filling, index) => (
                        <BurgerFillings
                            key={filling.key}
                            filling={filling}
                            index={index}
                        />
                    ))}
                </ul>
            )}
            <div className={style["constructor-container"]}>
                {bottomBun && (
                    <ConstructorElement
                        key={bottomBun._id}
                        type="bottom"
                        isLocked={true}
                        text={`(${bottomBun.name}) (низ)`}
                        price={bottomBun.price}
                        thumbnail={bottomBun.image}
                    />
                )}
                {!bottomBun && (
                    <div className={`${style["bottom-buns-container"]}`} style={{border}}>
                        {/* The container that is displayed when bottomBun is null */}
                        Добавьте булку, чтобы создать бургер
                    </div>
                )}
                <BurgerTotalPrice isOrderButtonEnabled={isOrderButtonEnabled}/>
            </div>
        </section>
    );
};
export default BurgerConstructor;
