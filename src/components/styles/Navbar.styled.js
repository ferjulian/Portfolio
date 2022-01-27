//import React from 'react';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
color: black;
height: 35px;
position: relative;
padding-left: 10px;
top: 0px;
left: 0px;
position:fixed;
width: 100%;

a {
    position: relative
    margin: 10px;
    cursor: pointer;
    z-index: 1;
    display: inline-block;
    color: white;
}

.animation {
    position:absolute;
    height: 2px;
    bottom: 0;
    left:10px;
    z-index: -1;
    background-color: #F5934E;
    width: 100px;
    transition: all .5s ease 0s;
}

 a:nth-child(1){
	width: 100px;
}
.start-home, a:nth-child(1):hover~.animation{
	width: 70px;
    left:10px;
}
 a:nth-child(2){
	width: 110px;
}
 a:nth-child(2):hover~.animation{
	width: 80px;
	left: 112px;
}
 a:nth-child(3){
	width: 100px;
}
 a:nth-child(3):hover~.animation{
	width: 90px;
	left: 215px;
}

`