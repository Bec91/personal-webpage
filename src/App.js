import './App.scss';
import { BrowserRouter, Routes } from 'react-router-dom';
import BackGround from './Components/BackGround/BackGround';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <BackGround/>
      <NavBar/>
        <Routes>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
