import React,{Component} from 'react';
import './Skills.css';
import Skill from './Skill/Skill';

class Skills extends Component {
  constructor(props){
    super(props);
    this.skills = this.props.skills;
  }
  render(){
    const skills = this.skills.map((each, index) =>
      <Skill>{each.name}</Skill>
    );
    return (
      <div className="skills">
        <h2 id ='mainTitle'> Skill</h2>
        <div>
          {skills}
        </div>
      </div>
    );
  }
}

export default Skills;
