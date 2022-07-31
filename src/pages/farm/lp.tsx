import { formatUnits } from 'ethers/lib/utils';
import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import useApproved from '../../hooks/useApproved';
import { useERC20Balance } from '../../hooks/useErc20Balance';
import useErc20Info from '../../hooks/useErc20Info';
import useLpToken from '../../hooks/useLpToken';
import usePool, { useUserPoolInfo } from '../../hooks/usePool';
import styles from './index.module.scss'
import Stake from './stake';
const ADDRESS_LP_TOKEN = '0x76B50A3a20Decf43169309C6212BAD681Fc17369'
const ADDRESS_REWARD_TOKEN = '0xaf532400B31314195EA88aDdD4C13fE7d69211C7'
const ADDRESS_POOL = '0xCf33b46196C94982288b10eA3d63B4D1757fE939'

export default function Lp() {
    const { poolInfo: { duration, periodFinish }, getReward,stake } = usePool();
    const [HALVING, setHALVING] = useState('');
    const nowDate = new Date().getTime();
    const lpTokenInfo = useErc20Info(ADDRESS_LP_TOKEN);
    const lpBalance = useERC20Balance(ADDRESS_LP_TOKEN);
    const { userPoolInfo, refresh } = useUserPoolInfo();
    const { symbol, decimals } = useErc20Info(ADDRESS_REWARD_TOKEN);
    const { approve, approved } = useApproved(ADDRESS_LP_TOKEN, ADDRESS_POOL)
    const [stakeAmount, setStakeAmount] = useState(0)
    const [stakeShow, setStakeShow] = useState(false)

    useEffect(() => {
        let halving = nowDate - periodFinish
    }, [nowDate])

    return <div className={styles.page_lp}>
        <div className={styles.page_nft_item}>
            <h3>WAR / USDC LP Farm </h3>
            <ul className={`${styles.col_two} ${styles.lp_top}`}>
                <li>
                    <img src={require('../../assets/image/lp.png')} alt="" />
                    <div className={styles.text}>
                        <h3>Total Staking Amount</h3>
                        <p>$  30000000.05</p>
                    </div>
                </li>
                <li>
                    <img src={require('../../assets/image/lp.png')} alt="" />
                    <div className={styles.text}>
                        <h3>War Price</h3>
                        <p>$  30000000.05</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className={styles.page_nft_item}>
            <h3>My Profit</h3>
            <ul className={`${styles.col_three} ${styles.lp_mid}`}>
                <li className={styles.lp_mid_one}>
                    <div className={styles.img_bg}>
                        <img src={require('../../assets/image/lp.png')} alt="" />
                    </div>
                    <div className={styles.text}>
                        <p><span>Earnings</span> <span>{formatUnits(userPoolInfo.earned, decimals)} {symbol}</span></p>
                        <Button text='HARVEST' clcikHandle={() => { getReward() }} />
                    </div>
                </li>
                <li className={styles.lp_mid_two}>
                    <div className={styles.text}>
                        <p><span>My Owning</span> <span>{formatUnits(lpBalance, lpTokenInfo.decimals)} {lpTokenInfo.symbol}</span></p>
                        <p><span>Staked</span> <span>{formatUnits(userPoolInfo.balance, lpTokenInfo.decimals)} {lpTokenInfo.symbol}</span></p>
                    </div>
                    <div className={styles.btn_wrap}>
                        {approved ? <div className={styles.count_num}>
                            <i onClick={()=>setStakeShow(true)}>+</i>
                            <i onClick={()=>setStakeShow(true)}>-</i>
                        </div> : null}
                        <Button text='To get tokens' />
                        {!approved ? <Button text='Authorize to stake' clcikHandle={() => stake(stakeAmount)} /> : null}
                    </div>
                </li>
            </ul>
        </div>
        <div className={styles.page_nft_item}>
            <h3>LP mining pool</h3>
            <ul className={`${styles.col_three} ${styles.pond}`}>
                <li>
                    <div className={styles.tit}>TVL</div>
                    <div className={styles.content}>
                        <p>83219.11</p>
                    </div>
                </li>
                <li>
                    <div className={styles.tit}>Staked tokens</div>
                    <div className={styles.content}>
                        <p>ETH：40.10</p>
                        <p>WARGOLD：3192 </p>
                    </div>
                </li>
                <li>
                    <div className={styles.tit}>HALVING</div>
                    <div className={styles.content}>
                        <p>{HALVING}</p>
                    </div>
                </li>
            </ul>
        </div>
        {stakeShow?<Stake setStakeShow={setStakeShow} />:null}
    </div >
}
