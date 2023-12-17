import React from 'react';
import { useEffect,useState} from 'react';
import "../css/subProject.css"
import link from '../img/link.png'
import link2 from '../img/link2.png'


const SubProject = ({updateShowClick,bgImg,bgImg2,bgImg3,bgImg4,bgImg5,bgImg6,bgColor,subTit,subtext,subtext2,subtext3,subtext4,subDate,subUrl}) => {

  const [showSubTit,setShowSubTit] = useState(true);
  
  const linkUrl = () => {
    window.open(subUrl, '_blank');
  }
  const handleMouseEnter = (index) => {
    updateShowClick(false);
  };

  const handleMouseLeave = () => {
    updateShowClick(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    updateShowClick(true);
    setShowSubTit(false);

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
    };

      window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className='subProject'>
        <div className='subIntro' style={{ backgroundColor: bgColor}}>
          <img src={require(`../img/${bgImg}.png`)} alt='bgImg'/>
        </div>
        <div className='subMain'>
          <p className={showSubTit ? "subTit" : "subTit subTitOn"}>{subTit}</p>
          <p className='aboutProject'>About Project</p>
          <p className='subtext4 bold'>{subtext4}</p>
          <p className='subtext'>{subtext}</p>
          <p className='subtext2'>{subtext2}</p>
          <p className='subtext2'>{subtext3}</p>
          <div className='dateUrl'>
            <div className='flex'>
              <p className='bold'>Date: </p><p>{subDate}</p>
            </div>
            <div className='flex'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
            onClick={linkUrl}>
              <p className='bold'>URL: </p><p>{subUrl}</p><img className='urlImg' src={link}></img>
            </div>
          </div>
          <div className='subMainA'>
            <img src={require(`../img/${bgImg2}.png`)} alt='bgImg2'/>
            <img src={require(`../img/${bgImg3}.png`)} alt='bgImg3'/>
            <img src={require(`../img/${bgImg4}.png`)} alt='bgImg4'/>
            <img src={require(`../img/${bgImg5}.png`)} alt='bgImg5'/>
            <img src={require(`../img/${bgImg6}.png`)} alt='bgImg6'/>
            <div className='subMainBtn bold' 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
            onClick={linkUrl}>View Page<img className='subMainBtnUrl' src={link2}></img></div>
          </div>
        </div>
      </div>
    )
};

export default SubProject;