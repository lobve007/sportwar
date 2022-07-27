import { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import BuyPop from "../../components/BuyPop";
import RoadMap from "../../components/RoadMap";
import { AppContext } from "../../context/AppContext";
import styles from './index.module.scss';
export default function Index() {
    const [btnStatus, setBtnStatus] = useState({} as any)
    const { isLogin, isWhiteList, hasNft } = useContext(AppContext);
    const [buyPopIsShow, setBuyPopIsShow] = useState(false);
    useEffect(() => {
        getBtnStatus(isLogin, isWhiteList, hasNft, setBtnStatus, setBuyPopIsShow);
    }, [])

    return <>
        <div className={styles.pre_sale}>
        
            <h3 className={styles.title}><span>NFT MYSTERY BOX </span><i>Pre-sale</i></h3>
            <h6 className={styles.sub_title}>
                <p>The first 2022 FIFA World Cup Team MYSTERY Boxes will be raffled by Sportswar. It covers 32 nation teams in the 2022 World Cup. </p>
                <p>So exciting to own a team card of your favoraite, moreover, the team cards do bring extra profits.</p>
            </h6>
            <div className={styles.img_wrap}>
                <div className={styles.clock}>30-08-2022</div>
            </div>
            <div className={styles.btn_wrap}>
                {
                    Object.keys(btnStatus).map((item, index) => {
                        return <Button
                            key={index}
                            text={btnStatus[item].text}
                            type={btnStatus[item].type}
                            linkUrl={btnStatus[item].linkUrl}
                            clcikHandle={btnStatus[item].clcikHandle}
                        />
                    })
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
                    <Button text="More" linkUrl="/mining" />
                </div>
            </div>
        </div>
        <RoadMap isIndex />
        {buyPopIsShow && <BuyPop getPopShow={setBuyPopIsShow} />}
    </>
}

function getBtnStatus(isLogin: boolean, isWhiteList: boolean, hasNft: boolean, setBtnStatus: any, setBuyPopIsShow: any) {
    if (!isWhiteList) { // 非白名单用户
        setBtnStatus({
            btn1: {
                type: "default",
                text: "Get Whitelist",
                linkUrl: '/whiteList'
            },
            // btn2: {
            //     type: "gray",
            //     text: "Purchase",
            //     clcikHandle: ()=>{setBuyPopIsShow(true)},
            //     linkUrl: '/whiteList'
            // },
        })
    }
}
