import React,{Component} from 'react';
import './About.css';
import Button from "@material-ui/core/Button";
import location from '../../images/location.png';
import email from '../../images/email.png';
import phone from '../../images/phone.png';

class About extends Component {
  constructor(props){
    super(props);
    this.info = this.props.personalInfo;
  }
  render(){
    return (
      <div className="about">
        <div id = "info">
          <div className = 'pane' id = 'leftPane'>
            <h1>{this.info.name}</h1>
            <p>{this.info.label}</p>
            <Button>Resume</Button>
          </div>
          <div className = 'pane' id = 'rightPane'>
            <div className = 'individual'>
              <img src={email} alt="email"/>
              <p className = 'personal'>{this.info.email}</p>
            </div>
            <div className = 'individual'>
              <img src={phone} alt="phone"/>
              <p className = 'personal'>{this.info.phone}</p>
            </div>
            <div className = 'individual'>
              <img src={location} alt="location"/>
              {Object.entries(this.info.permanentAddress).map(([key, value]) =>
                <p key = {key}>{value}</p>
              )}
            </div>
          </div>
        </div>
        <div id = "stripe"/>
        <h2 id ='mainTitle'>
          About Me
        </h2>
        <p>
          {this.info.summary}
        </p>
      </div>
    );
  }
}

export default About;
