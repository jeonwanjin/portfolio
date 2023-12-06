import '../css/section1.css'
import { useState,useEffect } from 'react';
import arrow from '../img/arrow.png'
import { Link } from 'react-router-dom';

const Section1 = ({ updateShowClick }) => {

  const [showAboutL,setshowAboutL] = useState(false);
  const [showAboutR,setshowAboutR] = useState(false);
  const [showAboutRp,setshowAboutRp] = useState(true);
  const [showAboutBtn,setshowAboutBtn] = useState(true);
  const [ArrowOn,setArrowOn] = useState(false);

  const handleLinkClick = () => {
    window.location.reload();
    window.location.href = "/AboutMe";
  };
  
  const handleMouseEnter = () => {
    updateShowClick(false)
    setArrowOn(true);
  };

  const handleMouseLeave = () => {
    updateShowClick(true);
    setArrowOn(false);
  };
  
  useEffect(() => { 
  
    const handleScroll = () => {
        const scrollY = window.pageYOffset;

        if(scrollY <= 600){
          setshowAboutL(true);
          setshowAboutR(true);
          setTimeout(() => {
            setshowAboutRp(false);
          }, 2000);
             
          setTimeout(() => {
            setshowAboutBtn(false);
          }, 3000);  
        }else{
          setshowAboutL(false);
          setshowAboutR(false);
        }
        if(scrollY === 0){
          setshowAboutRp(true);
          setshowAboutBtn(true);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
      window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (  
      
      <div className="section1">
          <div className='flex'>
            <div className={showAboutL ? "aboutMe" : "aboutMe aboutMeOn"}>
              <p>About Me</p> 
            </div>
            <div className={showAboutR ? "aboutMe2" : "aboutMe2 aboutMe2On"}>
              <p>끊임없는 배움을 통해</p>
              <p>최신 기술과 트렌드에 대한 이해를 높이기 위해 노력하며</p>
              <p>지속적으로 성장하는 프론트엔드 개발자를 희망합니다</p> 
            </div>
          </div>
          <div className={showAboutRp ? "aboutMeRp" : "aboutMeRp aboutMeRpOn"} >
            <p>HTML, CSS, JavaScript,React 등의 기술을 터득하고 있으며,</p>
            <p> 현재는 WebGL을 활용한 사이트 제작을 진행 중입니다.</p>
            <p >Name: 전완진</p>
            <p>Phone: 010-5009-4223</p>
            <p>E-mail: jwj1212121@gmail.com</p>
          </div>
          <Link to="/AboutMe"  onClick={handleLinkClick}>
          <button  className={showAboutBtn ? "aboutBtn" : "aboutBtn aboutBtnOn"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} >
            더보기
            <img className={`arrow ${ArrowOn ? 'arrowOn' : ''}`} src={arrow} alt='arrow'></img>
          </button>
          </Link>
      </div>
    );
}
 
export default Section1;