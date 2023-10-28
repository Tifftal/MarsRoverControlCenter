import { Mapper } from "../../widgets/Map/Mapper";
import { MapWrapper } from "../../widgets/MapWrapper/MapWrapper";
import "./map.css";

export const Map = () => {
    return (
        <>
            <MapWrapper>
            <div
                style={{
                    position: "absolute",
                    left: "0",
                    width: "200px",
                    height: "200px",
                    zIndex: "999"
                }}
            >
                ПОПА
            </div>
                <Mapper />
            </MapWrapper>
        </>
    )
};

