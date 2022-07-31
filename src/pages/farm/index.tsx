import Button from '../../components/Button';
import styles from './index.module.scss'
import ComingSoon from '../../components/ComingSoon';
import useComingSoon from '../../hooks/useComingSoon';

export default function Farm() {
    const { commingShow, setComingShow } = useComingSoon();

    return <>
        <ul className={styles.page_war}>
            <li>
                <h3>WAR-USDC LP Farm </h3>
                <div className={styles.war_box}>
                    <img src={require('../../assets/image/banner/farm_lp.jpg')} alt="" />
                    <Button text='Select' linkUrl={'/farm/lp'} />
                </div>
            </li>
            <li>
                <h3>NFT Farm</h3>
                <div className={styles.war_box}>
                    <img src={require('../../assets/image/banner/farm_nft.jpg')} alt="" />
                    <Button text='Select' linkUrl={'/farm/nft'} />
                </div>
            </li>
        </ul>
       {commingShow && <ComingSoon />} 
    </>
}