import {IIngredient} from "../../../types";

// Функция вычисление общей стоимости ингредиентов
export type TCalculateIngredientsTotalPriceProps = {
    topBun: IIngredient | null,
    bottomBun: IIngredient | null,
    otherIngredients: IIngredient[],
}

export const calculateIngredientsTotalPrice = ({
                                                   topBun,
                                                   bottomBun,
                                                   otherIngredients,
                                               }: TCalculateIngredientsTotalPriceProps): number => {
    const bunPrice = (topBun ? topBun.price : 0) + (bottomBun ? bottomBun.price : 0);
    const otherIngredientsPrice = otherIngredients.reduce(
        (acc, ingredient) => acc + (ingredient ? ingredient.price : 0),
        0
    );
    return bunPrice + otherIngredientsPrice;
};