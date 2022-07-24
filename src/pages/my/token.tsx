import Button from '../../components/Button'
import styles from './index.module.scss'
export default function Token() {
    return <>
        <div className={styles.token_wrap}>
            <p className={styles.token_tit}>SPORTSWAR</p>
            <p>It can be used for mining to earn income</p>
            <div className={styles.token_info}>
                <p>Token</p>
                <p className={styles.token_num}>0.00</p>
            </div>
            <Button text='GET' type='gray' />
        </div>
    </>
}