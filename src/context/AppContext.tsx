import { createContext, useState } from "react";
export const AppContext = createContext({} as ContextType);
interface ContextType {
    [propsName:string]:any
}
export const AppContextProvide = ({children}:any) => {
    const [isLogin, setIsLogin] = useState(222); 
    const [hasNft, setHasNft] = useState(false); 
    const [loginShow, setLoginShow] = useState(false);
    const value = {
        isLogin,
        hasNft,
        setIsLogin,
        setHasNft,
        loginShow,
        setLoginShow,
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

