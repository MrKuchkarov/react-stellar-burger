import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import {selectIngredients} from "../services/ingredientsSlice/ingredients-selector";

const useIngredientInfo = (ingredientsId) => {
    const allIngredients = useSelector(selectIngredients);

    if (!Array.isArray(ingredientsId) || ingredientsId.length === 0) {
        // Если ingredientsId не является массивом или пуст, вернул пустой массив или null;
        return []; // Или return null;
    }
    const ingredientsWithInfo = ingredientsId.map((id) =>
        allIngredients.find((ingredients) => ingredients._id === id),
    );

    // Проверяю, что в массиве нет undefined
    if (ingredientsWithInfo.includes(undefined)) {
        return null;
    }

    const uniqueIngredients = Array.from(new Set(ingredientsWithInfo));
    return uniqueIngredients.map((ingredients) => ({
        ...ingredients,
        count: ingredientsWithInfo.reduce((count, item) => {
            if (ingredients._id === item._id) {
                count += 1;
            }
            return count;
        }, 0),
    }));
};

useIngredientInfo.propTypes = {
    ingredientsId: PropTypes.array.isRequired,
};

export default useIngredientInfo;