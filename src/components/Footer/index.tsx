import styles from './index.module.scss';
import copy from 'copy-to-clipboard';
import useComingSoon from '../../hooks/useComingSoon';
import ComingSoon from '../../components/ComingSoon';

export default function PageFooter() {
  const { commingShow, setComingShow } = useComingSoon();

  return <>
    <footer className={styles.footer}>
      <h3>CONTACT US</h3>
      <ul>
        <li className={styles.email}><a onClick={() => { setComingShow(true); copy('contact@sportswar.com') }}> </a></li>
        <li className={styles.twitter}><a href="https://twitter.com/Sportswar_real" target="_blank"> </a></li>
        <li className={styles.miao}><a href="https://discord.gg/sportswar" target="_blank"> </a></li>
        <li className={styles.fly}><a href="https://t.me/sportswar11" target="_blank"> </a></li>
      </ul>
    </footer>
    {commingShow && <ComingSoon value='Email copied' />}
  </>
}