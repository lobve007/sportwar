import styles from './index.module.scss'
import axios from 'axios';
import BlindBox from '../../components/BlindBox'
import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import useController from '../../hooks/useController';
import useMyBoxes from '../../hooks/useMyBoxes';
export default function Nft() {
    const { account, active } = useWeb3React();
    const { openBox } = useController()
    const { loading, tokenIds } = useMyBoxes();
    useEffect(() => {
        axios.get(`user/getBox?id=${account}`).then(data => {
            console.log(data);
        })
    }, [])
    return <>
        <div className={styles.nft_info}>
            <p>TThe first 2022 FIFA World Cup Team Blind Box will be unveiled by Sportswar. It covers 32 nation teams in the 2022 World Cup. </p>
        </div>
        <div className={styles.blind_list}>
            {tokenIds.map(tokenId =>  <BlindBox key={tokenId} state='2' clcikHandle={() => openBox(tokenId)} />)}
            {/* <BlindBox state='3' /> */}
        </div>
    </>
}