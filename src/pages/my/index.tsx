import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Gem from './gem';
import styles from './index.module.scss'
import Nft from './nft';
import Token from './token';
export default function My() {
    const navigate = useNavigate();
    const {active} = useWeb3React()
    
    useEffect(()=>{
        if(!active) {
            navigate('/')
        }
    },[])

   

    const [tabIndex, setTabIndex] = useState(1);
    let pageCom = null;
    const tabList = [
        {
            text: 'My NFT',
            index: 1
        },
        {
            text: 'My Gem',
            index: 2
        },
        {
            text: 'My Token',
            index: 3
        },
    ]

    switch (tabIndex) {
        case 1:
            pageCom = <Nft />
            break;
        case 2:
            pageCom = <Gem />
            break;
        case 3:
            pageCom = <Token />
            break;
        default:
            break;
    }

    return <div className={styles.page_my}>
        <ul className={styles.tab}>
            {
                tabList.map((item) => {
                    return <li onClick={() => setTabIndex(item.index)} className={item.index === tabIndex ? styles.cur : ''} key={item.index}><p>{item.text}</p></li>
                })
            }
        </ul>
        <section className={styles.page_wrap}>
            {pageCom}
        </section>
    </div>


}