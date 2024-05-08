import './App.css';
import Header from './components/Header'
import Settings from './components/settings'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element = { <Header/>}>
                      <Route path ="Settings" element={<Settings/>}></Route>
                  </Route>
              </Routes>
          </BrowserRouter>

      </p>
    </div>
  );
}

export default App;
