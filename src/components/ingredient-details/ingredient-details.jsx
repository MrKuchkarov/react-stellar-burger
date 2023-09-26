import React from "react";
import style from "./ingredient-details.module.css";
import { useSelector } from "react-redux";
const IngredientDetails = () => {
  const data = useSelector((state) => state.ingredients.selectedCard);
  
  if (!data) return null;
  return (
    <>
      <section className={`${style["container-details"]} `}>
        <img
          className={`${style["image-details"]} `}
          src={data.image}
          alt={data.name}
        />
        <p
          className={`${style["description-details"]} text text_type_main-medium pt-4 pb-8`}
        >
          {data.name}
        </p>
        <div className={`${style["energy-value"]} pb-15`}>
          <p className={`${style["text"]} text text_type_main-default`}>
            Калории,ккал
          </p>
          <span
            className={`${style["calories"]} text text_type_digits-default`}
          >
            {data.calories}
          </span>
          <p className={`${style["text"]} text text_type_main-default`}>
            Белки, г
          </p>
          <span
            className={`${style["proteins"]} text text_type_digits-default`}
          >
            {data.proteins}
          </span>
          <p className={`${style["text"]} text text_type_main-default`}>
            Жиры, г
          </p>
          <span className={`${style["fat"]} text text_type_digits-default`}>
            {data.fat}
          </span>
          <p className={`${style["text"]} text text_type_main-default`}>
            Углеводы, г
          </p>
          <span
            className={`${style["carbohydrates"]} text text_type_digits-default`}
          >
            {data.carbohydrates}
          </span>
        </div>
      </section>
    </>
  );
};



export default IngredientDetails;
