import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import styles from './index.module.scss';

export default function Banner() {
    const { hasBanner } = useContext(AppContext)

    return hasBanner && <div className={styles.banner}>
        <div className={styles.banner_img}></div>
    </div>

}