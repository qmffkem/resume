import React, {Component} from 'react';
import "./Main.css";
import Header from "./Header/Header";
import Resume from "./resume.json";
import Home from "./Page/Home";
import Experience from "./Page/Experience";
import Activity from "./Page/Activity";

class Main extends Component {
  state = {
    nav : ""
  }

  setNav = (nav) =>{
    this.setState({
      nav
    })
  }

  render(){
    const navClick = this.state.nav;
    let nav;
    var def = <Home resume = {Resume.basics}/>;


    if(navClick === "HOME"){
      nav = def;
    }
    else if(navClick === "EXPERIENCE"){
      nav = <Experience exp = {Resume.experiences}/>;
    }
    else if(navClick === "ACTIVITY"){
      nav = <Activity act = {Resume.activities}/>;
    }
    else {
      nav = def;
    }
    return (
      <div className = "main">
        <Header
          resume = {Resume.basics}
          onNavChange = {this.setNav}
        />
        <div className = "content">
          {nav}
        </div>
      </div>
    );
  }
}

export default Main;
