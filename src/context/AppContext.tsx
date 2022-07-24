import { createContext, useState } from "react";
export const AppContext = createContext({} as ContextType);
interface ContextType {
    [propsName:string]:any
}
export const AppContextProvide = ({children}:any) => {
    const [pageIndex, setPageIndex] = useState(1);
    const [hasBanner, setHasBanner] = useState(true);
    const value = {
        pageIndex,
        setPageIndex,
        hasBanner,
        setHasBanner,
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

