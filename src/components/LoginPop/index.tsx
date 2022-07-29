import { useWeb3React } from '@web3-react/core';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatEther } from "ethers/lib/utils";
import useSwitchChain from '../../hooks/useSwitchChain';
import { injected } from '../../utils/connector';
import { ChainId } from '../../utils/constant';
import Button from '../Button';
import styles from './index.module.scss';
import useBalance from '../../hooks/useBalance';

export default function LoginPop({ isCenter = false }) {
    const navigate = useNavigate();
    const dataRef = useRef()
    const switchChain = useSwitchChain();
    const { activate, deactivate, active, account } = useWeb3React();
    const balance = useBalance();
    const handleConnect = useCallback(async () => {
        await switchChain(ChainId);
        await activate(injected);
    }, [switchChain]);

    return <div className={`${styles.login_pop} ${isCenter ? styles.mid : ''}`}>
        <div className={styles.header}>
            <div className={styles.img_bg}></div>
            <h4 onClick={() => { navigate('my') }}>My wallet</h4>
            {active ? <span className={styles.account}>{account?.slice(0, 6) + '...' + account?.slice(-4)}</span> : null}
            {isCenter ? <i className={styles.close}></i> : null}
        </div>
        {
            active ?
                <div className={styles.login_item}>
                    {formatEther(balance)}
                </div> :
                <ul>
                    <li>
                        Connect with one of our available <span style={{ color: '#25D6EE' }}>wallet</span> providers or create a new one
                    </li>

                    <li>
                        <div className={styles.img_bg}><img src={require('../../assets/image/icon/metamask.png')} alt="" /></div>
                        <p>metamask</p>
                        <Button text='Popular' clcikHandle={() => { handleConnect() }} />
                    </li>
                </ul>
        }

    </div>
}