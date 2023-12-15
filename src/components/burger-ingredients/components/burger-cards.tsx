import React, {RefObject, useMemo} from "react";
import style from "./burger-cards.module.css";
import {selectIngredients} from "../../../services/ingredientsSlice/ingredients-selector";
import {useLocation} from "react-router-dom";
import {ingredientCategories} from "../../../utils/consts";
import RenderIngredientList from "./renderIngredientList";
import {IIngredient} from "../../../types";
import {useAppSelector} from "../../../services/store/store";

const cardContainerClass = `${style["card-container"]}`;
const titleClass = `${style["title-buns"]} pt-10 pb-5 text text_type_main-medium`;

type TBurgerCardsProps = {
    bunsRef: RefObject<HTMLUListElement>;
    saucesRef: RefObject<HTMLUListElement>;
    mainsRef: RefObject<HTMLUListElement>;
    handleScrollGroups: () => void;
};

const BurgerCards = (({handleScrollGroups, bunsRef, saucesRef, mainsRef}: TBurgerCardsProps) => {
    const ingredients = useAppSelector(selectIngredients);
    const ingredientsTypesSet = new Set(ingredients.map((card: IIngredient) => card.type))
    const ingredientsTypes: string[] = ingredientsTypesSet.size ? [...ingredientsTypesSet] : [];
    const location = useLocation();

    // Фильтрация игрениентов по катигориям
    const categorizedIngredients = useMemo(() => ({
        buns: ingredients.filter((item: IIngredient) => item.type === "bun"),
        sauces: ingredients.filter((item: IIngredient) => item.type === "sauce"),
        mains: ingredients.filter((item: IIngredient) => item.type === "main"),
    }), [ingredients]);


    return (
        <>
            <div className={`${style["scroll-ingredients"]} custom-scroll`} onScroll={handleScrollGroups}>
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
                                ref={bunsRef}
                                location={location.pathname}
                            />
                        }

                        {type === "sauce" &&
                            <RenderIngredientList
                                type={type}
                                ingredients={categorizedIngredients.sauces}
                                ref={saucesRef}
                                location={location.pathname}
                            />
                        }

                        {type === "main" &&
                            <RenderIngredientList
                                type={type}
                                ingredients={categorizedIngredients.mains}
                                ref={mainsRef}
                                location={location.pathname}
                            />
                        }
                    </div>
                ))}
            </div>

        </>
    );
});


export default BurgerCards;
