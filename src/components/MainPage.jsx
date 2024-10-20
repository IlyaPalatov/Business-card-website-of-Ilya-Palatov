import React from 'react';
import '../styles/MainPageStyles.css';
import myFirstProj from '../images/myFirstProj.png';

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
              <a className='link-to-my-social' href="https://github.com/IlyaPalatov">
           <svg fill="#e0e0ce" width="30px" height="29px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M0 15c0 7.033 4.836 12.945 11.375 14.563.3.077.635-.19.625-.5V22.5c0-.333.197-.652.563-.844.37-.185.28-.856-.125-.937-1.9-.38-3.52-1.143-4.657-2.157C6.646 17.547 6 16.314 6 15c0-.915.327-1.793.906-2.594.06-.082.092-.18.094-.28V7.343l3.97 2.125c.122.066.273.077.405.03C12.488 9.168 13.698 9 15 9s2.512.168 3.625.5c.132.047.283.035.406-.03L23 7.343v4.78c.002.1.035.2.094.282.58.8.906 1.68.906 2.594 0 1.315-.645 2.548-1.78 3.563-1.138 1.014-2.76 1.776-4.657 2.156-.406.08-.495.75-.125.936.365.192.562.51.562.844v6.563c-.01.31.326.577.625.5C25.165 27.945 30 22.032 30 15c0-8.278-6.722-15-15-15C6.722 0 0 6.722 0 15zM15 1c7.738 0 14 6.262 14 14 0 6.33-4.24 11.547-10 13.28V22.5c0-.4-.154-.756-.375-1.063 1.663-.457 3.182-1.175 4.28-2.156C24.206 18.124 25 16.64 25 15c0-1.083-.394-2.074-1-2.97V6.5c.003-.35-.446-.613-.75-.437L18.656 8.53C17.516 8.22 16.296 8 15 8c-1.295 0-2.517.218-3.656.53L6.75 6.064c-.304-.176-.753.087-.75.437v5.53c-.606.896-1 1.887-1 2.97 0 1.64.795 3.123 2.094 4.28 1.1.982 2.62 1.7 4.28 2.158-.22.306-.374.66-.374 1.062v1.688c-1.09.406-1.807.493-2.25.406-.478-.094-.736-.34-1.03-.75-.592-.823-1.173-2.34-3.095-2.836-.654-.175-.875.8-.25.97 1.508.39 1.805 1.448 2.53 2.46.364.505.886.973 1.658 1.125.643.126 1.422.03 2.437-.313v3.03C5.242 26.548 1 21.33 1 15 1 7.262 7.262 1 15 1z"></path></g></svg>
              </a>
              <a className='link-to-my-social' href="https://www.instagram.com/ilya.palatov/">
                <svg fill="#e0e0ce" width="30px" height="30px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
               <path d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z"/>
                </svg>
              </a>
              <a className='link-to-my-social' href="https://www.linkedin.com/in/illia-palatov-0091942a1/">
            <svg fill="#e0e0ce" width="30px" height="30px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
               <path d="M96,80a8,8,0,1,1-8-8A7.99993,7.99993,0,0,1,96,80Zm-8,28.001a4,4,0,0,0-4,4v64a4,4,0,1,0,8,0v-64A4,4,0,0,0,88,108.001Zm60,0a31.92463,31.92463,0,0,0-24,10.86767V112.001a4,4,0,0,0-8,0v64a4,4,0,1,0,8,0v-36a24,24,0,0,1,48,0v36a4,4,0,1,0,8,0v-36A32.03619,32.03619,0,0,0,148,108.001ZM224,44V212a12.01375,12.01375,0,0,1-12,12H44a12.01375,12.01375,0,0,1-12-12V44A12.01359,12.01359,0,0,1,44,32H212A12.01359,12.01359,0,0,1,224,44Zm-8,0a4.00458,4.00458,0,0,0-4-4H44a4.00458,4.00458,0,0,0-4,4V212a4.00458,4.00458,0,0,0,4,4H212a4.00458,4.00458,0,0,0,4-4Z"/>
                </svg>
              </a>
          </div>
          </div>
        </div>
      </div>    
      <div className='div-about-me'>
        <div className='my-skills'>
          <h2 className='h2-my-skills'>My Skills:</h2>
          <div className='first-skill-txt'>
            <p className='my-skills-txt'>React -</p>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
          </div>
          <div className='second-skill-txt'>
            <p className='my-skills-txt'>TypeScript -</p> 
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>

          </div>
          <div className='last-skill-txt'>
            <p className='my-skills-txt'>JavaScript -</p>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
                       <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
          </div>
          <div className='second-skill-txt'>
            <p className='my-skills-txt'>Node.Js -</p> 
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
          </div>
        </div>
        <div className='my-study'>
          <h2 className='h2-my-skills'>My Education:</h2>
          <div className='second-study-txt'>
            <a href="https://goit.global/ua-ru/courses/fullstack/" className='link-to-my-education'><h5 className='my-study-txt'>GOIT</h5></a> 
            <p className='second-study-desc'>GoIT - IT course platform
              Learn a modern profession from scratch and find your first job in IT and Digital sphere.</p>
            <p className='link-to-my-certificate'> Education: Full Stack Developer </p> <a className='link-to-my-education' href="https://drive.google.com/file/d/1223Z3_E39HFtPMX51IxIJucazzyI2LyC/view?usp=sharing">(Cerificate)</a>
          </div>
        </div>
      </div>
      <div className='div-of-my-ex'>
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
        <h3 className='h3-my-ex'>3 years experience</h3>
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" fill='#b88c46' data-name="Layer 1" viewBox="0 0 24 24" width="20" height="24"><path d="M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z" /></svg>
      </div>
      <div>
        <div className='section-of-proj'>
          <h2 className='head-projects'>My Projects</h2>
          <div className='container-of-cards'>
            <a className='link-to-project-rep'href="https://github.com/SonGlad/tasty-treats-team-project">
            <div className='card-of-my-proj'>
              <img className="photo-in-card" src={myFirstProj} alt="" />
              <div className='desc-card-of-my-proj'>
                <p>Tasty Treats  (Team Project)</p>
              </div>
            </div>
            </a>
          <div className='card-of-my-proj'>
           <img className="photo-in-card" src={myFirstProj} alt="" />
            <div className='desc-card-of-my-proj'>
              <p>Tasty Treats</p>
              </div>
          </div>
          <div className='card-of-my-proj'>
           <img className="photo-in-card" src={myFirstProj} alt="" />
            <div className='desc-card-of-my-proj'>
              <p>Tasty Treats</p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};