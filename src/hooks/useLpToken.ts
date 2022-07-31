import { useWeb3React } from "@web3-react/core";
import { BigNumber } from "ethers";
import { parseEther, parseUnits } from "ethers/lib/utils";
import { useCallback, useEffect } from "react";
import { ABI_ERC20 } from "../abis";
import { useContract } from "./useContract";
import useErc20Info from "./useErc20Info";

const ADDRESS_LP_TOKEN = '0x76B50A3a20Decf43169309C6212BAD681Fc17369'

export default function useLpToken() {
    const contract = useContract(ADDRESS_LP_TOKEN, ABI_ERC20)
    const {decimals} = useErc20Info(ADDRESS_LP_TOKEN)
    const mint = useCallback(async(to: string, amount: number) => {
        if (!contract) return
        const tx = await contract.mint(to, parseUnits(amount + '', decimals))
        const res = await tx.wait()
        return res
    }, [contract, decimals])
    return {mint}
}