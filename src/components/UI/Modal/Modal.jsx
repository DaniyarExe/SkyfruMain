import React from 'react'
import "./Modal.css"
import close from "../../../img/close.svg"

const Modal = ({ setModal, children }) => {
    return (
        <div className="fixet_modal">
            <div onClick={() => setModal(false)} className="modal_not"></div>
            <div className="modal">
                <img onClick={() => setModal(false)} className='close' src={close} alt="" />
                {children}
            </div>
        </div>
    )
}

export default Modal