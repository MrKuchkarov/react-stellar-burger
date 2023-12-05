export interface IRegister {
    user: {
        name: string;
        email: string;
        password: string;
        // Other user properties
    };
}

export interface ILogin {
    user: {
        name: string;
        email: string;
        // Other user properties
    };
}

export interface IUser {
    user: {
        name: string;
        email: string;
        // Other user properties
    };
    // Other properties related to the user if any
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