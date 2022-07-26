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
        case '1':
            btnText = 'Purchase now'
            btnType = "default"
            clcikHandle = () => {
                setBuyPopIsShow(true)
            }
            break;
        case '2':
            btnText = 'Open'
            btnType = "gold"
            break;
        case '3':
            btnText = 'To be opened'
            btnType = "gold"
            break;
        case '4':
            btnText = 'Sold-out'
            btnType = "gray2"
            break;
        case '5':
            btnText = 'Upgrade/Evolve'
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
        {nftCardIsShow && <NftCard isPopup getPopShow={setNftCardIsShow} isUpdate={true} />}
    </div>

}