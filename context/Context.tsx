import {createContext, PropsWithChildren} from 'react';
import {oneCategory} from "../interfaces/page.interface";


export interface IAppContext {
    data: oneCategory[]
}

export const AppContext = createContext<IAppContext>({data: []});

export const AppContextProvider = ({ data, children }: PropsWithChildren<IAppContext>): JSX.Element => {

    return <AppContext.Provider value={{data:data}}>
        {children}
    </AppContext.Provider>;
};