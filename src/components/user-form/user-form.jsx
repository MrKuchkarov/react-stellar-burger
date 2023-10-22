import React from 'react';
import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./user-form.module.css";

const UserForm = () => {

    const [value, setValue] = React.useState('')
    const onChange = e => {
        setValue(e.target.value)
    }
    return (
        <div className={`${style["form-container"]}`}>
            <Input
                onChange={onChange}
                placeholder={'Имя'}
                name={'name'}
                size={'default'}
                extraClass="mb-6"
                value={value}
                icon={"EditIcon"}
            />
            <EmailInput
                onChange={onChange}
                value={value}
                name={'email'}
                isIcon={true}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={onChange}
                value={value}
                name={'password'}
                icon="EditIcon"
            />
        </div>
    );
};

export default UserForm;