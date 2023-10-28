import { Tabs } from "../../entities/Tabs/Tabs";
import { useModal } from "../../hooks/useModal";
import { points } from "../../mocks/mapMock";
import { Modal } from "../../shared/ModalWindow/Modal";
import { SideTab } from "../../shared/SideTab/SideTab";
import { Mapper } from "../../widgets/Map/Mapper";
import { MapWrapper } from "../../widgets/MapWrapper/MapWrapper";
import { useHookTab } from "../../hooks/useHookTab";

export const Map = () => {
    const { open, point, handleOpenModal, handleCloseModal } = useModal();
    const { leftTab, rightTab, openLeftTab, closeLeftTab, openRightTab, closeRightTab } = useHookTab();

    return (
        <>
            <MapWrapper>
                <SideTab
                    header="Маркеры"
                    side={{ left: "0px" }}
                    open={leftTab}
                    setIsOpen={openLeftTab}
                    setIsClose={closeLeftTab}
                >
                    {points.map((point, index) => (
                        <Tabs key={index}>
                            <p key={index}>#{index + 1} {point.name}</p>
                        </Tabs>
                    ))}
                </SideTab>
                <SideTab
                    header="Марсоходы"
                    side={{ right: "0px" }}
                    open={rightTab}
                    setIsOpen={openRightTab}
                    setIsClose={closeRightTab}
                >
                </SideTab>
                {open && (
                    <Modal
                        header={point.name}
                        handleClose={handleCloseModal}
                    >
                        <p>Долгота: {point.coords[0]}</p>
                        <p>Широта: {point.coords[1]}</p>
                    </Modal>
                )}
                <Mapper
                    handleOpenModal={handleOpenModal}
                />
            </MapWrapper>
        </>
    )
};