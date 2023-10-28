import "./modal.css"

export const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-body">
                    <div className="modal-header">
                        <h1>{props.header}</h1>
                    </div>
                    <div className="modal-content">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button className="modal-button" onClick={props.handleClose}>Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
