import Cards from "./Cards"
import {useState} from "react";
import CardsList from './CardsList'
import Button from 'react-bootstrap/Button';
import GameManager from './GameManager'
import { useNavigate } from 'react-router-dom';


function Play({settingsFilter, playerData, updatePlayerData}) {
    const navigate = useNavigate();

    const goToHomePage= () => {
        navigate('/');
}

    return(
        <>
            <div>
                {/*<CardsList settingsFilter={settingsFilter} setSteps={setSteps}/>*/}
                <GameManager settings={settingsFilter} playerData={playerData} updatePlayerData={updatePlayerData}/>
            </div>
            <br/>
            <div>
                <Button onClick={goToHomePage} variant="danger">Back to HOME page</Button>{' '}

            </div>
        </>
    );
}

export default Play;