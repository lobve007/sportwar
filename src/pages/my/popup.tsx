import Button from '../../components/Button'
import styles from './index.module.scss'
interface type {
    getPopShow?:any
}
export default function Popup({getPopShow}:type) {
    return <div className={styles.my_popup}>
        <i className={styles.close} onClick={()=>{getPopShow(false)}}></i>
        <p className={`${styles.italic} ${styles.po_title}`}>Thank you for your participation. We support gem upgrade</p>
        <ul>
            <li>
                <p className={styles.italic}>Hero AdventureHero Adventure</p>
                <div>
                    <span>gemstone    x  1</span>
                </div>
                <Button text='GO' />
            </li>
            <li>
                <p className={styles.italic}>Hero AdventureHero Adventure</p>
                <div>
                    <span>gemstone    x  1</span>
                </div>
                <Button text='GO' />
            </li>
            <li>
                <p className={styles.italic}>Hero AdventureHero Adventure</p>
                <div>
                    <span>gemstone    x  1</span>
                </div>
                <Button text='GO' />
            </li>
        </ul>
    </div>
}