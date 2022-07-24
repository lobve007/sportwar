import styles from './index.module.scss';
import Button from '../Button';
interface props {
    isIndex: Boolean;
}
export default function RoadMap(props: props) {
    let { isIndex=false } = props
    return <div className={styles.road_map}>
        <h3 className={styles.title}><span>Road map</span></h3>
        <h6 className={styles.circle_title}>Autumn 2022</h6>
        <ul className={styles.content_list}>
            <li>We were born</li>
            <li>NFT blind box pre-sale</li>
            <li>Mining function support (lp&nft)</li>
        </ul>
        <div className={styles.btn_wrap}>
            {isIndex
                ? <Button text="SEE ALL" linkUrl={'/roadmap'} />
                : ''
            }
        </div>
    </div>

}