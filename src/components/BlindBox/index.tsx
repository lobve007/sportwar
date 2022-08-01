import { useState } from 'react';
import Button from '../Button';
import NftCard from '../NftCard';
import styles from './index.module.scss';
interface type {
    state: string,
    clcikHandle:any
}
export default function BlindBox({ state,
    clcikHandle}: type) {
    const [nftCardIsShow, setNftCardIsShow] = useState(false);
   
    let btnText = "", btnType;

    switch (state) {
        case '1':
            btnText = 'Purchase now'
            btnType = "default"
         
            break;
        case '2':
            btnText = 'Open'
            btnType = "gold"
            break;
        case '3':
            btnText = 'To be opened'
            btnType = "gray2"
            break;
        case '4':
            btnText = 'Sold-out'
            btnType = "gray2"
            break;
        case '5':
            btnText = 'Upgrade/Evolve'
            btnType = "default"
            break;
        default:
            break;
    }

    return <div className={styles.blind_box}>
        <div className={styles.img_bg}></div>
        <div className={styles.btn_wrap}>
            <Button type={btnType as any} text={btnText} clcikHandle={clcikHandle} />
        </div>
        {nftCardIsShow && <NftCard isPopup getPopShow={setNftCardIsShow} isUpdate={true} />}
    </div>

}