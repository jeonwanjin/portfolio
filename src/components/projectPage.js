import '../css/section2.css'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Project from "./project.json";

const ProjectPage = ({ updateShowClick }) => {

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
    
    window.scrollTo(0, 0);
  
    }, []);
    
    return (  
      <div className="section2 w1720 loaded">
        <div className="port">
            <p>Project</p> 
        </div>
        <div className="projectItemWrap">
          <article className='projectArticle'>
            <div className="projectItemContainer">
              {Project.items.map((item, index) => (
                <div key={index}>
                  <div className="projectItemPage" style={{background:`${item.bgColor}`}}
                   onMouseEnter={() => handleMouseEnter(index)}
                   onMouseLeave={handleMouseLeave}
                  >
                    <Link to={`/${item.link}`}> 
                    <img className={`projectImg ${hoveredItem === index ? 'projectHover' : ''}`} src={require(`../img/${item.img}.png`)} alt={item.img}></img>
                    </Link>
                  </div>
                  <div className="projecTit maginTop50">{item.title}</div>
                  <div className="projecTxt">{item.text}</div>
                </div>
              ))}
            </div>  
          </article>
        </div>
      </div>
    );
};
 
export default ProjectPage;