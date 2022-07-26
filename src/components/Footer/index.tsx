import styles from './index.module.scss';

export default function PageFooter() {
    return <footer className={styles.footer}>
        <h3>CONTACT US</h3>
        <ul>
          <li className={styles.email}><a href="#"></a></li>
          <li className={styles.twitter}><a href="#"></a></li>
          <li className={styles.miao}><a href="#"></a></li>
          <li className={styles.fly}><a href="#"></a></li>
        </ul>
    </footer>
}