import React, {Component} from "react";
import "./Nav.css";
class NavBar extends Component{
  handleInputChange = (event) => {
    this.props.onNavChange(event.target.textContent);
    console.log(event.target.textContent);
  }

  render(){
    const navList = ["HOME", "EXPERIENCE", "ACTIVITY"];
    const list = navList.map((item, key) =>
      <p className = "nav" key = {key} onClick = {this.handleInputChange}>{item}</p>
    )
    return(
      <div  className = "hor">
        {list}
      </div>
    )
  };
}
export default NavBar;
