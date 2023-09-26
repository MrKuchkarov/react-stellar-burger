import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const ApiGetTheIngredients =
  "https://norma.nomoreparties.space/api/ingredients";
const ApiOrderDetails = "https://norma.nomoreparties.space/api/orders";

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(ApiGetTheIngredients);

      if (!response.ok) {
        throw new Error('Ошибка при запросе к API');
      }

      const result = await response.json();

      if (result && result.success && Array.isArray(result.data)) {
        return result.data;
      } else {
        throw new Error('Неверный формат данных');
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

//Запрос для получения номера заказов
const makeOrder = async (ingredientIds) => {
  try {
    const response = await axios.post(ApiOrderDetails, {
      ingredients: ingredientIds,
    });

    // Проверяю успешность запроса и наличие номера заказа в ответе
    if (
      response.status === 200 &&
      response.data.success &&
      response.data.order &&
      response.data.order.number
    ) {
      return response.data.order.number;
    } else {
      throw new Error("Ошибка при запросе к API или при оформлении заказа");
    }
  } catch (error) {
    throw error("Ошибка при оформлении заказа:", error); // Можно обработать ошибку здесь или передать её наверх
  }
};

export default makeOrder;
