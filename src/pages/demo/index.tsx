import  {useCallback, useState, useEffect} from "react";
import {useWeb3React} from "@web3-react/core";
import useSwitchChain from "../../hooks/useSwitchChain";
import {ChainId} from "../../utils/constant";
import {injected} from "../../utils/connector";
import useBalance from "../../hooks/useBalance";
import {formatEther, formatUnits, isAddress} from "ethers/lib/utils";
import useClaim from "../../hooks/useClaim";
import useController, { useIsWhiteList } from "../../hooks/useController";
import useMyBoxes from "../../hooks/useMyBoxes";
import usePool, { useUserPoolInfo } from "../../hooks/usePool";
import useErc20Info from "../../hooks/useErc20Info";
import useLpToken from "../../hooks/useLpToken";
import { useERC20Balance } from "../../hooks/useErc20Balance";


export default function Demo() {
    const {active} = useWeb3React();

    return <div>{active ? <>
    <ClaimContent/>
    <PoolContent/>
    </> : <DisconnectedContent/>}</div>;
}


function DisconnectedContent() {
    const switchChain = useSwitchChain();
    const {activate, active} = useWeb3React();
    const handleConnect = useCallback(async () => {
        await switchChain(ChainId);
        await activate(injected);
    }, [switchChain]);
    useEffect(() => {
        if (!active) {
            handleConnect()
        }
    }, [active, handleConnect])
    return (
        <div>
            <button onClick={handleConnect}>Connect wallet</button>
        </div>
    );
}

function ConnectedContent() {
    const {account} = useWeb3React();
    const balance = useBalance();
    const {handleClaim, claimed} = useClaim()
    const [loading,setLoading] = useState(false)
    return (
        <div>
            <p>Your address is : {account}</p>
            <p>Your bnb balance is : {formatEther(balance)}</p>
            <p>your claime status: {claimed ? 'claimed' : 'not claimed'}</p>
            <button onClick={async ()=>{
                setLoading(true)
                await handleClaim()
                setLoading(false)
            }}>Claim</button>
            {loading && <p>waiting for confirmation ....</p>}
        </div>
    );
}

function ClaimContent() {
    const {isClaimed, claimInfo, handleBuy, openBox} = useController()
    const isWhiteList = useIsWhiteList()
    const {account} = useWeb3React()
    const {loading, tokenIds} = useMyBoxes();
    useEffect(()=>{
        console.log(isClaimed);
    
        },[isClaimed])   
    return <div>
        <p>current connected address: {account}</p>
        <p>is whiteList(everyone can buy in test): {isWhiteList ? ' whitelist' : 'not whitelist'}</p>
        <p>claim status: {isClaimed ? 'claimed' : 'not claimed'}</p>
        <p>start sell time: {claimInfo.sellStartTime}</p>
        <p>end sell time: {claimInfo.sellEndTime}</p>
        <p>start open time: {claimInfo.openStartTime}</p>
        <p>price: {formatEther(claimInfo.price)} ETH</p>
        <p>Total Amount: {claimInfo.totalAmount}</p>
        <p>Sold Amount: {claimInfo.soldAmount}</p>
        <p>rates: {JSON.stringify(claimInfo.rates)}</p>
        <button onClick={handleBuy}>buy</button>
        <p>My token Ids:</p>
        {tokenIds.map(tokenId => <p key={tokenId}>{tokenId} <button onClick={() => openBox(tokenId)}>open</button></p>)}
    </div>
}

const ADDRESS_REWARD_TOKEN = '0xaf532400B31314195EA88aDdD4C13fE7d69211C7'
const ADDRESS_LP_TOKEN = '0x76B50A3a20Decf43169309C6212BAD681Fc17369'

function PoolContent() {
    const {poolInfo, stake, getReward, withdraw} = usePool()
    const {userPoolInfo, refresh} = useUserPoolInfo()
    const {mint} = useLpToken()
    const {symbol, decimals} = useErc20Info(ADDRESS_REWARD_TOKEN)
    const [address, setAddress] = useState('')
    const [amount, setAmount] = useState(0)
    const lpBalance = useERC20Balance(ADDRESS_LP_TOKEN)
    const rewardBalance = useERC20Balance(ADDRESS_REWARD_TOKEN)
    const lpTokenInfo = useErc20Info(ADDRESS_LP_TOKEN)
    const [stakeAmount, setStakeAmount] = useState(0)
    const [withdrawAmount, setWithdrawAmount] = useState(0)
    return <div>
        <h3>Pool info:</h3>
        <p>startTime: {poolInfo.startTime}</p>
        <p>hasStart: {poolInfo.hasStart ? 'started':'not started'}</p>
        <p>duration: {poolInfo.duration}</p>
        <p>total supply: {formatUnits(poolInfo.totalSupply, decimals)} {symbol}</p>
        <p>init reward:{formatUnits(poolInfo.initReward, decimals)} {symbol}</p>
        <p>period finish: {poolInfo.periodFinish}</p>
        <p>lp: {poolInfo.lp}</p>
        <p>reward per token stored: {formatUnits(poolInfo.rewardPerTokenStored, decimals)} {symbol}</p>
        <p>reward rate: {poolInfo.rewardRate}</p>
        <p>last time reward applicable: {poolInfo.lastTimeRewardApplicable}</p>
        <p>reward per token: {formatUnits(poolInfo.rewardPerToken, decimals)} {symbol}</p>
        <p>mint lp token to: <br/>

        <input value={address} onChange={e => setAddress(e.target.value)} placeholder="address"/> <br/>
        <input value={amount} onChange={e => setAmount(+e.target.value)} placeholder='amount'/>
        <br/>
        <button onClick={() => {
            if (!isAddress(address)) {
                alert('invalid address!')
                return
            }
            if (isNaN(amount)) {
                alert('invalid amount')
                return
            }
            mint(address, amount)
        }}>Mint</button></p>

        <h3>My Pool Info</h3>
        <p>My Lp Token Balance: {formatUnits(lpBalance, lpTokenInfo.decimals)} {lpTokenInfo.symbol}</p>
        <p>My Reward Token Balance: {formatUnits(rewardBalance, decimals)} {symbol}</p>
        <p>My Staked LP balance: {formatUnits(userPoolInfo.balance, lpTokenInfo.decimals)} {lpTokenInfo.symbol}</p>
        <p>My rewards in Pool: {formatUnits(userPoolInfo.rewards, decimals)} {symbol}</p>
        <p>My earned in pool: {formatUnits(userPoolInfo.earned, decimals)} {symbol}</p>
        <p>My reward per token paid: {formatUnits(userPoolInfo.userRewardPerTokenPaid, decimals)} {symbol}</p>
        <p><button onClick={refresh}>refresh info</button><p/>
        <br></br>
        <button onClick={() => {
            getReward()
        }}>get reward from pool</button>
        </p>
        <p>
            input lp token amount to stake:
            <input value={stakeAmount} onChange={e => setStakeAmount(+e.target.value)} placeholder={'amount'}/>
        <button onClick={() => {
            console.log(stakeAmount);
            
            if(isNaN(stakeAmount)) {
                alert('invalid stake amount')
                return
            }
            if (stakeAmount > +formatUnits(lpBalance, decimals)) {
                alert('insufficent lp balance!')
                return
            }
            stake(stakeAmount)
        }}>Stake to earn</button>

        </p>

        <p>
            input lp token amount to withdraw:
            <input value={withdrawAmount} onChange={e => setWithdrawAmount(+e.target.value)} placeholder={'amount'}/>
        <button onClick={() => {
            if(isNaN(withdrawAmount)) {
                alert('invalid withdraw amount')
                return
            }
            if (withdrawAmount > +formatUnits(userPoolInfo.balance, decimals)) {
                alert('insufficent staked lp balance!')
                return
            }
            withdraw(withdrawAmount)
        }}>withdraw staked lp</button>

        </p>
    </div>
}