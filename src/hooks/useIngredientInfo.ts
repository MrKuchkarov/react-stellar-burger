import {useSelector} from "react-redux";
import {selectIngredients} from "../services/ingredientsSlice/ingredients-selector";
import {IIngredientsWithCount} from "../types";
import {useAppSelector} from "../services/store/store";

const useIngredientInfo = (ingredientsId: string[] | null): IIngredientsWithCount[] | null => {
    const allIngredients = useAppSelector(selectIngredients);

    if (!Array.isArray(ingredientsId) || ingredientsId.length === 0) {
        return null;
    }

    const ingredientsWithInfo = ingredientsId.map((id) =>
        allIngredients.find((ingredient) => ingredient._id === id),
    ).filter((ingredient): ingredient is IIngredientsWithCount => ingredient !== undefined);

    if (ingredientsWithInfo.length !== ingredientsId.length) {
        return null;
    }

    const uniqueIngredients = Array.from(new Set(ingredientsWithInfo));
    return uniqueIngredients.map((ingredient) => ({
        ...ingredient!,
        count: ingredientsWithInfo.reduce((count, item) => {
            if (ingredient!._id === item!._id) {
                count += 1;
            }
            return count;
        }, 0),
    })) as IIngredientsWithCount[];
};

export default useIngredientInfo;
