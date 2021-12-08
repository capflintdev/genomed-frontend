import axios from 'axios';
import { RecordsAll } from '../interfaces/page.interface';
import { RecordsEntity } from '../interfaces/page.interface';

const instance = axios.create({
    baseURL: 'https://test-shkola-genetiki.genomed.ru/',
});

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
