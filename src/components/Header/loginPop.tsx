import { useWeb3React } from '@web3-react/core';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

export default function LoginPop({ isCenter = false }) {
    const {deactivate } = useWeb3React();

   return <div className={styles.login_pop}>
    <ul>
        <li><Link to={'/my'}>My Assets</Link></li>
        <li>Airdrop</li>
        <li onClick={()=>deactivate()}>Log Out</li>
    </ul>
   </div>
}