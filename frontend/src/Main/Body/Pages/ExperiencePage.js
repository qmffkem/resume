import React from 'react';
import "./Experience.css";
import CovidMap from "../../component/projects/covidCases";

const Experience = ({match})=>{
    return(
        <>
            <p>{match.params.projectName}</p>
            <CovidMap/>
        </>

    )
}

// class Experience extends Component{
//   constructor(props){
//     super(props);
//     this.exp = this.props.exp;
//   }
//   render(){
//     const list = this.exp.map((each, key) =>
//       <div className = "experience" key = {key}>
//         <h3 className = "experience title">
//           {each.title}
//         </h3>
//         <p className = "experience date">
//           {each.startDate} {each.endDate}
//         </p>
//         <p className = "experience company">
//           {each.company}
//         </p>
//         <p className = "experience course">
//           {each.course}
//         </p>
//         <ul className = "experience description">
//           {each.summary.map((summary,key) =>
//             <li className = "summary" key = {key}>
//               {summary.point}
//             </li>
//           )}
//         </ul>
//       </div>
//     )

//     return(
//       <div>
//         {list}
//       </div>
//     );
//   }
// }

export default Experience;
