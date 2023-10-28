import { Mapper } from "../../widgets/Map/Mapper";
import { MapWrapper } from "../../widgets/MapWrapper/MapWrapper";
import { MarkersTab } from "../../widgets/MarkersTab/MarkersTab";

export const Map = () => {
    return (
        <>
            <MapWrapper>
            <MarkersTab />
                <Mapper />
            </MapWrapper>
        </>
    )
};

