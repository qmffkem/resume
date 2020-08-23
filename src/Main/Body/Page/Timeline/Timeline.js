import React, {Component} from "react";
import * as d3 from "d3";

class Timeline extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id = "timeline"/>
    );
  }

  componentDidMount(){
    let chart = d3.select("#timeline").classed("timeline", true);
  }
}
export default Timeline;
