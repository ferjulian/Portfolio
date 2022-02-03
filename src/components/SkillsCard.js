import React from 'react';
import { StyledSkillsCard } from './styles/StyledSkillsCard.styled';import { motion } from 'framer-motion';


const SkillsCard = () =>{

    const skills = [
        {name:"HTML", image:'icon-html.png'},
        {name:"CSS", image:'icon-css.png'},
        {name:"Javascript", image:'icon-javascript.png'},
        {name:"React", image:'icon-react.png'},
        {name:"Redux", image:'icon-redux.png'},
        {name:"Java", image:'icon-java.png'},
        {name:"Spring", image:'icon-spring.png'},
        {name:"Springboot", image:'icon-springboot.png'},
        {name:"MySql", image:'icon-mysql.png'},
        {name:"PostgreSql", image:'icon-postgresql.png'},
        
    ];
   
    const renderSkills = () => {
        return skills.map(({name,image}) => {

            const photo = require(`../assets/${image}`);

            return(
                <motion.div 
                className="d-flex flex-column justify-content-center align-items-center" 
                style={{marginRight:"10px"}}
                initial={{x:"-500px"}}
                animate={{x:"0px"}}
                >
                    <img style={{width:"50px", height:"50px"}} src={photo} />
                    <p>{`${name}`}</p>
                </motion.div>
                
            );
        })
    }
    
    return(
        <StyledSkillsCard>
        {renderSkills()}
        </StyledSkillsCard>
   
    );
}

export default SkillsCard;