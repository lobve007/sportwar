import { useWeb3React } from "@web3-react/core"
import { BigNumber } from "ethers"
import { useCallback, useEffect, useState } from "react"
import { ABI_BOX_NFT } from "../abis"
import { isEqualString } from "../utils"
import { useContracts, useProvider } from "./useContract"

const ADDRESS_BOX_NFT = '0x6bb61638d39a27c74647862ec3021c1bcd1f52c6'
export default function useMyBoxes() {
    const { contract, multiCallContract } = useContracts(ADDRESS_BOX_NFT, ABI_BOX_NFT)
    const provider = useProvider()
    const {account} = useWeb3React()
    const [tokenIds, setTokenIds] = useState<number[]>([])
    const [loading, setLoading] = useState(false)
    const loadData = useCallback(async () => {
        if (provider && account && multiCallContract && contract) {
          try {
            setLoading(true)
            const balance = +(await contract.balanceOf(account))
            if (balance > 0) {
              const requests = new Array(balance).fill(0).map((x, i) => multiCallContract.tokenOfOwnerByIndex(account, i))
              const infos = await provider.all(requests)
              setTokenIds(infos.map(Number))
            } else {
              setTokenIds([])
            }
          } catch (e) {
            setTokenIds([])
          } finally {
            setLoading(false)
          }
        }
      }, [multiCallContract, provider, account, contract])
      useEffect(() => {
        loadData()
        if (contract && account) {
          const onTransferListener = (from: string, to: string, tokenId: BigNumber) => {
            if (isEqualString(from, account)) {
              setTokenIds(prev => prev.filter(x => x !== +tokenId))
            }
            if (isEqualString(to, account)) {
              setTokenIds(prev => [...prev, +tokenId])
            }
          }
          contract.on('Transfer', onTransferListener)
          return () => {
            contract.off('Transfer', onTransferListener)
          }
        }
      }, [loadData, contract, account])
      return {loading, tokenIds}
}