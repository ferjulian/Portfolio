import React from 'react';
import { Link } from 'react-scroll';
import { StyledNavbar } from './styles/Navbar.styled'

const Navbar = () =>{


return(
    <StyledNavbar>
        <Link to="1" duration={1000}>Red Page</Link>
        <Link to="2" duration={1000}>Yellow Page</Link>
        <Link to="3" duration={1000}>Green page</Link>
        <div className="animation start-home"></div>
    </StyledNavbar>
);
}

export default Navbar;