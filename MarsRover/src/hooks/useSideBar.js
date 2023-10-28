import { useState } from "react";
import { rovers } from "../mocks/roverMock";

export const useSideBar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [rover, setRover] = useState(null);

    const handleGetRover = (idx) => {
        setRover(rovers[idx]);
        setActiveIndex(idx);
    }

    return {
        activeIndex,
        setActiveIndex,
        rover,
        setRover,
        handleGetRover
    }
}