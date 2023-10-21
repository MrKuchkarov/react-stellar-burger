import React from 'react';
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import style from "./login.module.css";

const Login = () => {

    const [value, setValue] = React.useState('bob@example.com')
    const onChange = e => {
        setValue(e.target.value)
    }
    return (
        <div className={`${style["container"]}`}>
            <form action="" className={`${style["form"]}`}>
                <fieldset className={`${style["fieldset"]}`}>
                    <h1 className={`${style["title"]} text text_type_main-medium pb-6`}>
                        Вход
                    </h1>
                    <EmailInput
                        onChange={onChange}
                        value={value}
                        name={'email'}
                        isIcon={false}
                        extraClass="mb-6"
                    />
                    <PasswordInput
                        onChange={onChange}
                        value={value}
                        name={'password'}
                        extraClass="mb-6"
                    />
                    <Button extraClass="mb-20" htmlType="button" type="primary" size="medium">
                        Войти
                    </Button>
                    <div className={`${style["user-container"]} `}>
                        <div className={`${style["links"]} `}>
                            <p className={`${style["paragraph"]} text text_type_main-default text_color_inactive`}>
                                Вы — новый пользователь?
                            </p>
                            <Link to="/register" className={`${style["link"]} text text_type_main-small`}>
                                Зарегистрироваться
                            </Link>
                        </div>
                        <div className={`${style["links"]} `}>
                            <p className={`${style["paragraph"]} text text_type_main-default text_color_inactive`}>
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