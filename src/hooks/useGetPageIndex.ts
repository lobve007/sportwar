import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export default function useGetPageIndex() {
    const location = useLocation();
    const [pageIndex, setPageIndex] = useState(1)
    const { pathname } = location;
    useEffect(() => {
        window.scrollTo(0, 0);
        switch (pathname) {
            case '/stake':
                setPageIndex(2);
                break;
            case '/roadmap':
                setPageIndex(4);
                break;
            case '/donation':
                setPageIndex(4);
                break;
            case '/updatenft':
                setPageIndex(5);
                break;
            case '/wiki':
                setPageIndex(6);
                break;

            default:
                setPageIndex(1);
                break;
        }
    }, [pathname])
    return pageIndex;
}