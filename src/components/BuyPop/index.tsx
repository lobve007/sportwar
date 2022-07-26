import { useState } from 'react';
import Button from '../Button';
import ethSvg from '../../assets/svg/eth_logo.svg'
import styles from './index.module.scss';
interface type {
    title?: string,
    getPopShow: any
}

export default function BuyPop({ title = "Comeplete checkout", getPopShow }: type) {
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(0.0924);
    return <>
        <div className={styles.buy_pop}>
            <div className={styles.header}><p>{title}</p><i className={styles.close} onClick={() => getPopShow(false)}></i></div>
            <div className={styles.con_wrap}>
                <div className={styles.bg_img}></div>
                <div className={styles.text}>
                    <p>Blond box</p>
                    <div className={styles.price}>
                        <span>
                            <img src={ethSvg} alt="" />
                            {price}
                        </span>
                        <div className={styles.counter}>
                            <i onClick={() => { setCount(count - 1) }}>-</i>
                            <span>{count}</span>
                            <i onClick={() => { setCount(count + 1) }}>+</i>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.price}>
                    <p>Total</p>
                    <span>
                        <img src={ethSvg} alt="" />
                        {(price * count).toFixed(6).replace(/0+$/g, "")}
                    </span>
                </div>
                <Button text='upgrade' />
            </div>
        </div>
        <div className="mask"></div>
    </>
}