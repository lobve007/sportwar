import { useWeb3React } from '@web3-react/core';
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import LoginPop from './loginPop';
import styles from './index.module.scss'

export default function User() {
    const { setLoginShow } = useContext(AppContext);
    const { account, active } = useWeb3React();

    return <ul className={styles.user_info}>
        <li className={styles.yuyan}></li>
        {
            !active ?
                <li onClick={() => setLoginShow(true)}><p>Conncet</p></li> :
                <li className={styles.qianbao}> {account?.slice(0, 4) + '...' + account?.slice(-4)}
                    <LoginPop />
                </li>
        }
    </ul>
}
