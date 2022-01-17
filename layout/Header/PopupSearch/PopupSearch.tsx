import styles from './PopupSearch.module.css';
import AutoComplete from "../../../components/Search/Search";
import {oneCategory} from "../../../interfaces/page.interface";
import {useRef} from "react";
import useOnClickOutside from "../../../helpers/onClickOutside";


const PopupSearch = ({data, open, showPopupSearch}: popupSearchProps) => {

    const popup = useRef<HTMLDivElement>(null);
    useOnClickOutside(popup, () => showPopupSearch(false));

    return (
        <div className={styles.PopupSearch} style={{transform: !open? 'translateY(-100%)' : 'translateY(0)'}} ref={popup}>
            <div className={styles.closeIcon} onClick={() => showPopupSearch(false)}>
                <div className={styles.closeLine}/>
                <div className={styles.closeLine}/>
            </div>
            <AutoComplete data={data}/>
        </div>
    );
};

export default PopupSearch;


interface popupSearchProps {
    data: oneCategory[];
    open: boolean;
    showPopupSearch: (open: boolean) => void
}