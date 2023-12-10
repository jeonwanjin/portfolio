import React from 'react';
import { useEffect } from 'react';
import "../css/subProject4.css"

const SubProject4 = ({position, showClick, updateShowClick }) => {

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
      <div className='subProject4'>
        <div>
        subProject4
        </div>
      </div>
    )
};

export default SubProject4;