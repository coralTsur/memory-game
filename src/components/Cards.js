import React, {useState} from 'react';
import Image from 'react-bootstrap/Image';

function Cards({srcImage, onClickFunc }) {
    /**
     * callthe func thets handle the click
      */
    const handleClick = () => {
        if (onClickFunc) {
            onClickFunc(); // Call the onClick event passed from the parent component
        }
    };
    const handleMouseEnter = (event) => { event.target.style.opacity = 0.75; }
    const handleMouseLeave = (event) => { event.target.style.opacity = 1; }

    return(
        <>{<div><Image src= {srcImage} alt="Image not loaded" onClick={handleClick}
                       onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/></div>}

        </>
    );
}

export default Cards;