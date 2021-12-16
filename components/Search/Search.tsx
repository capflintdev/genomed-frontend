import {ChangeEvent, FC, useState} from "react";
import styles from './Search.module.css';
import Link from "next/link";

interface IData {
    name: string;
    id: string;
    category_path: string;
}

interface autoCompleteProps {
    data: any;
}

/* доработать типизацию, когда появится норм апишка*/

const AutoComplete: FC<autoCompleteProps> = ({data}) => {
    const [search, setSearch] = useState({
        text: "",
        suggestions: []
    });

    const [isComponentVisible, setIsComponentVisible] = useState(true);

    const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let suggestions: any = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, "i");
            suggestions = data.sort().filter((v: IData) => regex.test(v.name));
        }
        setIsComponentVisible(true);
        setSearch({suggestions, text: value});
    };

    const suggestionSelected = (value: IData) => {
        setIsComponentVisible(false);

        setSearch({
            text: "",
            suggestions: []
        });
    };

    const {suggestions} = search;

    return (
        <div className={styles.root}>
            <div
                onClick={() => setIsComponentVisible(false)}
                style={{
                    display: isComponentVisible ? "block" : "none",
                }}
            />
            <div>
                <input
                    id="input"
                    autoComplete="off"
                    value={search.text}
                    onChange={onTextChanged}
                    type={"text"}
                    className={styles.input}
                />
            </div>
            {suggestions.length > 0 && isComponentVisible && (
                <div className={styles.autoCompleteContainer}>
                    {suggestions.map((item: IData) => (
                        <div className={styles.autoCompleteItem}>
                            <Link href={`/categories/${item.category_path}/${item.id}/`}>
                                <a>
                                    <div className={styles.autoCompleteItemButton}
                                         onClick={() => suggestionSelected(item)}
                                    >
                                        {item.name}
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default AutoComplete;