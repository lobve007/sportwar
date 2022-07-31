import { useWeb3React } from "@web3-react/core"
import { BigNumber, constants } from "ethers"
import { formatUnits, parseUnits } from "ethers/lib/utils"
import { useCallback, useEffect, useState } from "react"
import { ABI_ERC20, ABI_POOL } from "../abis"
import { isEqualString } from "../utils"
import useApproved from "./useApproved"
import { useContracts, useProvider } from "./useContract"
import useErc20Info from "./useErc20Info"

const ADDRESS_POOL='0xCf33b46196C94982288b10eA3d63B4D1757fE939'
const ADDRESS_LP_TOKEN = '0x76B50A3a20Decf43169309C6212BAD681Fc17369'


interface PoolInfo {
    startTime: number
    hasStart: boolean
    duration: number
    totalSupply: BigNumber
    initReward:BigNumber
    reward: string
    periodFinish: number
    lp: string
    rewardPerTokenStored: BigNumber
    rewardRate: number
    lastTimeRewardApplicable: number
    rewardPerToken: BigNumber
}

export default function usePool() {
    const {contract, multiCallContract} = useContracts(ADDRESS_POOL, ABI_POOL)
    const provider = useProvider()
    const [loading, setLoading] = useState(false)
    const {decimals} = useErc20Info(ADDRESS_LP_TOKEN)
    const {approve, approved} = useApproved(ADDRESS_LP_TOKEN, ADDRESS_POOL)
    const [poolInfo, setPoolInfo] = useState<PoolInfo>({
        startTime: 0,
        hasStart: false,
        duration: 0,
        totalSupply: constants.Zero,
        initReward:constants.Zero,
        reward: constants.AddressZero,
        periodFinish: 0,
        lp: constants.AddressZero,
        rewardPerTokenStored: constants.Zero,
        rewardRate: 0,
        lastTimeRewardApplicable: 0,
        rewardPerToken: constants.Zero
    })
    useEffect(() => {
        if (!multiCallContract || !provider) return
        setLoading(true)
        provider.all([
            multiCallContract._startTime(),
            multiCallContract._hasStart(),
            multiCallContract.DURATION(),
            multiCallContract._totalSupply(),
            multiCallContract._initReward(),
            multiCallContract._reward(),
            multiCallContract._periodFinish(),
            multiCallContract._lp(),
            multiCallContract._rewardPerTokenStored(),
            multiCallContract._rewardRate(),
            multiCallContract.lastTimeRewardApplicable(),
            multiCallContract.rewardPerToken()

        ]).then(res => {
            setPoolInfo({
                startTime: +res[0],
                hasStart: res[1],
                duration: +res[2],
                totalSupply: res[3],
                initReward:res[4],
                reward: res[5],
                periodFinish: +res[6],
                lp: res[7],
                rewardPerTokenStored: res[8],
                rewardRate: +res[9],
                lastTimeRewardApplicable: +res[10],
                rewardPerToken: res[11]
            })
        }).finally(() => {
            setLoading(false)
        })
        // you can add some listener to change value
    }, [multiCallContract, provider])
    const stake = useCallback(async (amount: number) => {
        if (!contract) return
        if (!approved) {
            const rst = await approve()
            if (!rst) return
        }
        try {
            const tx = await contract.stake(parseUnits(amount + '', decimals))
            const res = await tx.wait()
            return res
        } catch(e:any) {
            alert(e.message || e.data?.message)
        }

    }, [contract, decimals, approve, approved])
    const getReward = useCallback(async () => {
        if (!contract) return
        try {
        const tx = await contract.getReward()
        const res = tx.wait()
        return res
    } catch(e:any) {
        alert(e.message || e.data?.message)
    }
    }, [contract])
    const withdraw = useCallback(async (amount: number) => {
        if (!contract) return
        try {
        const tx = await contract.withdraw(parseUnits(amount + '', decimals))
        const res = await tx.wait()
        return res
    } catch(e:any) {
        alert(e.message || e.data?.message)
    }
    }, [contract])
    return {poolInfo, loading, stake, getReward, withdraw}
}

interface UserPoolInfo {
    balance: BigNumber
    lastStakedTime: number
    rewards: BigNumber
    userRewardPerTokenPaid:BigNumber
    earned: BigNumber
}

export function useUserPoolInfo() {
    const {contract, multiCallContract} = useContracts(ADDRESS_POOL, ABI_POOL)
    const provider = useProvider()
    const {account} = useWeb3React()
    const [loading, setLoading] = useState(false)
    const [userPoolInfo, setUserPoolInfo] = useState<UserPoolInfo>({
        balance: constants.Zero,
        lastStakedTime: 0,
        rewards: constants.Zero,
        userRewardPerTokenPaid: constants.Zero,
        earned:constants.Zero
    })
    const loadData = useCallback(() => {
        if (!account || !provider || !multiCallContract) return
        setLoading(true)
        provider.all([
            multiCallContract._balances(account),
            multiCallContract._lastStakedTime(account),
            multiCallContract._rewards(account),
            multiCallContract._userRewardPerTokenPaid(account),
            multiCallContract.earned(account)
        ]).then(res => {
            setUserPoolInfo({
                balance: res[0],
                lastStakedTime: +res[1],
                rewards: res[2],
                userRewardPerTokenPaid: res[3],
                earned: res[4]
            })
        }).finally(() => {
            setLoading(false)
        })
    }, [multiCallContract, provider, account])
    useEffect(() => {
        loadData()
    }, [loadData])
    return {userPoolInfo, loading, refresh: loadData}
}