import React from 'react';
import SkillsCard from './SkillsCard';

const Skills = () =>{
    
    return(
        <section id="2" className="vh-100 d-flex justify-content-center align-items-center">
            <span
            style={{
                position:"absolute",
                fontSize:"15rem",
                color: "rgba(0, 0, 0, 0.1)",
                letterSpacing:"2rem",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: "bold"
            }}
            >
                SKILLS
            </span>
            <SkillsCard/>
        </section>
    );
}

export default Skills;