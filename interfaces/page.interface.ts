export interface RecordsAll {
    records: RecordsEntity[]; // объект records, включающий в себя массив тестов
    records_cat: RecordsEntity[];  // объект records_cat, включающий в себя массив тестов определенной категории
}

export interface RecordsEntity { // один тест
    id: string;
    article: string;
    category: string;
    category_path: string;
    name: string;
    shortinfo: string;
    longinfo: string;
    details: string;
    indications: string;
    preparation: string;
    methods: string;
    howto: string;
    results: string;
    price: string;
}
