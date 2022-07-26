import { useEffect, useState } from "react";


export default function useComingSoon() {
    const [commingShow, setComingShow] = useState(false);
    useEffect(() => {
        let timer: any;
        if (commingShow) {
            timer = setTimeout(() => {
                setComingShow(false)
            }, 3000);
        }
        return () => {
            clearTimeout(timer)
        }
    }, [commingShow]);

    return {commingShow,setComingShow}
}