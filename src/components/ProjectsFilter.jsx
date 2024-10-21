import React, { useState } from 'react';

import myFirstProj from '../images/myFirstProj.png';
import mySecondProj from '../images/mySecondProj.png';
import myThirdProj from '../images/myThirdProj.png';
import myFourthProj from '../images/myFourthProj.png';
import myFifthProj from '../images/MyFifthProj.png';

const ProjectFilter = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const projects = [
    {
      id: 1,
      title: 'Tasty Treats',
      type: 'Team Projects',
      link: 'https://github.com/SonGlad/tasty-treats-team-project',
      image: myFirstProj,
    },
    {
      id: 2,
      title: 'Water Tracker',
      type: 'Team Projects',
      link: 'https://github.com/Eugeshakw/water-tracker',
      image: mySecondProj,
    },
    {
      id: 3,
      title: 'Flower Studio',
      type: 'Team Projects',
      link: 'https://github.com/SonGlad/flower-team-proj',
      image: myFourthProj,
    },
    {
      id: 4,
      title: 'Web Studio',
      type: 'Single Projects',
      link: 'https://github.com/IlyaPalatov/goit-markup-hw-07',
      image: myThirdProj,
    },
    {
      id: 5,
      title: 'Web Portfolio',
      type: 'Single Projects',
      link: 'https://github.com/IlyaPalatov/Business-card-website-of-Ilya-Palatov',
      image: myFifthProj,
    },
  ];

  const filteredProjects = projects.filter((project) =>
    filter === 'All' ? true : project.type === filter
  );

  return (
    <div>
      <div className='box-of-btns-filter'>
        <button className='btn-filter' onClick={() => handleFilterChange('All')}>All</button>
        <button className='btn-filter' onClick={() => handleFilterChange('Single Projects')}>Single Projects</button>
        <button className='btn-filter' onClick={() => handleFilterChange('Team Projects')}>Team Projects</button>
      </div>

      <div className='container-of-cards'>
        {filteredProjects.map((project) => (
          <a key={project.id} className='link-to-project-rep' href={project.link}>
            <div className='card-of-my-proj'>
              <img className="photo-in-card" src={project.image} alt={project.title} />
              <div className='desc-card-of-my-proj'>
                <p>{project.title}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
