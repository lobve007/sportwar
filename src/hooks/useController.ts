import { useWeb3React } from "@web3-react/core"
import { BigNumber, constants } from "ethers"
import { id } from "ethers/lib/utils"
import { useCallback, useEffect, useState } from "react"
import { ABI_CONTROLLER } from "../abis"
import { ClaimWhiteList } from "../constants"
import { isEqualString } from "../utils"
import { useContract, useMultiContract, useProvider } from "./useContract"

const CONTROLLER_ADDRESS = '0x7F92D0F8bc6916f557cAc4A9154AA32aCC8E2885'

interface ClaimInfo {
    totalAmount: number
    soldAmount: number
    price: BigNumber
    openStartTime: number
    sellEndTime: number
    sellStartTime: number
    rates: number[]
}

export default function useController() {
    const {account} = useWeb3React()
    const contract = useContract(CONTROLLER_ADDRESS, ABI_CONTROLLER)
    const multiCallContract = useMultiContract(CONTROLLER_ADDRESS, ABI_CONTROLLER)
    const provider = useProvider()
    const isWhiteList = useIsWhiteList()
    const [isClaimed, setIsClaimed] = useState(false)
    const [claimInfo, setClaimInfo] = useState<ClaimInfo>({
        totalAmount: 0,
        soldAmount: 0,
        price: constants.Zero,
        openStartTime: 0,
        sellEndTime: 0,
        sellStartTime:0,
        rates: [0,0,0,0,0]
    })

    useEffect(() => {
        if (!account || !multiCallContract || !contract || !provider) return
        provider.all([
            multiCallContract.isClaimed(account),
            multiCallContract.sellStartTime(),
            multiCallContract.sellEndTime(),
            multiCallContract.openStartTime(),
            multiCallContract.price(),
            multiCallContract.totalAmount(),
            multiCallContract.soldAmount(),
            // multiCallContract.rates()
        ]).then(res => {
            setIsClaimed(res[0])
            setClaimInfo({
                sellStartTime: +res[1],
                sellEndTime: +res[2],
                openStartTime: +res[3],
                price: res[4],
                totalAmount: +res[5],
                soldAmount: +res[6],
                rates: []//res[7].map(Number)
            })
        })
        const onBuyListener = (sender: string) => {
            setClaimInfo(prev => ({...prev, soldAmount: prev.soldAmount + 1}))
            if (isEqualString(sender, account)) {
                setIsClaimed(true)
            }
        }
        contract.on('BUY', onBuyListener)
        return () => {
            contract.off('BUY', onBuyListener)
        }

    }, [account, multiCallContract, contract, provider])
    const handleBuy = useCallback(async () => {
        if (!contract || !account) return
        if (isClaimed) {
        // if (isClaimed || !isWhiteList) {
            alert('You are not whitelist or has claimed!')
            return
        }
        const data = getClaimData(account)
        console.log(data)
        try {
            const tx = await contract.buy(data?.index || 0, data?.proof || [], {value: claimInfo.price})
            const res = await tx.wait()
            console.log(res)
            const buyEvent = res.events.find((x:any) => isEqualString(x.topics[0], id('BUY(address,uint256)')))
            //return opened box id
            return buyEvent ? buyEvent[3]:null
        } catch (e:any) {
            alert(e.message || e.data?.message)
        }

    }, [contract, isClaimed, isWhiteList, account, claimInfo])
    const openBox = useCallback(async (id: number) => {
        if (!contract) return
        const tx = await contract.open(id,{gasLimit:60000})
        const res = await tx.wait()
        console.log(res)
    }, [contract])
    return {isClaimed, claimInfo, handleBuy, openBox}
}

const whiteListAddresses = Object.keys(ClaimWhiteList.claims).map(x => x.toLowerCase())

export function useIsWhiteList() {
   const {account} = useWeb3React() 
    const [isWhiteList, setIsWhiteList] = useState(false)
    useEffect(() => {
        setIsWhiteList(whiteListAddresses.includes(account?.toLowerCase() || ''))
    }, [account])
    return isWhiteList
}

function getClaimData(account: string) {
    const claimsEntries = Object.entries(ClaimWhiteList.claims)
    const target = claimsEntries.find(x => isEqualString(x[0], account))
    if (target) {
        return target[1]
    }
    return null
}