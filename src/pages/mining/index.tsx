import Button from '../../components/Button';
import styles from './index.module.scss'
export default function Mining() {
    return <ul className={styles.page_war}>
        <li>
            <h3>WAR / USDC LP Farm </h3>
            <div className={styles.war_box}>
                <img src={require('../../assets/image/banner/farm_lp.jpg')} alt="" />
                <Button text='select' linkUrl={'/mining/lp'} />
            </div>
        </li>
        <li>
            <h3>NFT Farm</h3>
            <div className={styles.war_box}>
            <img src={require('../../assets/image/banner/farm_nft.jpg')} alt="" />
                <Button text='select' linkUrl={'/mining/nft'} />
            </div>
        </li>
    </ul>
}