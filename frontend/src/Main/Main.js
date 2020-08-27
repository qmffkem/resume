import React from 'react';
import {  BrowserRouter as Router} from 'react-router-dom';

import Header from "./Header/Header";
import Body from "./Body/Body";

import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '@material-ui/core/AppBar';


const Main = () => {
    
  return(
    <>
      <CssBaseline />
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