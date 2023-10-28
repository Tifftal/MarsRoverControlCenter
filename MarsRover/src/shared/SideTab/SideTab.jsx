export const SideTab = ({ children, header, side }) => {

    return (
        <div
            style={{
                position: "fixed",
                top: "90px",
                ...side,
                width: "20%",
                height: "80%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "10px",
                zIndex: "99",
                overflow: "hidden",
            }}
        >
            <div className="markersTabHeader">
                <h3>{header}</h3>
            </div>
            <div className="markersTabBody">
                {children}
            </div>
        </div>
    )
}