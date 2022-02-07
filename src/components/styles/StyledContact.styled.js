import styled from 'styled-components';

export const StyledContact = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
color: black;
font-family: 'Raleway', sans-serif;
font-weight: bold;
background-color:#fef6df;


form{
    height: 70%;
    width: 50%;    
}

h1{
    margin-bottom: 20px;
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