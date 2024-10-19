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
          <div className='box-of-greetings'>
            <p className='p-greetings'>Hey, I Am Illia <br /> Full Stack Developer</p>  
            <div className="icon-container">
              <a href="mailto:ilapalatov@gmail.com&body=Hello!">
           <svg fill="#e0e0ce" width="30px" height="25px" viewBox="0 0 35 35" data-name="Layer 2" id="ee13b174-13f0-43ea-b921-f168b1054f8d" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0.75"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M29.384,30.381H5.615A5.372,5.372,0,0,1,.25,25.015V9.984A5.371,5.371,0,0,1,5.615,4.619H29.384A5.372,5.372,0,0,1,34.75,9.984V25.015A5.372,5.372,0,0,1,29.384,30.381ZM5.615,7.119A2.868,2.868,0,0,0,2.75,9.984V25.015a2.868,2.868,0,0,0,2.865,2.866H29.384a2.869,2.869,0,0,0,2.866-2.866V9.984a2.869,2.869,0,0,0-2.866-2.865Z"></path><path d="M17.486,20.865a4.664,4.664,0,0,1-2.9-.975L1.218,9.237A1.25,1.25,0,1,1,2.777,7.282L16.141,17.935a2.325,2.325,0,0,0,2.7-.007L32.04,7.287a1.249,1.249,0,1,1,1.569,1.945L20.414,19.873A4.675,4.675,0,0,1,17.486,20.865Z"></path></g></svg>
              </a>
              <a href="https://www.instagram.com/ilya.palatov/">
                <svg fill="#e0e0ce" width="30px" height="30px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
               <path d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/illia-palatov-0091942a1/">
            <svg fill="#e0e0ce" width="30px" height="30px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
               <path d="M96,80a8,8,0,1,1-8-8A7.99993,7.99993,0,0,1,96,80Zm-8,28.001a4,4,0,0,0-4,4v64a4,4,0,1,0,8,0v-64A4,4,0,0,0,88,108.001Zm60,0a31.92463,31.92463,0,0,0-24,10.86767V112.001a4,4,0,0,0-8,0v64a4,4,0,1,0,8,0v-36a24,24,0,0,1,48,0v36a4,4,0,1,0,8,0v-36A32.03619,32.03619,0,0,0,148,108.001ZM224,44V212a12.01375,12.01375,0,0,1-12,12H44a12.01375,12.01375,0,0,1-12-12V44A12.01359,12.01359,0,0,1,44,32H212A12.01359,12.01359,0,0,1,224,44Zm-8,0a4.00458,4.00458,0,0,0-4-4H44a4.00458,4.00458,0,0,0-4,4V212a4.00458,4.00458,0,0,0,4,4H212a4.00458,4.00458,0,0,0,4-4Z"/>
                </svg>
                </a>
          </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

