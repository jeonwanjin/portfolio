import React from 'react';
import { useEffect } from 'react';
import "../css/subProject3.css"

const SubProject3 = ({position, showClick, updateShowClick }) => {

  const handleMouseEnter = (index) => {
    updateShowClick(false)
  };

  const handleMouseLeave = () => {
    updateShowClick(true);
  };
  
  useEffect(() => { 
  
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
  
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
    
    }, []);

  return (
      <div className='subProject3'>
        <div>
        subProject3
        </div>
      </div>
    )
};

export default SubProject3;