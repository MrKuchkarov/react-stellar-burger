import React, { useMemo } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerFillings from "./components/burger-fillings";
import style from "./burger-constructor.module.css";
import BurgerTotalPrice from "./components/burger-total-price";
import { BurgerContext } from "../..";

const BurgerConstructor = () => {
  const { selectedIngredients } = React.useContext(BurgerContext);

  // Проверка, есть ли выбранная булка
  const bun = selectedIngredients.bun || null;
  const otherIngredients = selectedIngredients.other || [];

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
      <BurgerFillings />
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
