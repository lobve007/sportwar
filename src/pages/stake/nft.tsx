import NftCard from '../../components/NftCard'
import useSetPageIndex from '../../hooks/useSetPageIndex'
import styles from './index.module.scss'

export default function Nft() {
    return <div className={styles.page_nft}>
        <div className={styles.page_nft_item}>
            <h3>NFT LVT</h3>
            <ul className={`${styles.col_three} ${styles.nft_top}`}>
                <li>
                    <img src={require('../../assets/image/lp.png')} alt="" />
                    <div className={styles.text}>
                        <h6>parameter</h6>
                        <span>6</span>
                    </div>
                </li>
                <li>
                    <img src={require('../../assets/image/lp.png')} alt="" />
                    <div className={styles.text}>
                        <h6>Wargold price</h6>
                        <span>$2.123</span>
                    </div>
                </li>
                <li>
                    <img src={require('../../assets/image/lp.png')} alt="" />
                    <div className={styles.text}>
                        <h6>time remaining</h6>
                        <span>123:15:00</span>
                    </div>
                </li>
            </ul>


        </div>
        <div className={styles.page_nft_item}>
            <h3>MY LVT</h3>
            <div className={`${styles.nft_mid}`}>
                <NftCard earnings="10.00" />
            </div>
        </div>
        <div className={styles.page_nft_item}>
            <h3>MY NFT</h3>
            <div className={`${styles.nft_bottom}`}>
                <NftCard />
            </div>
        </div>
    </div>
}