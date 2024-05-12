import './App.css';
import Header from './components/Header'
import Settings from './components/Settings'
import Play from './components/Play'
import TableHighScore from './components/TableHighScore'

import Game from './components/Game'

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";

function App() {
    const [inputs, setInputs] = useState({ row: 4, col: 4, delay: 1 });
    const [playerData, setPlayerData] = useState({ name: "", score: 0,});

    return (
        <div className="App">
            <p>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element = { <Header />}>
                            <Route path ="settings" element={<Settings settingsFilter={inputs} updateSettings={setInputs} />}/>
                            <Route path ="play" element={<Play settingsFilter={inputs} playerData={playerData} updatePlayerData={setPlayerData}/>}/>
                            <Route path ="highScore" element={<TableHighScore playerData={playerData}/>}/>

                        </Route>
                    </Routes>
                </BrowserRouter>
            </p>
        </div>

    );
}

export default App;



