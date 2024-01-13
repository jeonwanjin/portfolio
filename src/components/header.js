import '../css/header.css'
import logo from '../img/logo.png'
import logo2 from '../img/logo2.png'
import logo3 from '../img/logo3.png'
import git from "../img/git.png";
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = ({ updateShowClick ,isAboutMeRoute}) => {

  const [showLogo2,setShowLogo2] = useState(false);
  const [hideCat,sethideCat] = useState(false);
  const [liOn1,setLiOn1] = useState(true);
  const [liOn2,setLiOn2] = useState(true);
  const [liOn3,setLiOn3] = useState(true);
  const [liOn4,setLiOn4] = useState(true);
  const [hamOn,setHamOn] = useState(true);
  const [hamClose,setHamClose] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const clickDown = () =>{
    window.location.replace("/portfolio")
  };

  const handleMouseEnter = () => {
    updateShowClick(false)
  };

  const handleMouseLeave = () => {
    updateShowClick(true)
  };

  useEffect(() => { 
    const handleScroll = () => {
        const scrollY = window.pageYOffset;

        setScrollPosition(scrollY);

        if(scrollY <= 200){
          sethideCat(false);
        }else{
          sethideCat(true);
        }
        if (scrollY <= 400) {
          setShowLogo2(false);
        } else {
          setShowLogo2(true);
        }
      };
      
      window.addEventListener('scroll', handleScroll);

      return () => {

      window.removeEventListener('scroll', handleScroll);

      };
    }, []);

    const handleProjectClick = () => {
        setLiOn1(false)    
        setLiOn2(true)    
        setLiOn3(true)    
        setLiOn4(true)    
        setHamClose(false)   
    };
    const handleCloningClick = () => {
        setLiOn1(true)    
        setLiOn2(false)    
        setLiOn3(true)    
        setLiOn4(true) 
        setHamClose(false)   
    };
    const handleAboutClick = () => {
        setLiOn1(true)    
        setLiOn2(true)    
        setLiOn3(false)    
        setLiOn4(true)  
        setHamClose(false)   
    };

    const handleContactClick = () => {
        setLiOn1(true)    
        setLiOn2(true)    
        setLiOn3(true)    
        setLiOn4(false) 
        setHamClose(false)   
    };

    const clickHam = () =>{
        setHamOn(!hamOn);
    }

    return (  
      <div className="headerWrap">

        <header className='header'>
            <h1 className={hideCat ? "logo2" : "logo"} 
                  onMouseOver={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={clickDown}
            >
              <img src={showLogo2 ? logo2 : logo} alt="intro"></img>
            </h1> 

            <ul className='nav' >
                    <li  
                    className={liOn1 ? "li1" : "li1 liOn"} 
                    onClick={handleProjectClick}
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}><Link to="/Project">Project</Link></li>
                    <li
                    className={liOn2 ? "li2" : "li2 liOn"} 
                    onClick={handleCloningClick}
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}><Link to="/Cloning">Cloning</Link></li>
                    <li
                    className={liOn3 ? "li3" : "li3 liOn"} 
                    onClick={handleAboutClick}
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}><Link to="/AboutMe">About me</Link></li>
                    <li
                    className={liOn4 ? "li4" : "li4 liOn"} 
                    onClick={handleContactClick}
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}><Link to="/Contact">Contact</Link></li>
                    <div className={hamOn? "ham" : "ham hamClick"} 
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={clickHam}></div>
            </ul>
        </header>
        <div className={`openHam ${hamOn ? '' : 'hamClick'} ${hamClose ? '' : 'hamClose'}`}>
            <h1 className={"logo3"} 
                  onMouseOver={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={clickDown}
            >
              <img src={logo3} alt="intro"></img>
            </h1> 
          <ul className='hamUl'>
            <li  
            className='hamLi'
            onClick={handleProjectClick}
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}><Link to="/Project">Project</Link></li>
            <li
            className='hamLi'
            onClick={handleCloningClick}
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}><Link to="/Cloning">Cloning</Link></li>
            <li
            className='hamLi'
            onClick={handleAboutClick}
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}><Link to="/AboutMe">About me</Link></li>
            <li
            className='hamLi'
            onClick={handleContactClick}
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}><Link to="/Contact">Contact</Link></li>
            
            <div className='git'
               onMouseOver={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               onClick={()=>{window.open("https://github.com/jeonwanjin")}}><img src={git} alt='git'></img><div>https://github.com/jeonwanjin</div>
            </div>      
          </ul>
     
          <div className='hamBot'>©2023 Jeonwanjin portfolio</div>
        </div>
      </div>       
    );
}
 
export default Header;