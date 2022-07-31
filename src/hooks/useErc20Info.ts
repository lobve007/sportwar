import {useContracts, useProvider} from "./useContract";
import {useEffect, useState} from "react";
import {useWeb3React} from "@web3-react/core";
import {constants} from "ethers";
import { ABI_ERC20 } from "../abis";

const _cache:{[key:string]: [string, string, number]} = {
    [constants.AddressZero]: ['BNB', 'BNB', 18]
}
export default function useErc20Info(address: string) {
    const {multiCallContract} = useContracts(address, ABI_ERC20)
    const provider = useProvider()
    const {active} = useWeb3React()
    const [name, setName] = useState('')
    const [symbol, setSymbol] = useState('')
    const [decimals, setDecimals] = useState(18)
    useEffect(() => {
        if (!address) return
        const cached = _cache[address]
        if (cached) {
            setName(cached[0])
            setSymbol(cached[1])
            setDecimals(cached[2])
            return
        }
        if (multiCallContract && provider && active) {
            provider.all([
                multiCallContract.name(),
                multiCallContract.symbol(),
                multiCallContract.decimals()
            ]).then(([name, symbol, decimals]) => {
                _cache[address] = [name, symbol, decimals]
                setName(name)
                setSymbol(symbol)
                setDecimals(+decimals)
            })
        }
    }, [active, multiCallContract, provider, address])
    return {name, symbol, decimals}
}
