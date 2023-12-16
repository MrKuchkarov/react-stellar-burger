import {ApiOrderDetails, BURGER_API_URL} from "./consts";
import {getCookie, setCookie} from "./cookie";
import {Method} from "./consts";
import {setError, setLoading, setOrderNumber} from "../services/orderDetailsSlice.js/orderDetailsSlice";
import {clearIngredients} from "../services/constructorSlice/constructorSlice";


export const createOptions = (method: Method, data: object | undefined, token?: string) => {
    return {
        method,
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: token || "",
        },
        body: JSON.stringify(data),
    };
};

export const checkResponse = (response: Response) => {
    return response.ok
        ? response.json()
        : response.json().then((err) => Promise.reject(err));
};

export const request = (url: string, options?: ReturnType<typeof createOptions>) => fetch(url, options).then(checkResponse);

export const refreshToken = async () => {
    try {
        const response = await request(`${BURGER_API_URL}/auth/token`);

        const data = await response.json();

        if (response.ok) {
            return data;
        } else {
            // Обработка ошибок, например, выброс исключения или возврат ошибки
            return new Error(data.message || 'Refresh token request failed');
        }
    } catch (error) {
        // Обработка ошибок, например, выброс исключения или возврат ошибки
        return error;
    }
};
export const fetchWithRefresh = async (url: string, options?: ReturnType<typeof createOptions>) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err) {
        console.log(err);
        if (err instanceof Error && err.message === "jwt expired") {
            const refreshData = await refreshToken();
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            setCookie("refreshToken", refreshData.refreshToken);
            setCookie("accessToken", refreshData.accessToken);
            if (options && options.headers) {
                options.headers.Authorization = refreshData.accessToken;
            }
            const res = await fetch(url, options);
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};

// Функция отправки запроса к API для оформления заказа
export const makeOrderRequest = async (ingredientIds: string[], dispatch: any) => {
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
            dispatch(clearIngredients()); // Сброс состояния ингредиентов после успешного заказа
        } else {
            throw new Error("Ошибка при запросе к API или при оформлении заказа");
        }
    } catch (error: any) {
        console.error(error);
        dispatch(setError(error.message));
        throw error;
    } finally {
        dispatch(setLoading(false));
    }
};

