import React from "react";

// import Timeline from "../../component/TimelineBio";
import User from '../../component/User';
import About from '../../component/About';
import Skills from '../../component/skills/SkillList';
import ExperienceList from '../../component/experiences/ExperienceList';

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import Data from '../../Data/resume.json';

const useStyles = makeStyles({
  root: {
    flexWrap: "wrap"
  },
  child:{
    marginTop:20
  }
})

const Home = ()=>{

  const classes = useStyles();

  return(
    <>
      {/* <p>Home</p> */}
      <Grid container spacing = {2} className = {classes.root}>
        <Grid container direction = "column" item md = {3} xs = {12}>
          <Grid className = {classes.child}>
            <User userInfo = {Data.basics}/>
          </Grid>
        </Grid>
        <Grid container direction ="column" item md = {9} xs = {12}>
          <Grid className = {classes.child}>
            <About userInfo = {Data.basics}/>
          </Grid>
          <Grid className = {classes.child}>
            <Skills skillInfo = {Data.skills}/>
          </Grid>
          <Grid className = {classes.child}>
            <ExperienceList experiences = {Data.experiences}/>
          </Grid>
        </Grid>
      </Grid>
      {/* <Paper>
      <Timeline/>
      </Paper> */}
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