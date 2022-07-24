import { useWeb3React } from "@web3-react/core";
import { useCallback } from "react";
import { networkMap } from "../utils/connector";

export default function useSwitchChain() {
  const { library, chainId } = useWeb3React();
  const win: any = window;
  const provider = library?.provider || win.ethereum;
  const switchChain = useCallback(
    async (chain_id: number) => {
      if (Number(chainId) !== +chain_id) {
        if (!provider) {
          return;
        }
        try {
          await provider.request({
            jsonrpc: "2.0",
            method: "wallet_switchEthereumChain",
            params: [
              {
                chainId: "0x" + chain_id.toString(16),
              },
            ],
            id: 0,
          });
        } catch (e: any) {
          if (e.code === 4902) {
            //@ts-ignore
            const network = networkMap[+chain_id];
            if (network) {
              await provider.request({
                id: 1,
                jsonrpc: "2.0",
                method: "wallet_addEthereumChain",
                params: [network],
              });
            }
          }
        }
      }
    },
    [chainId, provider]
  );
  return switchChain;
}
