import styles from './index.module.scss';

export default function Stake() {
  return <div className={styles.stake}>
    <div className={styles.close}></div>
    <h3>Adjust the pledge amount</h3>
    <p>Pledgable quantity：</p>
    <div className={styles.count_num_pop}>
      <i>+</i>
      
      <i>-</i>
    </div>
  </div>
}
