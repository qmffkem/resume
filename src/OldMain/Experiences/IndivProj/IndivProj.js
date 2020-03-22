import React,{Component} from 'react';
import './IndivProj.css';

class IndivProj extends Component{
  constructor(props){
    super(props);
    this.experiences = this.props.experiences;
  }

  render(){

    const listExperiences = this.experiences.map((experience, index) =>
      <div className = "proj" key= {index}>
        <div>
          <p>{experience.title}</p>
          <p>{experience.startDate} - {experience.endDate}</p>
        </div>
        {experience.summary.map((each, index) =>
          <p key={index}>{each.point}</p>
        )}
      </div>
    );
    return(
      <div>
        {listExperiences}
      </div>
    );
  }
}

export default IndivProj;
