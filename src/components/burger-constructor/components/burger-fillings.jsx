import React from "react";
import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-fillings.module.css";
import { v4 as uuidv4 } from "uuid";
import {
  removeOtherIngredient,
  setBun,
} from "../../../services/constructorSlice/constructorSlice";
import { useDispatch, useSelector } from "react-redux";

const BurgerFillings = ({ dropTarget }) => {
  const dispatch = useDispatch();
  const bun = useSelector((state) => state.filling.bun);
  const otherIngredients = useSelector((state) => state.filling.other);

  const removeIngredient = (ingredientId) => {
    if (bun && bun._id === ingredientId) {
      dispatch(setBun(null));
    } else {
      dispatch(removeOtherIngredient(ingredientId));
    }
  };

  const ingredientsList = [...otherIngredients].filter(Boolean);

  return (
    <>
      <ul className={`${style["burger-fillings"]} custom-scroll`}>
        {ingredientsList.map((ingredient) => (
          <li
            key={uuidv4()}
            className={`${style["fillings-container"]} mt-4 mb-4`}
            ref={dropTarget}
          >
            <DragIcon />
            <div
              className={`${style["filling-composition"]} pt-4 pr-6 pb-4 pl-6`}
            >
              <img
                src={ingredient.image}
                alt=""
                className={`${style["composition-images"]}`}
              />
              <span
                className={`${style["composition-title"]} text text_type_main-default mr-5`}
              >
                {ingredient.name}
              </span>
              <div className={`${style["container-price"]} mr-4`}>
                <span
                  className={`${style["filling-price"]} text text_type_digits-default`}
                >
                  {ingredient.price}
                </span>
                <CurrencyIcon type="primary" />
              </div>
              <DeleteIcon
                type="primary"
                onClick={() => removeIngredient(ingredient._id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BurgerFillings;
