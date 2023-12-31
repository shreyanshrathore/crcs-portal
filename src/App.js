import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Navi from './Components/Navi'
import Function from './Components/FunctionComponent';
import Maps from './Components/Chartss/Maps';
import Charts from './Components/Chartss/Charts'
import Data from './Components/Chartss/Map_data'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Rem from './Pages/rem'
import Bank from './Components/ListOfBank'
import Mods from './Components/liquidation/Mods'
import Mod from './Components/liquidation/Mod'

function App() {


  const data = [
    [10, 20, 30],
    [5, 15, 25],
    [8, 12, 18]
  ];
  return (
    <BrowserRouter>
      <div className="App">
        <Routes >
          <Route
            path="/"
            element={
              <div>
                <Register />
              </div>
            }
          />

          <Route
            path="/bank"
            element={
              <div>
                <Nav />
                <Navi />
                <br />
                <br />
                <br />
                <br />
                <Bank />
              </div>
            }
          />


          <Route
            path="/login"
            element={
              <div>
                <Login />
              </div>
            }
          />

          <Route
            path="/Liquidation-pocess"
            element={
              <div>
                <Nav />
                <Navi />
                <br />
                <br />
                <br />
                <br />
                <Mods/>
              </div>
            }
          />

          <Route
            path="/Liquidation-List"
            element={
              <div>
                <Nav />
                <Navi />
                <br />
                <br />
                <br />
                <br />
                <Mod />
              </div>
            }
          />

          <Route
            path="/rem"
            element={
              <div>
                <Rem />
              </div>
            }
          />
          <Route
            path="/home"
            element={
              <div>
                <Nav />
                {/* <Function /> */}
                <Navi />
              </div>
            }
          />

          <Route
            path="/chart"
            element={
              <div>
                <Nav />
                <Navi />
                <Charts />
              </div>
            }
          />
          <Route
            path="/maps"
            element={
              <div>
                <Nav />
                {/* <Function /> */}
                <Navi />
                <Maps />
                {/* <Data/> */}
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
