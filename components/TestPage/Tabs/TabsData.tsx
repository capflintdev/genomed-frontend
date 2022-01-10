import Tabs from "./Tabs";
import TabContent from "./TabContent";
import {useEffect, useState} from "react";
import {parseDataFunc} from "../../../helpers/helpers";

const TabsData = ({details, indications, preparation, methods, howto, results}: TabsDataProps) => {

    const [parseData, setParseData] = useState<Record<string, any>>({
        "Подробнее об исследовании": details,
        "Показания": indications,
        "Подготовка": preparation,
        "Методика исследования": methods,
        "Как сдать тест": howto,
        "Интерпретация результатов": results,
    });

    useEffect(() => {
        setParseData(
            (prevState: Record<string, string>): Record<string, JSX.Element> => {
                const obj: Record<string, JSX.Element> = {};
                for (const key in prevState) {
                    obj[key] = parseDataFunc(prevState[key]);
                }
                return obj;
            }
        );
    }, []);

    return (
        <Tabs>
            {
                Object.keys(parseData).map((item, index) => {
                    return (
                        <TabContent title={item} key={index}>
                            {
                                parseData[item]
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