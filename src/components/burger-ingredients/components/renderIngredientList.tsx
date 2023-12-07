import style from "./burger-cards.module.css"
import {Link} from "react-router-dom";
import IngredientCard from "./IngredientCard";
import {FC, ForwardedRef, forwardRef} from "react";
import {IIngredient} from "../../../types";

interface RenderIngredientListProps {
    type?: string;
    ingredients: IIngredient[];
    ref?: ForwardedRef<HTMLUListElement>;
    location?: string;
}

const RenderIngredientList: FC<RenderIngredientListProps> = forwardRef(({location, ingredients}, ref: ForwardedRef<HTMLUListElement>) => {
    if (!ingredients || ingredients.length === 0) {
        return null; // Или любой другой код, который вы считаете подходящим
    }
    return (
        <ul className={`${style["cards-list"]} `} ref={ref}>
            {ingredients.map((ingredient) => (
                <Link
                    key={ingredient._id}
                    to={`ingredients/${ingredient._id}`}
                    state={{background: location}}
                    className={style.link}
                >
                    <li>
                        <IngredientCard ingredients={ingredient}/>
                    </li>
                </Link>
            ))}
        </ul>
    );
});

export default RenderIngredientList;