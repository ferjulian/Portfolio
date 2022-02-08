import React from 'react';
import { StyledPanelLeft } from './styles/StyledPanelLeft.styled';


const PanelLeft = () => {

    return (
                <StyledPanelLeft>
                <div className="header_wrapper">
                    <div className="header_icon-container">
                    <a href="https://instagram.com/ferjulian__" target="_blank">
                    <i class="fab fa-instagram"></i>      
                    </a>
                    <a href="https://github.com/ferjulian" target="_blank">
                    <i class="fab fa-github-square"></i>
                    </a>
                    <a href="https://linkedin.com/in/ferjulian" target="_blank">
                    <i class="fab fa-linkedin"></i>
                    </a>
                    
                    



                    </div>
                    <div className="presentation">
                    <h1>Fer Julian</h1>
                    <p>is an awesome visual designer, focused on improving the digital realm. If you're looking for a source of design inspiration, you're in the right place.      
                    </p>
                    </div>
                </div>
                </StyledPanelLeft>
            
    );
}

export default PanelLeft;