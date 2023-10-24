import {createSlice} from '@reduxjs/toolkit';
import {setCookie} from "../../utils/cookie";
import {
    fetchGetUser,
    fetchLogin,
    fetchLogout,
    fetchRefreshToken,
    fetchRegister,
} from "./auth-async-thunks";

const initialState = {
    user: {
        name: "",
        email: "",
    },
    isAuth: false,
    isLogout: false,
    status: "idle",
    error: null,
};

const authSlice = createSlice({
    name: "@@auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.name = action.payload.user.name;
                state.email = action.payload.user.email;
                setCookie('accessToken', action.payload);
                setCookie('refreshToken', action.payload);
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.isAuth = true;
                setCookie('accessToken', action.payload);
                setCookie('refreshToken', action.payload);
            })
            .addCase(fetchGetUser.fulfilled, (state, action) => {
                state.isAuth = true;
                state.name = action.payload.user.name;
                state.email = action.payload.user.email;
            })
            .addCase(fetchLogout.fulfilled, (state) => {
                state.isLogout = true;
                state.isAuth = false;
                state.name = '';
                state.email = '';
            })
            .addCase(fetchRefreshToken.fulfilled, (state, action) => {
                state.isAuth = true;
                setCookie('accessToken', action.payload);
                setCookie('refreshToken', action.payload);
            })
            .addMatcher(
                (action) => action.type.endsWith("/pending"),
                (state, action) => {
                    state.status = 'loading';
                    state.error = action.payload || "Cannot load data";
                },
            )
            .addMatcher(
                (action) => action.type.endsWith("/fulfilled"),
                (state, action) => {
                    state.status = 'success';
                    state.error = action.payload || "Cannot load data";
                },
            )
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.status = 'rejected';
                    state.error = action.payload || "Cannot load data";
                },
            );
    },
});
export default authSlice.reducer;