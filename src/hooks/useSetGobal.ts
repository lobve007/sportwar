import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export function useSetPageIndex() {
    const location = useLocation();
    const [pageIndex, setPageIndex] = useState(1);
    const { pathname } = location;
    useEffect(() => {
        window.scrollTo(0, 0);
        switch (pathname) {
            case '/farm':
                setPageIndex(2);
                break;
            case '/lpfram':
                setPageIndex(2);
                break;
            case '/fnftfram':
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
            case '/my':
                setPageIndex(0);
                break;
            default:
                setPageIndex(1);
                break;
        }
    }, [pathname])
    return [pageIndex];
}
export function useSetBanner() {
    const location = useLocation();
    const [bannerType, setBannerType] = useState('');
    const { pathname } = location;
    useEffect(() => {
        switch (pathname) {
            case '/farm':
                setBannerType('farm');
                break;
            case '/lpfram':
                setBannerType('farm');
                break;
            case '/lpfram':
                setBannerType('farm');
                break;
            case '/roadmap':
                setBannerType('my');
                break;
            case '/donation':
                setBannerType('my');
                break;
            case '/updatenft':
                setBannerType('my');
                break;
            case '/wiki':
                setBannerType('my');
                break;
            case '/whiteList':
                setBannerType('wl');
                break;
            case '/my':
                setBannerType('my');
                break;
            case '/':
                setBannerType('index');
                break;
            default:
                break;
        }
    }, [pathname])
    return [bannerType];
}
