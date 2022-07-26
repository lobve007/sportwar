import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export function useSetPageIndex() {
    const location = useLocation();
    const [pageIndex, setPageIndex] = useState(1);
    const { pathname } = location;
    useEffect(() => {
        window.scrollTo(0, 0);
        switch (pathname) {
            case '/mining':
                setPageIndex(2);
                break;
            case '/mining/lp':
                setPageIndex(2);
                break;
            case '/mining/nft':
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
            case '/mining':
                setBannerType('farm');
                break;
            case '/mining/lp':
                setBannerType('farm');
                break;
            case '/mining/nft':
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
                setBannerType('');
                break;
            default:
                break;
        }
    }, [pathname])
    return [bannerType];
}
