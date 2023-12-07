import '../css/footer.css'
import { useState,useEffect } from 'react';
import git from "../img/git.png";
import mail from "../img/mail.png";
import tel from "../img/tel.png";

const Footer = ({ position, showClick, updateShowClick }  ) => {

  const [showContact,setShowContact] = useState(false);
  const [showContactTxt,setShowContactTxt] = useState(false);
  const [showMail,setShowMail] = useState(true);

  const handleMouseEnter = () => {
    updateShowClick(false)
  };

  const handleMouseLeave = () => {
    updateShowClick(true)
  };

  const mailClick = () => {
    
    navigator.clipboard.writeText("jwj1212121@gmail.com");
    setShowMail(false);
  };
  const alertClose = () => {
    
    setShowMail(true);
  };

  useEffect(() => { 
    const handleScroll = () => {


        const scrollY = window.pageYOffset;
    
        if(scrollY >= 5000){
          setShowContact(false);
          setShowContactTxt(false);
        }else{
          setShowContact(true);
          setShowContactTxt(true);
        }

      };
      
      window.addEventListener('scroll', handleScroll);

      return () => {

      window.removeEventListener('scroll', handleScroll);

      };
    }, []);

 
    return (  
      <div className='footer'>
        <div className="contactWrap">
          <div className={showContact ? "contact" : "contact contactOn"}>
              <p>Contact</p> 
          </div>
            <div className={showMail ? "alertBg" : "alertBg alertOn"}></div>
            <div className={showMail ? "alert" : "alert alertOn"}>메일주소가 복사되었습니다.
            <div className={showMail ? "alertBtn" : "alertBtn alertOn"}
             onMouseOver={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             onClick={alertClose}>X</div>
          </div>
          <div className={showContactTxt ? "contactTxt" : "contactTxt contactTxtOn"}>제 포트폴리오가 마음에 드셨다면 연락해 주세요.</div>
          <div className='footerMid'>
              <div className='git'
               onMouseOver={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               onClick={()=>{window.open("https://github.com/jeonwanjin")}}><img src={git} alt='git'></img><div>https://github.com/jeonwanjin</div></div>
              <div className='mail'
              onMouseOver={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={mailClick}><img src={mail} alt='mail'></img><div>jwj1212121@gmail.com</div></div>
              <div className='tel'><img src={tel} alt='tel'></img><div>010-5009-4223</div></div>
          </div>
          <div className='footerBot'>©2023 Jeonwanjin portfolio</div>
        </div>
      </div>
    );
}
 
export default Footer;