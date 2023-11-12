import {createSlice} from "@reduxjs/toolkit";
import {
    fetchLogin,
    fetchLogout,
    fetchRegister,
    fetchUpdateUser,
} from "./auth-async-thunks";

const initialState = {
    user: null,
    isAuthChecked: false,
    error: null,
    name: "",
    email: "",
};

const authSlice = createSlice({
    name: "$$auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.user.name = action.payload.user.name;
            state.user.email = action.payload.user.email;
        },
        setAuthChecked(state, action) {
            state.isAuthChecked = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthChecked = true;
                state.error = null;
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthChecked = true;
                state.error = null;
            })
            .addCase(fetchUpdateUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.error = null;
            })
            .addCase(fetchLogout.fulfilled, (state) => {
                state.user = null;
                state.error = null;
            })
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.error = action.error.message;
                }
            );
    },
});

export default authSlice.reducer;
export const {setUser, setAuthChecked} = authSlice.actions;
