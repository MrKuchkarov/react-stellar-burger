import {createAsyncThunk} from '@reduxjs/toolkit';
import {createOptions, request} from "../../utils/api-utils";
import {Method, NORMA_API_URL, refreshToken as token} from "../../utils/consts";
import {getCookie} from "../../utils/cookie";

export const fetchRegister = createAsyncThunk(
    '@@auth/fetchRegister',
    async (form, {rejectWithValue}) => {
        try {
            return request(
                `${NORMA_API_URL}/auth/register`,
                createOptions(Method.post, form),
            );
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('Unknown error');
        }
    });
export const fetchLogin = createAsyncThunk(
    '@@auth/fetchLogin',
    async (form, {rejectWithValue}) => {
        try {
            return request(
                `${NORMA_API_URL}/auth/login`,
                createOptions(Method.post, form),
            );
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('Unknown error');
        }
    },
);

export const fetchGetUser = createAsyncThunk(
    '@@auth/fetchGetUser',
    async (_, {rejectWithValue}) => {
        try {
            return request(
                `${NORMA_API_URL}/auth/user`,
                createOptions(Method.get, undefined, getCookie('accessToken')),
            );
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('Unknown error');
        }
    });

export const fetchUpdateUser = createAsyncThunk(
    '@@auth/fetchUpdateUser',
    async (form, {rejectWithValue}) => {
        try {
            return request(
                `${NORMA_API_URL}/auth/user`,
                createOptions(Method.path, form, getCookie('accessToken')),
            );
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('Unknown error');
        }
    });

export const fetchRefreshToken = createAsyncThunk(
    '@@auth/fetchRefreshToken',
    async (_, {rejectWithValue}) => {
        try {
            return request(
                `${NORMA_API_URL}/auth/token`,
                createOptions(Method.post, {token}),
            );
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('Unknown error');
        }
    });
export const fetchForgotPassword = createAsyncThunk(
    '@@auth/fetchForgotPassword',
    async (email, {rejectWithValue}) => {
        try {
            return request(
                `${NORMA_API_URL}/password-reset`,
                createOptions(Method.post, email),
            );
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('Unknown error');
        }
    });
export const fetchResetPassword = createAsyncThunk
('@@auth/fetchResetPassword',
    async (form, {rejectWithValue}) => {
        try {
            return request(
                `${NORMA_API_URL}/password-reset/reset`,
                createOptions(Method.post, form),
            );
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('Unknown error');
        }
    });
export const fetchLogout = createAsyncThunk(
    '@@auth/fetchLogout',
    async (_, {rejectWithValue}) => {
        try {
            return request(
                `${NORMA_API_URL}/auth/logout`,
                createOptions(Method.post, {token}),
            );
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('Unknown error');
        }
    },
);