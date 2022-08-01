import styles from './index.module.scss'
import copy from "copy-to-clipboard";
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function Index() {
  const { seComingData } = useContext(AppContext);
  let list = getDonationList();
    return <>
        <div className={styles.donation_wrap}>
            <h3>Donation</h3>
            <p className={styles.sub_title}>We are a distributed team dedicated ourselves to build a WEB3 project globally. In order to ensure fairness and not be dominated by capital, we haven’t taken ANY capital investment. To operate Sportswar, we hereby gratefully accept donations as below. The use of the donation will be published on chain.</p>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index} className={styles[item.class.toLowerCase()]} >
                            <p>{item.type}</p>
                            <p>{item.address}</p>
                            <i onClick={() => {
                                seComingData({value:'Copy Success',isShow:true})
                                copy(item.address);
                            }}>COPY</i>
                        </li>
                    })
                }
            </ul>
        </div>
    </>
}

function getDonationList() {
    let list = [];
    list = [
        {
            type: 'BTC',
            class:'btc',
            address: '3EKKp8iH23L7qgqw4AdcUsncfcL3MMrDD8'
        },
        {
            type: 'ETH',
            class:'eth',
            address: '0x1cF82f0985803d8920F73764000B4402BE9C73f3'
        },
        {
            type: 'BNB Chain',
            class:'bnb',
            address: '0x1cF82f0985803d8920F73764000B4402BE9C73f3'
        },
        {
            type: 'TRX',
            class:'trx',
            address: 'TKNr5u5b6mWf8UfwC29syZqRGQAqmtko4x'
        },
    ];
    return list;
}