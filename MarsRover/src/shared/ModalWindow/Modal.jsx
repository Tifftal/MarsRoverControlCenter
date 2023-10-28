import "./modal.css"

export const Modal = (props) => {
    return (
        <div className="modal">
            <div
                className="modal-container"
                style={{...props.bgColor}}
            >
                <div className="modal-body">
                    <div className="modal-header">
                        <h1>{props.header}</h1>
                        <button className="modal-button" onClick={props.handleClose}><img src="../../img/icons8-закрыть-96.png"/></button>
                    </div>
                    <div className="modal-content">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
