import "./SideTab.css";

export const SideTab = ({ children, header, side, open, setIsOpen, setIsClose }) => {
    return (
        <div
            style={{
                position: "fixed",
                top: "90px",
                ...side,
                width: "15%",
                // height: open ? "60%" : "50px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "10px",
                zIndex: "99",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                margin: "0 5px",
            }}
        >
            <div className="markersTabHeader">
                <h3>{header}</h3>
                <button
                    onClick={open ? setIsClose : setIsOpen}
                >
                    {open ? (<img src="../../img/свернуть.png"/>) : (<img src="../../img/развернуть.png"/>)}
                </button>
            </div>
            {!open ? null : (
                <div className="markersTabBody">
                    {children}
                </div>
            )
            }
        </div>
    )
}