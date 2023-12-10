import React, {ChangeEvent, FormEvent, useState} from "react";
import style from "../login/login.module.css";
import {
    Button,
    EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {fetchForgotPassword} from "../../services/auth/auth-async-thunks";
import {useDispatch} from "react-redux";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const resetPassword = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchForgotPassword({email}))
        navigate("/reset-password")
    };


    return (
        <div className={`${style["container"]}`}>
            <form onSubmit={resetPassword} className={`${style["form"]}`}>
                <fieldset className={`${style["fieldset"]}`}>
                    <h1 className={`${style["title"]} text text_type_main-medium pb-6`}>
                        Восстановление пароля
                    </h1>
                    <EmailInput
                        onChange={onChangeEmail}
                        value={email}
                        name={"email"}
                        isIcon={false}
                        extraClass="mb-6"
                    />
                    {email && (
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
