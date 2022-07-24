import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
interface type {
    list: [
        {
            text: string,
            router: string,
        }
    ]
}
export default function TabBarPop(prop: type) {
    let { list } = prop;
    const navigate = useNavigate();
    return <ul className={styles.tab_bar_pop}>
        {
            list?.map((item,index) => {
                return <li key={index} onClick={(e)=>{handleClick(e,item,navigate)}}>
                    <p>{item.text}</p>
                </li>
            })
        }

    </ul>
}

function handleClick(e:any,item:any,navigate:any) {
    let {route} = item;
    navigate(route);
}