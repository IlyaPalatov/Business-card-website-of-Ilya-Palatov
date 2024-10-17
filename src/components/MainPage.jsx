import React from 'react';
import '../styles/MainPageStyles.css';

export const MainPage = () => {
  return (
    <div className='background-theme'>
        <div className="container">
        <div className='navigation'>
         
            <div className='box-for-logo'>
              <a href='./MainPage.jsx' className='link-to-main'><p className='logo' >ILLIA.</p></a>
            </div>
         
          <div className="box-for-links">
            <a href='./MainPage.jsx' className='link-to-main'><p className='links-nav' >Home</p></a>
            <a href='./MainPage.jsx' className='link-to-about-me'><p className='links-nav' >About Me</p></a>
            <a href='./MainPage.jsx' className='link-to-my-projects'><p className='links-nav' >My Projects</p></a>
          </div>
          <div>
            <button>Contact Me</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

