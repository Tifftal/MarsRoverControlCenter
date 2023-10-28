import { SideTab } from "../../shared/SideTab/SideTab";
import { Mapper } from "../../widgets/Map/Mapper";
import { MapWrapper } from "../../widgets/MapWrapper/MapWrapper";

export const Map = () => {
    return (
        <>
            <MapWrapper>
                <SideTab header="Маркеры" side={{right: "0px",}}>
                </SideTab>
                <SideTab header="Марсоходы" side={{left: "0px",}}>
                </SideTab>
                <Mapper />
            </MapWrapper>
        </>
    )
};

