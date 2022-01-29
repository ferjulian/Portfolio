import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { StyledNavbar } from './styles/Navbar.styled'
import BurgerButton from './BurgerButton';



const Navbar = () =>{

const [clicked, setClicked] = useState(false);

const handleClick = () =>{

    setClicked(!clicked);
}

return(
    <StyledNavbar>
        <div className={`${clicked? 'showLinks-mobile': ''} hideLinks-mobile`}>
        <Link to="1" onClick={ e => handleClick()} duration={1000}>Home</Link>
        <Link to="2" onClick={ e => handleClick()} duration={1000}>Projects</Link>
        <Link to="3" onClick={ e => handleClick()} duration={1000}>Contact</Link>
        <div className="animation start-home"></div>
        </div>
        <BurgerButton clicked={clicked} handleClick={handleClick} />
    </StyledNavbar>
);
}

export default Navbar;