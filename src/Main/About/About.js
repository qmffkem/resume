import React from 'react';
import './About.css';
import location from '../../images/location.png';
import email from '../../images/email.png';
import phone from '../../images/phone.png';

function About() {
  return (
    <div className="about">
      <div id = "info">
        <div className = 'pane' id = 'leftPane'>
          <h1>Jaeung Jang</h1>
          <p>Programmer</p>
          <button>Resume</button>
        </div>
        <div className = 'pane' id = 'rightPane'>
          <div className = 'individual'>
            <img src={email} alt="email"/>
            <div className = 'personal'>jaeung@vt.edu</div>
          </div>
          <div className = 'individual'>
            <img src={phone} alt="phone"/>
            <div className = 'personal'>(339)223-3721</div>
          </div>
          <div className = 'individual'>
            <img src={location} alt="location"/>
            <div className = 'personal'>42648 Lancaster Ridge, Chantilly VA, 20152</div>
          </div>
        </div>
      </div>
      <div id = "stripe"/>
      <h2 id ='mainTitle'>
        About Me
      </h2>
      <div>
        another text for the body of the about me. This will be a long text so here it goes; asdfasfsafsdafasd asfsaf dsaf asfsadf sdadf asdf asdfsf dsaf saasd dsf asdfsdaf asfsda fdsaf salfjasfkojasfdsa kl fsalf nlsnf sadfn sdof osanf 
      </div>
    </div>
  );
}

export default About;
