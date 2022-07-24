import { providers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import { getContract, getMulContract } from "../utils";
import { Provider } from "ethers-multicall";

export function useSigner(): providers.JsonRpcSigner | null {
  const { library } = useWeb3React();
  const signer = useMemo(() => {
    return library?.getSigner() || null;
  }, [library]);
  return signer;
}

export function useContract(address: string | null | undefined, abi: any) {
  const signer = useSigner();
  const { active } = useWeb3React();
  const contract = useMemo(() => {
    if (!address || !active) return null;
    return getContract(address, abi, signer);
  }, [signer, address, abi, active]);
  return contract;
}

export function useContracts(address: string | null | undefined, abi: any) {
  const contract = useContract(address, abi);
  const multiCallContract = useMultiContract(address, abi);
  return { contract, multiCallContract };
}

export function useMultiContract(address: string | null | undefined, abi: any) {
  const { active } = useWeb3React();
  const contract = useMemo(() => {
    if (!address || !active) return null;
    return getMulContract(address, abi);
  }, [address, abi, active]);
  return contract;
}

export function useProvider() {
  const { library, chainId, active } = useWeb3React();
  return useMemo(() => {
    if (!active) return null;
    const _provider = new Provider(library, chainId);
    if (chainId === 97) {
      //@ts-ignore
      _provider._multicallAddress =
        "0x75E7EB2689e6C212Db123Be7A42e4Cfd7789Ab2D";
    }
    return _provider;
  }, [library, chainId, active]);
}
