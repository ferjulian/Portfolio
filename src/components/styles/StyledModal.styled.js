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
        align-items: center;
        position: relative;
        width: 80%;
        height: 80%;
        background-color:#fef6df;
        box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.3); 
        padding-left: 10%;
    }

    .modal-container::after {
        content:'';
        position: absolute;
        right: 0px;
        height: 100%;
        width: 30%;
        background-image: linear-gradient(to right top, #aacec4, #bed9c7, #d3e3cc, #e9ecd4, #fef6df);
        z-index: 0;
    }

    .info-container {
        display:flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 70%;
    }


    
    .info-container::before {
        content:'0${(props) => props.id}';
        position: absolute;
        top: 18%;
        display:block;
        font-size: 8rem;
        font-weight: bold;
        color: rgba(0,0,0,0.1);
    }

    h1 {
        font-weight: bold;
        margin-bottom: 3%;
    }

    p {
        margin-bottom: 3%;
    }

    .tecnologies-container{
        position: absolute;
        bottom: 0px;
    }

    img {
        position: absolute;
        right: 20%;
        width: 25%;
        height: 50%;
        z-index: 3;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    }

    .action-button {
        background-color:#3d4b47;
        color: white;
        margin-right: 5px;
    }

    .action-button > a > i {
        margin-right: 5px;
    }
    
`;