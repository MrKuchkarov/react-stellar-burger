import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    fetchLogin,
    fetchLogout,
    fetchRegister,
    fetchUpdateUser,
} from "./auth-async-thunks";
import {IUser} from "../../types";

type TAuthSlice = {
    user: IUser | null;
    isAuthChecked: boolean;
    error: string | null;
}
const initialState: TAuthSlice = {
    user: null,
    isAuthChecked: false,
    error: null,
};

const authSlice = createSlice({
    name: "$$auth",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser | null>) {
            state.user = action.payload;
        },
        setAuthChecked(state, action: PayloadAction<boolean>) {
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
