import React, {FormEvent} from "react";
import style from "../login/login.module.css";
import {
    Button,
    EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {fetchForgotPassword} from "../../services/auth/auth-async-thunks";
import {useAppDispatch} from "../../services/store/store";
import {useForm} from "../../hooks/useForm";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    // Используем useForm для управления значением email
    const {values, handleChange} = useForm({
        email: ""
    });
    const resetPassword = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchForgotPassword({email: values.email}));
        navigate("/reset-password")
    }
    return (
        <div className={`${style["container"]}`}>
            <form onSubmit={resetPassword} className={`${style["form"]}`}>
                <fieldset className={`${style["fieldset"]}`}>
                    <h1 className={`${style["title"]} text text_type_main-medium pb-6`}>
                        Восстановление пароля
                    </h1>
                    <EmailInput
                        onChange={handleChange}
                        value={values.email}
                        name={"email"}
                        isIcon={false}
                        extraClass="mb-6"
                    />
                    {values.email && (
                        <Button
                            extraClass="mb-20"
                            htmlType="submit"
                            type="primary"
                            size="medium"
                        >
                            Восстановить
                        </Button>
                    )}
                    <div className={`${style["user-container"]} `}>
                        <div className={`${style["links"]} `}>
                            <p
                                className={`${style["to-suggest-paragraph"]} text text_type_main-default text_color_inactive`}
                            >
                                Вспомнили пароль?
                            </p>
                            <Link
                                to="/login"
                                className={`${style["link"]} text text_type_main-small`}
                            >
                                Войти
                            </Link>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export {ForgotPassword};
