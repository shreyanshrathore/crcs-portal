import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Function from './Components/FunctionComponent';
import Maps from './Components/Chartss/Maps';

function App() {


  const data = [
    [10, 20, 30],
    [5, 15, 25],
    [8, 12, 18]
  ];
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/home"
            element={
              <div>
                <Nav />
                <Function />
              </div>
            }
          />
          <Route
            path="/maps"
            element={
              <div>
                <Nav />
                <Function />
                <Maps />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
