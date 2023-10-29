import "./Popup.css"

export const Popup = (props) => {
    return (
        <div className="popup">
            <div className="popup-container">
                <div className="popup-body">
                    <div className="popup-header">
                        <h1>Mission complete!</h1>
                        <button className="popup-button" onClick={props.onClose}><img src="../../img/icons8-закрыть-96.png" /></button>
                    </div>
                    <div className="popup-content">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
