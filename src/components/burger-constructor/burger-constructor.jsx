import React, {useMemo} from "react";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerFillings from "./components/burger-fillings";
import style from "./burger-constructor.module.css";
import BurgerTotalPrice from "./components/burger-total-price";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {addOtherIngredient, setBun} from "../../services/constructorSlice/constructorSlice";
import {selectFillingBun, selectFillingOther} from "../../services/constructorSlice/constructor-selector";

const BurgerConstructor = () => {
    const seBun = useSelector(selectFillingBun);
    const setOther = useSelector(selectFillingOther);
    const dispatch = useDispatch();

    // Проверка, есть ли выбранная булка и другие ингредиенты
    const bun = seBun || null;
    const otherIngredients = setOther || [];

    // Получение верхней и нижней булки
    const topBun = bun;
    const bottomBun = bun;

    // Вычисление общей стоимости ингредиентов
    const ingredientsTotalPrice = useMemo(() => {
        const bunPrice =
            (topBun ? topBun.price : 0) + (bottomBun ? bottomBun.price : 0);
        const otherIngredientsPrice = [...otherIngredients].reduce(
            (acc, ingredient) => acc + (ingredient ? ingredient.price : 0),
            0
        );
        return bunPrice + otherIngredientsPrice;
    }, [topBun, bottomBun, otherIngredients]);

    // Условие есть констурктор пустой, нельзя оформлять заказ.
    const isOrderButtonEnabled = topBun && otherIngredients.length > 0;

    //DROP для добавление ингредиентов в конструктор
    const [{isOver, canDrop}, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(ingredient) {
            dispatch(
                ingredient.type !== 'bun'
                    ? addOtherIngredient(ingredient)
                    : setBun(ingredient)
            );
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    let border = 'transparent';
    if (canDrop && isOver) {
        border = '2px dashed green';
    } else if (canDrop) {
        border = '2px dashed aquamarine';
    }

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
                        {/* Контейнер, который отображается, когда topBun равно null */}
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
                        {/* Контейнер, который отображается, когда bottomBun равно null */}
                        Добавьте булку, чтобы создать бургер
                    </div>
                )}
                <BurgerTotalPrice totalPrice={ingredientsTotalPrice} isOrderButtonEnabled={isOrderButtonEnabled}/>
            </div>
        </section>
    );
};
export default BurgerConstructor;
