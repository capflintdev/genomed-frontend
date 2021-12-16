import { ReactNode } from 'react';
import {RecordsEntity} from "../interfaces/page.interface";

export interface LayoutProps {
    children: ReactNode;
    title?: string;
    //tests?: RecordsEntity[];
    test?: RecordsEntity;
}