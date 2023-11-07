import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import {selectIngredients} from "../services/ingredientsSlice/ingredients-selector";

const useIngredientInfo = (ingredientsId) => {
    const allIngredients = useSelector(selectIngredients);
    const ingredientWithInfo = ingredientsId.map((id) =>
        allIngredients.find((ingredients) => ingredients._id === id),
    );
    const uniqueIngredients = Array.from(new Set(ingredientWithInfo));
    return uniqueIngredients.map((ingredients) => ({
        ...ingredients,
        count: ingredientWithInfo.reduce((count, item) => {
            if (ingredients._id === item._id) {
                count += 1;
            }
            return count;
        }, 0),
    }));
};

useIngredientInfo.propTypes = {
    ingredientsId: PropTypes.string.isRequired,
};

export default useIngredientInfo;