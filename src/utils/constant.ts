
export enum Chain {
    Ethereum = 1,
    Rinkeby = 4,
    Kovan = 42,
}

export const ChainId = +(process.env.REACT_APP_CHAIN_ID as any) as Chain
