import React from 'react';
import Navbar from './Navbar'
import Header from './Header'
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { GlobalStyles } from './styles/Global'

const App = () =>{


return(
    <div>
        <GlobalStyles/>
        <Navbar/>
        <Header />
        <Skills />
        <Projects />
        <Contact />
    </div>
);
}

export default App;