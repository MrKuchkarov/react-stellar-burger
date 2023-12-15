import {useDrag} from "react-dnd";
import {IIngredient} from "../types";

//Функция drag для добавление ингредиентов в конструктор
export const useIngredientDrag = (ingredient: IIngredient) => {

    const [{isDrag}, ingredientDragRef] = useDrag({
        type: 'ingredient',
        item: ingredient,
        collect: (monitor) => ({
            isDrag: monitor.isDragging(),
        }),
    });

    return {isDrag, ingredientDragRef};
};