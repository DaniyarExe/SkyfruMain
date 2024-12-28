import React from 'react'
import "./ModalDown.css"

const ModalDown = ({ setModal, children }) => {
    return (
        <div className='fixet_modal_down'>
            <div className="fixet_modal_down">
                <div onClick={() => setModal(false)} className="modal_down_not"></div>
                <div className="modal_down">
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="64" height="4" viewBox="0 0 64 4" fill="none">
                        <rect width="64" height="4" rx="2" fill="#DBDBDB" />
                    </svg>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalDown