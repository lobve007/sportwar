import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import TabBar from './tabBar';
import User from './user';

export default function PageHeader() {
    
    return <header className={styles.header}>
        <Link className={styles.logo} to="/"></Link>
       <TabBar />
       {/* <User /> */}
    </header>
}