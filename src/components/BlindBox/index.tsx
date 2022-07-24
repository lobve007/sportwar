import Button from '../Button';
import styles from './index.module.scss';
interface type {
    state: string
}
export default function BlindBox(prop: type) {
    let {
        state
    } = prop;
    let btnText="",btnType;

    switch (state) {
        case 'buy':
            btnText = 'BUY'
            btnType = "default"
            break;
        case 'sold out':
            btnText = 'SOLD OUT'
            btnType = "gray2"
            break;
        case 'open':
            btnText = 'OPEN'
            btnType = "gold"
            break;

        default:
            break;
    }

    return <div className={styles.blind_box}>
        <div className={styles.img_bg}></div>
        <div className={styles.btn_wrap}>
            <Button type={btnType as any} text={btnText} />
        </div>
    </div>

}