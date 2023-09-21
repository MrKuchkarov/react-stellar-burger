// import { useReducer } from "react";

// const initialState = {
//   burgerPrice: 0,
// };

// const burgerPriceReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_BURGER_PRICE":
//       return {
//         ...state,
//         burgerPrice: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const useBurgerPrice = () => {
//   const [state, dispatch] = useReducer(burgerPriceReducer, initialState);

//   const setBurgerPrice = (price) => {
//     dispatch({ type: "SET_BURGER_PRICE", payload: price });
//   };

//   return { burgerPrice: state.burgerPrice, setBurgerPrice };
// };



// // Создайте reducer для обновления состояния стоимости
// const priceReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_INGREDIENT":
//       return state + action.payload.price;
//     case "REMOVE_INGREDIENT":
//       return state - action.payload.price;
//     default:
//       return state;
//   }
// };

// export default priceReducer;