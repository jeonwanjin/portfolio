import '../css/section3.css'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cloning1 from "../img/cloning1.png";
import Cloning2 from "../img/cloning2.png";
import Cloning3 from "../img/cloning3.png";
import Cloning4 from "../img/cloning4.png";
import up from "../img/up.png"
import down from "../img/down.png"


const Section3 = ({ updateShowClick }) => {

  const [showCloning,setShowCloning] = useState(true);
  const [upOn1,setUpOn1] = useState(true);
  const [downOn1,setDownOn1] = useState(true);
  const [upOn2,setUpOn2] = useState(true);
  const [downOn2,setDownOn2] = useState(true);
  const [upOn3,setUpOn3] = useState(true);
  const [downOn3,setDownOn3] = useState(true);
  const [titOn1,setTitOn1] = useState(true);
  const [titOn2,setTitOn2] = useState(false);
  const [titOn3,setTitOn3] = useState(true);
  const [titOn4,setTitOn4] = useState(true);
  const [articleOn1,setArticleOn1] = useState(true);
  const [articleOn2,setArticleOn2] = useState(false);
  const [articleOn3,setArticleOn3] = useState(true);
  const [articleOn4,setArticleOn4] = useState(true);
  
  const [i, setI] = useState(1);

  const clickUp = () =>{


    if (i === 0) {
      setArticleOn2(false);
      setUpOn1(false);       
      setDownOn1(false);
      setTitOn1(true);
      setTitOn2(false);
  
      setTimeout(() => {  

      setUpOn2(true);       
      setDownOn2(true);  
   

      },200);

    }

    if (i === 1) {
      setArticleOn3(false);
      setUpOn1(false);       
      setDownOn1(false);
      setUpOn3(true);       
      setDownOn3(true);
      setTitOn2(true);
      setTitOn3(false)

      setTimeout(() => {  
      setUpOn2(false);       
      setDownOn2(false);

      },200);

    }

    if (i === 2) {
      setArticleOn4(false);
      setTitOn3(true)
      setTitOn4(false)

      setTimeout(() => {  
      setUpOn3(false);       
      setDownOn3(false);
      
      },200);

 

    }
 

    setI((i) => Math.min(3, i + 1)); 

  }

  const clickDown = () =>{

    if (i === 1) {
      setArticleOn1(false);
      setArticleOn2(true);
      setUpOn1(true);       
      setDownOn1(true);
      setTitOn1(false);   
      setTitOn2(true);


      setTimeout(() => {

      setUpOn2(false);       
      setDownOn2(false);    

      },200);

    }

    if (i === 2) {
      
      setUpOn2(true);       
      setDownOn2(true);  
      setTitOn2(false)
      setTitOn3(true)
      
      setTimeout(() => {

      setUpOn3(false);       
      setDownOn3(false);    

      },200);

    }
    if (i === 3) {
   

      setTitOn3(false)
      setTitOn4(true)

      setTimeout(() => {

      setUpOn3(true);       
      setDownOn3(true);     

      },200);

    }

    setI((i) => Math.max(0, i - 1)); 

  }

  const handleMouseEnter = () => {
    updateShowClick(false)
  };

  const handleMouseLeave = () => {
    updateShowClick(true)
  };


  useEffect(() => { 
  
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
  
      if(scrollY >= 3000){
        setShowCloning(false);
      }else{
        setShowCloning(true);
      }

    };

    window.addEventListener('scroll', handleScroll);
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
    

    }, []);

    return (  
      <div className="section3">
        <div className={showCloning ? "cloning" : "cloning cloningOn"}  >
            <p>Cloning</p> 
        </div>
        <div className='flex'>
          <div className="cloningItemWrap">
            <div className='cloningBtn'>
              <img className='up' src={up}  
              onMouseOver={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={clickUp}  alt="up"></img>
              <img className='down' src={down} 
              onMouseOver={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={clickDown} alt="down"></img>
            </div>
            <article className={articleOn1 ? "cloningArticle cloningArticle1" : "cloningArticle cloningArticle1 articleOn"}>
                      <div className={downOn1 ? "cloningBox cloningImgL" : "cloningBox cloningImgL downOn"}><img className="cloningImg" src={Cloning1} alt="Cloning1"></img></div> 
                      <div className={upOn1 ? "cloningBox cloningImgC" : "cloningBox cloningImgC upOn"}><img className="cloningImg" src={Cloning1} alt="Cloning1"></img></div> 
                      <div className={downOn1 ? "cloningBox cloningImgR" : "cloningBox cloningImgR downOn"}><img className="cloningImg"src={Cloning1} alt="Cloning1"></img></div> 
                      <div className={titOn1 ? "cloningTit" : "cloningTit titOn"} 
                      onMouseOver={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={()=>{window.open("https://jeonwanjin.github.io/SOCAR/")}}>SOCAR</div>
            </article>
                     
            <article className={articleOn2? "cloningArticle cloningArticle2" : "cloningArticle cloningArticle2 articleOn"}>
                      <div className={downOn2 ? "cloningBox cloningImgL" : "cloningBox cloningImgL downOn"}><img className="cloningImg" src={Cloning2} alt="Cloning2"></img></div> 
                      <div className={upOn2 ? "cloningBox cloningImgC" : "cloningBox cloningImgC upOn"}><img className="cloningImg" src={Cloning2} alt="Cloning2"></img></div> 
                      <div className={downOn2 ? "cloningBox cloningImgR" : "cloningBox cloningImgR downOn"}><img className="cloningImg"src={Cloning2} alt="Cloning2"></img></div> 
                      <div className={titOn2 ? "cloningTit" : "cloningTit titOn"} 
                      onMouseOver={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={()=>{window.open("https://jeonwanjin.github.io/dokdo/")}}>Dokdo</div>
            </article>
            <article className={articleOn3? "cloningArticle cloningArticle3" : "cloningArticle cloningArticle3 articleOn"}>
                      <div className={downOn3 ? "cloningBox cloningImgL" : "cloningBox cloningImgL downOn"}><img className="cloningImg" src={Cloning3} alt="Cloning3"></img></div> 
                      <div className={upOn3 ? "cloningBox cloningImgC" : "cloningBox cloningImgC upOn"}><img className="cloningImg" src={Cloning3} alt="Cloning3"></img></div> 
                      <div className={downOn3 ? "cloningBox cloningImgR" : "cloningBox cloningImgR downOn"}><img className="cloningImg"src={Cloning3} alt="Cloning3"></img></div> 
                      <div className={titOn3 ? "cloningTit" : "cloningTit titOn"} 
                      onMouseOver={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={()=>{window.open("https://jeonwanjin.github.io/domino/")}}>Domino's</div>
            </article>
            <article className={articleOn4? "cloningArticle cloningArticle4" : "cloningArticle cloningArticle4 articleOn"}>
                      <div className={titOn4 ? "cloningTit" : "cloningTit titOn"} 
                      onMouseOver={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={()=>{window.open("https://jeonwanjin.github.io/kolon/")}}>Kolon</div>
                      <div className="cloningBox4"><img className="cloningImg" src={Cloning4} alt="Cloning4"></img></div> 
            </article>
            </div>
        </div>
      </div>
    );
};
  
export default Section3;