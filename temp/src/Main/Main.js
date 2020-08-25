import React from 'react';

import Header from "./Header/Header";
import Body from "./Body/Body";
// import Footer from "./Footer/Footer";

// import Resume from "./Data/resume.json";

import AppBar from '@material-ui/core/AppBar';

import {  BrowserRouter as Router} from 'react-router-dom';

const Main = () => {
    
  return(
    <>
      <Router>
        <AppBar position="static">
          <Header/>
        </AppBar>
        <Body/>
      </Router>
    </>
  )
}

export default Main;


// const navClick = this.state.nav;
// let nav;
// var def = <Home resume = {Resume.basics}/>;


// if(navClick === "HOME"){
//   nav = def;
// }
// else if(navClick === "EXPERIENCE"){
//   nav = <Experience exp = {Resume.experiences}/>;
// }
// else if(navClick === "ACTIVITY"){
//   nav = <Activity act = {Resume.activities}/>;
// }
// else {
//   nav = def;
// }
// return (
//   <div className = "main">
//     <Header
//       resume = {Resume.basics}
//       onNavChange = {this.setNav}
//     />
//     <div className = "content">
//       {nav}
//     </div>
//   </div>
// );
// }