import '../css/header.css'
import logo from '../img/logo.png'
import logo2 from '../img/logo2.png'
import { useState,useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
const Header = ({ position, showClick, updateShowClick }  ) => {

  const [showLogo2,setShowLogo2] = useState(false);
  const [hideCat,sethideCat] = useState(false);
  const headerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);


  const handleLinkClick = () => {
    window.location.reload();
    window.location.href = "/portfolio";
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
      window.scrollTo({ top: 1900, behavior: 'smooth' });
    };
    const handleCloningClick = () => {
      window.scrollTo({ top: 4550, behavior: 'smooth' });
    };
    const handleAboutClick = () => {
      window.scrollTo({ top: 1050, behavior: 'smooth' });
    };
    const handleContactClick = () => {
      window.scrollTo({ top: 5500, behavior: 'smooth' });
    };

    return (  
      <div className="headerWrap">
        <header className='header'>
          
        <Link to="/portfolio"  onClick={handleLinkClick}>
            <h1 className={hideCat ? "logo2" : "logo"} 
                  onMouseOver={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
            >
              <img src={showLogo2 ? logo2 : logo} alt="intro"></img>
            </h1>
        </Link>
            <ul className='nav' >
                    <li  
                    onClick={handleProjectClick}
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>Project</li>
                    <li
                    onClick={handleCloningClick}
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>Cloning</li>
                    <li
                    onClick={handleAboutClick}
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>About me</li>
                    <li
                    onClick={handleContactClick}
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>Contact</li>
            </ul>
        </header>
      </div>
    );
}
 
export default Header;