import React, {FormEvent} from "react";
import style from "../login/login.module.css";
import {
    Button,
    EmailInput,
    Input,
    PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {fetchRegister} from "../../services/auth/auth-async-thunks";
import {useAppDispatch} from "../../services/store/store";
import {useForm} from "../../hooks/useForm";

const Register = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const {values, handleChange} = useForm({
        email: "",
        password: "",
        name: "",
    })
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchRegister(values))
        navigate("/login")
    }

    return (
        <div className={`${style["container"]}`}>
            <form onSubmit={handleSubmit} className={`${style["form"]}`}>
                <fieldset className={`${style["fieldset"]}`}>
                    <h1 className={`${style["title"]} text text_type_main-medium pb-6`}>
                        Регистрация
                    </h1>
                    <Input
                        onChange={handleChange}
                        type={"text"}
                        placeholder={"Имя"}
                        name={"name"}
                        size={"default"}
                        extraClass="mb-6"
                        value={values.name}
                    />
                    <EmailInput
                        onChange={handleChange}
                        value={values.email}
                        name={"email"}
                        isIcon={false}
                        extraClass="mb-6"
                    />
                    <PasswordInput
                        onChange={handleChange}
                        value={values.password}
                        name={"password"}
                        extraClass="mb-6"
                    />
                    <Button
                        extraClass="mb-20"
                        htmlType="submit"
                        type="primary"
                        size="medium"
                    >
                        Зарегистрироваться
                    </Button>
                    <div className={`${style["user-container"]} `}>
                        <div className={`${style["links"]} `}>
                            <p
                                className={`${style["to-suggest-paragraph"]} text text_type_main-default text_color_inactive`}
                            >
                                Уже зарегистрированы?
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

export {Register};
