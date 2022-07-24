import LoginPop from '../LoginPop';
import styles from './index.module.scss'
interface Obj {
    [index: string]: string | number;
}

export default function User() {
    return <ul className={styles.user_info}>
        <li className={styles.yuyan}></li>
        <li className={styles.qianbao}>
            <LoginPop />
        </li>
    </ul>
}
