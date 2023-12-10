import React from 'react';
import { useEffect } from 'react';
import "../css/subProject2.css"

const SubProject2 = ({position, showClick, updateShowClick }) => {

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
      <div className='subProject2'>
        <div>
        subProject2
        </div>
      </div>
    )
};

export default SubProject2;