import {useState} from "react";
import Settings from './Settings'
import Play from './Play'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header";
import InputName from "./InputName";
import TableHighScore from "./TableHighScore";
import 'bootstrap/dist/css/bootstrap.min.css';

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
                            <Route index path="/" element={<InputName setPlayerData={setPlayerData} />} />
                            <Route path="settings" element={<Settings settingsFilter={inputs} updateSettings={setInputs}
                                                                      setPlayerData ={setPlayerData}/>}>
                            </Route>
                            <Route path="play/*" element={<Play settingsFilter={inputs} playerData={playerData} updatePlayerData={setPlayerData} />} />
                            <Route path="highScore" element={<TableHighScore />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}
export default Game;


