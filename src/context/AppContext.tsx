import { createContext, useEffect, useState } from "react";
export const AppContext = createContext({} as ContextType);
interface ContextType {
    [propsName:string]:any
}
export const AppContextProvide = ({children}:any) => {
    const [loginShow, setLoginShow] = useState(false);
    const [comingData, seComingData] = useState({value:'Coming Soon！',isShow:false});
    useEffect(() => {
        let timer: any;
        if (comingData.isShow) {
          timer = setTimeout(() => {
            seComingData({...comingData,isShow:false})
          }, 1000);
        }
        return () => {
          clearTimeout(timer)
        }
      }, [comingData.isShow]);
    const value = {
        loginShow,
        setLoginShow,
        comingData,
        seComingData
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

