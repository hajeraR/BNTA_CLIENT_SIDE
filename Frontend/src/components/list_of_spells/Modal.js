import React, {useEffect} from 'react';
// import "./modal.css";

const Modal = (props) => {

    const escapeKeyClose = (e) => {
        if((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', escapeKeyClose);
        return function cleanup() {
            document.body.removeEventListener('keydown', escapeKeyClose);
        }
    }, [])

    return(
        <div className={`modal-container ${props.show ? "show" : ""}`} onClick={props.onClose}>
            <section className="modal-content" onClick={e => e.stopPropagation()}>
                <header>
                    <h3 className="modal-header">{props.title}</h3>
                </header>
                <main className="modal-body">
                    <p className="modal-description--spells">{props.description}</p>
                </main>
                <footer className="modal-footer">
                    <button className="modal-close-btn" onClick={props.onClose}>Close</button>
                </footer>
            </section>
        </div>
    )
}
export default Modal;