import React, {Component} from 'react';
import Outside from './Hover/Outside';
import './Main.css';
import About from './About/About';
import Experiences from './Experiences/Experiences';
import Skills from './Skills/Skills';
import Test from './resume.json';

class Main extends Component{
  constructor(props){
    super(props);
    document.title = "Resume: Jaeung"
  }

  render(){
    return (
      <div className='main'>
        <Outside/>
        <About
          personalInfo = {Test.basics}
        />
        <Experiences
          experiences = {Test.experiences}
        />
      </div>
    )
  }
}

export default Main;
