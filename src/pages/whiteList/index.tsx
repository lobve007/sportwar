import { useContext, useEffect } from 'react'
import Button from '../../components/Button';
import { AppContext } from '../../context/AppContext'
import styles from './index.module.scss'

export default function WhiteList() {
    const { setHasBanner } = useContext(AppContext);
    useEffect(() => {
        setHasBanner(false);
        return () => {
            setHasBanner(true);
        }
    })
    return <div className={styles.white_list_wrap}>
        <h3>How to be in the whitelist ？</h3>
        <ul>
            <li>
                <p>Follow us on Twitter：<a href="https://twitter.com/Sportswar_real" target="_blank">Sportswar_real</a></p>
            </li>
            <li><p>Join our discord ：<a href="https://discord.gg/sportswar" target={"_blank"}>https://discord.gg/sportswar</a>(optional)</p> </li>
            <li>
                <p>Join our telegram officail channel：<a href="https://t.me/sportswar11" target="_blank">t.me/Sportswar11 </a>(optional)</p>
            </li>
        </ul>
        <a target={'_blank'} className={styles.sp_btn} href="https://www.premint.xyz/sportswar-world-cup/">Go to Premint</a>
    </div>
}

