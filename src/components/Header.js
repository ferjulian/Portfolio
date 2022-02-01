import React from 'react';
import PanelLeft from './PanelLeft';


const Header = () => {

    return (
        <section id="1" className="vh-100 d-flex" style={{ backgroundColor: "#fef6df" }}>
            <PanelLeft/>
            <div className="header_panel-right h-100 w-50 border border-dark">

            </div>

        </section>
    );
}

export default Header;