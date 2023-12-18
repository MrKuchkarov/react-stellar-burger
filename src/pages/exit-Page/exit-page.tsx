import style from "./exit-page.module.css"
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {fetchLogout} from "../../services/auth/auth-async-thunks";
import {useAppDispatch} from "../../services/store/store";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";


export const ExitPage = () => {
    const dispatch = useAppDispatch();

    const confirmExitProfile = () => {
        dispatch(fetchLogout());
    };
    return (
        <main className={`${style["exit-confirm-container"]}`}>
            <ProfileNavigation/>
            <div className={`${style["exit-confirm"]}`}>
                <h2 className={`${style["exit-confirm-title"]} text text_type_main-large`}>Вы уверены?</h2>
                <div>
                    <Button
                        htmlType="button"
                        type="primary"
                        size="large"
                        onClick={confirmExitProfile}
                    >
                        Выйти
                    </Button>
                </div>
            </div>
        </main>
    );
};