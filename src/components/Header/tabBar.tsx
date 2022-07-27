import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import TabBarPop from './tabBarPop';
import ComingSoon from '../ComingSoon'
import useComingSoon from '../../hooks/useComingSoon';
import {useSetPageIndex} from '../../hooks/useSetGobal';
interface Obj {
    [index: string]: any;
}
export default function TabBar(props: any) {
    const [pageIndex] = useSetPageIndex()
    const navigate = useNavigate();
    let list = tabList();
    const {commingShow, setComingShow} = useComingSoon();

    return <>
        <ul className={styles.tab_bar}>
            {list.map((item) => {
                return <li key={item.index}
                    className={`${item.index === pageIndex ? styles.active : ''} ${item.list ? styles.has_list : ''}`}
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
    let { route, list } = item;
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
            text: 'HOME',
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