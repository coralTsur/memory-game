import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function Cards({srcImage}) {
    const s = srcImage.toString(); // Convert srcImage to a string
    return(
        <>
            <div className="col-3">
                <Image src={srcImage} alt="Description of the image" />
            </div>
            <div>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="/images/1.jp" alt="not ok"/>
            </Card>
            </div>
        </>
    );
}

export default Cards;