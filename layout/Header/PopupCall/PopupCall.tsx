import styles from './PopupCall.module.css';
import closeIcon from './close.svg';
import Image from "next/image";
import {useRef} from "react";
import useOnClickOutside from "../../../helpers/onClickOutside";
import CallBackForm from "./CallBackForm/CallBackForm";
import whatsapp from "./whatsapp.png";
import Link from "next/link";
import telegram from "./telegram.png";

const PopupCall = ({popupCall, showPopupCall}: popupCallProps) => {

    const popup = useRef<HTMLDivElement>(null);
    useOnClickOutside(popup, () => showPopupCall(false));

    return (
        <>
            <div className={styles.overlay} style={{display: popupCall ? 'flex' : 'none'}}>
                <div className={styles.popup} ref={popup}>
                    <div onClick={() => showPopupCall(false)} className={styles.close}>
                        <Image src={closeIcon} width={20} height={20}/>
                    </div>
                    <h1 className={styles.formTitle}>Выберите удобный<br/> способ связи</h1>
                    <div className={styles.links}>
                        <div className={styles.linkItem}>
                            <div className={styles.linkItemWrap}>
                                <Image src={whatsapp} width={25} height={25}/>
                            </div>
                            <Link href={'https://wa.me/74956608377'}>
                                <a target={'_blank'} rel={"noreferrer"}>WhatsApp</a>
                            </Link>
                        </div>
                        <div className={styles.linkItem}>
                            <div className={styles.linkItemWrap}>
                                <Image src={telegram} width={25} height={25}/>
                            </div>
                            <Link href={'https://t.me/GenomedGenetics_bot'}>
                                <a target={'_blank'} rel={"noreferrer"}>Telegram</a>
                            </Link>
                        </div>
                    </div>
                    <CallBackForm/>
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