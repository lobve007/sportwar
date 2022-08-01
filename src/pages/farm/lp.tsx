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
    const {poolInfo, poolInfo: { duration, periodFinish }, getReward, stake } = usePool();
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
        let halving =  -(nowDate - periodFinish * 1000)
        let days = Math.floor(halving / (24 * 3600 * 1000)); // 计算出天数
        let leavel1 = halving % (24 * 3600 * 1000); // 计算天数后剩余的时间
        let hours = Math.floor(leavel1 / (3600 * 1000)); // 计算天数后剩余的小时数
        let leavel2 = halving % (3600 * 1000); // 计算剩余小时后剩余的毫秒数
        let minutes = Math.floor(leavel2 / (60 * 1000)); // 计算剩余的分钟数
        console.log(nowDate, periodFinish * 1000);

        console.log(`${days}天${hours}时${minutes}分`)

    }, [])

    return <div className={styles.page_lp}>
        <div className={styles.page_nft_item}>
            <h3>WAR / USDC LP Farm </h3>
            <ul className={`${styles.col_two} ${styles.lp_top}`}>
                <li>
                    <img src={require('../../assets/image/lp.png')} alt="" />
                    <div className={styles.text}>
                        <h3>Total Staking Amount</h3>
                        <p>{formatUnits(poolInfo.totalSupply, decimals)} {symbol}</p>
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
                        <p><span>Earnings</span> <span>{formatUnits(userPoolInfo.earned, decimals)}</span></p>
                        <Button text='HARVEST' clcikHandle={() => { getReward() }} />
                    </div>
                </li>
                <li className={styles.lp_mid_two}>
                    <div className={styles.text}>
                        <p><span>My Owning</span> <span>{formatUnits(lpBalance, lpTokenInfo.decimals)}</span></p>
                        <p><span>Staked</span> <span>{formatUnits(userPoolInfo.balance, lpTokenInfo.decimals)}</span></p>
                    </div>
                    <div className={styles.btn_wrap}>
                        {approved ? <div className={styles.count_num}>
                            <i onClick={() => setStakeShow(true)}>+</i>
                            <i onClick={() => setStakeShow(true)}>-</i>
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
        {stakeShow ? <Stake setStakeShow={setStakeShow} /> : null}
    </div >
}

function getFormatDate(timestamp: any) {
    timestamp = parseInt(timestamp + '000');
    var newDate = new Date(timestamp);
    // @ts-ignore 
    Date.prototype.format = function (format) {
        var date = {
            'M+': this.getMonth() + 1,
            'd+': this.getDate(),
            'h+': this.getHours(),
            'm+': this.getMinutes(),
            's+': this.getSeconds(),
            'q+': Math.floor((this.getMonth() + 3) / 3),
            'S+': this.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp('(' + k + ')').test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                    // @ts-ignore 
                    ? date[k] : ('00' + date[k]).substr(('' + date[k]).length));
            }
        }
        return format;
    }
    // @ts-ignore 
    return newDate.format('yyyy-MM-dd h:m');
} 