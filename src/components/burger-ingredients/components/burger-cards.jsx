import React, { useMemo, useState } from "react";
import style from "./burger-cards.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsMenu from "./ingredients-menu";
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { ingredientsDetails } from "../../../services/ingredientDetailsSlice/ingredientDetailsSlice";
import constructorSlice, { setBun, addOtherIngredient } from "../../../services/constructorSlice/constructorSlice";
import IngredientsCounts from "./Ingredients-counts";
import { hideModal, showModal } from "../../../services/ingredientsSlice/ingredientsSlice";
import {useDrag} from "react-dnd";

const BurgerCards = () => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const visible = useSelector((state) => state.ingredients.visible)
  const dispatch = useDispatch();
  const ingredientsTypes = [...new Set(ingredients.map((card) => card.type))];
  // Фильтрация игрениентов по катигориям
  const categorizedIngredients = useMemo(() => {
    const result = {
      buns: ingredients.filter((item) => item.type === "bun"),
      sauces: ingredients.filter((item) => item.type === "sauce"),
      mains: ingredients.filter((item) => item.type === "main"),
    };
    return result;
  }, [ingredients]);

  const handleOpenModal = (card) => {
    dispatch(ingredientsDetails(card));
    dispatch(showModal());

    if (card.type === "bun") {
      // Логика для булок
      dispatch(setBun(card)); // Используйте новое действие для установки булки
    } else {
      // Логика для других ингредиентов
      dispatch(addOtherIngredient(card)); // Используйте новое действие для добавления других ингредиентов
    }
  };

  const handleCloseModal = (card) => {
    dispatch(hideModal());
  };

  // Функция для начала перетаскивания ингредиента булки
  const [, bunDragRef] = useDrag({
    type: "BUN",
    item: { type: "bun" },
  });

  // Функция для начала перетаскивания ингредиента другого типа
  const [, ingredientDragRef] = useDrag({
    type: "INGREDIENT",
    item: { type: "other" },
  });

  return (
    <>
      <IngredientsMenu />
      <div className={`${style["scroll-ingredients"]} custom-scroll`}>
        {ingredientsTypes.map((type) => (
          <div key={type} className={`${style["card-container"]}`}>
            <h2
              id={
                type === "bun"
                  ? "bunSection"
                  : type === "sauce"
                  ? "sauceSection"
                  : "mainSection"
              }
              className={`${style["title-buns"]} pt-10 pb-5 text text_type_main-medium`}
            >
              {type === "bun"
                ? "Булки"
                : type === "sauce"
                ? "Соусы"
                : "Начинки"}
            </h2>
            <ul className={`${style["cards-list"]} `}>
              {type === "bun" &&
                categorizedIngredients.buns.map((card) => (
                  <li
                    key={card._id}
                    className={`${style["cards"]}`}
                    onClick={() => handleOpenModal(card)}
                    ref={bunDragRef}
                  >
                    <IngredientsCounts ingredientId={card._id}/>
                    <img
                      className={`${style["cards-photo"]} pl-4 pr-4`}
                      src={card.image}
                      alt={card.name}
                    />
                    <div className={style["container-price"]}>
                      <p
                        className={`${style["cards-price"]} pt-2 pb-2 pr-4 text text_type_digits-default`}
                      >
                        {card.price}
                      </p>
                      <CurrencyIcon type="primary" />
                    </div>
                    <p
                      className={`${style["cards-description"]} text text_type_main-default`}
                    >
                      {card.name}
                    </p>
                  </li>
                ))}
              {type === "sauce" &&
                categorizedIngredients.sauces.map((card) => (
                  <li
                    key={card._id}
                    className={`${style["cards"]}`}
                    onClick={() => handleOpenModal(card)}
                    ref={ingredientDragRef}
                  >
                    <IngredientsCounts ingredientId={card._id}/>
                    <img
                      className={`${style["cards-photo"]} pl-4 pr-4`}
                      src={card.image}
                      alt={card.name}
                    />
                    <div className={style["container-price"]}>
                      <p
                        className={`${style["cards-price"]} pt-2 pb-2 pr-4 text text_type_digits-default`}
                      >
                        {card.price}
                      </p>
                      <CurrencyIcon type="primary" />
                    </div>
                    <p
                      className={`${style["cards-description"]} text text_type_main-default`}
                    >
                      {card.name}
                    </p>
                  </li>
                ))}
              {type === "main" &&
                categorizedIngredients.mains.map((card) => (
                  <li
                    key={card._id}
                    className={`${style["cards"]}`}
                    onClick={() => handleOpenModal(card)}
                  >
                    <IngredientsCounts ingredientId={card._id}/>
                    <img
                      className={`${style["cards-photo"]} pl-4 pr-4`}
                      src={card.image}
                      alt={card.name}
                    />
                    <div className={style["container-price"]}>
                      <p
                        className={`${style["cards-price"]} pt-2 pb-2 pr-4 text text_type_digits-default`}
                      >
                        {card.price}
                      </p>
                      <CurrencyIcon type="primary" />
                    </div>
                    <p
                      className={`${style["cards-description"]} text text_type_main-default`}
                    >
                      {card.name}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      {visible && (
        <Modal title={"Детали ингредиентов"} closeModal={handleCloseModal}>
          <IngredientDetails></IngredientDetails>
        </Modal>
      )}
    </>
  );
};

export default BurgerCards;
