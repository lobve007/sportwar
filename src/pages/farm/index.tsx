import Button from '../../components/Button';
import styles from './index.module.scss'
import ComingSoon from '../../components/ComingSoon';
import useComingSoon from '../../hooks/useComingSoon';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useWeb3React } from '@web3-react/core';
import { useNavigate } from 'react-router-dom';

export default function Farm() {
    const navigate = useNavigate()
    const { commingShow, setComingShow } = useComingSoon();
    const { setLoginShow } = useContext(AppContext);
    const { active } = useWeb3React();
    const handleClick = (e:any) => {
        if(!active) {
            e.preventDefault();
            setLoginShow(true);
        }
    }
    return <>
        <ul className={styles.page_war}>
            <li>
                <h3>WAR-USDC LP Farm </h3>
                <div className={styles.war_box}>
                    <img src={require('../../assets/image/banner/farm_lp.jpg')} alt="" />
                    <Button text='Select' clcikHandle={(e:any) => handleClick(e)} linkUrl={'/lpfram'} />
                </div>
            </li>
            <li>
                <h3>NFT Farm</h3>
                <div className={styles.war_box}>
                    <img src={require('../../assets/image/banner/farm_nft.jpg')} alt="" />
                    <Button text='Select' clcikHandle={(e:any) => handleClick(e)} linkUrl={'/nftfram'} />
                </div>
            </li>
        </ul>
        {commingShow && <ComingSoon />}
    </>
}