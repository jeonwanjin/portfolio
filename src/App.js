import { Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Main from './components/main';
import AboutMe from './components/aboutMe';
import Header from './components/header';
import Footer from './components/footer';
import './css/App.css'
import './css/reset.css'

import SubProject1 from './components/subProject1';
import SubProject2 from './components/subProject2';
import SubProject3 from './components/subProject3';
import SubProject4 from './components/subProject4';
import SubProject5 from './components/subProject5';
import SubProject6 from './components/subProject6';


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
        <Header position={position} showClick={showClick} updateShowClick={updateShowClick} isAboutMeRoute={window.location.pathname === '/AboutMe'} />
        <Routes>
          <Route exact path="/portfolio" element={<Main position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
          <Route exact path="/AboutMe" element={<AboutMe position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
          <Route exact path="/SubProject1" element={<SubProject1 position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
          <Route exact path="/SubProject2" element={<SubProject2 position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
          <Route exact path="/SubProject3" element={<SubProject3 position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
          <Route exact path="/SubProject4" element={<SubProject4 position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
          <Route exact path="/SubProject5" element={<SubProject5 position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
          <Route exact path="/SubProject6" element={<SubProject6 position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
        </Routes>
        <Footer position={position} showClick={showClick} updateShowClick={updateShowClick}/>
      </div>
    </div>
  );
}

export default App;
