import styled from 'styled-components';

export const StyledPanelLeft = styled.div`

width: 50%;
height: 100%;
display: flex;
justify-content: end;
align-items: center;
overflow: hidden;

::before {
    content:'';
    display: block;
    position: absolute;
    left: 160px;
    height: 50%;
    width: 10%;
    background-image: linear-gradient(to right top, #aacec4, #bed9c7, #d3e3cc, #e9ecd4, #fef6df);
    box-shadow: -2px  3px 3px 3px rgba(0,0,0,0.2);

}

.header_wrapper{
    display: flex;
    position: relative;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 60%;
    
}

.presentation > h1 {
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    font-size: 4rem;
}

 .presentation > p {
    font-size: 1rem;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
}


.header_icon-container {
    display: flex;
    justify-content: space-around;
    margin-right: auto;
    width: 30%;
}

.header_icon-container > a {
    font-size: 2rem;  
    color: black;
}

.header_icon-container > a:hover  {
color: grey;
} 


`