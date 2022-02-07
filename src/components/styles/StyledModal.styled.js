import styled from 'styled-components';

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1055;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    background-color: rgba(0,0,0,0.3);


    .modal-container {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 50%;
        background-color:#fef6df;
        box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.3); 
    }

`;