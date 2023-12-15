import '../css/aboutMe.css'
import { useEffect } from 'react';
import jin from '../img/jin.jpg'
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import react from '../img/react.png'
import three from '../img/three.png'
import java from '../img/java.png'
import photoshop from '../img/photoshop.png'
import figma from '../img/figma.png'
import icon3dmax from '../img/icon3dmax.png'


const AboutMe = ({updateShowClick }) => {

    

    const handleMouseEnter = () => {
      updateShowClick(false)
    };
  
    const handleMouseLeave = () => {
      updateShowClick(true)
    };


    useEffect(() => { 

      window.scrollTo(0, 0);
 
     

      const handleScroll = () => {
          const scrollY = window.pageYOffset;

        };

        window.addEventListener('scroll', handleScroll);

        return () => {

        window.removeEventListener('scroll', handleScroll);

        };
      }, []);
  
  
    return (  
      <div className="subAboutMe">
        <div className="subAboutMeTit">
            <p>About Me</p> 
        </div>
        <div className='flex'>
            <div className='profile'>
              <div><img className='jin' src={jin} alt='jin'></img></div>
              <p>Profile</p>
              <p>Name: 전완진</p>
              <p>Age: 34</p>
              <p>Phone: 010-5009-4223</p>
              <p>E-mail: jwj1212121@gmail.com</p>
            </div>
            <div className='profile'>
              <div className='education'>
                <p>Education</p>
                <div className='flex justi'>
                  <p>2008.02</p><p>동서대학교 게임공학 전공 입학</p>
                </div>
                <div className='flex justi'>
                  <p>2015.02</p><p>동서대학교 게임공학 전공 졸업</p>
                </div>
                <div className='flex justi'>
                  <p></p><p>애니메이션 복수전공 졸업</p>
                </div>
              </div>
              <div className='experiece maginTop50'>
                <p>Experiece</p>
                <div className='flex justi'>
                  <p>2020.12~2022.11</p><p>자영업</p>
                </div>
                <div className='flex justi'>
                  <p>2019.03~2020.10</p><p>에이제이트레이드</p>
                </div>
                <div className='flex justi'>
                  <p>2017.01~2018.02</p><p>나비스오토모티브시스템즈</p>
                </div>
              </div>
              <div className='flex justi'>
                <p>2015.02~2015.06</p><p>파크이에스엠</p>
              </div>
              <div className='flex justi maginTop50'>
              <p>2023.05~2023.12</p><p>그린컴퓨터아카데미 노원</p>
              </div>
              <div className='flex justi'>
                <p>2021.04~2021.10</p><p>그린컴퓨터아카데미 부산</p>
              </div>
              <div className='flex justi'>
                <p>2018.06~2018.08</p><p>코코커피바리스타학원</p>
              </div>
              <div className='flex justi'>
                <p>2016.06~2016.09</p><p>신세계제과제빵전문학원</p>
              </div>
              <div className='flex justi'>
                <p>2015.06~2015.09</p><p>노라노디자인아카데미학원</p>
              </div>
            </div>
            <div className='profile'>
              <div className='skills'>
                  <p>Skills</p>
                  <div className='flex justi'>
                    <p className='font800'>Front-End:</p>
                  </div>
                  <div className='flex maginTop20'>
                    <img className='skill' src={html} alt='html'></img><p className='skillP'>HTML</p>
                    <img className='skill' src={css} alt='css'></img><p className='skillP'>CSS</p>
                    <img className='skill' src={js} alt='js'></img><p className='skillP'>JS</p>
                    <img className='skill' src={react} alt='react'></img><p className='skillP'>React</p>
                    <img className='skill' src={three} alt='three'></img><p className='skillP'>Three.js</p>
                  </div>
                  <div className='flex justi maginTop20'>
                    <p className='font800'>Back-End:</p>
                  </div>
                  <div className='flex maginTop20'>
                    <img className='skill' src={java} alt='java'></img><p className='skillP'>JAVA</p>
                  </div>
                  <div className='flex justi maginTop20'>
                    <p className='font800'>Design:</p>
                  </div>
                  <div className='flex maginTop20'>
                    <img className='skill' src={photoshop} alt='photoshop'></img><p className='skillP'>Photoshop</p>
                    <img className='skill' src={figma} alt='figma'></img><p className='skillP'>Figma</p>
                    <img className='skill' src={icon3dmax} alt='3dmax'></img><p className='skillP'>3dmax</p>
                  </div>
                  <div className='education maginTop60'>
                    <p>ETC</p>
                    <div className='flex justi'>
                      <p>2015.10</p><p>아시아청소년영화제 대상 수상 </p>
                    </div>
                    <div className='flex justi'>
                      <p>2014.11</p><p>게임 창작 챌린지 장려상 수상</p>
                    </div>
                    <div className='flex justi maginTop20'>
                      <p>2018.08</p><p>바리스타2급</p>
                    </div>
                    <div className='flex justi'>
                      <p>2016.12</p><p>AutoCAD2급 기술자격시험</p>
                    </div>
                    <div className='flex justi'>
                      <p>2012.11</p><p>자동차운전면허</p>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
         
    );
}
 
export default AboutMe;