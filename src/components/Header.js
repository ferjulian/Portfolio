import React from 'react';
import PanelLeft from './PanelLeft';
import Ilustration from './svg/Ilustration';
import CustomShape from './svg/CustomShape';



const Header = () => {

    return (
        <section id="1" className="vh-100 d-flex" style={{ backgroundColor: "#fef6df" }}>
            <div class="custom-shape-divider-top-1643817451">
               <CustomShape /> 
            </div>
            <PanelLeft />
            <div className="header_panel-right h-100 w-50 d-flex justify-content-center">
                <div className="position-absolute">
                    <Ilustration />
                </div>
            </div>

        </section>
    );
}

export default Header;