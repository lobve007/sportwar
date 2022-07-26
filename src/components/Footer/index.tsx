import styles from './index.module.scss';

export default function PageFooter() {
  return <footer className={styles.footer}>
    <h3>CONTACT US</h3>
    <ul>
      {/* <li className={styles.email}><a href="mailto:contact@sportswar.com?subject=这是邮件标题&body=这是邮件内容"> </a></li> */}
      <li className={styles.email}><a href="contact@sportswar.com"> </a></li>
      <li className={styles.twitter}><a href="https://twitter.com/Sportswar_real" target="_blank"> </a></li>
      <li className={styles.miao}><a href="https://discord.gg/sportswar" target="_blank"> </a></li>
      <li className={styles.fly}><a href="https://t.me/sportswar11" target="_blank"> </a></li>
    </ul>
  </footer>
}