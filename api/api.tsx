import axios from 'axios';
import { RecordsAll } from '../interfaces/page.interface';
import { RecordsEntity } from '../interfaces/page.interface';
import {dataWP} from "../interfaces/wp.interface";


const instanceWP = axios.create({
    baseURL: 'http://testchebur.temp.swtest.ru/',
});

const instance = axios.create({
    baseURL: 'http://testcheb.tech/',
});

/*api для тестов и категорий*/

export const testsAPI = {
    async getTests() {
        const response = await instance.get<RecordsAll>(`products/readAll.php`);
        return response.data.records;
    }
};

export const forSearchAPI = {
    async getTests() {
        const response = await instance.get<RecordsAll>(`products/readTests.php`);
        return response.data.records;
    }
};

export const testAPI = {
    async getTest(article: string) {
        const response = await instance.get<RecordsEntity>(`products/readOneTest.php?article=${article}`);
        return response.data;
    }
};

export const categoryAPI = {
    async getCategory(category_path: string) {
        const response = await instance.get<RecordsAll>(`products/readAll.php?path=${category_path}`);
        return response.data.records;
    }
};

/*api для главной(wordpress)*/

export const wpAPI = {
    async getDataWP() {
        const response = await instanceWP.get<dataWP>(`wp-json/wp/v2/pages?_fields[]=acf`);
        return response.data[1].acf;
    }
};

