import React, {useMemo} from "react";
import style from "./IngredientCard.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientsDetails} from "../../../services/ingredientDetailsSlice/ingredientDetailsSlice";
import {showModal} from "../../../services/ingredientsSlice/ingredientsSlice";
import {useDispatch, useSelector} from "react-redux";
import {useDrag} from "react-dnd";

const IngredientCard = ({ingredients}) => {
    const dispatch = useDispatch();
    const other = useSelector((state) => state.filling.other)
    const bun = useSelector((state) => state.filling.bun)

    const handleOpenModal = (ingredients) => {
        dispatch(ingredientsDetails(ingredients));
        dispatch(showModal());
    };

    //drag для добавление ингредиентов в конструктор
    const [{isDrag}, ingredientDragRef] = useDrag({
        type: 'ingredient',
        item: ingredients,
        collect: (monitor) => ({
            isDrag: monitor.isDragging(),
        }),
    });

    //Счетчик для ингредиентов
    const count = useMemo(() => {
        let count = 0;
        if (ingredients.type === "bun") {
            if (bun !== null && bun._id === ingredients._id) {
                count = 2;
            }
        } else {
            other.forEach((filling) => {
                if (filling._id === ingredients._id) {
                    count += 1;
                }
            });
        }
        return count;
    }, [ingredients.type, bun, other]);


    return (
        <>
            {!isDrag && (<div className={`${style["cards"]}`}
                              onClick={() => handleOpenModal(ingredients)}
                              ref={ingredientDragRef}>
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
            )}
        </>
    );
};

export default IngredientCard;