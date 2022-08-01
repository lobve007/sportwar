import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import TabBarPop from './tabBarPop';
import { useSetPageIndex } from '../../hooks/useSetGobal';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
interface Obj {
    [index: string]: any;
}
export default function TabBar(props: any) {
    const [pageIndex] = useSetPageIndex()
    const navigate = useNavigate();
    let list = tabList();
    const { seComingData } = useContext(AppContext);
    const handleClick = (e: any, item: any) => {
        let { route, list } = item;
        if (!route && !list) {
            seComingData({ isShow: true })
            return;
        }
        if (!list) {
            navigate(route);
        }
    }

    return <>
        <ul className={styles.tab_bar}>
            {list.map((item) => {
                return <li key={item.index}
                    className={`${item.index === pageIndex ? styles.active : ''} ${item.list ? styles.has_list : ''}`}
                    onClick={(e: any) => handleClick(e, item)}>
                    <p>{item.text}</p>
                    {item.list ? <TabBarPop list={item.list} /> : null}
                </li>;
            })}
        </ul>
    </>
}

function tabList() {
    let array: Obj[] = [
        {
            index: 1,
            text: 'HOME',
            route: '/'
        },
        {
            index: 2,
            text: 'FARM',
            route: '/farm'
        },
        {
            index: 3,
            text: 'QUIZ',
            // route: '/QUIZ'
        },
        {
            index: 4,
            text: 'ABOUT US',
            list: [
                {
                    text: 'Roadmap',
                    route: '/roadmap',
                },
                {
                    text: 'Donation',
                    route: '/donation',
                },
                // {
                //     text: 'Daylog Clips',
                //     // route: '/donation',
                // },
                // {
                //     text: 'Function Voting',
                //     // route: '/donation',
                // },
            ]
        },
        {
            index: 5,
            text: 'NFT EVOLUTION',
            // route: '/updatenft'
        },
        {
            index: 6,
            text: 'WIKI',
            route: '/wiki'
        },
    ];

    return array;
}