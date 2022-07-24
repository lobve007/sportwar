import { useState } from 'react';
import Button from '../Button';
import BuyPop from '../BuyPop';
import NftCard from '../NftCard';
import styles from './index.module.scss';
interface type {
    state: string
}
export default function BlindBox(prop: type) {
    
    const [buyPopIsShow, setBuyPopIsShow] = useState(false);
    const [nftCardIsShow, setNftCardIsShow] = useState(false);
    let {
        state
    } = prop;
    let btnText = "", btnType, clcikHandle;

    switch (state) {
        case 'buy':
            btnText = 'BUY'
            btnType = "default"
            clcikHandle = () => {
                setBuyPopIsShow(true)
            }
            break;
        case 'sold out':
            btnText = 'SOLD OUT'
            btnType = "gray2"
            break;
        case 'open':
            btnText = 'OPEN'
            btnType = "gold"
            break;
            case 'upgrade':
                btnText = 'UPGRADE'
                btnType = "default"
                clcikHandle = () => {
                    setNftCardIsShow(true)
                }
                break;
        default:
            break;
    }

    return <div className={styles.blind_box}>
        <div className={styles.img_bg}></div>
        <div className={styles.btn_wrap}>
            <Button type={btnType as any} text={btnText} clcikHandle={clcikHandle} />
        </div>
        {buyPopIsShow && <BuyPop getPopShow={setBuyPopIsShow} />}
        {nftCardIsShow && <NftCard isPopup getPopShow={setNftCardIsShow}/>}
    </div>

}