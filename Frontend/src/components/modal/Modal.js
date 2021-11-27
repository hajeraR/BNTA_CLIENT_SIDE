import React, {useEffect} from 'react';
import "./modal.css";

const Modal = (props) => {

    // const escapeKeyClose = (e) => {
    //     if((e.charCode || e.keyCode) === 27) {
    //         props.onClose();
    //     }
    // }

    // useEffect(() => {
    //     document.body.addEventListener('keydown', escapeKeyClose);
    //     return function cleanup() {
    //         document.body.removeEventListener('keydown', escapeKeyClose);
    //     }
    // }, [])

    return(
        <div className={`modal-container ${props.show ? "show" : ""}`} onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{props.title}</h3>
                </div>
                <div className="modal-body">
                    The body
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;