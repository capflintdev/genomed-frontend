export interface RecordsAll {
    records: RecordsEntity[]; // объект records, включающий в себя массив тестов
    records_cat: RecordsEntity[];  // объект records_cat, включающий в себя массив тестов определенной категории
}

export interface RecordsEntity { // один тест
    id: string;
    article: string;
    category: string;
    name: string;
    short_description: string;
    long_description: string;
    price: string;
}
