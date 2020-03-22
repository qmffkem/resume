import React, {Component} from "react";
import "./Header.css";
import Navbar from "./Nav/Nav";

class Header extends Component{
  constructor(props){
    super(props);
    this.info = this.props.resume;
    this.onNavChange = this.props.onNavChange;
  }

  render(){
    return(
      <div className = "header">
        <div className = "space">
        </div>
        <h1 className = "title">
          {this.info.name}
        </h1>
        <h3 className = "title">
          {this.info.role}
        </h3>

        <hr/>

        <Navbar
          onNavChange = {this.onNavChange}
        />
      </div>
    )
  }
}

export default Header;
