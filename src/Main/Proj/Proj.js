import React from 'react';
import IndivProj from './IndivProj/IndivProj';
import './Proj.css';
function Proj() {
  return (
    <div className="proj">
      <h2 id = 'mainTitle'>Project</h2>
      <IndivProj/>
      <IndivProj/>
      <IndivProj/>
    </div>
  );
}

export default Proj;
