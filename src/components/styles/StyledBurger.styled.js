import styled from "styled-components";

export const StyledBurger = styled.div`
  
    display: inline-block;
    margin-left: auto;
    

  .hamburger .line{
    width: 30px;
    height: 3px;
    background-color: #F5934E;
    display: block;
    margin: 3px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  
  .hamburger:hover{
    cursor: pointer;
  }

#hamburger-11{
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  
  #hamburger-11.is-active{
    animation: smallbig 0.6s forwards;
  }
  
  @keyframes smallbig{
    0%, 100%{
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
  
    50%{
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
    }
  }
  
  #hamburger-11.is-active .line:nth-child(1),
  #hamburger-11.is-active .line:nth-child(2),
  #hamburger-11.is-active .line:nth-child(3){
    -webkit-transition-delay: 0.2s;
    -o-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }
  
  #hamburger-11.is-active .line:nth-child(2){
    opacity: 0;
  }
  
  #hamburger-11.is-active .line:nth-child(1){
    -webkit-transform: translateY(13px) rotate(45deg);
    -ms-transform: translateY(13px) rotate(45deg);
    -o-transform: translateY(13px) rotate(45deg);
    transform: translateY(7px) rotate(32deg);
  }
  
  #hamburger-11.is-active .line:nth-child(3){
    -webkit-transform: translateY(-13px) rotate(-45deg);
    -ms-transform: translateY(-13px) rotate(-45deg);
    -o-transform: translateY(-13px) rotate(-45deg);
    transform: translateY(-5px) rotate(-30deg);
  }

  @media (min-width: 768px){

    display:none;
  }
`