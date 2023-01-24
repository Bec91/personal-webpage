import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BackGround from './Components/BackGround/BackGround';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <BackGround/>
        <Routes>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
