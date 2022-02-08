import styled from "styled-components";

export const StyledPrevCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
left:0px;
width: 350px;
height: 300px;
margin-right: 40px;
background-color: #aacec4;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

.details{
    opacity: 0;
    transition: all 0.3s ease-in;
    border: 0;
    color: white;
    background-color:#aacec4;
    
   
}

.details:hover{
    background-color:#3d4b47;
}

:hover .details {
    position: relative; 
    opacity:1; 
    z-index: 5;
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


::after {
    content:'${(props) => props.title}';
    position: absolute;
    display:block;
    top: 20%;
    left: -5%;
    width: 10%;
    height: 50%;
    background-color: #3d4b47;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    padding: 5px;
    color: white;
    font-family: 'Raleway', sans-serif;
    writing-mode: vertical-rl;


}

`
