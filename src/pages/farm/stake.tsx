import { useWeb3React } from '@web3-react/core';
import { formatUnits } from 'ethers/lib/utils';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { useERC20Balance } from '../../hooks/useErc20Balance';
import useErc20Info from '../../hooks/useErc20Info';
import useLpToken from '../../hooks/useLpToken';
import usePool, { useUserPoolInfo } from '../../hooks/usePool';
import styles from './index.module.scss';
const ADDRESS_LP_TOKEN = '0x76B50A3a20Decf43169309C6212BAD681Fc17369'
const ADDRESS_REWARD_TOKEN = '0xaf532400B31314195EA88aDdD4C13fE7d69211C7'
const ADDRESS_POOL = '0xCf33b46196C94982288b10eA3d63B4D1757fE939'
const reg =/(^[1-9]([0-9]+)?(\.[0-9]{1,6})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
export default function Stake({ setStakeShow }: any) {
    const lpTokenInfo = useErc20Info(ADDRESS_LP_TOKEN);
    const lpBalance = useERC20Balance(ADDRESS_LP_TOKEN);
    const { stake, withdraw } = usePool();
    const { userPoolInfo, refresh } = useUserPoolInfo();
    const { symbol, decimals } = useErc20Info(ADDRESS_REWARD_TOKEN);
    const myValue = +formatUnits(lpBalance, lpTokenInfo.decimals);
    const lpValue = +formatUnits(userPoolInfo.balance, lpTokenInfo.decimals);
    const [amount, setAmount] = useState(lpValue);
    useEffect(() => {
        setAmount(+lpValue);
    }, [lpValue])
    return <div className={styles.stake}>
        <h3>Adjust the pledge amount</h3>
        <p>Pledgable quantity：{formatUnits(lpBalance, lpTokenInfo.decimals)}</p>
        <div className={styles.count_num_pop}>
            <input value={amount} onChange={(e)=>{
                if(reg.test(e.target.value)) {
                    console.log(3)
                } else {
                    console.log(4);
                    
                }
                
                setAmount(+e.target.value)}

                } />
        </div>
        <div className={styles.btn_wrap}>
            <Button text="Cancel" type='gray' clcikHandle={() => setStakeShow(false)} />
            <Button text="Upgrade" clcikHandle={() => {
                if (isNaN(amount)) {
                    alert('invalid stake amount')
                    return
                }
                
                // if (amount + lpValue > myValue) {
                //     alert('insufficent lp balance!')
                //     return
                // }
                // if (amount > lpValue) {
                //     alert('insufficent staked lp balance!')
                //     return
                // }

                if (amount > lpValue) {
                    stake(amount - lpValue)
                    setStakeShow(false)
                } else if (amount < lpValue) {
                    withdraw(lpValue - amount)
                    setStakeShow(false)
                } else if (amount == lpValue) {
                    setStakeShow(false)
                    return
                }
            }} />
        </div>
    </div>
}

