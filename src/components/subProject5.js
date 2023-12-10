import React from 'react';
import { useEffect } from 'react';
import "../css/subProject5.css"

const SubProject5 = ({position, showClick, updateShowClick }) => {

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
      <div className='subProject5'>
        <div>
        subProject5
        </div>
      </div>
    )
};

export default SubProject5;