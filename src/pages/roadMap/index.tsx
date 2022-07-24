import RoadMap from "../../components/RoadMap";
import useSetPageIndex from "../../hooks/useSetPageIndex";
export default function RoadMapPage() {
    useSetPageIndex(4);
    return <>
        <RoadMap isIndex={false} />
    </>
}