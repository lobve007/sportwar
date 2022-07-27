import Button from '../../components/Button';
import styles from './index.module.scss'
import ComingSoon from '../../components/ComingSoon';
import useComingSoon from '../../hooks/useComingSoon';

export default function Mining() {
    const { commingShow, setComingShow } = useComingSoon();

    return <>
        <ul className={styles.page_war}>
            <li>
                <h3>WAR-USDC LP Farm </h3>
                <div className={styles.war_box}>
                    <img src={require('../../assets/image/banner/farm_lp.jpg')} alt="" />
                    <Button text='Select' clcikHandle={() => { setComingShow(true); }} />
                    {/* <Button text='Select' linkUrl={'/mining/lp'} /> */}
                </div>
            </li>
            <li>
                <h3>NFT Farm</h3>
                <div className={styles.war_box}>
                    <img src={require('../../assets/image/banner/farm_nft.jpg')} alt="" />
                    {/* <Button text='Select' linkUrl={'/mining/nft'} /> */}
                    <Button text='Select' clcikHandle={() => { setComingShow(true); }} />
                </div>
            </li>
        </ul>
       {commingShow && <ComingSoon />} 
    </>
}