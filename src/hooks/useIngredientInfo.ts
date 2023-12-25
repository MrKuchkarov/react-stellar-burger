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
    ).filter(Boolean); // Filter out undefined values

    if (ingredientsWithInfo.length !== ingredientsId.length) {
        return null;
    }

    const ingredientsWithCount = ingredientsWithInfo.reduce((acc, ingredient) => {
        const existingIngredient = acc.find((item) => item._id === ingredient?._id);
        if (!existingIngredient) {
            acc.push({...ingredient, count: 1} as IIngredientsWithCount);
        } else {
            if (existingIngredient) {
                existingIngredient.count += 1;
            }
        }
        return acc;
    }, [] as IIngredientsWithCount[]);

    return ingredientsWithCount;
};

export default useIngredientInfo;
