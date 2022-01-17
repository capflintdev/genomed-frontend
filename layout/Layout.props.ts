import { ReactNode } from 'react';
import {oneCategory, test} from "../interfaces/page.interface";

export interface LayoutProps {
    children: ReactNode;
    title?: string;
    //tests?: RecordsEntity[];
    test?: test;
    category?: oneCategory;
}