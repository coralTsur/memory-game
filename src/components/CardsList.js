import React, { useState, useEffect } from "react";
import Cards from './Cards';

function CardsList({ settingsFilter }) {
    const imageList = ['/images/0.jpg', '/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg',
        '/images/5.jpg', '/images/6.jpg', '/images/7.jpg', '/images/8.jpg', '/images/9.jpg', '/images/10.jpg',
        '/images/11.jpg', '/images/12.jpg', '/images/13.jpg', '/images/14.jpg', '/images/15.jpg'];

    const [cardList, setCardList] = useState([]);
    const [clickedCards, setClickedCards] = useState(Array(imageList.length).fill(false)); // Initialize with false for each card

    useEffect(() => {
        // Shuffle the image sources only once when the component mounts or when the dependencies change
        const shuffledSources = shuffleArray(imageList.slice(0, (settingsFilter.col * settingsFilter.row) / 2).concat(imageList.slice(0, (settingsFilter.col * settingsFilter.row) / 2)));
        const updatedCardList = shuffledSources.map((src, index) => (
            <div key={index} className="col-3">
                <Cards
                    srcImage={src}
                    delay={settingsFilter.delay}
                    onClickFunc={() => handleCardClick(index)}
                    isClicked={clickedCards[index]} // Pass the clicked state of the card
                />
            </div>
        ));
        setCardList(updatedCardList);
    }, [settingsFilter.delay, settingsFilter.col, settingsFilter.row]);

    const handleCardClick = (index) => {
        // Toggle the clicked state of the clicked card
        setClickedCards(prevClickedCards => {
            const updatedClickedCards = [...prevClickedCards];
            updatedClickedCards[index] = !updatedClickedCards[index];
            return updatedClickedCards;
        });
    };

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <div className="row">
            {cardList}
        </div>
    );
}

export default CardsList;



//------------------------------------------------first version
/*import React, { useState, useEffect } from "react";
import Cards from './Cards';

function CardsList({ settingsFilter }) {
    const imageList = ['/images/0.jpg', '/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg',
        '/images/5.jpg', '/images/6.jpg', '/images/7.jpg', '/images/8.jpg', '/images/9.jpg', '/images/10.jpg',
        '/images/11.jpg', '/images/12.jpg', '/images/13.jpg', '/images/14.jpg', '/images/15.jpg'];

    const [cardList, setCardList] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);
    const [isClicked, setIsClicked] = useState(false);


    const handleCardClick = (index, src) => {
        // Use functional update to ensure working with the latest state value
        setClickedCards(prevClickedCards => {
            if (prevClickedCards.length === 0) {

                return [...prevClickedCards, { index, src }];
            }
            if(prevClickedCards.length === 1) {

                // If 2 cards are clicked, check if their sources are equal
                const [firstCard] = prevClickedCards;
                if (src === firstCard.src) {
                    // If sources are equal, perform the desired action (e.g., show a message)
                    console.log('Sources are equal:', src);
                } else {
                    // If sources are not equal, perform the desired action (e.g., hide the cards)
                    console.log('Sources are not equal');
                }
                // Reset clickedCards array
                return [];
            }
        });
    };


    useEffect(() => {
        console.log("clickedCards length:", clickedCards.length);
        for (let i = 0; i < clickedCards.length; i++) {
            console.log("coral:", i, clickedCards[i].src);
        }
    }, [clickedCards]);

    useEffect(() => {
        const shuffledSources = shuffleArray(imageList.slice(0, (settingsFilter.col * settingsFilter.row) / 2).concat(imageList.slice(0, (settingsFilter.col * settingsFilter.row) / 2)));
        const updatedCardList = shuffledSources.map((src, index) => (
            <div key={index} className="col-3">
                <Cards
                    srcImage={src}
                    delay={settingsFilter.delay}
                    onClickFunc = {() => handleCardClick(index, src)}
                    isClicked = {isClicked}
                    setIsClicked = {setIsClicked}/>
            </div>
        ));
        setCardList(updatedCardList);
    }, [settingsFilter.delay, settingsFilter.col, settingsFilter.row]);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        console.log("in shuffle!! ");
        return array;
    }

    return (
        <>
            <div className="row">
                {cardList}
            </div>
        </>
    );
}

export default CardsList;*/