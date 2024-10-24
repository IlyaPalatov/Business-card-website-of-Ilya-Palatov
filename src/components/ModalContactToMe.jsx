import React from 'react';
import '../styles/MainPageStyles.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; 

    const handleOverlayClick = (event) => {
        if (event.currentTarget === event.target) {
            onClose(); 
        }
    };
    const handleBtnCloseClick = (event) => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    }

    return (
        <div className="overlay-modal" onClick={handleOverlayClick}>
            <div className="modal-bg">
                <div><button onClick={handleBtnCloseClick}>Close</button></div>
                <div><h3 className='header-of-modal'>Let's Talk!</h3></div>
                <div>
                    <form action="POST">
                        <input className='modal-input' placeholder='enter' type="text" />
                        <input className='modal-input' placeholder='enter' type="text" />
                        <input className='modal-input' placeholder='enter' type="text" />
                        <input className='modal-input' placeholder='enter' type="text" />
                    </form>
                </div>
                <div><button onClick={handleBtnCloseClick} className='modal-btn-send'>Send</button></div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
