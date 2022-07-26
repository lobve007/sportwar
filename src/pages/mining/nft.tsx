import NftCard from '../../components/NftCard'
import styles from './index.module.scss'

export default function Nft() {
    return <div className={styles.page_nft}>
        <div className={styles.page_nft_item}>
            <h3>NFT Farm</h3>
            <ul className={`${styles.col_three} ${styles.nft_top}`}>
                <li>
                    <img src={require('../../assets/image/lp.png')} alt="" />
                    <div className={styles.text}>
                        <h6>Mining Parameters</h6>
                        <span>6</span>
                    </div>
                </li>
                <li>
                    <img src={require('../../assets/image/lp.png')} alt="" />
                    <div className={styles.text}>
                        <h6>War Price</h6>
                        <span>$2.123</span>
                    </div>
                </li>
                <li>
                    <img src={require('../../assets/image/lp.png')} alt="" />
                    <div className={styles.text}>
                        <h6>Remaning mining time</h6>
                        <span>123:15:00</span>
                    </div>
                </li>
            </ul>


        </div>
        <div className={styles.page_nft_item}>
            <h3>My Staking</h3>
            {/* You have no staking yet */}
            <div className={`${styles.nft_mid}`}>
                <NftCard earnings="10.00" isStake />
            </div>
        </div>
        <div className={styles.page_nft_item}>
            <h3>MY NFT</h3>
            {/* APPROVE、There is no NFT available to stake */}
            <div className={`${styles.nft_bottom}`}>
                <NftCard isStake={false} />
            </div>
        </div>
    </div>
}