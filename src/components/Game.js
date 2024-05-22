import {useState} from "react";
import Settings from './Settings'
import Play from './Play'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header";
import InputName from "./InputName";
import 'bootstrap/dist/css/bootstrap.min.css';
import HighScorePage from "./HighScorePage";


function Game() {
    const [inputs, setInputs] = useState({ row: 4, col: 4, delay: 1 });
    const [playerData, setPlayerData] = useState({ name: "", score: 0,});


    return (<>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        {/* Route for Home page */}
                        <Route element={<Header />}>
                            {/* Content that should appear only on the Home page */}
                            <Route index path="/" element={<InputName playerData = {playerData} setPlayerData={setPlayerData} />} />
                            <Route path="settings" element={<Settings settingsFilter={inputs} updateSettings={setInputs}
                                                                      setPlayerData ={setPlayerData} playerData={playerData}/>}>
                            </Route>
                            <Route path="play/*" element={<Play settingsFilter={inputs} playerData={playerData} updatePlayerData={setPlayerData} />} />
                            <Route path="highScore" element={<HighScorePage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}
export default Game;


