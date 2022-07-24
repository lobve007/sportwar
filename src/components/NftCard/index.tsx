import styles from './index.module.scss';
import Button from '../Button';
interface Type {
    earnings?: string,
    isPopup?:boolean,
    getPopShow?:any
}
export default function NftCard(props: Type) {
    let { earnings,isPopup,getPopShow } = props;

    return <div className={`${styles.nft_card} ${isPopup && styles.nft_popup}`}>
        <div className={styles.close} onClick={()=>getPopShow(false)}></div>
        {earnings && <div className={styles.nft_earn}>
            <div className={styles.earn}><span>My earnings</span> <b>{earnings}</b></div>
            <div className={styles.btn_wrap}>
                <Button text="Extract" />
                <Button text="All Extract" />
            </div>
        </div>}
        <div className={styles.card_wrap}>
            <img src={require('../../assets/image/card.png')} alt="" />
            <div className={styles.card_text}>
                <h3>Cristiano Ronaldo</h3>
                <p className={styles.level}>LV：SSR</p>
                <p className={styles.parameter}>parameter  4</p>
                <Button text="BUY NOW" />
            </div>
        </div>
    </div>
}