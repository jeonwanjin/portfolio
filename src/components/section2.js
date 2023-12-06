import '../css/section2.css'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Project from "./project.json";


const Section2 = ({ updateShowClick }) => {

  const [showAticle,setShowAticle] = useState(true);
  const [showPortfiolio,setShowPortfiolio] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const handleMouseEnter = (index) => {
    updateShowClick(false)
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    updateShowClick(true);
    setHoveredItem(null);
  };

  
  useEffect(() => { 
  
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
  
      if(scrollY >= 1200){
        setShowPortfiolio(false);
        setTimeout(() => {
          setShowAticle(false);
        }, 1800);
      }else{
        setShowPortfiolio(true);
        setShowAticle(true);
      }

    };

    window.addEventListener('scroll', handleScroll);
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
    

    }, []);

    return (  
      <div className="section2">
        <div className={showPortfiolio ? "port" : "port portOn"}  >
            <p>Project</p> 
        </div>
        <div className="projectItemWrap">
          <article className='projectArticle'>
            <div className={showAticle ? "projectItemContainer" : "projectItemContainer projectOn"} >
              {Project.items.map((item, index) => (
                <div key={index}>
                  <div className="projectItem" style={{background:`${item.bgColor}`}}
                   onMouseEnter={() => handleMouseEnter(index)}
                   onMouseLeave={handleMouseLeave}
                  >
                    <img className={`projectImg ${hoveredItem === index ? 'projectHover' : ''}`} src={require(`../img/${item.img}.png`)} alt={item.img}></img>
                  </div>
                  <div className="projecTit">{item.title}</div>
                  <div className="projecTxt">{item.text}</div>
                </div>
              ))}
            </div>  
          </article>
        </div>
      </div>
    );
};
 
export default Section2;