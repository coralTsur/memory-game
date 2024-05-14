import './App.css';
import Header from './components/Header'
import Settings from './components/Settings'
import Play from './components/Play'
import TableHighScore from './components/TableHighScore'

import Game from './components/Game'

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import InputName from "./components/InputName";

function App() {
    const [inputs, setInputs] = useState({ row: 4, col: 4, delay: 1 });
    const [playerData, setPlayerData] = useState({ name: "", score: 0,});
    const [name, setName] = useState("USER");


    console.log("name in app: ",name);

    return (<>
            <div className="App">

                {/*
                <BrowserRouter>
    <Routes>
        <Route path="/" element = { <Header />}>
            //name
                <Route path ="settings" element={<Settings settingsFilter={inputs} updateSettings={setInputs} />}/>
            <Route path ="play" element={<Play settingsFilter={inputs} playerData={playerData} updatePlayerData={setPlayerData}/>}/>
            <Route path ="highScore" element={<TableHighScore playerData={playerData}/>}/>
        </Route>
    </Routes>
</BrowserRouter>
                */}
                <BrowserRouter>
                    <Routes>
                        {/* Route for Home page */}
                        <Route element={<Header />}>
                            {/* Content that should appear only on the Home page */}
                            <Route index path="/" element={<InputName setUserName={setName} />} />
                            <Route path="settings" element={<Settings settingsFilter={inputs} updateSettings={setInputs} />}>
                                {/* Display InputName within the Settings page */}
                                <Route index element={<InputName setUserName={setName} />} />
                            </Route>
                        </Route>

                        {/* Settings page */}


                        {/* Play and TableHighScore pages */}
                        <Route element={<Header />}>
                            <Route path="play/*" element={<Play settingsFilter={inputs} playerData={playerData} updatePlayerData={setPlayerData} />} />
                            <Route path="highScore" element={<TableHighScore playerData={playerData} />} />
                        </Route>
                    </Routes>
                </BrowserRouter>



            </div>
        </>
    );
}

export default App;



