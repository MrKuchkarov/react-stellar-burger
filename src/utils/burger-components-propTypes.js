import PropTypes from "prop-types";

const BurgerComponentsPropTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })).isRequired,
};

export const BurgerIngredientsPropTypes = {
    filling: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
            proteins: PropTypes.number.isRequired,
            fat: PropTypes.number.isRequired,
            carbohydrates: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            _v: PropTypes.number.isRequired,
            _id: PropTypes.string.isRequired,
            key: PropTypes.string.isRequired,
        })),
        PropTypes.object,
    ]).isRequired,
    index: PropTypes.number.isRequired
};

export default BurgerComponentsPropTypes;