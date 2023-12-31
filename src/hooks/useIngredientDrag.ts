import {useDrag} from "react-dnd";
import {IIngredient} from "../types";

// Drag function for adding ingredients to the constructor
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