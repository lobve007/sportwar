import { useCallback, useEffect, useState } from "react";
import { ABI_CLAIM } from "../abis";
import { useContract } from "./useContract";
import { useWeb3React } from '@web3-react/core';
import { isEqualString } from "../utils";

const CLAIM_ADDRESS = '0x75E7EB2689e6C212Db123Be7A42e4Cfd7789Ab2D'

export default function useClaim() {
    const contract = useContract(CLAIM_ADDRESS, ABI_CLAIM)
    const [claimed, setClaimed] = useState(false)
    const {account} = useWeb3React()
    const handleClaim = useCallback(async () => {
        try {
            const tx = await contract?.claim()
            const res = await tx.wait()
            return res
        } catch (e:any) {
            alert(e.data?.message || e.message)
        }
    }, [contract])
    useEffect(() => {
        setClaimed(false)
        contract?.claimed(account).then(setClaimed)
    }, [account, contract])
    useEffect(() => {
        if (contract) {
            const onClaimLisener = (_sender: string) => {
                if (isEqualString(_sender, account)) {
                    setClaimed(true)
                }
            }
            contract.on('Claim', onClaimLisener)
            return () => {
                contract.off('Claim', onClaimLisener)
            }
        }
    }, [contract, account])

    return {handleClaim, claimed}
}