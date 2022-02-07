import React from 'react';
import { StyledPrevCard } from './styles/StyledPrevCard.styled';
import Modal from './Modal';


const PrevCard = (props) => {

   
    const handleClick = () =>{
        props.handleModal(props.project.id);
        console.log(props.project.id);
    }


    const image = require(`../assets/${props.project.image}`);
;

    return (
        <StyledPrevCard>
            <img className="image" src={image}></img>
            <button onClick={() => handleClick()}className="details">More Details</button>
        </StyledPrevCard>
    );
}

export default PrevCard;

