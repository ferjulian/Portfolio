import React from 'react';
import Navbar from './Navbar'
import Header from './Header'
import Skills from './Skills';
import Projects from './Projects';
import { GlobalStyles } from './styles/Global'

const App = () =>{


return(
    <div>
        <GlobalStyles/>
        <Navbar/>
        <Header />
        <Skills />
        <Projects />
        <section id="4" className="vh-100 bg-success">
        </section>
    </div>
);
}

export default App;