import React from 'react';
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import style from "./login.module.css";
import {useDispatch} from "react-redux";
import {fetchLogin} from "../../services/auth/auth-async-thunks";
import {useForm} from "../../hooks/useForm";

const Login = () => {

    const dispatch = useDispatch();
    const {values, handleChange} = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchLogin(values));
    };
    return (
        <div className={`${style["container"]}`}>
            <form onSubmit={handleSubmit} className={`${style["form"]}`}>
                <fieldset className={`${style["fieldset"]}`}>
                    <h1 className={`${style["title"]} text text_type_main-medium pb-6`}>
                        Вход
                    </h1>
                    <EmailInput
                        onChange={handleChange}
                        value={values.email}
                        name={'email'}
                        isIcon={false}
                        extraClass="mb-6"
                    />
                    <PasswordInput
                        onChange={handleChange}
                        value={values.password}
                        name={'password'}
                        extraClass="mb-6"
                    />
                    <Button
                        extraClass="mb-20"
                        htmlType="submit"
                        type="primary"
                        size="medium">
                        Войти
                    </Button>
                    <div className={`${style["user-container"]} `}>
                        <div className={`${style["links"]} `}>
                            <p className={`${style["to-suggest-paragraph"]} text text_type_main-default text_color_inactive`}>
                                Вы — новый пользователь?
                            </p>
                            <Link to="/register" className={`${style["link"]} text text_type_main-small`}>
                                Зарегистрироваться
                            </Link>
                        </div>
                        <div className={`${style["links"]} `}>
                            <p className={`${style["to-suggest-paragraph"]} text text_type_main-default text_color_inactive`}>
                                Забыли пароль?
                            </p>
                            <Link to="/forgot-password"
                                  className={`${style["link"]} text text_type_main-small`}>
                                Восстановить
                                пароль
                            </Link>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export {Login};