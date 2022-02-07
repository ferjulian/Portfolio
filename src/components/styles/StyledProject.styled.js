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
    left: 0px;
    background-image: linear-gradient(to right top, #aacec4, #bed9c7, #d3e3cc, #e9ecd4, #fef6df);
    width: 5%;
    height: 100%;
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
    background-color: black;
    width: 50%;
    height: 2px;
    z-index: 2;
}

`