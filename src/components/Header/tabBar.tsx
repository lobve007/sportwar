import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import TabBarPop from './tabBarPop';
import useGetPageIndex from '../../hooks/useGetPageIndex';
interface Obj {
    [index: string]: any;
}
export default function TabBar(props: any) {
    const pageIndex = useGetPageIndex()
    const navigate = useNavigate();
    let list = tabList();
    return <ul className={styles.tab_bar}>
        {
            list.map((item) => {
                return <li key={item.index}
                    className={`${item.index == pageIndex ? styles.active : ''} ${item.list ? styles.has_list : ''}`}
                    onClick={(e: any) => handleClick(e, item, navigate)}>
                    <p>{item.text}</p>
                    {
                        item.list ? <TabBarPop list={item.list} /> : null
                    }
                </li>
            })
        }
    </ul>
}

function handleClick(e: any, item: any, navigate: any) {
    let { route, list, index } = item;
    if (!list) {
        navigate(route);
        sessionStorage.setItem("pageIndex", index.toString())
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
            text: 'Stake',
            route: '/stake'
        },
        {
            index: 3,
            text: 'Guessing',
            route: '/'
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