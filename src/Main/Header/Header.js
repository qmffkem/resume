import React, {Component} from "react";
import "./Header.css";
import Navbar from "./Nav/Nav";

class Header extends Component{
  constructor(props){
    super(props);
    this.info = this.props.resume;
    this.onNavChange = this.props.onNavChange;
  }
  componentDidMount(){
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll(){
    console.log(window.pageYOffset);
    const distanceY = window.pageYOffset;
    const shrinkOn = 100;
    const headerEl = document.getElementsByClassName("header")[0];

    if (distanceY > shrinkOn){
      headerEl.classList.add("shrink");
      document.getElementById("space").style.display = "none";
      document.getElementById("role").style.display = "none";
    }
    else{
      headerEl.classList.remove("shrink");
      document.getElementById("space").style.display = "block";
      document.getElementById("role").style.display = "block";
    }
    // console.log(headerEl);
    // console.log(document.documentElement.scrollTop);
  }

  render(){
    return(
      <div className = "header">
        <div id = "space">
        </div>
        <h1 className = "title" id = "name">
          {this.info.name}
        </h1>
        <h3 className = "title" id = "role">
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
