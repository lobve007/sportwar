import {useWeb3React} from "@web3-react/core";
import {useCallback} from "react";

export default function useAddToken() {
    const {library} = useWeb3React()
    const win: any = window
    const provider = library?.provider || win.ethereum
    const addTokenToWallet = useCallback(async (tokenInfo: {
        address: string,
        symbol: string,
        decimals: number,
        image: string
    }) => {
        try {
            await provider.request({
                jsonrpc: "2.0",
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: tokenInfo
                },
                "id": 0
            })
        } catch (e) {
            console.log(e)
        }
    }, [provider])
    return addTokenToWallet
}