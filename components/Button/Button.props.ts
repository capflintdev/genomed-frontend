import { ReactNode } from 'react';

export interface ButtonProps  {
    children: ReactNode;
    appearance: 'primary' | 'white';
    className?: string;
    href?: string;
}