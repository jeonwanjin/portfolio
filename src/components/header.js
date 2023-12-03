import '../css/header.css'
import logo from '../img/logo.png'
import logo2 from '../img/logo2.png'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = ({ position, showClick, updateShowClick }  ) => {

  const [showLogo2,setShowLogo2] = useState(false);
  const [hideCat,sethideCat] = useState(false);

  const handleMouseEnter = () => {
    updateShowClick(false)
  };

  const handleMouseLeave = () => {
    updateShowClick(true)
  };

  useEffect(() => { 
    const handleScroll = () => {
        const scrollY = window.pageYOffset;

        console.log(scrollY)

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


    return (  
      <div className="headerWrap">
        <header className='header'>
          
        <Link to="/portfolio">
            <h1 className={hideCat ? "logo2" : "logo"} 
                  onMouseOver={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
            >
              <img src={showLogo2 ? logo2 : logo} alt="intro"></img>
            </h1>
        </Link>
            <ul className='nav' >
                    <li  
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>Project</li>
                    <li
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>Cloning</li>
                    <li
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>About me</li>
                    <li
                    onMouseOver={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>Contact</li>
            </ul>
        </header>
      </div>
    );
}
 
export default Header;