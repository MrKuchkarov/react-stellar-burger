import React from 'react';
import style from "../login/login.module.css";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const ForgotPassword = () => {

    const [value, setValue] = React.useState('bob@example.com')
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
                    <EmailInput
                        onChange={onChange}
                        value={value}
                        name={'email'}
                        isIcon={false}
                        extraClass="mb-6"
                    />
                    <Button extraClass="mb-20" htmlType="button" type="primary" size="medium">
                        Восстановить
                    </Button>
                    <div className={`${style["user-container"]} `}>
                        <div className={`${style["links"]} `}>
                            <p className={`${style["paragraph"]} text text_type_main-default text_color_inactive`}>
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

export {ForgotPassword};