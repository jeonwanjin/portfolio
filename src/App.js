import { Routes, Route , useLocation} from 'react-router-dom';
import { useState } from 'react';
import Main from './components/main';
import AboutMe from './components/aboutMe';
import Header from './components/header';
import Footer from './components/footer';
import './css/App.css'
import './css/reset.css'
import SubProjectSon from './components/subProject.json'
import SubProject from './components/subProject.js'

function App() {
  const location = useLocation();
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
        <Header position={position} showClick={showClick} updateShowClick={updateShowClick} isAboutMeRoute={location.pathname === '/AboutMe'} />
          <Routes>
            <Route exact path="/portfolio" element={<Main position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
            <Route exact path="/AboutMe" element={<AboutMe position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
            {SubProjectSon.items.map((item, index) => (
              <Route key={index} exact path={`/${item.link}`} element={<SubProject position={position} showClick={showClick} updateShowClick={updateShowClick} tit={item.title} />} />
            ))}    
          </Routes>
        <Footer position={position} showClick={showClick} updateShowClick={updateShowClick}/>
      </div>
    </div>
  );
}

export default App;
