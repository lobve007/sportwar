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
            <h3 className={styles.title}><span>NFT blind box </span><i>pre-sale</i></h3>
            <h6 className={styles.sub_title}>
                <p>This is the first World Cup team blind box released by sportswear. </p>
                <p>It will cover all teams in the 2022 World Cup. It is exciting to have your favorite player card！</p>
            </h6>
            <div className={styles.img_wrap}>
                <div className={styles.clock}>2022.9.1-2022.11.1</div>
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
            <h3 className={styles.title}><span>STAKE</span></h3>
            <h6 className={styles.sub_title}>
                <p>We support LP and NFT to improve users' stacking revenue</p>
            </h6>
            <div className={styles.img_text_wrap}>
                <div className={styles.left_img}></div>
                <div className={styles.right_box}>
                    <div className={styles.img_bg}></div>
                    <i>STAKING</i>
                    <Button text="SEE ALL" linkUrl="/stake" />
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
                type: "gray",
                text: "GET LIST",
                linkUrl: '/whiteList'
            },
            btn2: {
                // type: "gray",
                text: "Purchase",
                clcikHandle: ()=>{setBuyPopIsShow(true)}
                // linkUrl: '/whiteList'
            },
        })
    }
}
