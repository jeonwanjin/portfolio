import '../css/main.css'
import { useState,useEffect } from 'react';
import intro from '../img/intro.png'
import intro2 from '../img/intro2.png'
import intro3 from '../img/intro3.png'
import intro4 from '../img/intro4.png'
import clock from '../img/clock.png'
import monitor from '../img/monitor.png'
import btn from '../img/btn.png'
import Back from './back';
import Section1 from './section1';




const Main = () => {

    const [animationOn, setAnimationOn] = useState(true);
    const [isMonitorOn, setMonitorOn] = useState(true);
    const [showIntro2, setShowIntro2] = useState(false);
    const [showIntro3, setShowIntro3] = useState(false);
    const [showIntro4, setShowIntro4] = useState(false);

    const handleBtnClick = () => {
      setMonitorOn(!isMonitorOn);
      setAnimationOn(!animationOn);
    };

    useEffect(() => { 
      const handleScroll = () => {
          const scrollY = window.pageYOffset;

          console.log(scrollY)

          if (scrollY <= 150) {
            setShowIntro2(false);
          } else {
            setShowIntro2(true);
          }
          if (scrollY <= 300) {
            setShowIntro3(false);
          } else {
            setShowIntro3(true);
          }
          if (scrollY <= 450) {
            setShowIntro4(false);
          } else {
            setShowIntro4(true);
          }
        };
        
        window.addEventListener('scroll', handleScroll);

        return () => {

        window.removeEventListener('scroll', handleScroll);

        };
      }, []);

  
    return (  
      <div className="main">
        <div className='intro'>
        <img 
        src={showIntro4 ? intro4 : (showIntro3 ? intro3 : (showIntro2 ? intro2 : intro))} alt="intro"
        ></img>
        </div>
        <div className='flash'></div>
        <div className='clockWrap'><img className='clock' src={clock}></img></div>
        <div className='monitorWrap'><img className={`monitor ${isMonitorOn ? 'off' : 'on'}`} src={monitor}></img></div>
        <div className='btnWrap'>
        <img className='btn' src={btn}/>
        <div className={`btnLight ${animationOn ? 'off' : 'on'}`} onClick={handleBtnClick}></div>
        <div className='mainBlock'></div>
        </div>
        <Back />
        <Section1/>
      </div>
      
    );
}
 
export default Main;