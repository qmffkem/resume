import React,{Component} from 'react';
import IndivProj from './IndivProj/IndivProj';
// import * as d3 from "d3";
// import Button from '@material-ui/core/Button';
import './Experiences.css';

class Experiences extends Component {
  constructor(props){
    super(props);
    this.experiences = this.props.experiences;
  }

  render(){
    return (
      <div className="experiences">
        <h2 id = 'mainTitle'>Project</h2>
        <IndivProj experiences = {this.experiences} />
      </div>
    );
  }
}

export default Experiences;
