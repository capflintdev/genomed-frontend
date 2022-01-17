export interface recordsAll {
    records: oneCategory[];
}

export interface oneCategory {
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
    longinfo?: string;
    details: string;
    indications: string;
    preparation: string;
    methods: string;
    howto: string;
    results: string;
    price: string;
    related_tests: string;
    category_path?: string
}

// это чуть другие свойства, которые приходят по запросу для одного теста

/*export interface testExtended extends test {
    related_tests?: string;

}*/

