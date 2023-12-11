import '../css/aboutMe.css'
import { useEffect } from 'react';

const AboutMe = ({updateShowClick }) => {

    

    const handleMouseEnter = () => {
      updateShowClick(false)
    };
  
    const handleMouseLeave = () => {
      updateShowClick(true)
    };


    useEffect(() => { 

      window.scrollTo(0, 0);
 
     

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