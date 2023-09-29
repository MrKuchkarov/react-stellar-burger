import React, { useMemo } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerFillings from "./components/burger-fillings";
import style from "./burger-constructor.module.css";
import BurgerTotalPrice from "./components/burger-total-price";
import { useSelector } from "react-redux";

const BurgerConstructor = () => {
  const setBun = useSelector((state) => state.filling.bun);
  const setOther = useSelector((state) => state.filling.other);

  // Проверка, есть ли выбранная булка и другие ингредиенты
  const bun = setBun || null;
  const otherIngredients = setOther || [];

  // Получение верхней и нижней булки
  const topBun = bun;
  const bottomBun = bun;

  // Вычисление общей стоимости ингредиентов
  const ingredientsTotalPrice = useMemo(() => {
    const bunPrice = (topBun ? topBun.price : 0) + (bottomBun ? bottomBun.price : 0);
    const otherIngredientsPrice = otherIngredients.reduce(
      (acc, ingredient) => acc + (ingredient ? ingredient.price : 0),
      0
    );
    return bunPrice + otherIngredientsPrice;
  }, [topBun, bottomBun, otherIngredients]);

  return (
    <section className={style["main-container"]}>
      <div className={style["constructor-container"]}>
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
          </div>
        )}
      </div>
      {otherIngredients.length === 0 ? (
        <div className={`${style["other-ingredients-container"]}`}>Добавьте ингредиенты, чтобы создать бургер</div>
      ) : (
        <BurgerFillings />
      )}
      <div className={style["constructor-container"]}>
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
          </div>
        )}
        <BurgerTotalPrice totalPrice={ingredientsTotalPrice} />
      </div>
    </section>
  );
}
export default BurgerConstructor;
