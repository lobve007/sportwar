import styles from './index.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import TabBarPop from './tabBarPop';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
interface Obj {
    [index: string]: any;
}
export default function TabBar(props: any) {
    const { pageIndex: pageIndex1, setPageIndex } = useContext(AppContext);
    let pageIndex2 = sessionStorage.getItem("pageIndex");
    let pageIndex = pageIndex1 === 1 ? pageIndex2 : pageIndex1;
    console.log(pageIndex, pageIndex1, pageIndex2);

    const navigate = useNavigate();
    let list = tabList();
    return <ul className={styles.tab_bar}>
        {
            list.map((item) => {
                return <li key={item.index}
                    className={`${item.index == pageIndex ? styles.active : ''} ${item.list ? styles.has_list : ''}`}
                    onClick={(e: any) => handleClick(e, item, navigate, setPageIndex)}>
                    <p>{item.text}</p>
                    {
                        item.list ? <TabBarPop list={item.list} /> : null
                    }
                </li>
            })
        }
    </ul>
}

function handleClick(e: any, item: any, navigate: any, setPageIndex: any) {
    let { route, list, index } = item;
    setPageIndex(index)
    sessionStorage.setItem("pageIndex", index.toString())
    if (!list) navigate(route);
}

function tabList() {
    let array: Obj[] = [
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