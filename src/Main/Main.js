import React, {Component} from 'react';
import "./Main.css";
import Header from "./Header/Header";
import Resume from "./resume.json";
import Home from "./Page/Home";

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
    var def = <Home resume = {Resume.basics} />;


    if(navClick === "HOME"){
      nav = def;
    }
    else if(navClick === "EXPERIENCE"){
      nav = "";
    }
    else if(navClick === "ACTIVITY"){
      nav = "";
    }
    else {
      nav = def;
    }
    return (
      <div className = "main">
        <div className = "content">
          <Header
            resume = {Resume.basics}
            onNavChange = {this.setNav}
          />
          {nav}
        </div>
      </div>
    );
  }
}

export default Main;
