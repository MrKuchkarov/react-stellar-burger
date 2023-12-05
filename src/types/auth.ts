export interface IRegister {
    email: string;
    password: string;
    name: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IUser {
    email: string;
    password: string
}

export interface IUserResponse {
    success: boolean;
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface IUserUpdateResponse {
    success: boolean;
    user: IUser;
}

export interface ILogout {
    accessToken: string;
    refreshToken: string;
}

export interface IResetResponse {
    success: boolean;
    message: string;
}

export interface IResetForm {
    password: string;
    token: string;
}

export interface IRejectValue {
    rejectValue: string;
}