import React, {Component} from 'react';
import "./Activity.css";

class Activity extends Component{
  constructor(props){
    super(props);
    this.activity = this.props.act;
  }
  render(){
    const list = this.activity.map((each, key) =>
      <div className = "activity" key = {key}>
        <h3 className = "activity title">
          {each.title}
        </h3>
        <p className = "activity date">
          {each.startDate} {each.endDate}
        </p>
        <p className = "activity company">
          {each.company}
        </p>
        <p className = "activity summary">
          {each.summary}
        </p>
        <ul className = "activity websites">
          {Object.entries(each.websites).map(([key, value]) =>
            <li className = "url" key = {key}>
              <a href = {value}>sites</a>
            </li>
          )}
        </ul>
      </div>
    )

    return(
      <div>
        {list}
      </div>
    );
  }
}

export default Activity;
