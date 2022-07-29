import { createContext, useState } from "react";
export const AppContext = createContext({} as ContextType);
interface ContextType {
    [propsName:string]:any
}
export const AppContextProvide = ({children}:any) => {
    const [isLogin, setIsLogin] = useState(222); // 是否已登录
    const [hasNft, setHasNft] = useState(false); // 是否已拥有用户
    const [isWhiteList, setIsWhiteList] = useState(false); // 是否白名单
    const value = {
        isLogin,
        hasNft,
        setIsLogin,
        setHasNft,
        isWhiteList,
        setIsWhiteList,
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

