import { useState } from "react";
import { rovers } from "../mocks/roverMock";

export const useSideBar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [rover, setRover] = useState(null);

    const handleGetRover = (idx) => {
        setRover(rovers[idx]);
        setActiveIndex(idx);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const name = document.getElementById("Name").value;
        const maneuverablility = document.getElementById("Maneuverability").value;
        const speed = document.getElementById("Speed").value;

        console.log(name, maneuverablility, speed);
    }

    return {
        activeIndex,
        setActiveIndex,
        rover,
        setRover,
        handleGetRover,
        handleSubmitForm
    }
}