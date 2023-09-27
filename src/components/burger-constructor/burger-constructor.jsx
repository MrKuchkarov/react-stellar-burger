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

  // Вычисление общей стоимости бургера
  const ingredientsTotalPrice = useMemo(() => {
    return [bun, ...otherIngredients].reduce(
      (acc, ingredient) => acc + (ingredient ? ingredient.price : 0),
      0
    );
  }, [bun, otherIngredients]);

  return (
    <section className={style["main-container"]}>
      <div className={style["constructor-container"]}>
        {bun && (
          <ConstructorElement
            key={bun._id}
            type="bun"
            isLocked={true}
            text={`(${bun.name}) (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        )}
      </div>
      {otherIngredients.length === 0 ? (
          <p>Добавьте ингредиенты, чтобы создать бургер</p>
        ) : (
      <BurgerFillings />
      )}
      <div className={style["constructor-container"]}>
        {bun && (
          <ConstructorElement
            key={bun._id}
            type="bun"
            isLocked={true}
            text={`(${bun.name}) (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        )}
          <BurgerTotalPrice totalPrice={ingredientsTotalPrice} />
      </div>
    </section>
  );
};

export default BurgerConstructor;
