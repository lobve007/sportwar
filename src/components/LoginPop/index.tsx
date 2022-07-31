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
import { Link } from 'react-router-dom';

export default function LoginPop({ isCenter = false }) {
    const {deactivate } = useWeb3React();

   return <div className={styles.login_pop}>
    <ul>
        <li><Link to={'/my'}>My Assets</Link></li>
        <li>Airdrop</li>
        <li onClick={()=>deactivate()}>Log Out</li>
    </ul>
   </div>
}