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
    const [articleUp1,setArticleUp1] = useState(true);
    const [articleUp2,setArticleUp2] = useState(true);
    const [articleUp3,setArticleUp3] = useState(true);
    const [upOn1,setUpOn1] = useState(true);
    const [upOn2,setUpOn2] = useState(true);
    const [upOn3,setUpOn3] = useState(true);
    const [upOn4,setUpOn4] = useState(true);
    const [downOn1,setDownOn1] = useState(true);
    const [downOn2,setDownOn2] = useState(true);
    const [downOn3,setDownOn3] = useState(true);
    const [downOn4,setDownOn4] = useState(true);
    const [i, setI] = useState(0);

    
    const clickUp = () =>{
      console.log(i)

      setI(prevI => {

      if (prevI === 0) {

        setArticleUp1(false);
      
        setTimeout(() => {

        setUpOn1(false);       
        setDownOn1(false);

        },200);
      }

      if (prevI === 1) {
        
        setArticleUp2(false);
      
        setTimeout(() => {
                
        setUpOn2(false);
        setDownOn2(false);

        },200);
      }

      
      if (prevI === 2) {
        
        setArticleUp3(false);
        
        setTimeout(() => {
                
        setUpOn3(false);
        setDownOn3(false);

        },200);
      }

      if (prevI === 3) {
        
        
        setTimeout(() => {
                
        setUpOn4(false);
        setDownOn4(false);

        },200);
      }


      return prevI + 1;

      });
    }

    const clickDown = () =>{
      console.log(i)

      setI(prevI => {

      if (prevI === 1) {

        setArticleUp1(true);
      
        setTimeout(() => {

        setDownOn1(true);
        setUpOn1(true);    

        },200);
      }

      if (prevI === 2) {
        
        setArticleUp2(true);

        setTimeout(() => {
                
        setDownOn2(true);
        setUpOn2(true);

        },200);
      }
      
      if (prevI === 3) {
        
        setArticleUp3(true);

        setTimeout(() => {
                
        setDownOn3(true);
        setUpOn3(true);

        },200);
      }


      if (prevI === 4) {

        setTimeout(() => {
                
        setDownOn4(true);
        setUpOn4(true);

        },200);

        prevI = 0;
      }


      return prevI - 1;

      });
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
                <img className='up' src={up}  onClick={clickUp}  alt="up"></img>
                <img className='down' src={down} onClick={clickDown} alt="down"></img>
              </div>
              <article className='cloningArticle'>
                      <div className="cloningItem">
                        <div className={downOn1 ? "cloningBox cloningImgL" : "cloningBox cloningImgL downOn"}><img className="cloningImg" src={Cloning1} alt="Cloning1"></img></div> 
                        <div className={upOn1 ? "cloningBox cloningImgC" : "cloningBox cloningImgC upOn"}><img className="cloningImg" src={Cloning1} alt="Cloning1"></img></div> 
                        <div className={downOn1 ? "cloningBox cloningImgR" : "cloningBox cloningImgR downOn"}><img className="cloningImg"src={Cloning1} alt="Cloning1"></img></div> 
                      </div>
                      <div className={upOn1 ? "cloningTit" : "cloningTit upOn"} 
                        onMouseOver={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={()=>{window.open("https://jeonwanjin.github.io/domino/")}}>domino's</div>
              </article>
              <article className={articleUp1 ? "cloningArticle" : "cloningArticle articleUp1"}>
                      <div className="cloningItem">
                        <div className={downOn2 ? "cloningBox cloningImgL" : "cloningBox cloningImgL downOn"}><img className="cloningImg" src={Cloning2} alt="Cloning2"></img></div> 
                        <div className={upOn2 ? "cloningBox cloningImgC" : "cloningBox cloningImgC upOn"}><img className="cloningImg" src={Cloning2} alt="Cloning2"></img></div> 
                        <div className={downOn2 ? "cloningBox cloningImgR" : "cloningBox cloningImgR downOn"}><img className="cloningImg"src={Cloning2} alt="Cloning2"></img></div> 
                      </div>
                      <div className={upOn2 ? "cloningTit" : "cloningTit upOn"} 
                        onMouseOver={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={()=>{window.open("https://jeonwanjin.github.io/dokdo/")}}>Dokdo</div>
              </article>
              <article className={articleUp2 ? "cloningArticle" : "cloningArticle articleUp2"}>
                      <div className="cloningItem">
                        <div className={downOn3 ? "cloningBox cloningImgL" : "cloningBox cloningImgL downOn"}><img className="cloningImg" src={Cloning3} alt="Cloning3"></img></div> 
                        <div className={upOn3 ? "cloningBox cloningImgC" : "cloningBox cloningImgC upOn"}><img className="cloningImg" src={Cloning3} alt="Cloning3"></img></div> 
                        <div className={downOn3 ? "cloningBox cloningImgR" : "cloningBox cloningImgR downOn"}><img className="cloningImg"src={Cloning3} alt="Cloning3"></img></div> 
                      </div>
                      <div className={upOn3 ? "cloningTit" : "cloningTit upOn"} 
                        onMouseOver={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={()=>{window.open("https://jeonwanjin.github.io/SOCAR/")}}>SOCAR</div>
              </article>
              <article className={articleUp3 ? "cloningArticle" : "cloningArticle articleUp3"}>
                      <div className="cloningItem">
                        <div className={downOn4 ? "cloningBox cloningImgL" : "cloningBox cloningImgL downOn"}><img className="cloningImg" src={Cloning4} alt="Cloning3"></img></div> 
                        <div className={upOn4 ? "cloningBox cloningImgC" : "cloningBox cloningImgC upOn"}><img className="cloningImg" src={Cloning4} alt="Cloning3"></img></div> 
                        <div className={downOn4 ? "cloningBox cloningImgR" : "cloningBox cloningImgR downOn"}><img className="cloningImg"src={Cloning4} alt="Cloning3"></img></div> 
                      </div>
                      <div className={upOn4 ? "cloningTit" : "cloningTit upOn"} 
                        onMouseOver={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={()=>{window.open("https://jeonwanjin.github.io/kolon/")}}>kolon</div>
              </article>
              </div>
          </div>
        </div>
      );
  };
  
  export default Section3;