import styles from './index.module.scss'

export default function WhiteList() {
    return <div className={styles.white_list_wrap}>
        <div className={styles.header_banner}></div>
        <h3>UPDATENFT </h3>
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

