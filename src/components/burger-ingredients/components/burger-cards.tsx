import React, {FC, RefObject, useMemo} from "react";
import style from "./burger-cards.module.css";
import {useSelector} from "react-redux";
import {selectIngredients} from "../../../services/ingredientsSlice/ingredients-selector";
import {useLocation} from "react-router-dom";
import {ingredientCategories} from "../../../utils/consts";
import RenderIngredientList from "./renderIngredientList";
import {IIngredient} from "../../../types";

const cardContainerClass = `${style["card-container"]}`;
const titleClass = `${style["title-buns"]} pt-10 pb-5 text text_type_main-medium`;

interface BurgerCardsProps {
    bunRef: RefObject<HTMLLIElement>;
    sauceRef: RefObject<HTMLLIElement>;
    mainRef: RefObject<HTMLLIElement>;
}

const BurgerCards: FC<BurgerCardsProps> = ({bunRef, sauceRef, mainRef}) => {
    const ingredients = useSelector(selectIngredients);
    const ingredientsTypesSet = new Set(ingredients.map((card: IIngredient) => card.type))
    const ingredientsTypes: string[] = ingredientsTypesSet.size ? [...ingredientsTypesSet] : [];
    const location = useLocation();
    // const ingredients = useSelector(selectIngredientById);
    // const ingredientsTypesSet = new Set(ingredients.map((card) => card.type))
    // const ingredientsTypes = [...ingredientsTypesSet]
    // const ingredientsTypes = useIngredientInfo(ingredients)
    // const location = useLocation();

    // Фильтрация игрениентов по катигориям
    const categorizedIngredients = useMemo(() => ({
        buns: ingredients.filter((item: IIngredient) => item.type === "bun"),
        sauces: ingredients.filter((item: IIngredient) => item.type === "sauce"),
        mains: ingredients.filter((item: IIngredient) => item.type === "main"),
    }), [ingredients]);


    return (
        <>
            <div className={`${style["scroll-ingredients"]} custom-scroll`}>
                {ingredientsTypes.length > 0 && ingredientsTypes.map((type) => (
                    <div key={type} className={cardContainerClass}>
                        <h2
                            id={`${type}Section`}
                            className={titleClass}
                        >
                            {ingredientCategories[type]}
                        </h2>
                        {type === "bun" &&
                            <RenderIngredientList
                                type={type}
                                ingredients={categorizedIngredients.buns}
                                ref={bunRef}
                                location={location.pathname}
                            />
                        }

                        {type === "sauce" &&
                            <RenderIngredientList
                                type={type}
                                ingredients={categorizedIngredients.sauces}
                                ref={sauceRef}
                                location={location.pathname}
                            />
                        }

                        {type === "main" &&
                            <RenderIngredientList
                                type={type}
                                ingredients={categorizedIngredients.mains}
                                ref={mainRef}
                                location={location.pathname}
                            />
                        }
                    </div>
                ))}
            </div>

        </>
    );
};


export default BurgerCards;
