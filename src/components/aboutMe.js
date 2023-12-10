import '../css/aboutMe.css'
import { Routes, Route} from 'react-router-dom';
import { useState,useEffect } from 'react';

const AboutMe = ({ position, showClick, updateShowClick }) => {


    const handleMouseEnter = () => {
      updateShowClick(false)
    };
  
    const handleMouseLeave = () => {
      updateShowClick(true)
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
      <div className="subAboutMe">
  

      </div>
         
    );
}
 
export default AboutMe;