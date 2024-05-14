import Cards from "./Cards"
import {useState} from "react";
import CardsList from './CardsList'

function Play({settingsFilter, playerData, updatePlayerData}) {
    const [steps, setSteps] = useState(1);


    const handleScoreUpdate = () => {
        const result = steps * settingsFilter.delay * settingsFilter.col * settingsFilter.row ;
        updatePlayerData(prevPlayerData => ({
            ...prevPlayerData,
            score: result
        }));
    };




    return(
        <>
            <div>
                <CardsList settingsFilter={settingsFilter}/>
            </div>
            <br/>
            <div>
                <button onClick={handleScoreUpdate}>Update Score</button>
            </div>
        </>
    );
}

export default Play;