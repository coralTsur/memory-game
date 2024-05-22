import React, { useState, useEffect } from 'react';
import Cards from "./Cards";
import TableHighScore from "./TableHighScore";
import {Row,Col} from "react-bootstrap";


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
    /**
     * create the list of cards
     */
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

    /**
     * grill pictures from the list of pictures
     * @param count
     * @returns {string[]}
     */
    const getRandomImages = (count) => {
        const shuffledImages = images.sort(() => 0.5 - Math.random());
        return shuffledImages.slice(0, count);
    };
    /**
     * after a card was clicked, this func check if cards are already open, and handle it
     * @param index
     */
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
    /**
     * the function gets the score result and updates the local storage
     * @param scoreResult
     */
    const updateLeaderBoard=(scoreResult)=> {
        const leaderboardData = localStorage.getItem('leaderboard');
        const leaderboard = JSON.parse(leaderboardData) || [];
        const newEntry = {name: playerData.name, score: scoreResult};
        const existingEntryIndex = leaderboard.findIndex(entry => entry.name.toLowerCase() === newEntry.name.toLowerCase());
        if (existingEntryIndex !== -1) {
            if (newEntry.score > leaderboard[existingEntryIndex].score) {
                leaderboard[existingEntryIndex].score = newEntry.score;
            }
        } else if (newEntry.name !== "")
            leaderboard.push(newEntry);

        leaderboard.sort((a, b) => b.score - a.score);

        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        const gameOverData = [];
        gameOverData.push(
            <div key={existingEntryIndex+1}>
                <h1>You have completed the game!</h1>
                <h5>Number of cards played: {settings.row * settings.col}</h5>
                <h5>Score: {scoreResult}</h5>
                <h5>You are ranked {existingEntryIndex+1} out of {leaderboard.length}</h5>
            </div>
        );
        return gameOverData;
    };

    /**
     * this func check if to cards are the same
     * @param index1 - the index of the first card
     * @param index2 - the index of the second card
     */
    const checkForMatch = ([index1, index2]) => {
        if (cards[index1].src === cards[index2].src) {
            setMatchedCards([...matchedCards, index1, index2]);
        }
        setFlippedCards([]);
        setIsChecking(false);
    };
    /**
     * creat all the card components
     * @returns {*[]} of Cards
     */
    const renderRows = () => {
        const rowsArray = [];
        for (let i = 0; i < settings.row; i++) {
            const colsArray = [];
            for (let j = 0; j < settings.col; j++) {
                const index = i * settings.col + j;
                if (index < cards.length) {
                    colsArray.push(
                        <Col  key={index}  >
                            <Cards
                                srcImage={flippedCards.includes(index) || matchedCards.includes(index) ? cards[index].src : '/images/card.jpg'}
                                onClickFunc={() => handleCardClick(index)}
                            />
                        </Col>
                    );
                }
            }
            rowsArray.push(<Row key={i}  style={{ display: 'flex'}}>{colsArray}</Row>);
        }
        return rowsArray;
    }
    /**
     * this function calc the score and calls a function to update the board
     */
    const handleScoreUpdate = () => {
        return Math.floor(
            (((Math.pow(settings.col * settings.row,2)* 1000)/(steps))*((1)/(1+settings.delay)))/10) ;
    };
    return (<>
            <div className="container-fluid text-center">
                {
                    matchedCards.length !== cards.length ||  cards.length === 0 ? (

                            <Row className=" justify-content-center">
                                <h1>Steps: {steps}</h1>
                                <Col >
                                    {renderRows()}
                                </Col>
                            </Row>

                    ) : (
                        <div className="row">
                            {updateLeaderBoard(handleScoreUpdate())}
                            <TableHighScore />
                        </div>
                    )}
            </div>
        </>
    );
}

export default Game;
