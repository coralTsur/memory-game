import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function Cards({srcImage, delay, isOpenCards, setIsOpenCards}) {
    const [isClicked, setIsClicked] = useState(false);
    const handleMouseEnter = (event) => { event.target.style.opacity = 0.75; }
    const handleMouseLeave = (event) => { event.target.style.opacity = 1; }
    /*const handleImageSrc = () => {
        if (!isClicked && !isOpenCards.first) {
            setIsClicked(true);
            setIsOpenCards(prevState => ({ ...prevState, first: true }));
            console.log("first ", isOpenCards.first);
        }
    };
    const handleImageSrc = () => {
        if(!isOpenCards.first)// im the first card
        {
            setIsClicked(true);
            setIsOpenCards((prevState) => ({ ...prevState, first: true }));
            console.log("first ", isOpenCards.first);


        }


       /* else if(!isOpenCards.second)//im the second card
        {
            setIsClicked(true);
            setIsOpenCards((prevState) => ({ ...prevState, second: true }));
            setTimeout(() => {
                setIsClicked(false);
                setIsOpenCards((prevState) => ({ ...prevState, first: false }));
                setIsOpenCards((prevState) => ({ ...prevState, second: false }));
            }, delay * 1000);

        }
        else //2 cards already open, do nothing
            ;*/
    const handleImageSrc = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);

        }, delay * 1000);

    };
    return(
        <>
            {isClicked ?
                <div><Image src={srcImage} alt="Image not loaded" onClick={handleImageSrc}
                            onMouseLeave={handleMouseLeave}/></div> :
                <div><Image src='/images/card.jpg' alt="Image not loaded" onClick={handleImageSrc}
                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/></div>}

        </>
    );
}

export default Cards;