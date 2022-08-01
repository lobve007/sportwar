import { useWeb3React } from '@web3-react/core';
import { formatUnits } from 'ethers/lib/utils';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { useERC20Balance } from '../../hooks/useErc20Balance';
import useErc20Info from '../../hooks/useErc20Info';
import useLpToken from '../../hooks/useLpToken';
import { useUserPoolInfo } from '../../hooks/usePool';
import styles from './index.module.scss';
const ADDRESS_LP_TOKEN = '0x76B50A3a20Decf43169309C6212BAD681Fc17369'
const ADDRESS_REWARD_TOKEN = '0xaf532400B31314195EA88aDdD4C13fE7d69211C7'
const ADDRESS_POOL = '0xCf33b46196C94982288b10eA3d63B4D1757fE939'
export default function Stake({ setStakeShow }: any) {
    const lpTokenInfo = useErc20Info(ADDRESS_LP_TOKEN);
    const lpBalance = useERC20Balance(ADDRESS_LP_TOKEN);
    const { userPoolInfo, refresh } = useUserPoolInfo();
    const { symbol, decimals } = useErc20Info(ADDRESS_REWARD_TOKEN);
    const value = formatUnits(userPoolInfo.balance, lpTokenInfo.decimals)
    const [amount, setAmount] = useState(Number(value));
    useEffect(()=>{
        setAmount(+value)
    },[value])
    const { account } = useWeb3React();
    const { mint } = useLpToken()
    return <div className={styles.stake}>
        <div className={styles.close}></div>
        <h3>Adjust the pledge amount</h3>
        <p>Pledgable quantity：{formatUnits(lpBalance, lpTokenInfo.decimals)}</p>
        <div className={styles.count_num_pop}>
            <input value={amount} onChange={e => setAmount(+e.target.value)}   />
        </div>
        <div className={styles.btn_wrap}>
            <Button text="Cancel" type='gray' clcikHandle={() => setStakeShow(false)} />
            <Button text="Upgrade" />
        </div>
    </div>
}
