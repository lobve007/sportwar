import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';
interface type {
    list: [
        {
            text: string,
            router: string,
        }
    ]
}
export default function TabBarPop({ list }: type) {
    const { seComingData } = useContext(AppContext);
    const handleClick = (e: any, item: any)=> {
        let { route } = item;
        if (!route) {
            seComingData({isShow:true});
            return;
        }
        navigate(route);
    }
    

    const navigate = useNavigate();
    return <>
        <ul className={styles.tab_bar_pop}>
            {
                list?.map((item, index) => {
                    return <li key={index} onClick={(e) => { handleClick(e, item) }}>
                        <p>{item.text}</p>
                    </li>
                })
            }
        </ul>
    </>
}