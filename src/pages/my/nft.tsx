import styles from './index.module.scss'
import BlindBox from '../../components/BlindBox'
export default function Nft() {
    return <>
        <div className={styles.nft_info}>
            <p>This is the first World Cup team blind box released by sportswear. </p>
            <p>It will cover all teams in the 2022 World Cup. It is exciting to have your favorite player card！</p>
        </div>
        <div className={styles.blind_list}>
            <BlindBox state='buy' />
            <BlindBox state='open' />
            <BlindBox state='sold out' />
            <BlindBox state='upgrade' />
        </div>
    </>
}