import { Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import './css/App.css'
import './css/reset.css'

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showClick, setShowClick] = useState(true);

  const updateShowClick = (value) => {
    setShowClick(value);
  };

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const scrollY = window.pageYOffset;
    setPosition({ x: mouseX - 10, y: mouseY -10 + scrollY });
  };
  
  return (
    <div className="App">
      <div onMouseMove={handleMouseMove}>
      <div className={showClick ? "click" : "click clickOn"} style={{ position: 'absolute', left: `${position.x}px`, top: `${position.y}px`}}></div>
        <Header position={position} showClick={showClick} updateShowClick={updateShowClick} />
        <Routes>
          <Route exact path='/portfolio' element={<Main position={position} showClick={showClick} updateShowClick={updateShowClick} />}/>
        </Routes>
        <Footer position={position} showClick={showClick} updateShowClick={updateShowClick}/>
      </div>
    </div>
  );
}

export default App;
