import  {useCallback, useState, useEffect} from "react";
import {useWeb3React} from "@web3-react/core";
import useSwitchChain from "../../hooks/useSwitchChain";
import {ChainId} from "../../utils/constant";
import {injected} from "../../utils/connector";
import useBalance from "../../hooks/useBalance";
import {formatEther} from "ethers/lib/utils";
import useClaim from "../../hooks/useClaim";


export default function Demo() {
    const {active} = useWeb3React();

    return <div>{active ? <ConnectedContent/> : <DisconnectedContent/>}</div>;
}


function DisconnectedContent() {
    const switchChain = useSwitchChain();
    const {activate, active} = useWeb3React();
    
    const handleConnect = useCallback(async () => {
        await switchChain(ChainId);
        await activate(injected);
    }, [switchChain]);
    // useEffect(() => {
    //     if (!active) {
    //         handleConnect()
    //     }
    // }, [active, handleConnect])
    return (
        <div style={{'marginTop':'520px'}}>
            <button onClick={handleConnect}>Connect wallet</button>
        </div>
    );
}

function ConnectedContent() {
    const {account} = useWeb3React();
    const balance = useBalance();
    const {handleClaim, claimed} = useClaim()
    const [loading,setLoading] = useState(false)
    return (
        <div style={{'marginTop':'320px'}}>
            <p>Your address is : {account}</p>
            <p>Your bnb balance is : {formatEther(balance)}</p>
            <p>your claime status: {claimed ? 'claimed' : 'not claimed'}</p>
            <button onClick={async ()=>{
                setLoading(true)
                await handleClaim()
                setLoading(false)
            }}>Claim</button>
            {loading && <p>waiting for confirmation ....</p>}
        </div>
    );
}
