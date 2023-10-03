import React, { useMemo } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerFillings from "./components/burger-fillings";
import style from "./burger-constructor.module.css";
import BurgerTotalPrice from "./components/burger-total-price";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import { addOtherIngredient, setBun } from "../../services/constructorSlice/constructorSlice";

const BurgerConstructor = () => {
  const seBun = useSelector((state) => state.filling.bun);
  const setOther = useSelector((state) => state.filling.other);
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

console.log(setBun(bun))
    // обработчик перетаскивания для булок
    const [, topBunRef] = useDrop({
        accept: "BUN",
        drop: (item) => {
            if (item.type === "bun") {
                // Логика для булок
                dispatch(setBun(item)); // Используйте новое действие для установки булки
            }
        },
    });

    const [, bottomBunRef] = useDrop({
        accept: "BUN",
        drop: (item) => {
            if (item.type === "bun") {
                // Логика для булок
                dispatch(setBun(item)); // Используйте новое действие для установки булки
            }
        },
    });

    // обработчик перетаскивания для других ингредиентов
    const [, otherRef] = useDrop({
        accept: "INGREDIENT", //
        drop: (item) => {
            if (item.type === "other") {
                // Логика для булок
                dispatch(addOtherIngredient(item)); // Используйте новое действие для установки булки
            }
        },
    });
  return (
    <section className={style["main-container"]} >
      <div className={style["constructor-container"]} ref={topBunRef}>
        {topBun && (
          <ConstructorElement
            key={topBun._id}
            type="bun"
            isLocked={true}
            text={`(${topBun.name}) (верх)`}
            price={topBun.price}
            thumbnail={topBun.image}
          />
        )}
        {!topBun && (
          <div className={`${style["top-buns-container"]}`}>
            {/* Ваш контейнер, который отображается, когда topBun равно null */}
            Добавьте булку, чтобы создать бургер
          </div>
        )}
      </div>
      {otherIngredients.length === 0 ? (
        <div className={`${style["other-ingredients-container"]}`} ref={otherRef}>
          Добавьте ингредиенты, чтобы создать бургер
        </div>
      ) : (
        <BurgerFillings otherRef={otherRef}/>
      )}
      <div className={style["constructor-container"]} ref={bottomBunRef}>
        {bottomBun && (
          <ConstructorElement
            key={bottomBun._id}
            type="bun"
            isLocked={true}
            text={`(${bottomBun.name}) (низ)`}
            price={bottomBun.price}
            thumbnail={bottomBun.image}
          />
        )}
        {!bottomBun && (
          <div className={`${style["bottom-buns-container"]}`}>
            {/* Ваш контейнер, который отображается, когда bottomBun равно null */}
            Добавьте булку, чтобы создать бургер
          </div>
        )}
        <BurgerTotalPrice totalPrice={ingredientsTotalPrice} />
      </div>
    </section>
  );
};
export default BurgerConstructor;
