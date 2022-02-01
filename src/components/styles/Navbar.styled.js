import styled from 'styled-components';


export const StyledNavbar = styled.nav`


display: flex;
align-items: center;
position:fixed;
width: 100%;
height: 50px;
padding: 0 10px 0 10px;
z-index: 3;

 a {
    margin-right: 20px;
    z-index: 0;
    cursor: pointer;
}


/*---- Hover Effect -----*/

.animation {
    position:absolute;
    height: 2px;
    bottom: 0;
    left:10px;
    z-index: -1;
    background-color: #aacec4;
    width: 0px;
    transition: all .5s ease 0s;
}


a:nth-child(1):hover~.animation{
	width: 45px;
    left:10px;
}
 a:nth-child(2):hover~.animation{
	width: 60px;
	left: 70px;
}

 a:nth-child(3):hover~.animation{
	width: 60px;
	left: 148px;
}



/*---- Media Queries ---*/


@media (max-width: 768px){


    z-index: 5;

    .link-wrapper {
        transform: translateY(-100px);
        transform: translateX(-100px);
        border-radius: 50%;
        height: 0vh;
        width: 0vh; 
        
      }


    a {
        display:block;
        margin: 0px;
        text-align: center;

    }

    .showLinks-mobile > a:hover{
        background-color: black;
    }

    .animation{
        display:none;
    }
      

    .showLinks-mobile{
        position: absolute;
        left: 0px;
        top: 50px;
        width: 100vh;
        height: 100vh;
        line-height: 100px;
        transform: translateY(0px);
        z-index: -1;
        background-color: #F5934E;
        font-weight: bold;
        color: white;
        transition: all .9s ease 0s;
        border-radius: 0 0 80% 0;
        overflow: hidden;
        
    }

}

`