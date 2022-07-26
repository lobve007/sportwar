import { useSetBanner } from '../../hooks/useSetGobal';
import styles from './index.module.scss';

export default function Banner() {
    const [bannerType] = useSetBanner();
    return bannerType ? <div className={styles.banner}>
        <div className={`${styles.banner_img} ${bannerType && styles[bannerType]}`}></div>
    </div>: null
}