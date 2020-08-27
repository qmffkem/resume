import React from "react";

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';


// import Logo from './Logo/Logo';
import Navbar from "./Nav/Nav";


const Header = ()=>{

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();


  return(
    <>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Resume
        </Typography>
        <Navbar/>
        {}
        <Button component ={Link} to ={"/login"} color="inherit">Login</Button>
        <Button component ={Link} to ={"/logout"} color="inherit">Logout</Button>
        <Button component ={Link} to ={"/create-account"} color="inherit">Create Account</Button>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
      </Toolbar>
    </>
  )
}

// class Header extends Component{
//   constructor(props){
//     super(props);
//     this.info = this.props.resume;
//     this.onNavChange = this.props.onNavChange;
//   }
//   componentDidMount(){
//     window.addEventListener("scroll", this.resizeHeaderOnScroll);
//   }

//   resizeHeaderOnScroll(){
//     console.log(window.pageYOffset);
//     const distanceY = window.pageYOffset;
//     const shrinkOn = 100;
//     const headerEl = document.getElementsByClassName("header")[0];

//     if (distanceY > shrinkOn){
//       headerEl.classList.add("shrink");
//       document.getElementById("space").style.display = "none";
//       document.getElementById("role").style.display = "none";
//     }
//     else{
//       headerEl.classList.remove("shrink");
//       document.getElementById("space").style.display = "block";
//       document.getElementById("role").style.display = "block";
//     }
//     // console.log(headerEl);
//     // console.log(document.documentElement.scrollTop);
//   }

//   render(){
//     return(
//       <div className = "header">
//         <div id = "space">
//         </div>
//         <h1 className = "title" id = "name">
//           {this.info.name}
//         </h1>
//         <h3 className = "title" id = "role">
//           {this.info.role}
//         </h3>

//         <hr/>

//         <Navbar
//           onNavChange = {this.onNavChange}
//         />
//       </div>
//     )
//   }
// }

export default Header;
