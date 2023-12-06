import React, {FC} from 'react';
import style from "./error-modal.module.css";

type TErrorModalProps = {
    error: string;
}
const ErrorModal: FC<TErrorModalProps> = ({error}) => {
    return (
        <section className={`${style["error-container"]}`}>
            <h1>
                {error}
            </h1>
            <p>
                Походу в этой галлактическом бургерокомбинате что-то пошло не так!
            </p>
        </section>
    );
};

export default ErrorModal;