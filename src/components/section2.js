import '../css/section2.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Project from "./project.json";

const Section2 = ({ updateShowClick }) => {

  const [hoveredItem, setHoveredItem] = useState(null);
  
  const handleMouseEnter = (index) => {
    updateShowClick(false)
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    updateShowClick(true);
    setHoveredItem(null);
  };
  
    return (  
      <div className="section2">
        <div className="port">
            <p>Project</p> 
        </div>
        <div className="projectItemWrap">
          <article className='projectArticle'>
            <div className="projectItemContainer">
              {Project.items.map((item, index) => (
                <div key={index}>
                  <div className="projectItem" style={{background:`${item.bgColor}`}}
                   onMouseEnter={() => handleMouseEnter(index)}
                   onMouseLeave={handleMouseLeave}
                  >
                    <Link to={`/${item.link}`}> 
                    <img className={`projectImg ${hoveredItem === index ? 'projectHover' : ''}`} src={require(`../img/${item.img}.png`)} alt={item.img}></img>
                    </Link>
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