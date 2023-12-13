import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    setError,
    setLoading,
    setOrderNumber,
} from "../services/orderDetailsSlice.js/orderDetailsSlice";
import {getCookie} from "./cookie";
import {BURGER_API_URL} from "./consts";
import {clearIngredients} from "../services/constructorSlice/constructorSlice";

const ApiGetTheIngredients = `${BURGER_API_URL}/ingredients`;
const ApiOrderDetails = `${BURGER_API_URL}/orders`;
// Получение список заказов


export const fetchIngredients = createAsyncThunk(
    "ingredients/fetchIngredients",
    async (_, {rejectWithValue}) => {
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
            return rejectWithValue((err as Error).message.toString());
        }
    }
);

// Получение номер заказа
export const makeOrder = createAsyncThunk(
    "order/makeOrder",
    async (ingredientIds: string[], {rejectWithValue, dispatch}) => {
        try {
            dispatch(setLoading(true));
            const token = getCookie("accessToken");
            const response = await fetch(ApiOrderDetails, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token || "",
                },
                body: JSON.stringify({ingredients: ingredientIds}),
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
                dispatch(clearIngredients())
            } else {
                throw new Error("Ошибка при запросе к API или при оформлении заказа");
            }
        } catch (error: any) {
            console.error(error);
            dispatch(setError(error.message));
            return rejectWithValue((error as Error).message);
        } finally {
            dispatch(setLoading(false));
        }
    }
);
