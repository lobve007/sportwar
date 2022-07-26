import styles from './index.module.scss'
import BlindBox from '../../components/BlindBox'
export default function Nft() {
    return <>
        <div className={styles.nft_info}>
            <p>TThe first 2022 FIFA World Cup Team Blind Box will be unveiled by Sportswar. It covers 32 nation teams in the 2022 World Cup. </p>
        </div>
        <div className={styles.blind_list}>
            <BlindBox state='1' />
            <BlindBox state='2' />
            <BlindBox state='3' />
            <BlindBox state='4' />
            <BlindBox state='5' />
        </div>
    </>
}