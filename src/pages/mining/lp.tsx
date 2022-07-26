import Button from '../../components/Button'
import styles from './index.module.scss'

export default function Lp() {
    return <div className={styles.page_lp}>
        <div className={styles.page_nft_item}>
            <h3>WAR / USDC LP Farm </h3>
            <ul className={`${styles.col_two} ${styles.lp_top}`}>
                <li>
                    <img src={require('../../assets/image/lp.png')} alt="" />
                    <div className={styles.text}>
                        <h3>Total Staking Amount</h3>
                        <p>$  30000000.05</p>
                    </div>
                </li>
                <li>
                    <img src={require('../../assets/image/lp.png')} alt="" />
                    <div className={styles.text}>
                        <h3>War Price</h3>
                        <p>$  30000000.05</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className={styles.page_nft_item}>
            <h3>My Profit</h3>
            <ul className={`${styles.col_three} ${styles.lp_mid}`}>
                <li className={styles.lp_mid_one}>
                    <div className={styles.img_bg}>
                        <img src={require('../../assets/image/lp.png')}alt="" />
                    </div>
                    <div className={styles.text}>
                        <p><span>Earnings</span> <span>0.00</span></p>
                        <Button text='HARVEST' />
                    </div>
                </li>
                <li className={styles.lp_mid_two}>
                    <div className={styles.text}>
                        <p><span>My Owning</span> <span>0.00</span></p>
                        <p><span>Staked</span> <span>0.00</span></p>
                    </div>
                    <div className={styles.btn_wrap}>
                        <Button text='To get tokens' />
                        <Button text='Authorize to stake' />
                    </div>
                </li>
            </ul>
        </div>
        <div className={styles.page_nft_item}>
            <h3>LP mining pool</h3>
            <ul className={`${styles.col_three} ${styles.pond}`}>
                <li>
                    <div className={styles.tit}>TVL</div>
                    <div className={styles.content}>
                        <p>83219.11</p>
                    </div>
                </li>
                <li>
                    <div className={styles.tit}>Staked tokens</div>
                    <div className={styles.content}>
                        <p>ETH：40.10</p>
                        <p>WARGOLD：3192 </p>
                    </div>
                </li>
                <li>
                    <div className={styles.tit}>HALVING</div>
                    <div className={styles.content}>
                        <p>21:04:00</p>
                    </div>
                </li>
            </ul>
        </div>
    </div >
}