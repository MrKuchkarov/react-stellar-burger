import React, {ChangeEvent, useState} from 'react';
import style from "../login/login.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchResetPassword} from "../../services/auth/auth-async-thunks";

const ResetPassword = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        password: "",
        token: "",
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = () => {
        dispatch(fetchResetPassword(form))
        navigate("/login")
    };


    return (
        <div className={`${style["container"]}`}>
            <form onSubmit={handleSubmit} className={`${style["form"]}`}>
                <fieldset className={`${style["fieldset"]}`}>
                    <h1 className={`${style["title"]} text text_type_main-medium pb-6`}>
                        Восстановление пароля
                    </h1>
                    <PasswordInput
                        onChange={onChange}
                        placeholder={"Введите новый пароль"}
                        value={form.password}
                        name={'password'}
                        extraClass="mb-6"

                    />
                    <Input
                        value={form.token}
                        onChange={onChange}
                        placeholder={'Введите код из письма'}
                        name={'token'}
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