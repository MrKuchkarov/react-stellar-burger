import style from "./burger-cards.module.css"
import {Link, useLocation} from "react-router-dom";
import IngredientCard from "./IngredientCard";
import {FC, ForwardedRef, forwardRef} from "react";
import {IIngredient} from "../../../types";

interface RenderIngredientListProps {
    type?: string;
    ingredients: IIngredient[];
    ref?: ForwardedRef<HTMLUListElement>;
    location?: string;
}

const RenderIngredientList: FC<RenderIngredientListProps> = forwardRef(({ingredients}, ref: ForwardedRef<HTMLUListElement>) => {
    const location = useLocation();
    if (!ingredients || ingredients.length === 0) {
        return null;
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