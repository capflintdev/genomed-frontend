import {ChangeEvent, useRef, useState} from "react";
import styles from './Search.module.css';
import Link from "next/link";
import {oneCategory} from "../../interfaces/page.interface";
import SearchIcon from './search.svg';
import Image from "next/image";
import cn from 'classnames';
import {priceRu, translit} from "../../helpers/helpers";
import useOnClickOutside from "../../helpers/onClickOutside";

interface autoCompleteProps {
    data: oneCategory[];
}

interface testWithPath {
    category_path: string;
    price_id: string;
    article: string;
    name: string;
    shortinfo: string;
    longinfo?: string;
    details: string;
    indications: string;
    preparation: string;
    methods: string;
    howto: string;
    results: string;
    price: string;
}

interface ISuggestions {
    text: string
    suggestions: testWithPath[]
}

const AutoComplete = ({data}: autoCompleteProps) => {
    const [search, setSearch] = useState<ISuggestions>({
        text: "",
        suggestions: []
    });

    const [isComponentVisible, setIsComponentVisible] = useState(false);
    const root = useRef<HTMLDivElement>(null);
    useOnClickOutside(root, () => setIsComponentVisible(false));

    const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        let suggestions: testWithPath[] = [];

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, "i");

            const testsWithPath: testWithPath[] = [];

            data.forEach((category: oneCategory) => {
                for (let i = 0; i < category.tests.length; i++) {
                    const item = {
                        'category_path': category.category_path
                    };
                    testsWithPath.push(Object.assign(item, category.tests[i]));
                }
            });

            suggestions = testsWithPath
                .sort()
                .filter((item) => regex.test(item.name));


        }
        setIsComponentVisible(true);
        setSearch({suggestions, text: value});
    };

    const suggestionSelected = () => {
        setIsComponentVisible(false);

        setSearch({
            text: "",
            suggestions: []
        });
    };

    const {suggestions} = search;
    const {text} = search;

    return (
        <div className={styles.root} ref={root}>

            <div className={styles.searchBar} >
                <input
                    id="input"
                    value={search.text}
                    onChange={onTextChanged}
                    type={"text"}
                    placeholder={"Поиск по сайту"}
                    className={styles.input}
                    autoComplete="off"
                    //onBlur={() => setIsComponentVisible(false)}
                />
                <div className={styles.iconSearch}>
                    <Image src={SearchIcon}/>
                </div>
            </div>
            {suggestions.length > 0 && text && isComponentVisible && (
                <div className={styles.autoCompleteContainer}>
                    {suggestions.map((item: testWithPath) => (
                        <div className={styles.autoCompleteItem} key={item.article}>
                            <Link href={`/categories/${item.category_path}/${translit(item.name)}&article=${item.article}`}>
                                <a className={styles.searchLink} onClick={() => suggestionSelected()}>
                                    <div>{item.name}</div>
                                    <div className={styles.price}>{priceRu(item.price)}</div>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
            {suggestions.length === 0 && text && isComponentVisible && (
                <div className={cn(styles.autoCompleteContainer, styles.emptyContainer)}>
                    Ничего не найдено :( Попробуйте изменить запрос.
                </div>
            )}
        </div>
    );
};


export default AutoComplete;