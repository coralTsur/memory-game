import React, { useState, useEffect } from 'react';
import Cards from "./Cards";
import TableHighScore from "./TableHighScore";

const images = [
    '/images/0.jpg', '/images/1.jpg', '/images/2.jpg', '/images/3.jpg',
    '/images/4.jpg', '/images/5.jpg', '/images/6.jpg', '/images/7.jpg',
    '/images/8.jpg', '/images/9.jpg', '/images/10.jpg', '/images/11.jpg',
    '/images/12.jpg', '/images/13.jpg', '/images/14.jpg', '/images/15.jpg'
];

function Game ({ settings,playerData ,updatePlayerData}) {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [isChecking, setIsChecking] = useState(false);
    const [steps, setSteps] = useState(0);


    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        const totalPairs = (settings.row * settings.col) / 2;
        const selectedImages = getRandomImages(totalPairs);
        const gameCards = [...selectedImages, ...selectedImages]
            .sort(() => Math.random() - 0.5)
            .map((src, index) => ({ id: index, src: src, isFlipped: false }));
        setCards(gameCards);
        setFlippedCards([]);
        setMatchedCards([]);
    };

    const getRandomImages = (count) => {
        const shuffledImages = images.sort(() => 0.5 - Math.random());
        return shuffledImages.slice(0, count);
    };

    const handleCardClick = (index) => {
        if (isChecking || flippedCards.includes(index) || matchedCards.includes(index))
            return;
        setSteps(steps+1);
        const newFlippedCards = [...flippedCards, index];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
            setIsChecking(true);
            setTimeout(() => {
                checkForMatch(newFlippedCards);
            }, settings.delay * 1000);
        }
    };
    const updateLeaderBoard=(scoreResult)=>{
        const leaderboardData = localStorage.getItem('leaderboard') ;
        const leaderboard = JSON.parse(leaderboardData) || [];
        const newEntry = { name: playerData.name , score: scoreResult};

        const existingEntryIndex = leaderboard.findIndex(entry => entry.name === newEntry.name);
        if (existingEntryIndex !== -1) {
            if (newEntry.score > leaderboard[existingEntryIndex].score) {
                leaderboard[existingEntryIndex].score = newEntry.score;
            }
        } else if(newEntry.name !== "")
            leaderboard.push(newEntry);

        leaderboard.sort((a, b) => b.score - a.score);
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    };
    const checkForMatch = ([index1, index2]) => {
        if (cards[index1].src === cards[index2].src) {
            setMatchedCards([...matchedCards, index1, index2]);
        }
        setFlippedCards([]);
        setIsChecking(false);
    };
    const renderRows = () => {
        const rowsArray = [];
        for (let i = 0; i < settings.row; i++) {
            const colsArray = [];
            for (let j = 0; j < settings.col; j++) {
                const index = i * settings.col + j;
                if (index < cards.length) {
                    colsArray.push(
                        <div key={index} className="col " style={{ margin: '1px' }} >
                            <Cards
                                srcImage={flippedCards.includes(index) || matchedCards.includes(index) ? cards[index].src : '/images/card.jpg'}
                                onClickFunc={() => handleCardClick(index)}
                            />
                        </div>
                    );
                }
            }
            rowsArray.push(<div key={i} className="row" style={{ margin: '5px', display: 'flex'}}>{colsArray}</div>);

        }
        return rowsArray;
    }
    const handleScoreUpdate = () => {
        //const score = (numCards * cardsCoefficient) / (steps + 1) / (time + 1) * timeCoefficient; //needs to be checked
        const scoreResult =Math.floor((((settings.col * settings.row * 100)-(steps *0.1 )) * (1/(settings.delay + 1)*10)) ) ;
        updateLeaderBoard(scoreResult);
    };
    return (<>
            <div className="container-fluid">
                {matchedCards.length !== cards.length ? (
                    <>
                        <h1>Steps: {steps}</h1>
                        {renderRows()}
                    </>
                ) : (
                    <div className="row">
                        {handleScoreUpdate()} {/* Assuming handleScoreUpdate() returns the score */}
                        <h1>GAME OVER</h1>
                        <h5>Number of cards played: {settings.row * settings.col}</h5>
                        <h5>Score: </h5> {/* Assuming `score` is a variable containing the calculated score */}
                        <TableHighScore />
                    </div>
                )}
            </div>

        </>
    );
}

export default Game;
