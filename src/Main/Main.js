import React from 'react';
import Outside from './Hover/Outside';
import './Main.css';
import About from './About/About';
import Proj from './Proj/Proj';
import Skills from './Skills/Skills';

function Main(){
  return (
    <div className='main'>
      <Outside/>
      <About/>
      <Proj/>
      <Skills/>
    </div>
  );
}

export default Main;
