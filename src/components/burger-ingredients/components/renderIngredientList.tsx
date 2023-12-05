import style from "./burger-cards.module.css"
import {Link} from "react-router-dom";
import IngredientCard from "./IngredientCard";
import {RefObject} from "react";
import {IIngredient} from "../../../types";

interface RenderIngredientListProps {
    type: string; // Замените на более конкретный тип, если он известен
    ingredients: IIngredient[]; // Массив ингредиентов типа IIngredient
    ref: RefObject<HTMLLIElement>; // Тип ссылки для элемента списка
    location: string; // Или более точный тип для объекта location, если он известен
}

export const renderIngredientList = ({type, ingredients, ref, location}: RenderIngredientListProps) => {
    if (!ingredients || ingredients.length === 0) {
        return null; // Или любой другой код, который вы считаете подходящим
    }
    return (
        <ul className={`${style["cards-list"]} `}>
            {ingredients.map((ingredient) => (
                <Link
                    key={ingredient._id}
                    to={`ingredients/${ingredient._id}`}
                    state={{background: location}}
                    className={style.link}
                >
                    <li ref={ref}>
                        <IngredientCard ingredients={ingredient}/>
                    </li>
                </Link>
            ))}
        </ul>
    );
};