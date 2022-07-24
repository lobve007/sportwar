import useSetPageIndex from '../../hooks/useSetPageIndex'
import styles from './index.module.scss'

export default function Wiki() {
    useSetPageIndex(6);
    return <div className={styles.wiki_wrap}>
        <h3>WIKI </h3>
        <p>
            For you who want to learn more about blockchain, provide related tutorials, etc., you can check:
            <br />
            <i>http://xxxxxxxxxxx.com</i>
        </p>
    </div>
}

