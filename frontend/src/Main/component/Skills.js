import React from 'react';

import Skill from './Skill';

const Skills = ()=>{
    return(
        <div className="skills-box">
            <Skill years = {3} skillName = "React"/>
            <Skill years = {2} skillName = "Java"/>
            <Skill years = {4} skillName = "Javascript"/>
        </div>
    )
}

export default Skills;