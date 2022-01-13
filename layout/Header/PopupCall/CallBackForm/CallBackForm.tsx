import styles from './CallBackForm.module.css';
import {useState} from "react";
import {useForm} from "react-hook-form";
import {Input} from "./Input/Input";

export interface ICallBackForm {
    name: string;
    phone: string;
}

export interface ICallBackFormResponse {
    message: string;
}

const CallBackForm = (): JSX.Element => {

    const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<ICallBackForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: ICallBackForm) => {
        setIsSuccess(true);
        reset();
        console.log({...formData});
    };


    return (
        <div className={styles.formWrap}>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Input
                        {...register('name', { required: { value: true, message: 'Заполните имя' } })}
                        error={errors.name}
                        type="text"
                        placeholder={'Имя'}
                        className={styles.input}
                    />
                </div>
                <div>
                    <Input
                        {...register('phone', {
                            required: { value: true, message: 'Заполните телефон' },
                            pattern: {
                                value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                                message: 'Пожалуйста, введите цифры',
                            },
                        })}
                        error={errors.phone}
                        type="tel"
                        placeholder={'Ваш телефон'}
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.btnSubmit}>Отправить</button>
                {isSuccess && <div className={styles.success} role="alert">
                    <span>
                        Спасибо, наш специалист с вами свяжется!
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