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
              <div className = 'personal'>{this.info.email}</div>
            </div>
            <div className = 'individual'>
              <img src={phone} alt="phone"/>
              <div className = 'personal'>{this.info.phone}</div>
            </div>
            <div className = 'individual'>
              <img src={location} alt="location"/>
              {Object.entries(this.info.permanentAddress).map(([key, value]) =>
                <div key = {key}>{value}</div>
              )}
            </div>
          </div>
        </div>
        <div id = "stripe"/>
        <h2 id ='mainTitle'>
          About Me
        </h2>
        <div>
          {this.info.summary}
        </div>
      </div>
    );
  }
}

export default About;
