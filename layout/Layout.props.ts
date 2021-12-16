import { ReactNode } from 'react';
import {test} from "../interfaces/page.interface";

export interface LayoutProps {
    children: ReactNode;
    title?: string;
    //tests?: RecordsEntity[];
    test?: test;
}