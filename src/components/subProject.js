import React from 'react';
import { useEffect,useState} from 'react';
import "../css/subProject.css"


const SubProject = ({updateShowClick,bgImg,bgColor,subTit,subtext,subtext2,subtext3}) => {

  const [showSubTit,setShowSubTit] = useState(true);

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
          <p className='subtext'>{subtext}</p>
          <p className='subtext2'>{subtext2}</p>
          <p className='subtext2'>{subtext3}</p>
        </div>
      </div>
    )
};

export default SubProject;