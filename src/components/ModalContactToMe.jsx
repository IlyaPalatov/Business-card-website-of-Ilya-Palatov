import React from 'react';
import '../styles/MainPageStyles.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; 

    const handleOverlayClick = (event) => {
        if (event.currentTarget === event.target) {
            onClose(); 
        }
    };

    return (
        <div className="overlay-modal" onClick={handleOverlayClick}>
            <div className="modal-bg">
                
                {children}
            </div>
        </div>
    );
};

export default Modal;
