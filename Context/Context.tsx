import {createContext, PropsWithChildren} from 'react';
import {categoryOne} from "../interfaces/page.interface";


export interface IAppContext {
    data: categoryOne[]
}

export const AppContext = createContext<IAppContext>({data: []});

export const AppContextProvider = ({ data, children }: PropsWithChildren<IAppContext>): JSX.Element => {

    return <AppContext.Provider value={{data:data}}>
        {children}
    </AppContext.Provider>;
};