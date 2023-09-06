import PropTypes from "prop-types";

const BurgerComponentsPropTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,

  })).isRequired,
};


export default BurgerComponentsPropTypes;