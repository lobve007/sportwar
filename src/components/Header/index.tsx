import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import styles from './index.module.scss';
import TabBar from './tabBar';
import User from './user';

export default function PageHeader() {
    
    return <header className={styles.header}>
        <div className={styles.logo}></div>
       <TabBar />
       <User />
    </header>
}