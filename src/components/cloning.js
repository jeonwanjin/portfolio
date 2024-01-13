import '../css/cloning.css'
import { useEffect } from 'react';
import Cloning1 from "../img/cloning1.png";
import Cloning2 from "../img/cloning2.png";
import Cloning3 from "../img/cloning3.png";
import Cloning4 from "../img/cloning4.png";

const Cloning = ({updateShowClick}) => {

    const handleMouseEnter = () => {
      updateShowClick(false)
    };

    const handleMouseLeave = () => {
      updateShowClick(true)
    };


    useEffect(() => { 
    
    window.scrollTo(0, 0);
  
    }, []);

    return (  
      <div className='cloning'>
          <div className="cloningTit1">
            <p>Cloning</p> 
          </div>
          <article className="cloningArticleSub">
                      <div className="cloningBoxSub"><img className="cloningImgSub" src={Cloning2} alt="Cloning1"></img></div> 
                      <div className="cloningTit2"
                      onMouseOver={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={()=>{window.open("https://jeonwanjin.github.io/domino/")}}>Domino's</div>
            </article>
          <article className="cloningArticleSub">
                      <div className="cloningBoxSub"><img className="cloningImgSub" src={Cloning3} alt="Cloning1"></img></div> 
                      <div className="cloningTit2"
                      onMouseOver={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={()=>{window.open("https://jeonwanjin.github.io/dokdo/")}}>Dokdo</div>
            </article>
          <article className="cloningArticleSub">
                      <div className="cloningBoxSub"><img className="cloningImgSub" src={Cloning4} alt="Cloning1"></img></div> 
                      <div className="cloningTit2"
                      onMouseOver={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={()=>{window.open("https://jeonwanjin.github.io/kolon/")}}>Kolon</div>
          </article>
          <article className="cloningArticleSub">
                      <div className="cloningBoxSub"><img className="cloningImgSub" src={Cloning1} alt="Cloning1"></img></div> 
                      <div className="cloningTit2"
                      onMouseOver={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      onClick={()=>{window.open("https://jeonwanjin.github.io/SOCAR/")}}>SOCAR</div>
          </article>
      </div>
    );
}
 
export default Cloning;