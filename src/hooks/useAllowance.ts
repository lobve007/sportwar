import { useCallback, useEffect, useState } from 'react'
import { BigNumber, constants } from 'ethers'
import { useContract } from './useContract'
import { useWeb3React } from '@web3-react/core'
import { ABI_ERC20 } from '../abis'

export default function useAllowance(address: string, spender: string) {
  const [allowance, setAllowance] = useState(BigNumber.from(0))
  const contract = useContract(address, ABI_ERC20)
  const { account } = useWeb3React()
  
  const refresh = useCallback(() => {
    if (contract) {
      contract.allowance(account, spender).then(setAllowance)
    }
  }, [contract, account, spender])

  useEffect(() => {
    setAllowance(constants.Zero)
  }, [address, spender, account])

  useEffect(() => {
    refresh()
  }, [refresh])

  useEffect(() => {
    if (contract && contract.provider) {
      const approvalListener = (owner: string, xSpender: string, amount: BigNumber) => {
        if (owner === account && spender === xSpender) {
          setAllowance(amount)
        }
      }
      contract.on('Approval', approvalListener)
      return () => {
        contract.removeListener('Approval', approvalListener)
      }
    }
  }, [contract, refresh, account, spender])
  return allowance
}
