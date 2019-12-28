import React from 'react';
import './Skills.css';
import Skill from './Skill/Skill';

function Skills() {
  return (
    <div className="skills">
      <h2 id ='mainTitle'> Skill</h2>
      <div>
        <div className='skillContainerC'>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
        </div>
        <div className='skillContainerC'>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
