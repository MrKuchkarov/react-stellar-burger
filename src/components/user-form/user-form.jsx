import React, {useEffect} from 'react';
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./user-form.module.css";
import {useDispatch, useSelector} from "react-redux";
import {selectAuthUser} from "../../services/auth/auth-selector";
import {fetchUpdateUser} from "../../services/auth/auth-async-thunks";
import {useLocalStorage} from "../../hooks/useLocalStorage"
import {useForm} from "../../hooks/useForm";

const UserForm = () => {
    const {name, email} = useSelector(selectAuthUser);
    const dispatch = useDispatch();

    // Используется хук useLocalStorage для управления данными формы
    const [form, setForm] = useLocalStorage("userFormData", {
        name: "",
        email: "",
        password: "",
    });

    // Используется хук useForm для управления данными формы
    const {values, handleChange, isDirty, setIsDirty} = useForm(form);

    const handleReset = () => {
        setIsDirty(false);
        if (name && email) {
            setForm({
                name,
                email,
                password: "",
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsDirty(false);
        dispatch(fetchUpdateUser(form));
        // Удаление данных из локального хранилища при успешном сохранении
        localStorage.removeItem("userFormData");
    };

    useEffect(() => {
        if (name && email) {
            setForm({
                name: name,
                email: email,
                password: "",
            });
        }
    }, [name, email]);

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <fieldset className={style.wrapper}>
                <Input
                    value={values.name}
                    name={'name'}
                    onChange={handleChange}
                    size={'default'}
                    placeholder={'Имя'}
                    icon={'EditIcon'}
                />
                <EmailInput
                    value={values.email}
                    name={'email'}
                    onChange={handleChange}
                    isIcon={true}
                    placeholder={'Логин'}
                />
                <PasswordInput
                    value={values.password}
                    name={'password'}
                    onChange={handleChange}
                    icon={'EditIcon'}
                />
                {isDirty && (
                    <div className={style.button__container}>
                        <Button
                            htmlType={'button'}
                            type={'secondary'}
                            onClick={handleReset}
                        >
                            Отмена
                        </Button>
                        <Button
                            htmlType={'submit'}
                        >
                            Сохранить
                        </Button>
                    </div>
                )}
            </fieldset>
        </form>
    );
};

export default UserForm;
