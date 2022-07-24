import { createContext, useState } from "react";
export const AppContext = createContext({} as ContextType);
interface ContextType {
    [propsName:string]:any
}
export const AppContextProvide = ({children}:any) => {
    const [pageIndex, setPageIndex] = useState(1); // 导航
    const [hasBanner, setHasBanner] = useState(true); // 页面是否有banner
    const [isLogin, setIsLog] = useState(false); // 是否已登录
    const [hasNft, setHasNft] = useState(false); // 是否已拥有用户
    const [isWhiteList, setIsWhiteList] = useState(false); // 是否白名单
    const value = {
        pageIndex,
        setPageIndex,
        hasBanner,
        setHasBanner,
        isLogin,
        hasNft,
        setIsLog,
        setHasNft,
        isWhiteList,
        setIsWhiteList,
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

