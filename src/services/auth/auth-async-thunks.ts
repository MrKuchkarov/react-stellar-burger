import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    createOptions,
    fetchWithRefresh,
    request,
} from "../../utils/api-utils";
import {
    Method,
    BURGER_API_URL,
    refreshToken as token,
} from "../../utils/consts";
import {deleteCookie, getCookie, setCookie} from "../../utils/cookie";
import {setAuthChecked, setUser} from "./auth-slice";
import {
    ILogin,
    IRegister, IRejectValue,
    IResetForm,
    IResetResponse,
    IUser,
    IUserResponse,
} from "../../types";
import {Dispatch} from "react";


export const fetchRegister = createAsyncThunk<
    IRegister,
    IUser
>(
    "$$auth/fetchRegister",
    async (form) => {
        const res = await request(
            `${BURGER_API_URL}/auth/register`,
            createOptions(Method.post, form)
        );
        setCookie("accessToken", res.accessToken);
        setCookie("refreshToken", res.refreshToken);
        return res.user;
    }
);
export const fetchLogin = createAsyncThunk<
    ILogin,
    IRegister
>(
    "$$auth/fetchLogin",
    async (form) => {
        const res = await request(
            `${BURGER_API_URL}/auth/login`,
            createOptions(Method.post, form)
        );
        setCookie("accessToken", res.accessToken);
        setCookie("refreshToken", res.refreshToken);
        return res.user;
    }
);

export const fetchGetUser = () => {
    return (dispatch: Dispatch<any>) => {
        const token: string | undefined = getCookie("accessToken");
        return fetchWithRefresh(
            `${BURGER_API_URL}/auth/user`,
            createOptions(Method.get, undefined, token)
        )
            .then((res: IUserResponse) => {
                dispatch(setUser(res.user));
            })
            .catch((error) => {
                console.error("Error fetching user:", error);
            });
    };
};


export const checkUserAuth = () => {
    return (dispatch: any) => {
        if (getCookie("accessToken")) {
            dispatch(fetchGetUser())
                .catch(() => {
                    console.log("fail get user");
                    deleteCookie("accessToken");
                    deleteCookie("refreshToken");
                    dispatch(setUser(null));
                })
                .finally(() => dispatch(setAuthChecked(true)));
        } else {
            dispatch(setAuthChecked(true));
        }
    };
};

// export const fetchGetUser = () => {
//     return async (dispatch: any) => {
//         const token: string | undefined = getCookie("accessToken");
//         try {
//             const res: IUserResponse = await fetchWithRefresh(
//                 `${BURGER_API_URL}/auth/user`,
//                 createOptions(Method.get, undefined, token)
//             );
//             dispatch(setUser(res.user));
//         } catch (error) {
//             console.error("Error fetching user:", error);
//             // Handle error if needed
//         }
//     };
// };

// export const fetchGetUser = () => {
//     return async (dispatch: Dispatch<any>) => {
//         try {
//             const token = getCookie("accessToken");
//             const response = await fetchWithRefresh(
//                 `${BURGER_API_URL}/auth/user`,
//                 createOptions(Method.get, undefined, token)
//             );
//
//             if (response.ok) {
//                 const res = await response.json();
//                 dispatch(setUser(res));
//             } else {
//                 throw new Error("Ошибка запроса");
//             }
//         } catch (error) {
//             console.error("Произошла ошибка:", error);
//         }
//     };
// };


//
// export const checkUserAuth = () => {
//     return (dispatch: any) => {
//         if (getCookie("accessToken")) {
//             dispatch(fetchGetUser())
//                 .catch(() => {
//                     console.log("fail get user");
//                     deleteCookie("accessToken");
//                     deleteCookie("refreshToken");
//                     dispatch(setUser(null));
//                 })
//                 .finally(() => dispatch(setAuthChecked(true)));
//         } else {
//             dispatch(setAuthChecked(true));
//         }
//     };
// };

export const fetchUpdateUser = createAsyncThunk<
    IUser,
    IRegister
>(
    "$$auth/fetchUpdateUser",
    async (form) => {
        const token = getCookie("accessToken");
        const res = await fetchWithRefresh(
            `${BURGER_API_URL}/auth/user`,
            createOptions(Method.path, form, token)
        );
        return res.user;
    }
);

export const fetchLogout = createAsyncThunk(
    "$$auth/fetchLogout", async () => {
        await request(
            `${BURGER_API_URL}/auth/logout`,
            createOptions(Method.post, {token})
        );
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
    });


export const fetchForgotPassword = createAsyncThunk<
    IResetResponse,
    object,
    IRejectValue
>(
    "$$auth/fetchForgotPassword",
    async (email, {rejectWithValue}) => {
        try {
            return request(
                `${BURGER_API_URL}/password-reset`,
                createOptions(Method.post, email),
            );
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue("Unknown error");
        }
    });
export const fetchResetPassword = createAsyncThunk<
    IResetResponse,
    IResetForm,
    IRejectValue
>("$$auth/fetchResetPassword",
    async (form, {rejectWithValue}) => {
        try {
            return request(
                `${BURGER_API_URL}/password-reset/reset`,
                createOptions(Method.post, form),
            );
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue("Unknown error");
        }
    });

//   export const fetchLogout = createAsyncThunk(
//     "$$auth/fetchLogout",
//     async (_, {rejectWithValue}) => {
//         try {
//             return request(
//                 `${BURGER_API_URL}/auth/logout`,
//                 createOptions(Method.post, {token}),
//             );
//         } catch (error) {
//             if (error instanceof Error) {
//                 return rejectWithValue({message: error.message, code: error.code});
//             }
//             return rejectWithValue("Unknown error");
//         }
//     },
// );

// export const forgotPassword = (email) => {
//   return request(
//     `${BURGER_API_URL}/password-reset`,
//     createOptions(Method.post, email)
//   );
// };

// export const resetPassword = (form) => {
//   return request(
//     `${BURGER_API_URL}/password-reset/reset`,
//     createOptions(Method.post, form)
//   );
// };