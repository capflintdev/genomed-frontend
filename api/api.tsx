import axios from 'axios';
import { RecordsAll } from '../interfaces/page.interface';
import { RecordsEntity } from '../interfaces/page.interface';

const instance = axios.create({
    baseURL: 'https://test-shkola-genetiki.genomed.ru/',
});

const instanceWP = axios.create({
    baseURL: 'http://testchebur.temp.swtest.ru/',
});

export const wpAPI = {
    async getH1() {
        const response = await instanceWP.get<any>(`wp-json/wp/v2/pages?_fields[]=acf.block-1-title`);
        return response.data[0].acf['block-1-title'];
    },
    async getSubtitle1() {
        const response = await instanceWP.get<any>(`wp-json/wp/v2/pages?_fields[]=acf.block-1-subtitle-1`);
        return response.data[0].acf['block-1-subtitle-1'];
    },
    async getSubtitle2() {
        const response = await instanceWP.get<any>(`wp-json/wp/v2/pages?_fields[]=acf.block-1-subtitle-2`);
        return response.data[0].acf['block-1-subtitle-2'];
    }
};


export const testsAPI = {
    async getTests() {
        const response = await instance.get<RecordsAll>(`products/read.php`);
        return response.data.records;
    }
};

export const testAPI = {
    async getTest(id: string) {
        const response = await instance.get<RecordsEntity>(`products/read_single.php?id=${id}`);
        return response.data;
    }
};

export const categoryAPI = {
    async getCategory(category: string) {
        const response = await instance.get<RecordsAll>(`products/read_category.php?category=${category}`);
        return response.data.records_cat;
    }
};
