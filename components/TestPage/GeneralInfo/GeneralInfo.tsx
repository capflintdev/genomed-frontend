import styles from "./GeneralInfo.module.css";


const GeneralInfo = ({...test}) => {
    return (
        <div className={styles.generalInfo}>
            <h1>{test.name || 'Название теста'}</h1>
            <h2>Общая информация</h2>
            <div className={styles.mainText}>
                <p>{test.longinfo || 'Длинное описание'}</p>
            </div>
        </div>
    );
};

export default GeneralInfo;