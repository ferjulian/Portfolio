import React from 'react';
import Navbar from './Navbar'

const App = () =>{


return(
    <div>
        <Navbar/>
        <section id="1" className="vh-100" style={{backgroundColor:"#fef6df"}}></section>
        <section id="2" className="vh-100 bg-warning"></section>
        <section id="3" className="vh-100 bg-success">
        </section>
    </div>
);
}

export default App;