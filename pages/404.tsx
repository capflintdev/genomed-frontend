import React from 'react';
import {Layout} from '../layout/Layout';
import Link from "next/link";

export function Error404(): JSX.Element {
    return (
        <>
            <Layout>
            <div style={{padding: '40px 15px'}} className={'container'}>
                <p>Страница не найдена :( <Link href={'/'}><a style={{color: 'var(--primary)',fontWeight: '600'}}> Перейти на главную</a></Link></p>
            </div>
            </Layout>
        </>
    );
}

export default Error404;