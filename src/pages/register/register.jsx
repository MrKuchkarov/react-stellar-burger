import React from 'react';
import style from "../login/login.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const Register = () => {

    const [value, setValue] = React.useState('bob@example.com')
    const onChange = e => {
        setValue(e.target.value)
    }
    return (
        <div className={`${style["container"]}`}>
            <form action="" className={`${style["form"]}`}>
                <fieldset className={`${style["fieldset"]}`}>
                    <h1 className={`${style["title"]} text text_type_main-medium pb-6`}>
                        Регистрация
                    </h1>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        name={'name'}
                        size={'default'}
                        extraClass="mb-6"
                    />
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
                        Зарегистрироваться
                    </Button>
                    <div className={`${style["user-container"]} `}>
                        <div className={`${style["links"]} `}>
                            <p className={`${style["paragraph"]} text text_type_main-default text_color_inactive`}>
                                Уже зарегистрированы?
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

export {Register};