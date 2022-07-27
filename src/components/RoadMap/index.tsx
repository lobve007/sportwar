import styles from './index.module.scss';
import Button from '../Button';
interface props {
    isIndex: Boolean;
}
export default function RoadMap(props: props) {
    let { isIndex = false } = props
    return <div className={styles.road_map}>
        <h3 className={styles.title}><span>Road map</span></h3>
            {!isIndex && <h3 className={styles.sub_tit}>2022</h3>}
        <div className={styles.list_wrap}>
            <ul className={styles.content_list}>
                <li className={styles.circle_title}>Q3</li>
                <li>NFT blind box sales</li>
                <li>NFT stake & mine</li>
                <li> LP mining online</li>
                <li> NFT upgrade</li>
                <li> FOMO FIFA launch</li>
            </ul>
            <ul className={styles.content_list}>
                <li className={styles.circle_title}>Q4</li>
                <li>2022 FIFA World Cup</li>
                <li>NBA quiz</li>
                <li>Other football leagues:Champions League, Premier League, Series A.</li>
            </ul>
        </div>
        {!isIndex && <h3 className={styles.sub_tit}>2023</h3>}
        {!isIndex ? <div className={styles.list_wrap}>
            <ul className={styles.content_list}>
                <li className={styles.circle_title}>Q1</li>
                <li>Access to more sports events quiz projects</li>
            </ul>
            <ul className={styles.content_list}>
                <li className={styles.circle_title}>Q2</li>
                <li>Development andoperation of fantasy Sports projects</li>
            </ul>
            <ul className={styles.content_list}>
                <li className={styles.circle_title}>Q3</li>
                <li>COMPREHENSIVE SPORTS QUIZ PLATFORM</li>
            </ul>
        </div> : null
        }
        <div className={styles.btn_wrap}>
            {isIndex
                ? <Button text="More" linkUrl={'/roadmap'} />
                : ''
            }
        </div>
    </div>

}