import { useWeb3React } from "@web3-react/core";
import { useCallback, useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import BuyPop from "../../components/BuyPop";
import RoadMap from "../../components/RoadMap";
import { AppContext } from "../../context/AppContext";
import useController, { useIsWhiteList } from "../../hooks/useController";
import useMyBoxes from "../../hooks/useMyBoxes";
import useSwitchChain from "../../hooks/useSwitchChain";
import { injected } from "../../utils/connector";
import { ChainId } from "../../utils/constant";
import styles from './index.module.scss';
export default function Index() {
    const { isClaimed, claimInfo, handleBuy, openBox } = useController();
    const { active } = useWeb3React();
    const { setLoginShow } = useContext(AppContext);
   
    return <>
        <div className={styles.pre_sale}>

            <h3 className={styles.title}><span>NFT MYSTERY BOX </span><i>Pre-sale</i></h3>
            <h6 className={styles.sub_title}>
                <p>The first 2022 FIFA World Cup Team MYSTERY Boxes will be raffled by Sportswar. It covers 32 nation teams in the 2022 World Cup. </p>
                <p>So exciting to own a team card of your favoraite, moreover, the team cards do bring extra profits.</p>
            </h6>
            <div className={styles.img_wrap}>
                <div className={styles.clock}>Mint Date：30/08/2022</div>
            </div>
            <div className={styles.btn_wrap}>
                <Button type="gray" text="Get Whitelist" linkUrl='/whiteList' />
                {
                    !active ? <Button text="Mint" clcikHandle={()=>{setLoginShow(true)}} /> :
                        (isClaimed ? <Button text="My Nft" linkUrl="/my" /> :
                            <Button text="Mint" clcikHandle={handleBuy} />)
                }
            </div>
        </div>
        <div className={styles.stake}>
            <h3 className={styles.title}><span>FARM</span></h3>
            <h6 className={styles.sub_title}>
                <p>We support users who hold team-card NFTs to get benefits by staking & mining, or to get rewards through LP staking.</p>
            </h6>
            <div className={styles.img_text_wrap}>
                <div className={styles.left_img}></div>
                <div className={styles.right_box}>
                    <div className={styles.img_bg}></div>
                    <i>STAKING</i>
                    <Button text="More" linkUrl="/farm" />
                </div>
            </div>
        </div>
        <RoadMap isIndex />
    </>
}

