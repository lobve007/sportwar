import { useEffect, useState } from 'react';
import styles from './index.module.scss';
interface type {
  value?: string,
  isShow: boolean
}
export default function ComingSoon({ value = "Coming Soon！", isShow = false }: type) {
  return isShow ? <div className={styles.coming_pop} ><p>{value}</p></div > : null
}