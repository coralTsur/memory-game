import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function Cards({srcImage}) {
    const s = srcImage.toString(); // Convert srcImage to a string
    return(
        <>
            <div>
                <Image src={srcImage} alt="Image not loaded" />
            </div>

        </>
    );
}

export default Cards;