import React, {useState} from 'react';
import PrevCard from './PrevCard';
import Modal from './Modal';
import { StyledProject } from './styles/StyledProject.styled';

const Projects = () =>{

    const [modal, setModal] = useState(false);
    const [id, setId] = useState(0);

    const handleClick = (id) =>{
        setModal(!modal);
        setId(id);
    }

    const arrProjects = [
        {id:0,name:'SuperHeroes', image:'project-superheroes.jpg', tecnologies:['HTML','CSS','React','Formik'], header:'React'},
        {id:1, name:'Disney API', image:'project-superheroes.jpg', tecnologies:['Java','Springboot','Spring Security'], header:'Java/Springboot'},
        {id: 2, name:'Streamy', image:'project-superheroes.jpg', tecnologies:['HTML','CSS','React','Redux'], header:'React'},
    ];

    const renderProjects = () => {

       return arrProjects.map((project)=>{

            return(
                <div>
                    <PrevCard  project={project} handleModal={handleClick}/>
                </div>
            );
        })
    }

    
    return(
        <section id="3" className="vh-100">
            {modal? 
            <Modal
                project={arrProjects[id]} 
                handleModal={handleClick}
            />:
            ''}

            <StyledProject>
            <h1>My Work</h1>
            <div className="project-wrapper">
            {renderProjects()}
            </div>
            </StyledProject>
        </section>
    );
}

export default Projects;