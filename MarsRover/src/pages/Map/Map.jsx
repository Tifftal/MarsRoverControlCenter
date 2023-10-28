import { MapWrapper } from "../../widgets/MapWrapper/MapWrapper";
import "./map.css";

// Мне надо поставить надпись БАЗА в центре карты
export const Map = () => {
    return (
        <MapWrapper>
            <div className="map"

            >
                <div className="base"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "50px",
                        color: "red",
                        fontWeight: "bold",
                    }}
                >Юаза</div>
            </div>
        </MapWrapper>
    )
};

