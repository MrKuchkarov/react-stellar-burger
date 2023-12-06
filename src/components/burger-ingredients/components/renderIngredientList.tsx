import style from "./burger-cards.module.css"
import {Link} from "react-router-dom";
import IngredientCard from "./IngredientCard";
import {FC, RefObject} from "react";
import {IIngredient} from "../../../types";

interface RenderIngredientListProps {
    type: string;
    ingredients: IIngredient[];
    ref?: RefObject<HTMLLIElement>;
    location?: string;
}

const RenderIngredientList: FC<RenderIngredientListProps> = ({type, ingredients, ref, location}) => {
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

export default RenderIngredientList;