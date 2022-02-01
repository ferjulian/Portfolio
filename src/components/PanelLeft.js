import React from 'react';
import { StyledPanelLeft } from './styles/StyledPanelLeft.styled';


const PanelLeft = () => {

    return (
                <StyledPanelLeft>
                <div className="header_wrapper">
                    <div className="header_icon-container">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-github-square"></i>
                    <i class="fab fa-linkedin"></i>



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