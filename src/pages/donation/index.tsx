import styles from './index.module.scss'

export default function Index() {
    let list = getDonationList();
    return <>
    <div className={styles.donation_wrap}>
       <h3>Donation</h3>
       <p className={styles.sub_title}>We are an entrepreneurial team full of enthusiasm, committed to providing users with better products. In order to make the product have richer playing methods and better experience, we decided to accept donations. Here is the address to receive donations. The use of each donation will be made public on the chain</p>
        <ul>
            {
                list.map((item,index)=>{
                    return <li key={index} className={styles[item.type.toLowerCase()]}>
                        <p>{item.type}</p>
                        <p>{item.address}</p>
                        <i>COPY</i>
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
            type:'ETH',
            count:'3.0000000',
            address:'0x0000000000000000000'
        },
        {
            type:'BTC',
            count:'3.0000000',
            address:'0x0000000000000000000'
        },
        {
            type:'GOU',
            count:'3.0000000',
            address:'0x0000000000000000000'
        },
    ];
    return list;
}