import {RootState} from "../store/store";

// export const selectAuth = (store: RootState) => store.auth;
export const selectIsAuthChecked = (store: RootState) => store.auth.isAuthChecked;
export const selectAuthUser = (store: RootState) => store.auth.user;
