import styles from './index.module.scss';
import Button from '../Button';
interface Type {
    earnings?: string, // 收益
    isPopup?: boolean,
    getPopShow?: any,
    isStake: boolean
}
export default function NftCard({ earnings, isPopup, getPopShow, isStake }: Type) {
    return <div className={`${styles.nft_card} ${isPopup && styles.nft_popup}`}>
        <div className={styles.close} onClick={() => getPopShow(false)}></div>
        {earnings && <div className={styles.nft_earn}>
            <div className={styles.earn}><span>My Profit</span> <b>{earnings}</b></div>
            <div className={styles.btn_wrap}>
                <Button text="Withdraw" />
                <Button text="Withdraw all" />
            </div>
        </div>}
        <div className={styles.card_wrap}>
            <img src={require('../../assets/image/card.png')} alt="" />
            <div className={styles.card_text}>
                <h3>Cristiano Ronaldo</h3>
                <p className={styles.level}>LV：SSR</p>
                <p className={styles.parameter}>parameter  4</p>
                {isStake ? <Button text="Relese Staking" /> : <Button text="Stake" />}
            </div>
        </div>
    </div>
}