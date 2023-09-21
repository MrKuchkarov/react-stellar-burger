import React, {useReducer} from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerFillings from "./components/burger-fillings";
import style from "./burger-constructor.module.css";
import BurgerTotalPrice from "./components/burger-total-price";
import { BurgerContext } from "../..";

  // Созданиеreducer для обновления состояния стоимости
  const priceReducer = (state, action) => {
    switch (action.type) {
      case "ADD_INGREDIENT":
        return state + action.payload.price;
      case "REMOVE_INGREDIENT":
        return state - action.payload.price;
      default:
        return state;
    }
  };

const BurgerConstructor = () => {

  // Используется useReducer для управления состоянием стоимости
  const [totalPrice, dispatch] = useReducer(priceReducer, 0);

  //Извлечение список ингредиентов из контекста
  const { selectedIngredients } = React.useContext(BurgerContext);

  const bunItems = selectedIngredients.filter((item) => item.type === "bun");
  // const fillingItems = selectedIngredients.filter((item) => item.type !== "bun");

  // Вычисление общую стоимость бургера
  const burgerPrice = selectedIngredients.reduce((acc, bun) => acc + bun.price, 0);

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
        <BurgerTotalPrice totalPrice={burgerPrice}/>
      </div>
    </section>
  );
};

export default BurgerConstructor;