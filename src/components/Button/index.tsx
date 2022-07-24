import styles from './index.module.scss';
import { Link } from 'react-router-dom'
interface btnObj {
    text: string,
    type?: 'default' | 'gray' | 'gold' | 'gray2',
    linkUrl?: string
}
export default function Button({
    text,
    type = "default",
    linkUrl = ""
}: btnObj) {
    return <Link to={linkUrl} className={styles[`btn-${type}`]}>{text}</Link>
}