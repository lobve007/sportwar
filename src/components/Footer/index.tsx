import styles from './index.module.scss';
import copy from 'copy-to-clipboard';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function PageFooter() {
  const { seComingData } = useContext(AppContext);

  return <>
    <footer className={styles.footer}>
      <h3>CONTACT US</h3>
      <ul>
        <li className={styles.email}><a onClick={() => { seComingData({isShow:true,value: 'Email copied'}); copy('contact@sportswar.com') }}> </a></li>
        <li className={styles.twitter}><a href="https://twitter.com/Sportswar_real" target="_blank" rel="noreferrer"> </a></li>
        <li className={styles.miao}><a href="https://discord.gg/sportswar" target="_blank" rel="noreferrer"> </a></li>
        <li className={styles.fly}><a href="https://t.me/sportswar11" target="_blank" rel="noreferrer"> </a></li>
      </ul>
    </footer>
  </>
}