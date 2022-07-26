import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import TabBarPop from './tabBarPop';
import useGetPageIndex from '../../hooks/useGetPageIndex';
import ComingSoon from '../ComingSoon'
import React, { useEffect, useState } from 'react';
import useComingSoon from '../../hooks/useComingSoon';
interface Obj {
    [index: string]: any;
}
export default function TabBar(props: any) {
    const pageIndex = useGetPageIndex()
    const navigate = useNavigate();
    let list = tabList();
    const {commingShow, setComingShow} = useComingSoon();

    return <>
        <ul className={styles.tab_bar}>
            {list.map((item) => {
                return <li key={item.index}
                    className={`${item.index == pageIndex ? styles.active : ''} ${item.list ? styles.has_list : ''}`}
                    onClick={(e: any) => handleClick(e, item, navigate,setComingShow)}>
                    <p>{item.text}</p>
                    {item.list ? <TabBarPop list={item.list} /> : null}
                </li>;
            })}
        </ul>
        {commingShow && <ComingSoon/>}
    </>
}

function handleClick(e: any, item: any, navigate: any,setComingShow:any) {
    let { route, list, index } = item;
    if (!route && !list) {
        setComingShow(true);
        return;
    }
    if (!list) {
        navigate(route);
    }
}

function tabList() {
    let array: Obj[] = [
        {
            index: 1,
            text: 'Home',
            route: '/'
        },
        {
            index: 2,
            text: 'FARM',
            route: '/mining'
        },
        {
            index: 3,
            text: 'QUIZ',
            // route: '/QUIZ'
        },
        {
            index: 4,
            text: 'About us',
            list: [
                {
                    text: 'Roadmap',
                    route: '/roadmap',
                },
                {
                    text: 'Donation',
                    route: '/donation',
                },
                {
                    text: 'Daylog Clips',
                    // route: '/donation',
                },
                {
                    text: 'Function Voting',
                    // route: '/donation',
                },
            ]
        },
        {
            index: 5,
            text: 'NFT Upgrade',
            route: '/updatenft'
        },
        {
            index: 6,
            text: 'WIKI',
            route: '/wiki'
        },
    ];

    return array;
}