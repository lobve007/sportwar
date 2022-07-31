import {useContract} from "./useContract";
import {useEffect, useState} from "react";
import {BigNumber, constants} from "ethers";
import {useWeb3React} from "@web3-react/core";
import {isEqualString} from "../utils";
import { ABI_ERC20 } from "../abis";

export function useERC20Balance(address: string) {
    const contract = useContract(address, ABI_ERC20)
    const [balance, setBalance] = useState(constants.Zero)
    const {account, active} = useWeb3React()
    useEffect(() => {
        if (contract) {
            contract.balanceOf(account).then(setBalance)
        }
    }, [contract, account])
    useEffect(() => {
        if (contract && active) {
            const listener = (from: string, to: string, value: BigNumber) => {
                   if (!value.isZero() && (isEqualString(from, account) || isEqualString(to, account))) {
                       contract.balanceOf(account).then(setBalance)
                   }
            }
            contract.on('Transfer', listener)
            return () => {
                contract.removeListener('Transfer', listener)
            }
        }
    }, [contract, account, active])
    return balance
}