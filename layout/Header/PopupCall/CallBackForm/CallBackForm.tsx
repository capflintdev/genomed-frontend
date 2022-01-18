import styles from './CallBackForm.module.css';
import {useState} from "react";
import {useForm} from "react-hook-form";
import {Input} from "./Input/Input";
import cn from 'classnames';

export interface ICallBackForm {
    name: string;
    phone: string;
}

const CallBackForm = (): JSX.Element => {

    const {register, handleSubmit, formState: {errors}, reset, clearErrors} = useForm<ICallBackForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: ICallBackForm) => {
        setIsSuccess(true);
        reset();

        try {
            await fetch(`/api/contact`, {
                method: 'POST',
                body: JSON.stringify(formData),
            });
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            }
        }

    };

    return (
        <div className={styles.formWrap}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={cn({
                    [styles.hide] : isSuccess
                })}>
                    <Input
                        {...register('name', {required: {value: true, message: 'Заполните имя'}})}
                        error={errors.name}
                        type="text"
                        placeholder={'Имя'}
                        className={styles.input}
                    />
                    <Input
                        {...register('phone', {
                            required: {value: true, message: 'Заполните телефон'},
                            pattern: {
                                value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                                message: 'Пожалуйста, введите корректный номер',
                            },
                        })}
                        error={errors.phone}
                        type="tel"
                        placeholder={'Ваш телефон'}
                        className={styles.input}
                    />
                    <button type="submit" className={styles.btnSubmit} onClick={() => clearErrors()}>Отправить</button>
                </div>
                {isSuccess && <div className={styles.success} role="alert">
                    <span>
                        Заявка успешно отправлена.<br/> Мы позвоним вам в ближайшее время.
                    </span>
                </div>}
                {error && <div className={styles.error} role="alert">
                    Что-то пошло не так, попробуйте обновить страницу
                </div>}
            </form>
        </div>
    );
};

export default CallBackForm;