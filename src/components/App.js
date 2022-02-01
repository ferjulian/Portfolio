import React from 'react';
import Navbar from './Navbar'
import Header from './Header'
import { GlobalStyles } from './styles/Global'

const App = () =>{


return(
    <div>
        <GlobalStyles/>
        <Navbar/>
        <Header />
        <section id="2" className="vh-100 bg-warning"></section>
        <section id="3" className="vh-100 bg-success">
        </section>
    </div>
);
}

export default App;