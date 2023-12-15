import '../css/header.css'
import logo from '../img/logo.png'
import logo2 from '../img/logo2.png'
import { useState,useEffect } from 'react';
import { Link  } from 'react-router-dom';
const Header = ({ updateShowClick ,isAboutMeRoute}) => {

  const [showLogo2,setShowLogo2] = useState(false);
  const [hideCat,sethideCat] = useState(false);
  const [liOn1,setLiOn1] = useState(true);
  const [liOn2,setLiOn2] = useState(true);
  const [liOn3,setLiOn3] = useState(true);
  const [liOn4,setLiOn4] = useState(true);
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
        if (scrollY <= 800) {
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
      if (!isAboutMeRoute) {
        window.scrollTo({ top: 1900, behavior: 'smooth' });
        setLiOn1(false)    
        setLiOn2(true)    
        setLiOn3(true)    
        setLiOn4(true)    
        };    
      
  
    };
    const handleCloningClick = () => {
      if (!isAboutMeRoute) {
        window.scrollTo({ top: 4550, behavior: 'smooth' });
        setLiOn1(true)    
        setLiOn2(false)    
        setLiOn3(true)    
        setLiOn4(true) 
        };      

 
    };
    const handleAboutClick = () => {
      if (!isAboutMeRoute) {
        window.scrollTo({ top: 1050, behavior: 'smooth' });
        setLiOn1(true)    
        setLiOn2(true)    
        setLiOn3(false)    
        setLiOn4(true) 
        };    
      if(isAboutMeRoute){
        window.location.replace("/AboutMe")
      }
 
    };
    const handleContactClick = () => {
      if (!isAboutMeRoute) {
        window.scrollTo({ top: 5500, behavior: 'smooth' });
        setLiOn1(true)    
        setLiOn2(true)    
        setLiOn3(true)    
        setLiOn4(false) 
        }; 

    };

    return (  
      <div className="headerWrap">
        <header className='header'>
          
        <Link to="/portfolio" onClick={clickDown}>
            <h1 className={hideCat ? "logo2" : "logo"} 
                  onMouseOver={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
            >
              <img src={showLogo2 ? logo2 : logo} alt="intro"></img>
            </h1> 
        </Link>
            <ul className='nav' >
                    <li  
                    className={liOn1 ? "li1" : "li1 liOn"} 
                    onClick={handleProjectClick}
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>Project</li>
                    <li
                    className={liOn2 ? "li2" : "li2 liOn"} 
                    onClick={handleCloningClick}
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>Cloning</li>
                    <li
                    className={liOn3 ? "li3" : "li3 liOn"} 
                    onClick={handleAboutClick}
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>About me</li>
                    <li
                    className={liOn4 ? "li4" : "li4 liOn"} 
                    onClick={handleContactClick}
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>Contact</li>
            </ul>
        </header>
      </div>
    );
}
 
export default Header;