import {useState} from "react";
import Settings from './Settings'
import Play from './Play'

function Game(){
const [inputs, setInputs] = useState({ row: 4, col: 4, delay: 1 });
    return (
        <div>
            <Play settingsFilter={inputs} />
            <Settings settingsFilter={inputs} updateSettings={setInputs}  />

        </div>
    );
}
export default Game;


