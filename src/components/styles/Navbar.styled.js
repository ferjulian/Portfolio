//import React from 'react';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
display: flex;
align-items: center;
color: black;
height: 30px;
padding:0 10px 0 10px;
top: 0px;
left: 0px;
position:fixed;
width: 100%;
border: 2px solid green;

a {
    position: relative
    z-index: 1;
    display: inline-block;
    margin-right: 20px;
    color: white;
    text-align: center;
    cursor: pointer;
}

.animation {
    position:absolute;
    height: 2px;
    bottom: 0;
    left:10px;
    z-index: -1;
    background-color: #F5934E;
    width: 0px;
    transition: all .5s ease 0s;
}


a:nth-child(1):hover~.animation{
	width: 68px;
    left:10px;
}
 a:nth-child(2):hover~.animation{
	width: 80px;
	left: 100px;
}

 a:nth-child(3):hover~.animation{
	width: 80px;
	left: 205px;
}




@media (max-width: 768px){

    .hideLinks-mobile {
        transform: translateY(-500px);
      }

    .animation{
        display:none;
    }
      

    .showLinks-mobile{
        position: absolute;
        left: 0%;
        top: 50%;
        width: 100%;
        height: 50%;
        line-height: 100px;
        transform: translateY(0px);
    
        a{
            display:block;
            margin: 0px;
    
        }
    }

}

`