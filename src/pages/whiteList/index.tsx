import { useContext, useEffect } from 'react'
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
        <div className={styles.header_banner}></div>
        <h3>How to be in the whitelist ？</h3>
        <ul>
            <li>
                <p>Follow us on Twitter: Sportswar_real, retweet us on Twitter and @ 3 people</p>
            </li>
            <li><p>Join our discord:discord.gg/a2ZqgsUAjK, please make sure your chatting level is upgraded.</p>
            </li>
            <li>
                <p>Join our telegram officail channel: t.me/Sportswar11</p>
            </li>
        </ul>
    </div>
}

