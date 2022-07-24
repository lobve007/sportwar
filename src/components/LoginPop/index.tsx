import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Button from '../Button';
import styles from './index.module.scss';
interface type {
    isCenter?: boolean
}

export default function LoginPop({ isCenter = false }) {
    const navigate = useNavigate()

    return <div className={`${styles.login_pop} ${isCenter ? styles.mid : ''}`}>
        <div className={styles.header}>
            <div className={styles.img_bg}></div>
            <h4 onClick={()=>{navigate('my')}}>My wallet</h4>
            {isCenter ? <i className={styles.close}></i> : null}
        </div>
        <ul>
            <li>
                Connect with one of our available <span style={{ color: '#25D6EE' }}>wallet</span> providers or create a new one
            </li>

            <li>
                <div className={styles.img_bg}></div>
                <p>metamask</p>
                <Button text='Popular' />
            </li>

            <li>
                <div className={styles.img_bg}></div>
                <p>metamask</p>
                <Button text='Popular' />
            </li>
        </ul>
    </div>
}