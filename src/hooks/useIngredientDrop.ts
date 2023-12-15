import {useDrop} from 'react-dnd';
import {useAppDispatch} from "../services/store/store";
import {addOtherIngredient, IIngredientWithKey, setBun} from "../services/constructorSlice/constructorSlice";

//Функция DROP для добавление ингредиентов в конструктор
const useIngredientDrop = () => {
    const dispatch = useAppDispatch();
    const [{isOver, canDrop}, dropTarget] = useDrop({
        accept: "ingredient",
        drop: (ingredient: IIngredientWithKey) => {
            dispatch(
                ingredient.type !== "bun"
                    ? addOtherIngredient(ingredient)
                    : setBun(ingredient)
            );
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    let border = "transparent";
    if (canDrop && isOver) {
        border = "2px dashed green";
    } else if (canDrop) {
        border = "2px dashed aquamarine";
    }

    return {dropTarget, border};
};

export default useIngredientDrop;
