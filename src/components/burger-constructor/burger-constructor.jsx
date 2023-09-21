import React, {useEffect, useReducer} from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerFillings from "./components/burger-fillings";
import style from "./burger-constructor.module.css";
import BurgerTotalPrice from "./components/burger-total-price";
import { BurgerContext } from "../..";
// import priceReducer from "../../services/reducers";
// import {useBurgerPrice} from "../../services/reducers";

const BurgerConstructor = () => {
  //Извлечение список ингредиентов из контекста
  const { selectedIngredients } = React.useContext(BurgerContext);

  // const { burgerPrice, setBurgerPrice } = useBurgerPrice(); // Используем хук для установки и получения стоимости

  // // Обновляем стоимость бургера при добавлении или удалении ингредиентов
  // const updateBurgerPrice = () => {
  //   const bunPrice = bunItems.length > 0 ? bunItems[0].price * 2 : 0;
  //   // Дополнительно вычисляем стоимость остальных ингредиентов и добавляем к bunPrice
  //   // ...

  //   setBurgerPrice(bunPrice);
  // };

  // // Вызываем функцию обновления стоимости при монтировании компонента
  // useEffect(() => {
  //   updateBurgerPrice();
  // }, [selectedIngredients]);


  // // Используется useReducer для управления состоянием стоимости
  // const [totalPrice, dispatch] = useReducer(priceReducer, 0);

  // Вычисление общую стоимость бургера
  const ingredientsTotalPrice = selectedIngredients.reduce((acc, bun) => acc + bun.price, 0);

  //Фильтрация список игредиентов(булок)
  const bunItems = selectedIngredients.filter((item) => item.type === "bun");
  // const fillingItems = selectedIngredients.filter((item) => item.type !== "bun");

console.log(ingredientsTotalPrice)
  return (
    <section className={style["main-container"]}>
      <div className={style["constructor-container"]}>
        {bunItems.map((item ) => (
          <ConstructorElement
            key={item._id}
            type="bun"
            isLocked={true}
            text={`(${item.name}) (верх)`}
            price={item.price}
            thumbnail={item.image}
          />
        ))}
      </div>
      <BurgerFillings />
      <div className={style["constructor-container"]}>
        {bunItems.map((item) => (
          <ConstructorElement
            key={item._id}
            type="bun"
            isLocked={true}
            text={`(${item.name}) (низ)`}
            price={item.price}
            thumbnail={item.image}
          />
        ))}
        <BurgerTotalPrice totalPrice={ingredientsTotalPrice}/>
      </div>
    </section>
  );
};

export default BurgerConstructor;