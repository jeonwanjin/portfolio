import '../css/section1.css'
import { useState,useEffect } from 'react';
import arrow from '../img/arrow.png'
const Section1 = () => {

  
  const [showAboutL,setshowAboutL] = useState(false);
  const [showAboutR,setshowAboutR] = useState(false);
  const [showAboutRp,setshowAboutRp] = useState(true);
  const [showAboutBtn,setshowAboutBtn] = useState(true);

  useEffect(() => { 
    const handleScroll = () => {
        const scrollY = window.pageYOffset;

        console.log(scrollY)

        if(scrollY <= 500){
          setshowAboutL(true);
          setshowAboutR(true);
             
        }else{
          setshowAboutL(false);
          setshowAboutR(false);
        }

        if(scrollY >= 900){

          setTimeout(() => {
            setshowAboutRp(false);
          }, 1000);
          setTimeout(() => {
            setshowAboutBtn(false);
          }, 2000);
        }else{
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
        <div className={showAboutL ? "aboutMe" : "aboutMe aboutMeOn"}>
          <p>About Me</p> 
        </div>
        <div className={showAboutR ? "aboutMe2" : "aboutMe2 aboutMe2On"}>
          <p>프론트엔드 개발자를 희망하고 있습니다.</p>
          <p>끊임없는 배움을 통해</p>
          <p>최신 기술과 트렌드에 대한 이해를</p> 
          <p>높이기 위해 노력하겠습니다.</p>
        </div>
        <div className='flex'>
        <div className={showAboutRp ? "aboutMeRp" : "aboutMeRp aboutMeRpOn"}>
          <p>Profile</p>
          <p>HTML, CSS, JavaScript, 그리고 React 등의 기술을 터득하고 있으며,</p>
          <p> 현재는 WebGL을 활용한 사이트 제작을 진행 중입니다.</p>
          <p>Name: 전완진</p>
          <p>Phone: 010-5009-4223</p>
          <p>E-mail: jwj1212121@gmail.com</p>
        </div>
        <button className={showAboutBtn ? "aboutBtn" : "aboutBtn aboutBtnOn"}>
          더보기
          <img className='arrow' src={arrow}></img>
        </button>
       
        </div>
      </div>
    );
}
 
export default Section1;