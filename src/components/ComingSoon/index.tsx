import styles from './index.module.scss';
interface type {
  value?:string
}
export default function ComingSoon({value="Coming Soon！"}:type) {
 
  return <div className={styles.coming_pop}>
    <p>{value}</p>
  </div> 
}