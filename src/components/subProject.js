import React from 'react';
import { useEffect  } from 'react';
import "../css/subProject1.css"

const SubProject = ({updateShowClick,tit }) => {
  

  const handleMouseEnter = (index) => {
    updateShowClick(false);
  };

  const handleMouseLeave = () => {
    updateShowClick(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      // 스크롤 이벤트 핸들링 로직 추가
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className='subProject'>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p><p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p><p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p><p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>
        <p>{tit}</p>

      </div>
    )
};

export default SubProject;