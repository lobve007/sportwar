import { useEffect, useState } from "react";
import { constants } from "ethers";
import { useSigner } from "./useContract";
import { useWeb3React } from '@web3-react/core';

export default function useBalance() {
  const [balance, setBalance] = useState(constants.Zero);
  const signer = useSigner();
  const {account} = useWeb3React()
  useEffect(() => {
    setBalance(constants.Zero);
    if (signer) {
      signer.getBalance().then((res) => {
        setBalance(res);
      });
    }
  }, [signer, account]);
  return balance;
}
