import { Mapper } from "../../widgets/MapWrapper/Mapper";
import "./map.css";

const MapWrapper = (props) => {
    return (
        <div className="MarsMapContainer">
            {props.children}
        </div>  
    )
}

export const Map = () => {
    return (
        <MapWrapper>
            <Mapper />
        </MapWrapper>
    )
};

