import React from 'react';
import ReactDOM from 'react-dom';
import { StyledModal } from './styles/StyledModal.styled';

const Modal = (props) => {

    const handleClick = () => {
        props.handleModal();
    }

    const image = require(`../assets/${props.project.image}`);

    return ReactDOM.createPortal(
        <StyledModal id={props.project.id}>
            <div className="modal-container">
                <div className="info-container">
                    <h1>{props.project.name}</h1>
                    <p> Este project esta realizado en React y nos deja crear un equipo de superheroes blabla blabla stats blabla</p>
                    <span>
                        <button className="action-button"><a><i className="fa fa-brands fa-github"/>Github</a></button>
                        <button className="action-button"><a><i className="fas fa-tablet-alt" />View Live</a></button>
                        <button className="close-button" onClick={() => handleClick()}>Close</button>

                    </span>
                    <span className="tecnologies-container">Java - React - FramerMotion - Lombok</span>
                </div>

                <img src={image}></img>
            </div>
        </StyledModal>,
        document.querySelector('#modal')
    );
}

export default Modal;