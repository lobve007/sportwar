import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Button from '../Button';
import styles from './index.module.scss';
interface type {
    title?: string,
    getPopShow:any
}

export default function BuyPop({ title = "Comeplete checkout",getPopShow }: type) {
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(0.0924);
    return <div className={styles.buy_pop}>
        <div className={styles.header}><p>{title}</p><i className={styles.close} onClick={()=>getPopShow(false)}></i></div>
        <div className={styles.con_wrap}>
            <div className={styles.bg_img}></div>
            <div className={styles.text}>
                <p>Blond box</p>
                <div className={styles.price}>
                    <span>0.0924</span>
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
                <span>{(price*count).toFixed(6)}</span>
            </div>
            <Button text='upgrade' />
        </div>
    </div>
}