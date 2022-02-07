import React from 'react';
import ReactDOM from 'react-dom';
import { StyledModal } from './styles/StyledModal.styled';

const Modal = (props) => {

    const handleClick = () => {
        props.handleModal();
    }

    return ReactDOM.createPortal(
        <StyledModal>
            <div className="modal-container">
            <button onClick={() => handleClick()}>Close</button>
            <h1>{props.project.name}</h1>
            </div>   
        </StyledModal>,
        document.querySelector('#modal')
    );
}

export default Modal;