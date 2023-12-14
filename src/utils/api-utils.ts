import {BURGER_API_URL} from "./consts";
import {setCookie} from "./cookie";
import {Method} from "./consts";


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
        const res = await request(url, options);
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


// export const refreshToken = () => {
//     return fetch(`${BURGER_API_URL}/auth/token`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json;charset=utf-8",
//         },
//         body: JSON.stringify({
//             token: localStorage.getItem("refreshToken"),
//         }),
//     }).then(checkResponse);
// };
//
// export const fetchWithRefresh = async (url: string, options: ReturnType<typeof createOptions>) => {
//     try {
//         const res = await fetch(url, options);
//         return await checkResponse(res);
//     } catch (err: any) {
//         console.log(err);
//         if (err.message === "jwt expired") {
//             const refreshData = await refreshToken();
//             if (!refreshData.success) {
//                 return Promise.reject(refreshData);
//             }
//             setCookie("refreshToken", refreshData.refreshToken);
//             setCookie("accessToken", refreshData.accessToken);
//             options.headers.Authorization = refreshData.accessToken;
//             const res = await fetch(url, options);
//             return await checkResponse(res);
//         } else {
//             return Promise.reject(err);
//         }
//     }
// };
