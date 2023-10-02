import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  setError,
  setLoading,
  setOrderNumber,
} from "../services/orderDetailsSlice.js/orderDetailsSlice";
const ApiGetTheIngredients ="https://norma.nomoreparties.space/api/ingredients";
const ApiOrderDetails = "https://norma.nomoreparties.space/api/orders";
// Получение список заказов
export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(ApiGetTheIngredients);

      if (!response.ok) {
        throw new Error("Ошибка при запросе к API");
      }

      const result = await response.json();

      if (result && result.success && Array.isArray(result.data)) {
        return result.data;
      } else {
        throw new Error("Неверный формат данных");
      }
    } catch (err) {
      console.error(err);
      return rejectWithValue(err.message);
    }
  }
);
// Получение номер заказа
export const makeOrder = createAsyncThunk(
  "order/makeOrder",
  async (ingredientIds, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setLoading(true));

      const response = await fetch(ApiOrderDetails, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients: ingredientIds }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при запросе к API или при оформлении заказа");
      }

      const responseData = await response.json();

      if (
        responseData.success &&
        responseData.order &&
        responseData.order.number
      ) {
        dispatch(setOrderNumber(responseData.order.number));
      } else {
        throw new Error("Ошибка при запросе к API или при оформлении заказа");
      }
    } catch (error) {
      console.error(error);
      dispatch(setError(error.message));
      return rejectWithValue(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
);
