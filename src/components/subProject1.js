import React from 'react';
import { useEffect } from 'react';
import "../css/subProject1.css"

const SubProject1 = ({position, showClick, updateShowClick }) => {

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
      <div className='subProject1'>
        <p>subProject1</p>
      </div>
    )
};

export default SubProject1;