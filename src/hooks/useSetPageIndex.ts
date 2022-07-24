import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
export default function useSetPageIndex(index: number) {
    const { setPageIndex } = useContext(AppContext)
    useEffect(() => {
        setPageIndex(index)
        sessionStorage.setItem("pageIndex", index.toString());
    }, [])
}

function tabList() {
    let array = [
        {
            index: 1,
            text: 'Home',
            route: '/home'
        },
        {
            index: 2,
            text: 'Stake',
            route: '/stake'
        },
        {
            index: 3,
            text: 'Guessing',
            route: '/home'
        },
        {
            index: 4,
            text: 'Explain',
            list: [
                {
                    text: 'Roadmap',
                    route: '/roadmap',
                },
                {
                    text: 'Donation',
                    route: '/donation',
                },
            ]
        },
        {
            index: 5,
            text: 'Upgrade NFT',
            route: '/home'
        },
        {
            index: 6,
            text: 'WIKI',
            route: '/wiki'
        },
    ];

    return array;
}