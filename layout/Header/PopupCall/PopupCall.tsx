import styles from './PopupCall.module.css';

const PopupCall = ({popupCall, showPopupCall}: popupCallProps) => {
    return (
        <>
            <div className={styles.overlay} style={{display: popupCall ? 'block' : 'none'}}>
                <div className={styles.popup}>
                    я попап
                </div>
            </div>
        </>
    );
};

export default PopupCall;

interface popupCallProps {
    popupCall: boolean,
    showPopupCall: (popupCall: boolean) => void
}