import React, {ChangeEvent, useState} from 'react';
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./user-form.module.css";
import {selectAuthUser} from "../../services/auth/auth-selector";
import {fetchUpdateUser} from "../../services/auth/auth-async-thunks";
import {useLocalStorage} from "../../hooks/useLocalStorage"
import {useAppDispatch, useAppSelector} from "../../services/store/store";
import {IUser} from "../../types";

const UserForm = () => {
    const dispatch = useAppDispatch();
    const authUser: IUser | null = useAppSelector(selectAuthUser)
    const {name, email, password} = authUser || {};
    const [edit, setEdit] = useState(false);


    // Использование хука useLocalStorage для управления данными формы
    const [form, setForm] = useLocalStorage<IUser>("userFormData", {
        name: name,
        email: email,
        password: password,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
        setEdit(true);
    };

    const handleReset = () => {
        setEdit(false);
        if (name && email) {
            setForm({
                name,
                email,
                password: '',
            });
        }
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEdit(false);
        dispatch(fetchUpdateUser(form));
        // Удаление данных из локального хранилища при успешном сохранении
        localStorage.removeItem("userFormData");
    };


    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <fieldset className={style.wrapper}>
                <Input
                    value={form.name || ''}
                    name={'name'}
                    onChange={handleChange}
                    size={'default'}
                    placeholder={'Имя'}
                    icon={'EditIcon'}
                    autoComplete="current-name"
                />
                <EmailInput
                    value={form.email || ""}
                    name={'email'}
                    onChange={handleChange}
                    isIcon={true}
                    placeholder={'Логин'}
                    autoComplete="current-Email"
                />
                <PasswordInput
                    value={form.password || ""}
                    name={'password'}
                    onChange={handleChange}
                    icon={'EditIcon'}
                    autoComplete="current-password"
                />
                {edit && (
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
