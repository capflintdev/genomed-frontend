import Tabs from "./Tabs";
import TabContent from "./TabContent";
import {useCallback, useEffect, useState} from "react";

const TabsData = ({details, indications, preparation, methods, howto, results}: TabsDataProps) => {

    const [parseData, setParseData] = useState<ItabsData>({
        "Подробнее об исследовании": details,
        "Показания": indications,
        "Подготовка": preparation,
        "Методика исследования": methods,
        "Как сдать тест": howto,
        "Интерпретация результатов": results,
    });

    // ф-я принимает строку, делит на подстроки,
    // заменяет символы \r\n\r\n на тег <p>, возвращает отформатированные параграфы

    const parseDataFunc = useCallback((str: string) => {
        const parts: string[] = str.split(/\r\n\r\n/g);
        const result: JSX.Element[] = [];
        parts.forEach((item: string, index: number) => {
            result.push(<p key={index}>{item}</p>);
        });
        return <p>{result}</p>;
    }, []);

// доделать убрать any
    useEffect(() => {
        setParseData( ({...parseData}:any) => {
            for (const key in parseData) {
                parseData[key] = parseDataFunc(parseData[key as keyof ItabsData]);
            }
            return parseData;
        } );
    }, [parseDataFunc]);


    return (
        <Tabs>
            {
                 Object.keys(parseData).map((item, index) => {
                    return (
                        <TabContent title={item} key={index}>
                            {
                                parseData[item as keyof ItabsData]
                            }
                        </TabContent>
                    );
                })
            }
        </Tabs>
    );
};

export default TabsData;

interface TabsDataProps {
    details: string;
    indications: string;
    preparation: string;
    methods: string;
    howto: string;
    results: string;
}

interface ItabsData {
    "Подробнее об исследовании": string,
    "Показания": string,
    "Подготовка": string,
    "Методика исследования": string,
    "Как сдать тест": string,
    "Интерпретация результатов": string,
}