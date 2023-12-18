import {createAsyncThunk} from "@reduxjs/toolkit";
import {ApiGetTheIngredients} from "./consts";
import {makeOrderRequest} from "./api-utils";
import {IIngredient, IOrderResponse} from "../types";
import {TOrderDetailsSlice} from "../services/orderDetailsSlice.js/orderDetailsSlice";


// Getting a list of ingredients
export const fetchIngredients = createAsyncThunk<IIngredient[], undefined>(
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

// Creating an Asynchronous Thunk for Checkout
export const makeOrder = createAsyncThunk<
    IOrderResponse, // Type of successful value
    string[], // Type of parameter
    {
        rejectValue: string;
        state: TOrderDetailsSlice
    }
>(
    'order/makeOrder',
    async (ingredientIds, {dispatch, rejectWithValue}) => {
        try {
            await makeOrderRequest(ingredientIds, dispatch);
            return {} as IOrderResponse;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

