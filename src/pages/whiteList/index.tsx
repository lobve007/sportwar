import { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import useSetPageIndex from '../../hooks/useSetPageIndex';
import styles from './index.module.scss'

export default function WhiteList() {
    const { setHasBanner } = useContext(AppContext);
    useSetPageIndex(1);
    useEffect(() => {
        setHasBanner(false);
        return () => {
            setHasBanner(true);
        }
    })
    return <div className={styles.white_list_wrap}>
        <div className={styles.header_banner}></div>
        <h3>How to get the white list  </h3>
        <ul>
            <li>
                <p>
                    This is the first World Cup team blind box released by sportswear.<br />
                    It will cover all teams in the 2022 World Cup. <i>XXXXXXXXX</i>  have your favorite player card！
                </p>
            </li>
            <li><p>This is the first World Cup team blind box released by sportswear.<br />
                It <i>XXXXXXXXX</i> to have your favorite player card！
            </p>
            </li>
            <li>
                <p>This is the all teams in the 2022 World Cup. <i>XXXXXXXXX</i> </p>
            </li>

        </ul>
    </div>
}

