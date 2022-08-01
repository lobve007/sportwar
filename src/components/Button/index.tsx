import styles from './index.module.scss';
import { Link } from 'react-router-dom'
interface btnObj {
    text: string,
    type?: 'default' | 'gray' | 'gold' | 'gray2' | 'black',
    linkUrl?: string,
    clcikHandle?:any,
    disabled?:boolean
}
export default function Button({
    text,
    type = "default",
    linkUrl = "",
    clcikHandle=()=>{},
    disabled
}: btnObj) {
    return <Link to={linkUrl} className={`${styles[`btn-${type}`]} ${disabled?styles.disabled:''}`} onClick={clcikHandle}>{text}</Link>
}