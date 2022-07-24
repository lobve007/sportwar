import { useState } from 'react';
import Button from '../../components/Button'
import styles from './index.module.scss'
import Popup from './popup'
export default function Gem() {
    const [isShow, setIsShow] = useState(false);

    let list = {
        red: {
            num: '2',
        },
        lime: {
            num: '2',
        },
        purple: {
            num: '3',
        },
        blue: {
            num: '2',
        },

    }
    return <>
        <div className={styles.gem_wrap}>
            <p>Gemstones can increase NFT level and obtain more mining income</p>
            <ul className={styles.gem_list}>
                {
                    Object.keys(list).map((item, index) => {
                        // @ts-ignore
                        const num = list[item].num
                        return <li key={index}>
                            <div className={styles.bg_img}></div>
                            <p style={{ fontWeight: 700 }}>{`gemstone    x    ${num}`}</p>
                        </li>
                    })
                }
            </ul>
            <Button text="Get more gems" clcikHandle={() => { setIsShow(true) }} />
            {isShow && <Popup getPopShow={setIsShow} />}
        </div>
    </>
}