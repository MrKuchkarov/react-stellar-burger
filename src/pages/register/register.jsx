import React, {useState} from 'react';
import style from "../login/login.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectAuth} from "../../services/auth/auth-selector";
import {fetchRegister} from "../../services/auth/auth-async-thunks";

const Register = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector(selectAuth);
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: "",
    });

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(fetchRegister(form))
    };
    if (!isAuth) {
        return <Navigate to={"/"}/>;
    }
    return (
        <div className={`${style["container"]}`}>
            <form onSubmit={handleRegister} className={`${style["form"]}`}>
                <fieldset className={`${style["fieldset"]}`}>
                    <h1 className={`${style["title"]} text text_type_main-medium pb-6`}>
                        Регистрация
                    </h1>
                    <Input
                        onChange={onChange}
                        type={'text'}
                        placeholder={'Имя'}
                        name={'name'}
                        size={'default'}
                        extraClass="mb-6"
                        value={form.name}
                    />
                    <EmailInput
                        onChange={onChange}
                        value={form.email}
                        name={'email'}
                        isIcon={false}
                        extraClass="mb-6"
                    />
                    <PasswordInput
                        onChange={onChange}
                        value={form.password}
                        name={'password'}
                        extraClass="mb-6"
                    />
                    <Button extraClass="mb-20" htmlType="submit" type="primary" size="medium">
                        Зарегистрироваться
                    </Button>
                    <div className={`${style["user-container"]} `}>
                        <div className={`${style["links"]} `}>
                            <p className={`${style["to-suggest-paragraph"]} text text_type_main-default text_color_inactive`}>
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