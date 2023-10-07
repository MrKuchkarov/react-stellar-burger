import React, {useMemo} from "react";
import style from "./burger-cards.module.css";
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import {hideModal} from "../../../services/ingredientsSlice/ingredientsSlice";
import IngredientCard from "./IngredientCard";
import PropTypes from "prop-types";

const BurgerCards = ({bunRef, sauceRef, mainRef}) => {
    const ingredients = useSelector((state) => state.ingredients.ingredients);
    const visible = useSelector((state) => state.ingredients.visible)
    const ingredientsTypes = [...new Set(ingredients.map((card) => card.type))];
    const dispatch = useDispatch();

    // Фильтрация игрениентов по катигориям
    const categorizedIngredients = useMemo(() => {
        const result = {
            buns: ingredients.filter((item) => item.type === "bun"),
            sauces: ingredients.filter((item) => item.type === "sauce"),
            mains: ingredients.filter((item) => item.type === "main"),
        };
        return result;
    }, [ingredients]);

    const handleCloseModal = (card) => {
        dispatch(hideModal());
    };


    return (
        <>
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
                                categorizedIngredients.buns.map((ingredients) => (
                                    <li
                                        key={ingredients._id}
                                        ref={bunRef}
                                    >
                                        <IngredientCard ingredients={ingredients}/>
                                    </li>
                                ))}
                            {type === "sauce" &&
                                categorizedIngredients.sauces.map((ingredients) => (
                                    <li
                                        key={ingredients._id}
                                        ref={sauceRef}
                                    >
                                        <IngredientCard ingredients={ingredients}/>
                                    </li>
                                ))}
                            {type === "main" &&
                                categorizedIngredients.mains.map((ingredients) => (
                                    <li
                                        key={ingredients._id}
                                        ref={mainRef}
                                    >
                                        <IngredientCard ingredients={ingredients}/>
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

BurgerCards.propTypes = {
    bunRef: PropTypes.func.isRequired,
    sauceRef: PropTypes.func.isRequired,
    mainRef: PropTypes.func.isRequired,
};

export default BurgerCards;
