import Button from '../../components/Button';
import styles from './index.module.scss'
export default function Stake() {
    return <ul className={styles.page_war}>
        <li>
            <h3>War LP</h3>
            <div className={styles.war_box}>
                <img src={require('../../assets/image/lp.png')} alt="" />
                <Button text='select' linkUrl={'/stake/lp'} />
            </div>
        </li>
        <li>
            <h3>War NFT</h3>
            <div className={styles.war_box}>
            <img src={require('../../assets/image/nft.png')} alt="" />
                <Button text='select' linkUrl={'/stake/nft'} />
            </div>
        </li>
    </ul>
}