import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import useComingSoon from '../../hooks/useComingSoon';
import ComingSoon from '../ComingSoon';
interface type {
    list: [
        {
            text: string,
            router: string,
        }
    ]
}
export default function TabBarPop({ list }: type) {
    const { commingShow, setComingShow } = useComingSoon();

    const navigate = useNavigate();
    return <>
        <ul className={styles.tab_bar_pop}>
            {
                list?.map((item, index) => {
                    return <li key={index} onClick={(e) => { handleClick(e, item, navigate, setComingShow) }}>
                        <p>{item.text}</p>
                    </li>
                })
            }
        </ul>
        {commingShow && <ComingSoon />}
    </>
}

function handleClick(e: any, item: any, navigate: any, setComingShow: any) {
    let { route } = item;
    if (!route) {
        setComingShow(true);
        return;
    }
    navigate(route);
}
