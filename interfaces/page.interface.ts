/*export interface RecordsAll {
    records: RecordsEntity[]; // объект records, включающий в себя массив тестов
    records_cat: RecordsEntity[];  // объект records_cat, включающий в себя массив тестов определенной категории
}

export interface RecordsEntity { // один тест
    category_path: string;
    tests: testsAll[];
    price_id: string;
    article: string;
    name: string;
    shortinfo: string;
    longinfo?: null;
    price: string;
}

export interface allTestsInCategory {
    price_id: string;
    article: string;
    name: string;
    shortinfo: string;
    longinfo?: null;
    price: string;
}*/


export interface recordsAll {
    records: categoryOne[];
}

export interface categoryOne {
    category: string;
    category_path: string;
    description: string;
    tests: test[];
}
export interface test {
    price_id: string;
    article: string;
    name: string;
    shortinfo: string;
    longinfo?: null;
    price: string;
}

