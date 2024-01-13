import { Routes, Route , useLocation} from 'react-router-dom';
import { useState } from 'react';
import Main from './components/main.js';
import AboutMe from './components/aboutMe.js';
import Contact from './components/contact.js';
import Cloning from './components/cloning.js';
import ProjectPage from './components/projectPage.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
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
    <div className="App" onMouseMove={handleMouseMove}>
      <div className={showClick ? "click" : "click clickOn"} style={{ position: 'absolute', left: `${position.x}px`, top: `${position.y}px`}}></div>
        <Header position={position} showClick={showClick} updateShowClick={updateShowClick} isAboutMeRoute={location.pathname === '/AboutMe'}/>
          <Routes>
            <Route path="/portfolio" element={<Main position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
            <Route path="/Project" element={<ProjectPage position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
            <Route path="/Cloning" element={<Cloning position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
            <Route path="/AboutMe" element={<AboutMe position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
            <Route path="/Contact" element={<Contact position={position} showClick={showClick} updateShowClick={updateShowClick} />} />
    
            {SubProjectSon.items.map((item, index) => (
              <Route key={index} path={`/${item.link}`} element={<SubProject 
                
                position={position} showClick={showClick} updateShowClick={updateShowClick} 
                subTit={item.title} subtext={item.text} subtext2={item.text2} subtext3={item.text3} bgColor={item.bgColor} bgImg={item.img}
                bgImg2={item.img2} bgImg3={item.img3} bgImg4={item.img4} bgImg5={item.img5} bgImg6={item.img6}
                subDate={item.date} subUrl={item.url} subtext4={item.text4}
   
                />} 
              />
            ))}    
          </Routes>
        <Footer position={position} showClick={showClick} updateShowClick={updateShowClick} isAboutMeRoute={location.pathname === '/AboutMe'}/>
    </div>
  );
}

export default App;