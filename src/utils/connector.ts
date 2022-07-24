import {Chain, ChainId} from "./constant";
import {InjectedConnector} from "@web3-react/injected-connector";

export const supportedChainIds = [ChainId]

export const injected = new InjectedConnector({
    supportedChainIds
})

export const EthereumNetwork = {
    chainId: '0x1',
    chainName: 'Ethereum Main Net',
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://etherscan.io'],
}

export const RinkebyNetwork = {
    chainId: '0x4',
    chainName: 'Rinkeby Testnet',
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://rinkeby.etherscan.io'],
}

export const KovanNetwork = {
    chainId: '0x2a',
    chainName: 'Kovan',
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: ['https://kovan.infura.io/v3/'],
    blockExplorerUrls: ['https://kovan.etherscan.io/'],
}

export const networkMap = {
    [Chain.Ethereum]: EthereumNetwork,
    [Chain.Rinkeby]: RinkebyNetwork,
    [Chain.Kovan]:KovanNetwork
}

export async function connectNetWork() {
    return new Promise(function (resolve, reject) {
        const win:any = window
        if (!win.ethereum) return resolve(false)
        const network = networkMap[ChainId]
        if (!network) {
            return true
        }
        return win.ethereum
            .request({
                method: 'wallet_addEthereumChain',
                jsonrpc: '2.0',
                params: [networkMap[ChainId]],
            })
            .then(() => resolve(true))
            .catch(() => resolve(false))
    })
}
