import React from 'react';
import style from "../login/login.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const ResetPassword = () => {

    const [value, setValue] = React.useState('')
    const onChange = e => {
        setValue(e.target.value)
    }
    return (
        <div className={`${style["container"]}`}>
            <form action="" className={`${style["form"]}`}>
                <fieldset className={`${style["fieldset"]}`}>
                    <h1 className={`${style["title"]} text text_type_main-medium pb-6`}>
                        Восстановление пароля
                    </h1>
                    <PasswordInput
                        onChange={onChange}
                        placeholder={"Введите новый пароль"}
                        value={value}
                        name={'password'}
                        extraClass="mb-6"

                    />
                    <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        name={'name'}
                        size={'default'}
                        extraClass="mb-6"
                    />
                    <Button extraClass="mb-20" htmlType="submit" type="primary" size="medium">
                        Сохранить
                    </Button>
                    <div className={`${style["user-container"]} `}>
                        <div className={`${style["links"]} `}>
                            <p className={`${style["to-suggest-paragraph"]} text text_type_main-default text_color_inactive`}>
                                Вспомнили пароль?
                            </p>
                            <Link to="/login" className={`${style["link"]} text text_type_main-small`}>
                                Войти
                            </Link>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export {ResetPassword};