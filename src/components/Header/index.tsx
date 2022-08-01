import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ComingSoon from '../ComingSoon';
import Login from '../Login';
import styles from './index.module.scss';
import TabBar from './tabBar';
import User from './user';

export default function PageHeader() {
    const { loginShow,comingData } = useContext(AppContext);
    return <>
        <header className={styles.header}>
            <Link className={styles.logo} to="/"></Link>
            <TabBar />
            <User />
        </header>
        {loginShow ? <Login /> : null}
        {comingData.isShow ? <ComingSoon {...comingData}  /> : null}
    </>
}