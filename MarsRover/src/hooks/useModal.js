import { useState } from "react";

export const useModal = () => {
    const [open, setOpen] = useState(false);
    const [point, setPoint] = useState(null);

    const handleOpenModal = (point) => {
        console.log(point)
        setPoint(point);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return {
        open,
        point,
        handleOpenModal,
        handleCloseModal
    };
}