import React from "react";
import style from "./IngredientCard.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientsCounts from "./Ingredients-counts";
import {ingredientsDetails} from "../../../services/ingredientDetailsSlice/ingredientDetailsSlice";
import {showModal} from "../../../services/ingredientsSlice/ingredientsSlice";
import {useDispatch} from "react-redux";
import {useDrag} from "react-dnd";

const IngredientCard = ({card}) => {
    const dispatch = useDispatch();


    const handleOpenModal = (card) => {
        dispatch(ingredientsDetails(card));
        dispatch(showModal());
    };

    const [{isDrag}, ingredientDragRef] = useDrag({
        type: 'ingredient',
        item: card,
        collect: (monitor) => ({
            isDrag: monitor.isDragging(),
        }),
    });


    return (
        <>
            {!isDrag && (<div className={`${style["cards"]}`}
                              onClick={() => handleOpenModal(card)}
                              ref={ingredientDragRef}>
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
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p
                        className={`${style["cards-description"]} text text_type_main-default`}
                    >
                        {card.name}
                    </p>
                </div>
            )}
        </>
    );
};

export default IngredientCard;