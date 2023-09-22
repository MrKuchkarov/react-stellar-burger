import React from 'react';
import { CurrencyIcon, DeleteIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-fillings.module.css";
import { BurgerContext } from '../../..';

const BurgerFillings = () => {
  const { selectedIngredients, setSelectedIngredients } = React.useContext(BurgerContext);

  // Извлечь булочку и другие ингредиенты из выбранного объекта Ingredients
  const { bun, other } = selectedIngredients;

  // Функция удаления ингредиента по идентификатору
  const removeIngredient = (ingredientId) => {
    if (bun && bun._id === ingredientId) {

      // Если ингредиентом является булочка, выньте ее
      setSelectedIngredients((prevIngredients) => ({
        ...prevIngredients,
        bun: [],
      }));
    } else {
      // Если ингредиент не является булочкой, удаляем его из списка "other"
      setSelectedIngredients((prevIngredients) => ({
        ...prevIngredients,
        other: prevIngredients.other.filter((ingredient) => ingredient._id !== ingredientId),
      }));
    }
  };

  // Распределить по булочкам и другим ингредиентам
  const ingredientsList = [];
  if (bun) {
    ingredientsList.push(bun);
  }
  if (other) {
    ingredientsList.push(...other);
  }

  return (
    <>
      <ul className={`${style["burger-fillings"]} custom-scroll`}>
        {ingredientsList.map((ingredient) => (
          <li key={ingredient._id} className={`${style["fillings-container"]} mt-4 mb-4`}>
            <DragIcon />
            <div className={`${style["filling-composition"]} pt-4 pr-6 pb-4 pl-6`}>
              <img src={ingredient.image} alt="" className={`${style["composition-images"]}`} />
              <span className={`${style["composition-title"]} text text_type_main-default mr-5`}>
                {ingredient.name}
              </span>
              <div className={`${style["container-price"]} mr-4`}>
                <span className={`${style["filling-price"]} text text_type_digits-default`}>
                  {ingredient.price}
                </span>
                <CurrencyIcon type="primary" />
              </div>
              <DeleteIcon type="primary" onClick={() => removeIngredient(ingredient._id)} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BurgerFillings;
