import styles from "./GeneralInfo.module.css";
import {parseDataFunc} from "../../../helpers/helpers";
import {useEffect, useState} from "react";


const GeneralInfo = ({...test}) => {

    const [parseLongInfo, setParseLongInfo] = useState<JSX.Element>();

    useEffect(() => {
        setParseLongInfo(parseDataFunc(test.longinfo));
    }, [test.longinfo]);

    return (
        <div className={styles.generalInfo}>
            <h1>{test.name}</h1>
            <h2>Общая информация</h2>
            <div className={styles.mainText}>
                 {parseLongInfo}
            </div>
        </div>
    );
};

export default GeneralInfo;