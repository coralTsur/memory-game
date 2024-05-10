import './App.css';
import Header from './components/Header'
import Settings from './components/Settings'
import Play from './components/Play'
import Game from './components/Game'

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";

function App() {
    const [inputs, setInputs] = useState({ row: 4, col: 4, delay: 1 });

    return (
        <div className="App">
            <p>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element = { <Header />}>
                            <Route path ="settings" element={<Settings settingsFilter={inputs} updateSettings={setInputs} />}/>
                            <Route path ="play" element={<Play settingsFilter={inputs}/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </p>
        </div>

    );
}

export default App;



