import useAllowance from './useAllowance'
import { useContract } from './useContract'
import { useCallback, useMemo } from 'react'
import { constants } from 'ethers'
import { ABI_ERC20 } from '../abis'

export default function useApproved(address: string, spender: string) {
  const allowance = useAllowance(address, spender)

  const contract = useContract(address, ABI_ERC20)

  const approved = useMemo(() => allowance.gte(constants.MaxUint256.div(2)), [allowance])

  const approve = useCallback(async () => {
    if (contract) {
      try {
        const operation = await contract.approve(spender, constants.MaxUint256)
        await operation.wait()
        return true
      } catch (e) {
        return false
      }
    }
  }, [contract, spender])
  return { approved, approve }
}
