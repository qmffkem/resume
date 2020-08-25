import React from "react";

import Timeline from "../component/TimelineBio";


const Home = ()=>{

  return(
    <>
      <p>Home</p>
      <Timeline/>
    </>
  )
}

// class Home extends Component {
//   constructor(props){
//     super(props);
//     this.about = this.props.resume;
//   }

//   render(){
//     return(
//       <div className = "home">
//         <div className = "orange box" id = "summary">
//           <h2 className = "title white bold">
//             WHO AM I
//           </h2>
//           <p className = "white">
//             {this.about.summary}
//           </p>
//           <button>
//             Resume
//           </button>
//         </div>
//         <div className = "gray box" id = "personal-info">
//           <h2 className = "title white bold">
//             Personal info
//           </h2>
//           <p className = "white">
//             {this.about.permanentAddress}
//           </p>
//         </div>
//         <div className = "gray box" id = "achievement">
//           <h2 className = "title white bold">
//             achievement
//           </h2>
//           <Timeline/>
//           {/* single line with the dots representing event*/}
//         </div>
//         <div className = "box" id = "skills">
//           <h2 className = "title bold">
//             Skills
//           </h2>
//           {/*bar chart using d3*/}
//         </div>
//       </div>
//     );
//   }
// }

export default Home;
