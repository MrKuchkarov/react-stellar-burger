import React, {useMemo} from "react";
import style from "./IngredientCard.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientsDetails} from "../../../services/ingredientDetailsSlice/ingredientDetailsSlice";
import {showModal} from "../../../services/ingredientsSlice/ingredientsSlice";
import {selectFillingBun, selectFillingOther} from "../../../services/constructorSlice/constructor-selector";
import {useAppDispatch, useAppSelector} from "../../../services/store/store";
import {IIngredient} from "../../../types";
import {useIngredientDrag} from "../../../hooks/useIngredientDrag";

const IngredientCard = ({ingredients}: { ingredients: IIngredient }) => {
    const dispatch = useAppDispatch();
    const bun = useAppSelector(selectFillingBun);
    const other = useAppSelector(selectFillingOther);


    const handleOpenModal = (ingredients: IIngredient) => {
        dispatch(ingredientsDetails(ingredients));
        dispatch(showModal());
    };

    // Drag to add ingredients to the constructor
    const {isDrag, ingredientDragRef} = useIngredientDrag(ingredients);

    // Counter for ingredients
    const count = useMemo(() => {
        let count = 0;
        if (ingredients.type === "bun") {
            if (bun !== null && bun._id === ingredients._id) {
                count = 2;
            }
        } else {
            count = other.reduce((acc, filling) => {
                if (filling._id === ingredients._id) {
                    return acc + 1;
                }
                return acc;
            }, 0);
        }
        return count;
    }, [ingredients.type, bun, other, ingredients._id]);


    return (
        <div
            className={`${style["cards"]} ${isDrag ? style["dragging"] : ""}`}
            onClick={() => handleOpenModal(ingredients)}
            ref={ingredientDragRef}
        >
            {count > 0 && <Counter count={count}/>}
            <img
                className={`${style["cards-photo"]} pl-4 pr-4`}
                src={ingredients.image}
                alt={ingredients.name}
            />
            <div className={style["container-price"]}>
                <p
                    className={`${style["cards-price"]} pt-2 pb-2 pr-4 text text_type_digits-default`}
                >
                    {ingredients.price}
                </p>
                <CurrencyIcon type="primary"/>
            </div>
            <p
                className={`${style["cards-description"]} text text_type_main-default`}
            >
                {ingredients.name}
            </p>
        </div>
    );
};

export default IngredientCard;