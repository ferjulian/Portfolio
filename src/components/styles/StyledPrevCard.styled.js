import styled from "styled-components";

export const StyledPrevCard = styled.div`
position: relative;
left:0px;
width: 350px;
height: 300px;
margin-right: 10px;
background-color: #aacec4;
opacity: 1;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

:hover {
    opacity: 0.7;
}


.details{
    display:none;
}


:hover .details {
    display: inline-block;
    position: relative;  
}

.image {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;

}


::before {
    content:'';
    display:block;
    position: absolute;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    top: 1.25em;
    bottom: 1.25em;
    left: 1.25em;
    right: 1.25em;
    z-index: 3;
    transform: scale(0,1);
    transition: all 250ms ease-out;
}

:hover::before {
    transform: scale(1,1);
}


`
