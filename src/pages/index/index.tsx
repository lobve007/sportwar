import Button from "../../components/Button";
import RoadMap from "../../components/RoadMap";
import styles from './index.module.scss';
import useSetPageIndex from "../../hooks/useSetPageIndex";
export default function Index() {
    // useSetPageIndex(1);
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
                <Button type="gray" text="GET LIST" linkUrl='/whiteList' />
                <Button text="BUY NOW" />
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
    </>
}