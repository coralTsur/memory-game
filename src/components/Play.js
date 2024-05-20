import Cards from "./Cards"
import {useState} from "react";
import CardsList from './CardsList'
import GameManager from './GameManager'


function Play({settingsFilter, playerData, updatePlayerData}) {



    return(
        <>
            <div>
                {/*<CardsList settingsFilter={settingsFilter} setSteps={setSteps}/>*/}
                <GameManager settings={settingsFilter} playerData={playerData} updatePlayerData={updatePlayerData}/>
            </div>
            <br/>
            <div>
                <button>I want to quit </button>
            </div>
        </>
    );
}

export default Play;