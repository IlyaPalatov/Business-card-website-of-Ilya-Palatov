import React from 'react';
import '../styles/MainPageStyles.css';

export const MainPage = () => {
  return (
    <div className='background-theme'>
        <div className="container">
        <div className='navigation'>
         
            <div className='box-for-logo'>
              <a href='./MainPage.jsx' className='link-to-main-logo'><p className='logo' >ILLIA.</p></a>
            </div>
         
          <div className="box-for-links">
            <a href='./MainPage.jsx' className='link-to-main'><p className='links-nav' >Home</p></a>
            <a href='./MainPage.jsx' className='link-to-about-me'><p className='links-nav' >About Me</p></a>
            <a href='./MainPage.jsx' className='link-to-my-projects'><p className='links-nav' >My Projects</p></a>
          </div>
          <div>
            <button className='btn-contact-me'>Let's Talk</button>
          </div>
        </div>
      </div>
      <div className='div-greetings'>
        <div className="container">
          <div>
            <p className='p-greetings'>Hey, I Am Illia <br /> Full Stack Developer</p>
              
          </div>
          <div>
            
          </div>
        </div>
      </div>  
    </div>
  );
};

