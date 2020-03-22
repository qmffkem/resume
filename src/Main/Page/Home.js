import React, {Component} from "react";
import "./Home.css";

class Home extends Component {
  constructor(props){
    super(props);
    this.about = this.props.resume;
  }

  render(){
    return(
      <div>
        <div className = "orange box">
          <h2 className = "title white bold">
            WHO AM I
          </h2>
          <p className = "white">
            {this.about.summary}
          </p>
          <button>
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
