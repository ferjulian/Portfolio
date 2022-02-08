import styled from 'styled-components';

export const StyledProject = styled.div`
display: flex;
position: relative;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;

.project-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
}

::before {
    content:'';
    display:block;
    position: absolute;
    top: 0px;
    right: 0px;
    border-left: 2px solid #aacec4;
    border-top: 2px solid #aacec4;
    border-bottom: 2px solid #aacec4;
    width: 70%;
    height: 70%;
    z-index: -1;
    
}

h1 {

    font-family: 'Raleway', sans-serif;
    font-size: 3rem;
    margin-bottom: 50px;
    color: black;
}

h1::after {
    content:'';
    display:block;
    position: relative;
    bottom: -5px;
    background-color: #aacec4;
    width: 50%;
    height: 2px;
    z-index: 2;
}

`