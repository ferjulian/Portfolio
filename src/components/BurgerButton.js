import React from 'react';
import { StyledBurger } from './styles/StyledBurger.styled';

const BurgerButton = (props) =>{

    return(
        <StyledBurger>
        <div onClick={props.handleClick} 
             className={`hamburger ${props.clicked ? 'is-active': ''}`} 
             id="hamburger-11"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        </StyledBurger>
    );
}

export default BurgerButton;