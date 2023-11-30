import '../css/header.css'
import logo from '../img/logo.png'
import logo2 from '../img/logo2.png'
import { useState,useEffect } from 'react';
const Header = () => {

  const [showLogo2,setShowLogo2] = useState(false);
  const [hideCat,sethideCat] = useState(false);

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
            <h1 className={hideCat ? "logo2" : "logo"}><img src={showLogo2 ? logo2 : logo} alt="intro"></img></h1>
            <ul className='nav'>
                    <li>Project</li>
                    <li>Cloning</li>
                    <li>About me</li>
                    <li>Contact</li>
            </ul>
        </header>
      </div>
    );
}
 
export default Header;