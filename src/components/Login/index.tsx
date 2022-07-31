import styles from './index.module.scss';
import Button from '../Button';
import useSwitchChain from '../../hooks/useSwitchChain';
import { useWeb3React } from '@web3-react/core';
import { useCallback, useContext, useEffect } from 'react';
import { ChainId } from '../../utils/constant';
import { injected } from '../../utils/connector';
import { AppContext } from '../../context/AppContext';
export default function Login() {
  const { setLoginShow } = useContext(AppContext);
  const switchChain = useSwitchChain();
  const { activate, active } = useWeb3React();
  const handleConnect = useCallback(async () => {
    await switchChain(ChainId);
    await activate(injected);
    setLoginShow(false);
  }, [switchChain]);

  return <div className={styles.login_pop}>
    <i className={styles.close} onClick={() => { setLoginShow(false) }}></i>
    <h3>Connect your wallet</h3>
    <img src={require('../../assets/image/icon/metamask.png')} alt="" />
    {!active ? <Button text="Connect" clcikHandle={() => handleConnect()} /> : <p>链接</p>}
  </div>
}
