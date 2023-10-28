export const MapWrapper = (props) => {
    return (
        <div
            className="ImagemapperContainer"
            style={{
                height: "100%",
                overflow: "auto",
            }}
        >
            {props.children}
        </div>
    )
}